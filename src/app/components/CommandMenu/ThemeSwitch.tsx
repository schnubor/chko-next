'use client';

import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { Theme } from '@/app/types';

interface Props {
    theme: Theme;
}

const themeMap = {
    [Theme.DARK]: {
        icon: MoonIcon,
        text: 'Dark theme',
    },
    [Theme.LIGHT]: {
        icon: SunIcon,
        text: 'Light theme',
    },
    [Theme.SYSTEM]: {
        icon: DesktopIcon,
        text: 'System theme',
    },
};

export const ThemeSwitch = ({ theme }: Props) => {
    const text = themeMap[theme]?.text;
    const Icon = themeMap[theme]?.icon;

    if (!Icon) {
        return null;
    }

    return (
        <div className="flex h-10 w-full cursor-pointer items-center rounded-lg text-sm text-stone-800 outline-hidden dark:text-neutral-300">
            <Icon className="ml-4 size-4" /> <span className="ml-4">{text}</span>
        </div>
    );
};
