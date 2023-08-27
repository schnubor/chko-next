import type { FC } from 'react';

interface Props {
    name: string;
    onClick?: () => void;
}

export const Pill: FC<Props> = ({ name, onClick }) => {
    return (
        <button
            className="rounded-md bg-stone-300 px-2 py-1 text-xs text-stone-600 outline-none dark:bg-neutral-800 dark:text-neutral-400"
            onClick={onClick}
        >
            {name}
        </button>
    );
};
