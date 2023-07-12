// Types
import type { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    title: string;
    description: string;
    className?: string;
}

export const WorkTile: FC<Props> = ({ children, title, description, className }) => {
    return (
        <div className={`rounded-lg bg-stone-300 p-4 dark:bg-neutral-800 ${className}`}>
            <div className="flex h-6 items-center">{children}</div>
            <div className="mt-6">
                <h3 className="font-semibold">{title}</h3>
                <span className="text-xs text-stone-500 dark:text-neutral-500">{description}</span>
            </div>
        </div>
    );
};
