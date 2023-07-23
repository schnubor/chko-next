// Utils
import { Command } from 'carloslfu-cmdk-internal';

// Utils
import ThemeSwitch from '@/app/components/CommandMenu/ThemeSwitch';

// Types
import type { FC, MouseEvent, FocusEventHandler } from 'react';
import { Theme } from '@/app/types';

interface Props {
    onMouseEnter: (event: MouseEvent<HTMLElement>) => void;
    onFocus: FocusEventHandler<HTMLElement>;
    theme: Theme;
}

export const ThemeCommandItem: FC<Props> = ({ onMouseEnter, onFocus, theme }) => {
    return (
        <Command.Item onMouseEnter={onMouseEnter} onFocus={onFocus} className="outline-none">
            <ThemeSwitch theme={theme} />
        </Command.Item>
    );
};
