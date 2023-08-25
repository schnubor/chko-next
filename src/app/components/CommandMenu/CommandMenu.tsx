// Utils
import { Command } from 'carloslfu-cmdk-internal';

// UI
import { CommandItem } from './CommandItem';
import {
    BackpackIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
    StackIcon,
    TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { ThemeCommandItem } from '@/app/components/CommandMenu/ThemeCommandItem';

// Hooks
import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

// Types
import type { FocusEventHandler, FC, MouseEvent } from 'react';
import { Theme } from '@/app/types';
import { Breadcrumb } from './Breadcrumb';
import { LinkCommandItem } from './LinkCommandItem';

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onClickOutside: () => void;
}

export const CommandMenu: FC<Props> = ({ open, onOpenChange, onClickOutside }) => {
    const [topOffset, setTopOffset] = useState(0);
    const [activeMenu, setActiveMenu] = useState('main');
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
            overlayClassName="fixed left-0 top-0 animate-fadeIn data-[state='closed']:animate-fadeOut bg-stone-800/50 backdrop-blur-sm dark:bg-neutral-800/50 h-screen w-screen"
            contentClassName="data-[state='closed']:animate-slideUpAndFadeOut group fixed left-0 top-0 flex h-screen w-screen items-center justify-center"
        >
            <div className="w-80 p-4 sm:w-96">
                <div
                    className="relative w-full animate-slideDownAndFade rounded-xl border bg-stone-200 text-sm shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                    ref={outsideClickRef}
                >
                    {/* BG Slider */}
                    <div
                        className="pointer-events-none absolute hidden w-full p-2 transition-all duration-100 ease-out sm:block"
                        style={{ top: `${topOffset}px` }}
                    >
                        <div className="h-10 rounded-lg bg-stone-300 dark:bg-neutral-800" />
                    </div>

                    <Command.List className="relative z-10 p-2">
                        <Breadcrumb activeMenu={activeMenu} onPillClick={setActiveMenu} />

                        {activeMenu === 'main' && (
                            <>
                                <CommandItem
                                    icon={BackpackIcon}
                                    title="Work"
                                    onMouseEnter={handleMouseEnter}
                                    onFocus={handleFocus}
                                    onClick={() => setActiveMenu('work')}
                                    hasSubmenu
                                />

                                <CommandItem
                                    icon={StackIcon}
                                    title="Dock"
                                    onMouseEnter={handleMouseEnter}
                                    onFocus={handleFocus}
                                    onClick={() => setActiveMenu('dock')}
                                    hasSubmenu
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
                                            onClick={onClickOutside}
                                        />
                                        <CommandItem
                                            icon={TwitterLogoIcon}
                                            title="Twitter"
                                            isInGroup
                                            onMouseEnter={handleMouseEnter}
                                            onFocus={handleFocus}
                                            onClick={onClickOutside}
                                        />
                                        <CommandItem
                                            icon={LinkedInLogoIcon}
                                            title="LinkedIn"
                                            isInGroup
                                            onMouseEnter={handleMouseEnter}
                                            onFocus={handleFocus}
                                            onClick={onClickOutside}
                                        />
                                    </div>
                                </Command.Group>

                                <Command.Group
                                    heading="Theme"
                                    className="ml-2 mt-2 text-xs text-stone-500"
                                >
                                    <div className="mt-2">
                                        <ThemeCommandItem
                                            onMouseEnter={handleMouseEnter}
                                            onFocus={handleFocus}
                                            onClick={onClickOutside}
                                            theme={Theme.LIGHT}
                                        />
                                        <ThemeCommandItem
                                            onMouseEnter={handleMouseEnter}
                                            onFocus={handleFocus}
                                            onClick={onClickOutside}
                                            theme={Theme.DARK}
                                        />
                                        <ThemeCommandItem
                                            onMouseEnter={handleMouseEnter}
                                            onFocus={handleFocus}
                                            onClick={onClickOutside}
                                            theme={Theme.SYSTEM}
                                        />
                                    </div>
                                </Command.Group>
                            </>
                        )}

                        {activeMenu === 'work' && (
                            <>
                                <LinkCommandItem
                                    icon={BackpackIcon}
                                    title="Perspective"
                                    onMouseEnter={handleMouseEnter}
                                    onFocus={handleFocus}
                                    link="/perspective"
                                    onClick={onClickOutside}
                                />
                            </>
                        )}

                        {activeMenu === 'dock' && (
                            <>
                                <CommandItem
                                    icon={BackpackIcon}
                                    title="Perspective"
                                    onMouseEnter={handleMouseEnter}
                                    onFocus={handleFocus}
                                    onClick={() => setActiveMenu('work')}
                                />
                            </>
                        )}
                    </Command.List>
                </div>
            </div>
        </Command.Dialog>
    );
};
