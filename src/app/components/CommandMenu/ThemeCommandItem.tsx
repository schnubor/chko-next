// Utils
import { Command } from 'cmdk';

// Utils
import ThemeSwitch from '@/app/components/CommandMenu/ThemeSwitch';

// Types
import type { FC, MouseEvent, FocusEventHandler } from 'react';
import { Theme } from '@/app/types';
import { useTheme } from 'next-themes';

interface Props {
    theme: Theme;
    onClick: () => void;
}

export const ThemeCommandItem: FC<Props> = ({ theme, onClick }) => {
    const { setTheme } = useTheme();

    const handleSelect = () => {
        setTheme(theme);

        onClick();
    };

    return (
        <Command.Item
            className="rounded-lg outline-none data-[selected=true]:bg-stone-300 dark:data-[selected=true]:bg-neutral-800"
            onSelect={handleSelect}
        >
            <ThemeSwitch theme={theme} onClick={onClick} />
        </Command.Item>
    );
};
