import { Command } from 'cmdk';
import { useTheme } from 'next-themes';

import { ThemeSwitch } from '@/app/components/CommandMenu/ThemeSwitch';

import type { Theme } from '@/app/types';

interface Props {
    theme: Theme;
    onClick?: () => void;
}

export const ThemeCommandItem = ({ theme, onClick }: Props) => {
    const { setTheme } = useTheme();

    const handleSelect = () => {
        setTheme(theme);

        onClick?.();
    };

    return (
        <Command.Item
            className="rounded-lg outline-hidden data-[selected=true]:bg-stone-300 dark:data-[selected=true]:bg-neutral-800"
            onSelect={handleSelect}
        >
            <ThemeSwitch theme={theme} />
        </Command.Item>
    );
};
