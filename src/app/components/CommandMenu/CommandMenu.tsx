import { DOCK_ITEMS } from '@/app/constants';

// Utils
import { Command } from 'cmdk';

// UI
import { CommandItem } from './CommandItem';
import {
    BackpackIcon,
    GitHubLogoIcon,
    HomeIcon,
    LinkedInLogoIcon,
    StackIcon,
} from '@radix-ui/react-icons';
import { ThemeCommandItem } from '@/app/components/CommandMenu/ThemeCommandItem';
import { Breadcrumb } from './Breadcrumb';
import { LinkCommandItem } from './LinkCommandItem';
import { BlueskyLogo } from '@/app/components/CommandMenu/BlueskyLogo';
import { DialogTitle } from '@radix-ui/react-dialog';

// Hooks
import { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';

// Types
import type { FC } from 'react';
import { Theme } from '@/app/types';

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onClickOutside: () => void;
}

export const CommandMenu: FC<Props> = ({ open, onOpenChange, onClickOutside }) => {
    const [activeMenu, setActiveMenu] = useState('main');
    const outsideClickRef = useRef(null);

    useClickAway(outsideClickRef, onClickOutside);

    useEffect(() => {
        if (open) {
            setActiveMenu('main');
        }
    }, [open]);

    return (
        <Command.Dialog
            open={open}
            onOpenChange={onOpenChange}
            label="Menu"
            overlayClassName="fixed z-10 inset-0 size-screen animate-fadeIn data-[state='closed']:animate-fadeOut bg-stone-800/50 backdrop-blur-sm dark:bg-neutral-800/50 size-screen"
            contentClassName="data-[state='closed']:animate-slideUpAndFadeOut z-20 group fixed inset-0 flex h-screen w-screen items-center justify-center [&_[cmdk-group-heading]]:px-2"
        >
            <DialogTitle className="sr-only">Menu</DialogTitle>
            <div className="w-80 p-4 sm:w-96">
                <div
                    className="relative w-full animate-slideDownAndFade rounded-xl border bg-stone-200 text-sm shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                    ref={outsideClickRef}
                >
                    <Command.List className="relative z-10 p-2">
                        <Breadcrumb activeMenu={activeMenu} onPillClick={setActiveMenu} />

                        {activeMenu === 'main' && (
                            <>
                                <LinkCommandItem
                                    icon={HomeIcon}
                                    title="Home"
                                    link="/"
                                    onClick={onClickOutside}
                                />

                                <CommandItem
                                    icon={BackpackIcon}
                                    title="Work"
                                    onClick={() => setActiveMenu('work')}
                                    hasSubmenu
                                />

                                <CommandItem
                                    icon={StackIcon}
                                    title="Dock"
                                    onClick={() => setActiveMenu('dock')}
                                    hasSubmenu
                                />

                                <Command.Group
                                    heading="Social"
                                    className="mt-2 text-xs text-stone-600 dark:text-neutral-400"
                                >
                                    <div className="mt-2">
                                        <CommandItem
                                            icon={GitHubLogoIcon}
                                            title="Github"
                                            link="https://github.com/schnubor"
                                            onClick={onClickOutside}
                                        />
                                        <CommandItem
                                            icon={LinkedInLogoIcon}
                                            title="LinkedIn"
                                            link="https://www.linkedin.com/in/christian-kornd%C3%B6rfer-8802045b/"
                                            onClick={onClickOutside}
                                        />

                                        <CommandItem
                                            icon={BlueskyLogo}
                                            title="BlueSky"
                                            link="https://bsky.app/profile/chko.org"
                                            onClick={onClickOutside}
                                        />
                                    </div>
                                </Command.Group>

                                <Command.Group
                                    heading="Theme"
                                    className="mt-2 text-xs text-stone-600 dark:text-neutral-400"
                                >
                                    <div className="mt-2">
                                        <ThemeCommandItem theme={Theme.LIGHT} />
                                        <ThemeCommandItem theme={Theme.DARK} />
                                        <ThemeCommandItem theme={Theme.SYSTEM} />
                                    </div>
                                </Command.Group>
                            </>
                        )}

                        {activeMenu === 'work' && (
                            <>
                                <LinkCommandItem
                                    src="/perspective.png"
                                    title="Perspective"
                                    link="/perspective"
                                    onClick={onClickOutside}
                                />

                                <LinkCommandItem
                                    src="/styla.png"
                                    title="Styla"
                                    link="/styla"
                                    onClick={onClickOutside}
                                />

                                <LinkCommandItem
                                    src="/tapetv.png"
                                    title="tape.tv"
                                    link="/tapetv"
                                    onClick={onClickOutside}
                                />
                            </>
                        )}

                        {activeMenu === 'dock' && (
                            <>
                                {DOCK_ITEMS.map((item) => {
                                    return (
                                        <LinkCommandItem
                                            key={item.title}
                                            src={item.src}
                                            title={item.title}
                                            link={item.link}
                                            onClick={onClickOutside}
                                            isExternal
                                        />
                                    );
                                })}
                            </>
                        )}
                    </Command.List>
                </div>
            </div>
        </Command.Dialog>
    );
};
