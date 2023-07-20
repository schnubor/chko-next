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

export const Piece: FC<Props> = ({ title, src, link }) => {
    return (
        <Tooltip.Provider>
            <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <div className="rounded-lg bg-stone-300 dark:bg-neutral-800 p-2">
                            <Image src={src} width={50} height={50} alt={title} />
                        </div>
                    </a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className="data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade flex select-none items-center space-x-1 rounded-md bg-stone-800 dark:bg-neutral-800 p-2 text-xs leading-none text-stone-50 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
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
