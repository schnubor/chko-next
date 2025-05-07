import { GraphQLClient } from 'graphql-request';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Markdown from 'react-markdown';

import { mdxComponents } from '@/app/[slug]/components/MdxComponents';
import { Skeleton } from '@/app/[slug]/components/Skeleton';
import { TechStack } from '@/app/[slug]/components/TechStack';

import { ALLOWED_PAGES } from '../constants';

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API as string);

interface Props {
    params: Promise<{ slug: string }>;
}

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

export const generateMetadata = async (props: Props) => {
    const params = await props.params;
    const work = await fetchWork(params.slug);

    return {
        title: `${work.headline} | chko.org`,
        description: work.role,
        openGraph: {
            title: `${work.headline} | chko.org`,
            description: work.role,
            url: `https://chko.org/${params.slug}`,
            siteName: 'chko.org',
            images: [
                {
                    url: 'https://chko.org/ogimage.jpg',
                    width: 1200,
                    height: 600,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
    };
};

const WorkPage = async (props: Props) => {
    const params = await props.params;

    if (!ALLOWED_PAGES.includes(params.slug)) {
        return notFound();
    }

    const work = await fetchWork(params.slug);

    if (!work) {
        return notFound();
    }

    return (
        <Suspense fallback={<Skeleton />}>
            <div className="flex items-center space-x-4">
                <Image src={work.icon.url} width={36} height={36} alt="" className="rounded-md" />

                <div>
                    <h1 className="font-semibold">{work.headline}</h1>
                    <h2 className="text-xs text-stone-500 dark:text-neutral-400">{work.role}</h2>
                </div>
            </div>

            <TechStack stack={work.stack} />

            <section className="mt-6">
                <Markdown components={mdxComponents}>{work.content}</Markdown>
            </section>
        </Suspense>
    );
};

export default WorkPage;
