// Utils
import { Command } from 'cmdk';

// UI
import { CommandItem } from './CommandItem';
import {
    BackpackIcon,
    DesktopIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
    MoonIcon,
    RocketIcon,
    StackIcon,
    SunIcon,
    TwitterLogoIcon,
} from '@radix-ui/react-icons';

// Hooks
import { useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { useOnClickOutside } from 'usehooks-ts';

// Types
import type { FC, MouseEvent } from 'react';

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onClickOutside: () => void;
}

export const CommandMenu: FC<Props> = ({ open, onOpenChange, onClickOutside }) => {
    const [topOffset, setTopOffset] = useState(0);
    const ref = useRef(null);
    const { theme, setTheme } = useTheme();

    console.log('theme', theme);

    useOnClickOutside(ref, onClickOutside);

    const handleMouseEnter = (event: MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement;
        const offset = target.offsetTop - 8;

        setTopOffset(offset);
    };

    return (
        <Command.Dialog
            open={open}
            onOpenChange={onOpenChange}
            label="Menu"
            className="fixed top-0 flex h-screen w-screen animate-fadeIn items-center justify-center bg-stone-800/50 backdrop-blur-sm"
        >
            <div
                className="relative w-full animate-slideDownAndFade rounded-xl border bg-stone-200 text-sm shadow-lg sm:w-96"
                ref={ref}
            >
                <div
                    className="pointer-events-none absolute w-full p-2 transition-all duration-100 ease-out"
                    style={{ top: `${topOffset}px` }}
                >
                    <div className="h-10 rounded-lg bg-stone-300" />
                </div>

                <Command.List className="relative z-10 p-2">
                    <CommandItem
                        icon={BackpackIcon}
                        title="Work"
                        onMouseEnter={handleMouseEnter}
                        onClick={() => console.log('Work')}
                    />
                    <CommandItem
                        icon={StackIcon}
                        title="Stack & Tools"
                        onMouseEnter={handleMouseEnter}
                        onClick={() => console.log('Stack')}
                    />
                    <CommandItem
                        icon={RocketIcon}
                        title="Personal projects"
                        onMouseEnter={handleMouseEnter}
                        onClick={() => console.log('Projects')}
                    />

                    <Command.Group heading="Social" className="ml-2 mt-2 text-xs text-stone-500">
                        <div className="mt-2">
                            <CommandItem
                                icon={GitHubLogoIcon}
                                title="Github"
                                isInGroup
                                onMouseEnter={handleMouseEnter}
                                onClick={() => console.log('Github')}
                            />
                            <CommandItem
                                icon={TwitterLogoIcon}
                                title="Twitter"
                                isInGroup
                                onMouseEnter={handleMouseEnter}
                                onClick={() => console.log('Twitter')}
                            />
                            <CommandItem
                                icon={LinkedInLogoIcon}
                                title="LinkedIn"
                                isInGroup
                                onMouseEnter={handleMouseEnter}
                                onClick={() => console.log('LinkedIn')}
                            />
                        </div>
                    </Command.Group>

                    <Command.Group heading="Theme" className="ml-2 mt-2 text-xs text-stone-500">
                        <div className="mt-2">
                            <CommandItem
                                icon={SunIcon}
                                title="Light theme"
                                isInGroup
                                onMouseEnter={handleMouseEnter}
                                onClick={() => {
                                    setTheme('light');
                                    console.log('setTheme light');
                                }}
                            />
                            <CommandItem
                                icon={MoonIcon}
                                title="Dark theme"
                                isInGroup
                                onMouseEnter={handleMouseEnter}
                                onClick={() => {
                                    setTheme('dark');
                                    console.log('setTheme dark');
                                }}
                            />
                            <CommandItem
                                icon={DesktopIcon}
                                title="System theme"
                                isInGroup
                                onMouseEnter={handleMouseEnter}
                                onClick={() => {
                                    setTheme('system');
                                    console.log('setTheme system');
                                }}
                            />
                        </div>
                    </Command.Group>
                </Command.List>
            </div>
        </Command.Dialog>
    );
};
