// Utils
import { Command } from 'carloslfu-cmdk-internal';
import Link from 'next/link';

// UI
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

// Types
import type { FC, MouseEvent, FocusEventHandler } from 'react';

interface Props {
    onMouseEnter: (event: MouseEvent<HTMLElement>) => void;
    onFocus: FocusEventHandler<HTMLElement>;
    link: string;
    title: string;
    src: string;
    onClick: () => void;
    isExternal?: boolean;
}

export const LinkCommandItem: FC<Props> = ({
    onMouseEnter,
    onFocus,
    link,
    title,
    src,
    onClick,
    isExternal,
}) => {
    const content = (
        <div
            className="flex h-10 w-full cursor-pointer items-center rounded-lg px-4 text-sm text-stone-800 outline-none dark:text-neutral-300"
            onClick={onClick}
        >
            <Image src={src} alt={title} width={20} height={20} />
            <span className="ml-4">{title}</span>
            {isExternal && <ArrowTopRightIcon className="ml-auto" />}
        </div>
    );

    return (
        <Command.Item onMouseEnter={onMouseEnter} onFocus={onFocus} className="outline-none">
            {isExternal ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {content}
                </a>
            ) : (
                <Link href={link}>{content}</Link>
            )}
        </Command.Item>
    );
};
