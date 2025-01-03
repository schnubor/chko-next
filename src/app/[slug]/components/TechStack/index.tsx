// UI
import Image from 'next/image';

// Types
import type { FC } from 'react';

interface Props {
    stack: string[];
}

const techMap: Record<string, string> = {
    react: 'React',
    next: 'Next.js',
    tailwind: 'Tailwind',
    svelte: 'Svelte',
    node: 'Node.js',
    mongodb: 'MongoDB',
    ts: 'TypeScript',
    backbone: 'Backbone.js',
    php: 'PHP',
    jquery: 'jQuery',
    rubyonrails: 'Ruby on Rails',
    sql: 'SQL',
};

export const TechStack: FC<Props> = ({ stack }) => {
    return (
        <div className="mt-4 flex flex-wrap">
            {stack.map((tech) => {
                return (
                    <span
                        key={tech}
                        className="mb-2 mr-2 flex items-center rounded-lg bg-stone-200 px-2 py-1 text-xs text-stone-900 dark:bg-neutral-800 dark:text-neutral-400"
                    >
                        <Image
                            src={`/icons/${tech}.svg`}
                            width={12}
                            height={12}
                            alt={techMap[tech]}
                        />
                        <span className="pl-1">{techMap[tech]}</span>
                    </span>
                );
            })}
        </div>
    );
};
