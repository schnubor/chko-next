'use client';

import * as Tooltip from '@radix-ui/react-tooltip';
import Image from 'next/image';

interface Props {
    title: string;
    src: string;
    link: string;
}

export const DockTile = ({ title, src, link }: Props) => {
    return (
        <Tooltip.Provider>
            <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                    <li>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center rounded-lg bg-stone-200/40 p-2 transition-all hover:bg-stone-200/50 dark:bg-neutral-800/40 dark:hover:bg-neutral-800/50"
                        >
                            <Image
                                src={src}
                                width={50}
                                height={50}
                                alt={`Visit the ${title} website`}
                                className="transition-all duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-md"
                            />
                        </a>
                    </li>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className="data-[state=delayed-open]:data-[side=bottom]:animate-slide-up-and-fade data-[state=delayed-open]:data-[side=left]:animate-slide-right-and-fade data-[state=delayed-open]:data-[side=top]:animate-slide-down-and-fade flex items-center space-x-1 rounded-md bg-stone-800 p-2 text-xs leading-none text-stone-50 will-change-[transform,opacity] select-none dark:bg-neutral-800"
                        sideOffset={5}
                        side="bottom"
                    >
                        {title}
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};
