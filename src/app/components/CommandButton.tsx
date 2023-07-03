'use client';

// UI
import * as Tooltip from '@radix-ui/react-tooltip';
import CommandMenu from './CommandMenu';

// Types
import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface Props {}

const CommandButton: FC<Props> = ({}) => {
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

    return (
        <>
            <Tooltip.Provider>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                        <button
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-xl text-stone-50"
                            onClick={() => setOpen(true)}
                        >
                            ⌘
                        </button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content
                            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade flex select-none items-center space-x-1 rounded-md bg-stone-800 p-1 text-xs leading-none text-stone-50 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade"
                            sideOffset={5}
                            side="left"
                        >
                            <kbd className="flex h-4 w-4 items-center justify-center rounded bg-stone-600 p-1 text-[10px] leading-none">
                                ⌘
                            </kbd>
                            <kbd className="flex h-4 w-4 items-center justify-center rounded bg-stone-600 text-[10px]">
                                K
                            </kbd>
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Provider>

            <CommandMenu open={open} onOpenChange={setOpen} onClickOutside={() => setOpen(false)} />
        </>
    );
};

export default CommandButton;
