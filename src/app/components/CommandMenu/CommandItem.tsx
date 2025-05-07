import { Command } from 'cmdk';
import { cn } from '@/utils/cn';

import { ArrowTopRightIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import type { FC, ForwardRefExoticComponent, RefAttributes, JSX, KeyboardEvent } from 'react';
import type { IconProps } from '@radix-ui/react-icons/dist/types';

interface Props {
    icon:
        | ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
        | (({ className }: { className?: string }) => JSX.Element);
    title: string;
    onClick: () => void;
    hasSubmenu?: boolean;
    link?: string;
}

export const CommandItem: FC<Props> = ({ icon: Icon, title, onClick, hasSubmenu, link }) => {
    const content = (
        <>
            <Icon className="ml-4 size-4" /> <span className="ml-4">{title}</span>
            {hasSubmenu && <ChevronRightIcon className="ml-auto mr-4" />}
            {link && (
                <ArrowTopRightIcon className="ml-auto mr-4 origin-bottom-left scale-0 transition duration-200 ease-out group-hover/link:scale-100 dark:text-orange-500" />
            )}
        </>
    );

    const handleSelect = () => {
        if (link) {
            window.open(link, '_blank');
        }

        onClick();
    };

    return (
        <Command.Item
            onSelect={handleSelect}
            className="rounded-lg outline-hidden data-[selected=true]:bg-stone-300 dark:focus:bg-neutral-800 dark:data-[selected=true]:bg-neutral-800"
        >
            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex h-10 w-full cursor-pointer items-center rounded-lg text-sm text-stone-800 outline-hidden dark:text-neutral-300"
                >
                    {content}
                </a>
            ) : (
                <button
                    onClick={onClick}
                    className="flex h-10 w-full cursor-pointer items-center rounded-lg text-sm text-stone-800 outline-hidden dark:text-neutral-300"
                >
                    {content}
                </button>
            )}
        </Command.Item>
    );
};
