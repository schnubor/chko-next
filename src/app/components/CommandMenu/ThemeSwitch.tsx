'use client';

// Hooks
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

// UI
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

// Types
import type { FC } from 'react';
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

const ThemeSwitch: FC<Props> = ({ theme }) => {
    const [mounted, setMounted] = useState(false);
    const { setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const text = themeMap[theme]?.text;
    const Icon = themeMap[theme]?.icon;

    const handleClick = () => {
        setTheme(theme);
    };

    return (
        <button
            onClick={handleClick}
            className="flex h-10 w-full cursor-pointer items-center rounded-lg text-sm text-stone-800 outline-none dark:text-neutral-300"
        >
            <Icon className="ml-2 h-4 w-4" /> <span className="ml-4">{text}</span>
        </button>
    );
};

export default ThemeSwitch;
