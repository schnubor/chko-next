// Utils
import { Command } from 'cmdk';

// UI
import { CommandItem } from './CommandItem';
import {
    BackpackIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
    RocketIcon,
    StackIcon,
    TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { ThemeCommandItem } from '@/app/components/CommandMenu/ThemeCommandItem';

// Hooks
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

// Types
import type { FocusEventHandler, FC, MouseEvent } from 'react';
import { Theme } from '@/app/types';

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onClickOutside: () => void;
}

export const CommandMenu: FC<Props> = ({ open, onOpenChange, onClickOutside }) => {
    const [topOffset, setTopOffset] = useState(0);
    const outsideClickRef = useRef(null);

    useOnClickOutside(outsideClickRef, onClickOutside);

    const handleMouseEnter = (event: MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement;
        const offset = target.offsetTop - 8;

        setTopOffset(offset);
    };

    const handleFocus: FocusEventHandler<HTMLElement> = (event) => {
        const target = event.target as HTMLElement;
        const offset = target.offsetTop - 8;

        setTopOffset(offset);
    };

    return (
        <Command.Dialog
            open={open}
            onOpenChange={onOpenChange}
            label="Menu"
            className="fixed left-0 top-0 flex h-screen w-screen animate-fadeIn items-center justify-center bg-stone-800/50 backdrop-blur-sm dark:bg-neutral-800/50"
        >
            <div className="w-full p-4 sm:w-96">
                <div
                    className="relative w-full animate-slideDownAndFade rounded-xl border bg-stone-200 text-sm shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                    ref={outsideClickRef}
                >
                    <div
                        className="pointer-events-none absolute w-full p-2 transition-all duration-100 ease-out"
                        style={{ top: `${topOffset}px` }}
                    >
                        <div className="h-10 rounded-lg bg-stone-300 dark:bg-neutral-800" />
                    </div>

                    <Command.List className="relative z-10 p-2">
                        <CommandItem
                            icon={BackpackIcon}
                            title="Work"
                            onMouseEnter={handleMouseEnter}
                            onFocus={handleFocus}
                            onClick={() => console.log('Work')}
                        />
                        <CommandItem
                            icon={StackIcon}
                            title="Stack & Tools"
                            onMouseEnter={handleMouseEnter}
                            onFocus={handleFocus}
                            onClick={() => console.log('Stack')}
                        />
                        <CommandItem
                            icon={RocketIcon}
                            title="Personal projects"
                            onMouseEnter={handleMouseEnter}
                            onFocus={handleFocus}
                            onClick={() => console.log('Projects')}
                        />

                        <Command.Group
                            heading="Social"
                            className="ml-2 mt-2 text-xs text-stone-500"
                        >
                            <div className="mt-2">
                                <CommandItem
                                    icon={GitHubLogoIcon}
                                    title="Github"
                                    isInGroup
                                    onMouseEnter={handleMouseEnter}
                                    onFocus={handleFocus}
                                    onClick={() => console.log('Github')}
                                />
                                <CommandItem
                                    icon={TwitterLogoIcon}
                                    title="Twitter"
                                    isInGroup
                                    onMouseEnter={handleMouseEnter}
                                    onFocus={handleFocus}
                                    onClick={() => console.log('Twitter')}
                                />
                                <CommandItem
                                    icon={LinkedInLogoIcon}
                                    title="LinkedIn"
                                    isInGroup
                                    onMouseEnter={handleMouseEnter}
                                    onFocus={handleFocus}
                                    onClick={() => console.log('LinkedIn')}
                                />
                            </div>
                        </Command.Group>

                        <Command.Group heading="Theme" className="ml-2 mt-2 text-xs text-stone-500">
                            <div className="mt-2">
                                <ThemeCommandItem
                                    onMouseEnter={handleMouseEnter}
                                    onFocus={handleFocus}
                                    theme={Theme.LIGHT}
                                />
                                <ThemeCommandItem
                                    onMouseEnter={handleMouseEnter}
                                    onFocus={handleFocus}
                                    theme={Theme.DARK}
                                />
                                <ThemeCommandItem
                                    onMouseEnter={handleMouseEnter}
                                    onFocus={handleFocus}
                                    theme={Theme.SYSTEM}
                                />
                            </div>
                        </Command.Group>
                    </Command.List>
                </div>
            </div>
        </Command.Dialog>
    );
};
