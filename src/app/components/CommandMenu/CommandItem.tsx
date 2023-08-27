// Utils
import clsx from 'clsx';
import { Command } from 'carloslfu-cmdk-internal';

// UI
import { ArrowTopRightIcon, ChevronRightIcon } from '@radix-ui/react-icons';

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
    hasSubmenu?: boolean;
    link?: string;
}

export const CommandItem: FC<Props> = ({
    icon: Icon,
    title,
    isInGroup,
    onMouseEnter,
    onClick,
    onFocus,
    hasSubmenu,
    link,
}) => {
    const content = (
        <>
            <Icon
                className={clsx('h4- w-4', {
                    'ml-2': isInGroup,
                    'ml-4': !isInGroup,
                })}
            />{' '}
            <span className="ml-4">{title}</span>
            {hasSubmenu && <ChevronRightIcon className="ml-auto mr-4" />}
            {link && (
                <ArrowTopRightIcon className="ml-auto mr-4 origin-bottom-left scale-0 transition duration-200 ease-out group-hover/link:scale-100" />
            )}
        </>
    );

    return (
        <Command.Item onMouseEnter={onMouseEnter} onFocus={onFocus} className="outline-none">
            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex h-10 w-full cursor-pointer items-center rounded-lg text-sm text-stone-800 outline-none dark:text-neutral-300"
                >
                    {content}
                </a>
            ) : (
                <button
                    onClick={onClick}
                    className="flex h-10 w-full cursor-pointer items-center rounded-lg text-sm text-stone-800 outline-none dark:text-neutral-300"
                >
                    {content}
                </button>
            )}
        </Command.Item>
    );
};
