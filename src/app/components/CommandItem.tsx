// Utils
import clsx from 'clsx';
import { Command } from 'cmdk';

// Types
import type { FC, ForwardRefExoticComponent, RefAttributes } from 'react';
import type { IconProps } from '@radix-ui/react-icons/dist/types';

interface Props {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    title: string;
    isInGroup?: boolean;
}

const CommandItem: FC<Props> = ({ icon: Icon, title, isInGroup }) => {
    return (
        <Command.Item className="flex h-10 cursor-pointer items-center rounded-lg text-sm text-stone-800">
            <Icon
                className={clsx('h4- w-4', {
                    'ml-2': isInGroup,
                    'ml-4': !isInGroup,
                })}
            />{' '}
            <span className="ml-4">{title}</span>
        </Command.Item>
    );
};

export default CommandItem;
