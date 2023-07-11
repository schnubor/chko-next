// Utils
import clsx from 'clsx';
import { Command } from 'cmdk';

// Types
import type {
    FC,
    ForwardRefExoticComponent,
    RefAttributes,
    MouseEvent,
    FocusEventHandler,
} from 'react';
import type { IconProps } from '@radix-ui/react-icons/dist/types';

interface Props {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    title: string;
    isInGroup?: boolean;
    onMouseEnter: (event: MouseEvent<HTMLElement>) => void;
    onFocus: FocusEventHandler<HTMLElement>;
    onClick: () => void;
}

export const CommandItem: FC<Props> = ({
    icon: Icon,
    title,
    isInGroup,
    onMouseEnter,
    onClick,
    onFocus,
}) => {
    return (
        <Command.Item onMouseEnter={onMouseEnter} onFocus={onFocus} className="outline-none">
            <button
                onClick={onClick}
                className="flex h-10 w-full cursor-pointer items-center rounded-lg text-sm text-stone-800 outline-none dark:text-neutral-300"
            >
                <Icon
                    className={clsx('h4- w-4', {
                        'ml-2': isInGroup,
                        'ml-4': !isInGroup,
                    })}
                />{' '}
                <span className="ml-4">{title}</span>
            </button>
        </Command.Item>
    );
};
