import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { cn } from '@/utils/cn';

import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    title: string;
    description: string;
    className?: string;
    link: string;
}

export const WorkTile = ({ children, title, description, className = '', link }: Props) => {
    return (
        <li
            className={cn(
                'group relative rounded-lg bg-stone-200 p-4 transition-all ease-out hover:bg-stone-300/70 hover:shadow-tile dark:bg-neutral-800 dark:hover:bg-neutral-800/70',
                className,
            )}
        >
            <Link href={link}>
                {children}
                <div className="mt-6">
                    <h3 className="font-semibold">{title}</h3>
                    <span className="text-xs text-stone-600 dark:text-neutral-400">
                        {description}
                    </span>
                </div>

                {link && (
                    <ArrowRightIcon className="absolute right-4 top-4 size-5 origin-left scale-0 text-orange-500 transition duration-200 ease-out group-hover:scale-100" />
                )}
            </Link>
        </li>
    );
};
