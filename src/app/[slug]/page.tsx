import { GraphQLClient } from 'graphql-request';
import { notFound } from 'next/navigation';
import { ALLOWED_PAGES } from '../constants';

// UI
import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { mdxComponents } from '@/app/[slug]/components/MdxComponents';
import { TechStack } from '@/app/[slug]/components/TechStack';

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API as string);

interface Work {
    headline: string;
    role: string;
    content: string;
    icon: {
        url: string;
    };
    stack: string[];
}

const fetchWork = async (slug: string) => {
    const { work } = await hygraph.request<{ work: Work }>(
        `query WorkPageQuery($slug: String!) {
          work(where: { slug: $slug }) {
            headline
            role
            content
            stack
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
                <Image
                    src={work.icon.url}
                    width={36}
                    height={36}
                    alt={work.headline}
                    className="rounded-md"
                />

                <div>
                    <h1 className="font-semibold">{work.headline}</h1>
                    <h2 className="text-xs text-stone-500 dark:text-neutral-500">{work.role}</h2>
                </div>
            </div>

            <TechStack stack={work.stack} />

            <section className="mt-6">
                <ReactMarkdown components={mdxComponents}>{work.content}</ReactMarkdown>
            </section>
        </>
    );
};

export default WorkPage;
