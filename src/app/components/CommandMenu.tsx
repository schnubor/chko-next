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
                className="w-full max-w-screen-sm animate-slideDownAndFade rounded-xl border bg-stone-200 p-4 text-sm shadow-lg"
                ref={ref}
            >
                <Command.List>
                    <Command.Empty>No results found.</Command.Empty>

                    <Command.Item className="flex h-10 items-center rounded-lg">
                        <BackpackIcon className="ml-2 h-4 w-4" /> <span className="ml-4">Work</span>
                    </Command.Item>
                    <Command.Item className="flex h-10 items-center rounded-lg">
                        <StackIcon className="ml-2 h-4 w-4" />{' '}
                        <span className="ml-4">Stack & Tools</span>
                    </Command.Item>
                    <Command.Item className="flex h-10 items-center rounded-lg">
                        <RocketIcon className="ml-2 h-4 w-4" />{' '}
                        <span className="ml-4">Personal projects</span>
                    </Command.Item>

                    <Command.Group heading="Social">
                        <Command.Item className="flex h-10 items-center rounded-lg">
                            <GitHubLogoIcon className="ml-2 h-4 w-4" />{' '}
                            <span className="ml-4">Github</span>
                        </Command.Item>
                        <Command.Item className="flex h-10 items-center rounded-lg">
                            <TwitterLogoIcon className="ml-2 h-4 w-4" />{' '}
                            <span className="ml-4">Twitter</span>
                        </Command.Item>
                        <Command.Item className="flex h-10 items-center rounded-lg">
                            <LinkedInLogoIcon className="ml-2 h-4 w-4" />{' '}
                            <span className="ml-4">LinkedIn</span>
                        </Command.Item>
                    </Command.Group>

                    <Command.Group heading="Theme">
                        <Command.Item className="flex h-10 items-center rounded-lg">
                            <SunIcon className="ml-2 h-4 w-4" />{' '}
                            <span className="ml-4">Light theme</span>
                        </Command.Item>
                        <Command.Item className="flex h-10 items-center rounded-lg">
                            <MoonIcon className="ml-2 h-4 w-4" />{' '}
                            <span className="ml-4">Dark theme</span>
                        </Command.Item>
                        <Command.Item className="flex h-10 items-center rounded-lg">
                            <DesktopIcon className="ml-2 h-4 w-4" />{' '}
                            <span className="ml-4">System theme</span>
                        </Command.Item>
                    </Command.Group>
                </Command.List>
            </div>
        </Command.Dialog>
    );
};

export default CommandMenu;
