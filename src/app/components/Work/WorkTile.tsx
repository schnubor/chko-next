// UI
import { ArrowRightIcon } from '@radix-ui/react-icons';
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

export const WorkTile: FC<Props> = ({ children, title, description, className = '', link }) => {
    return (
        <Link href={link} className={className}>
            <div className="group relative rounded-lg bg-stone-200 p-4 transition-all ease-out hover:bg-stone-300/70 hover:shadow-lg dark:bg-neutral-800 dark:hover:bg-neutral-800/70">
                {children}
                <div className="mt-6">
                    <h3 className="font-semibold">{title}</h3>
                    <span className="text-xs text-stone-500 dark:text-neutral-500">
                        {description}
                    </span>
                </div>

                {link && (
                    <ArrowRightIcon className="absolute right-4 top-4 h-5 w-5 origin-left scale-0 text-orange-500 transition duration-200 ease-out group-hover:scale-100" />
                )}
            </div>
        </Link>
    );
};
