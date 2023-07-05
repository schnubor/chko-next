// UI
import { Command } from 'cmdk';
import CommandItem from './CommandItem';

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
                <div className="absolute w-full p-2" style={{}}>
                    <div className="h-10 rounded-lg bg-stone-300" />
                </div>

                <Command.List className="relative z-10 p-2">
                    <CommandItem icon={BackpackIcon} title="Work" />
                    <CommandItem icon={StackIcon} title="Stack & Tools" />
                    <CommandItem icon={RocketIcon} title="Personal projects" />

                    <Command.Group heading="Social" className="ml-2 mt-2 text-xs text-stone-500">
                        <div className="mt-2">
                            <CommandItem icon={GitHubLogoIcon} title="Github" isInGroup />
                            <CommandItem icon={TwitterLogoIcon} title="Twitter" isInGroup />
                            <CommandItem icon={LinkedInLogoIcon} title="LinkedIn" isInGroup />
                        </div>
                    </Command.Group>

                    <Command.Group heading="Theme" className="ml-2 mt-2 text-xs text-stone-500">
                        <div className="mt-2">
                            <CommandItem icon={SunIcon} title="Light theme" isInGroup />
                            <CommandItem icon={MoonIcon} title="Dark theme" isInGroup />
                            <CommandItem icon={DesktopIcon} title="System theme" isInGroup />
                        </div>
                    </Command.Group>
                </Command.List>
            </div>
        </Command.Dialog>
    );
};

export default CommandMenu;
