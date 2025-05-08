import { ArrowTopRightIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Command } from 'cmdk';

import type { IconProps } from '@radix-ui/react-icons/dist/types';
import type { ForwardRefExoticComponent, RefAttributes, JSX } from 'react';

interface Props {
    icon:
        | ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
        | (({ className }: { className?: string }) => JSX.Element);
    title: string;
    onClick: () => void;
    hasSubmenu?: boolean;
    link?: string;
}

export const CommandItem = ({ icon: Icon, title, onClick, hasSubmenu, link }: Props) => {
    const content = (
        <>
            <Icon className="ml-4 size-4" aria-hidden /> <span className="ml-4">{title}</span>
            {hasSubmenu && <ChevronRightIcon className="mr-4 ml-auto" aria-hidden />}
            {link && (
                <ArrowTopRightIcon
                    className="mr-4 ml-auto origin-bottom-left scale-0 transition duration-200 ease-out group-hover/link:scale-100 dark:text-orange-500"
                    aria-hidden
                />
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
            <div className="group/link flex h-10 w-full cursor-pointer items-center rounded-lg text-sm text-stone-800 outline-hidden dark:text-neutral-300">
                {content}
            </div>
        </Command.Item>
    );
};
