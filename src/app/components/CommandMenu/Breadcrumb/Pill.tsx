import type { FC } from 'react';

interface Props {
    name: string;
    onClick?: () => void;
}

export const Pill: FC<Props> = ({ name, onClick }) => {
    return (
        <button
            className="px-2 py-1 rounded-md bg-stone-300 text-stone-600 text-xs outline-none dark:bg-neutral-800 dark:text-neutral-400"
            onClick={onClick}
        >
            {name}
        </button>
    );
};
