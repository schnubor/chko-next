// Utils
import { Command } from 'carloslfu-cmdk-internal';
import Link from 'next/link';

// Types
import type {
    FC,
    MouseEvent,
    FocusEventHandler,
    ForwardRefExoticComponent,
    RefAttributes,
} from 'react';
import type { IconProps } from '@radix-ui/react-icons/dist/types';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

interface Props {
    onMouseEnter: (event: MouseEvent<HTMLElement>) => void;
    onFocus: FocusEventHandler<HTMLElement>;
    link: string;
    title: string;
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    onClick: () => void;
}

export const ExternalLinkCommandItem: FC<Props> = ({
    onMouseEnter,
    onFocus,
    link,
    title,
    icon: Icon,
    onClick,
}) => {
    return (
        <Command.Item onMouseEnter={onMouseEnter} onFocus={onFocus} className="outline-none">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div
                    className="flex h-10 px-4 w-full cursor-pointer items-center rounded-lg text-sm text-stone-800 outline-none dark:text-neutral-300"
                    onClick={onClick}
                >
                    <Icon />
                    <span className="ml-4">{title}</span>
                    <ArrowTopRightIcon className="ml-auto" />
                </div>
            </a>
        </Command.Item>
    );
};
