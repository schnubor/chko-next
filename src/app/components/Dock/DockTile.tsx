'use client';

import Image from 'next/image';
import * as Tooltip from '@radix-ui/react-tooltip';

// Types
import type { FC } from 'react';

interface Props {
    title: string;
    src: string;
    link: string;
}

export const DockTile: FC<Props> = ({ title, src, link }) => {
    return (
        <Tooltip.Provider>
            <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <div className="group flex items-center justify-center rounded-lg bg-stone-300 p-2 dark:bg-neutral-800">
                            <Image
                                src={src}
                                width={50}
                                height={50}
                                alt={title}
                                className="transition-transform duration-300 ease-out group-hover:scale-110"
                            />
                        </div>
                    </a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className="data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade flex select-none items-center space-x-1 rounded-md bg-stone-800 p-2 text-xs leading-none text-stone-50 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade dark:bg-neutral-800"
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
