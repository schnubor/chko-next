// UI
import { Command } from 'cmdk';

// Hooks
import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

// Types
import type { FC } from 'react';
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

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onClickOutside: () => void;
}

const CommandMenu: FC<Props> = ({ open, onOpenChange, onClickOutside }) => {
    const ref = useRef(null);

    useOnClickOutside(ref, onClickOutside);

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
                <div className="absolute w-full p-2">
                    <div className="h-10 rounded-lg bg-stone-300" />
                </div>
                <Command.List className="relative z-10 p-2">
                    <Command.Item className="flex h-10 cursor-pointer items-center rounded-lg">
                        <BackpackIcon className="ml-4 h-4 w-4" /> <span className="ml-4">Work</span>
                    </Command.Item>
                    <Command.Item className="flex h-10 cursor-pointer items-center rounded-lg">
                        <StackIcon className="ml-4 h-4 w-4" />{' '}
                        <span className="ml-4">Stack & Tools</span>
                    </Command.Item>
                    <Command.Item className="flex h-10 cursor-pointer items-center rounded-lg">
                        <RocketIcon className="ml-4 h-4 w-4" />{' '}
                        <span className="ml-4">Personal projects</span>
                    </Command.Item>

                    <Command.Group heading="Social" className="ml-2 mt-2 text-xs text-stone-500">
                        <div className="mt-2">
                            <Command.Item className="flex h-10 cursor-pointer items-center rounded-lg text-sm text-stone-800">
                                <GitHubLogoIcon className="ml-2 h-4 w-4" />{' '}
                                <span className="ml-4">Github</span>
                            </Command.Item>
                            <Command.Item className="flex h-10 cursor-pointer items-center rounded-lg text-sm text-stone-800">
                                <TwitterLogoIcon className="ml-2 h-4 w-4" />{' '}
                                <span className="ml-4">Twitter</span>
                            </Command.Item>
                            <Command.Item className="flex h-10 cursor-pointer items-center rounded-lg text-sm text-stone-800">
                                <LinkedInLogoIcon className="ml-2 h-4 w-4" />{' '}
                                <span className="ml-4">LinkedIn</span>
                            </Command.Item>
                        </div>
                    </Command.Group>

                    <Command.Group heading="Theme" className="ml-2 mt-2 text-xs text-stone-500">
                        <div className="mt-2">
                            <Command.Item className="flex h-10 cursor-pointer items-center rounded-lg text-sm text-stone-800">
                                <SunIcon className="ml-2 h-4 w-4" />{' '}
                                <span className="ml-4">Light theme</span>
                            </Command.Item>
                            <Command.Item className="flex h-10 cursor-pointer items-center rounded-lg text-sm text-stone-800">
                                <MoonIcon className="ml-2 h-4 w-4" />{' '}
                                <span className="ml-4">Dark theme</span>
                            </Command.Item>
                            <Command.Item className="flex h-10 cursor-pointer items-center rounded-lg text-sm text-stone-800">
                                <DesktopIcon className="ml-2 h-4 w-4" />{' '}
                                <span className="ml-4">System theme</span>
                            </Command.Item>
                        </div>
                    </Command.Group>
                </Command.List>
            </div>
        </Command.Dialog>
    );
};

export default CommandMenu;
