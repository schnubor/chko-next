import { notFound } from 'next/navigation';
import { ALLOWED_PAGES } from '../constants';
import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(
    process.env.NEXT_PUBLIC_HYGRAPH_API as string
);

interface Work {
    headline: string;
    content: string;
    icon: {
        url: string;
    }
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
        }
    );

    return work;
}

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
            <h1>{work.headline}</h1>
            <img src={work.icon.url} />
            <p>{work.content}</p>
        </>
    );
}

export default WorkPage;
