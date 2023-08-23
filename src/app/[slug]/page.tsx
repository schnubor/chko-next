import { GraphQLClient } from 'graphql-request';
import { notFound } from 'next/navigation';
import { ALLOWED_PAGES } from '../constants';

// UI
import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API as string);

interface Work {
    headline: string;
    content: string;
    icon: {
        url: string;
    };
}

const fetchWork = async (slug: string) => {
    const { work } = await hygraph.request<{ work: Work }>(
        `query WorkPageQuery($slug: String!) {
          work(where: { slug: $slug }) {
            headline
            content
            icon {
                url
            }
          }
        }`,
        {
            slug,
        },
    );

    return work;
};

const WorkPage = async ({ params }: { params: { slug: string } }) => {
    if (!ALLOWED_PAGES.includes(params.slug)) {
        return notFound();
    }

    const work = await fetchWork(params.slug);

    if (!work) {
        return notFound();
    }

    return (
        <>
            <div className="flex items-center space-x-4">
                <Image src={work.icon.url} width={24} height={24} alt={work.headline} />

                <h1 className="font-semibold">{work.headline}</h1>
            </div>

            <section className="mt-6 text-sm">
                <ReactMarkdown>{work.content}</ReactMarkdown>
            </section>
        </>
    );
};

export default WorkPage;
