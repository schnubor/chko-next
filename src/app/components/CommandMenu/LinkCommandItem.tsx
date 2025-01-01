import { Command } from 'cmdk';
import Link from 'next/link';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

import type { FC } from 'react';
import { router } from 'next/client';
import { useRouter } from 'next/navigation';

interface Props {
    link: string;
    title: string;
    src: string;
    onClick: () => void;
    isExternal?: boolean;
}

export const LinkCommandItem: FC<Props> = ({ link, title, src, onClick, isExternal }) => {
    const { push } = useRouter();

    const handleSelect = () => {
        if (isExternal) {
            window.open(link, '_blank');
        } else {
            push(link);
        }

        onClick();
    };

    const content = (
        <div
            className="flex h-10 w-full cursor-pointer items-center rounded-lg px-4 text-sm text-stone-800 outline-none dark:text-neutral-300"
            onClick={onClick}
        >
            <Image src={src} alt={title} width={20} height={20} />
            <span className="ml-4">{title}</span>
            {isExternal && (
                <ArrowTopRightIcon className="ml-auto origin-bottom-left scale-0 transition duration-200 ease-out group-hover/link:scale-100" />
            )}
        </div>
    );

    return (
        <Command.Item
            className="rounded-lg outline-none data-[selected=true]:bg-stone-300 dark:data-[selected=true]:bg-neutral-800"
            onSelect={handleSelect}
        >
            {isExternal ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="group/link">
                    {content}
                </a>
            ) : (
                <Link href={link}>{content}</Link>
            )}
        </Command.Item>
    );
};
