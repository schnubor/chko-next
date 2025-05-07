'use client';

// UI
import * as Tooltip from '@radix-ui/react-tooltip';
import { CommandMenu } from './CommandMenu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

// Hooks
import { useEffect, useState } from 'react';

// Types
import type { FC } from 'react';

interface Props {}

export const CommandButton: FC<Props> = ({}) => {
    const [open, setOpen] = useState(false);

    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (event: KeyboardEvent) => {
            if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);

        return () => document.removeEventListener('keydown', down);
    }, []);

    const hideCommandMenu = () => setOpen(false);

    return (
        <>
            <Tooltip.Provider>
                <Tooltip.Root delayDuration={0}>
                    <Tooltip.Trigger asChild>
                        <button
                            className="fixed bottom-4 right-4 z-10 flex size-12 items-center justify-center rounded-full bg-orange-300 text-xl text-orange-900 shadow-lg transition-transform active:scale-90 dark:bg-orange-700 dark:text-white sm:static sm:bottom-auto sm:right-auto sm:h-10 sm:w-10 sm:shadow-none"
                            onClick={() => setOpen(true)}
                        >
                            <span className="sr-only">Menu</span>
                            <HamburgerMenuIcon className="size-4 stroke-2" />
                        </button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content
                            className="data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade flex select-none items-center space-x-1 rounded-md bg-stone-800 p-1 text-xs leading-none text-stone-50 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade dark:bg-neutral-800"
                            sideOffset={5}
                            side="left"
                        >
                            <kbd className="flex size-4 items-center justify-center rounded bg-stone-600 p-1 text-[10px] leading-none dark:bg-neutral-600">
                                ⌘
                            </kbd>
                            <kbd className="flex size-4 items-center justify-center rounded bg-stone-600 text-[10px] dark:bg-neutral-600">
                                K
                            </kbd>
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Provider>

            <CommandMenu open={open} onOpenChange={setOpen} onClickOutside={hideCommandMenu} />
        </>
    );
};
