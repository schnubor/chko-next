import Link from 'next/link';

// Types
import type { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    title: string;
    description: string;
    className?: string;
    link: string;
}

export const WorkTile: FC<Props> = ({ children, title, description, className, link }) => {
    return (
        <Link href={link} className={className}>
            <div className="rounded-lg bg-stone-300 p-4 dark:bg-neutral-800">
                {children}
                <div className="mt-6">
                    <h3 className="font-semibold">{title}</h3>
                    <span className="text-xs text-stone-500 dark:text-neutral-500">{description}</span>
                </div>
            </div>
        </Link>
    );
};
