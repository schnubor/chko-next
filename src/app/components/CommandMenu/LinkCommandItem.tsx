import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { Command } from 'cmdk';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import type { IconProps } from '@radix-ui/react-icons/dist/types';
import type { ForwardRefExoticComponent, JSX, RefAttributes } from 'react';

interface Props {
    link: string;
    title: string;
    src?: string;
    icon?:
        | ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
        | (({ className }: { className?: string }) => JSX.Element);
    onClick: () => void;
    isExternal?: boolean;
}

export const LinkCommandItem = ({ link, title, src, icon: Icon, onClick, isExternal }: Props) => {
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
            className="flex h-10 w-full cursor-pointer items-center rounded-lg px-4 text-sm text-stone-800 outline-hidden dark:text-neutral-300"
            onClick={onClick}
        >
            {src ? (
                <Image src={src} alt={title} width={20} height={20} />
            ) : Icon ? (
                <Icon className="size-4" />
            ) : null}
            <span className="ml-4">{title}</span>
            {isExternal && (
                <ArrowTopRightIcon className="ml-auto size-4 origin-bottom-left scale-0 transition duration-200 ease-out group-hover/link:scale-100 dark:text-orange-500" />
            )}
        </div>
    );

    return (
        <Command.Item
            className="rounded-lg outline-hidden data-[selected=true]:bg-stone-300 dark:data-[selected=true]:bg-neutral-800"
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
