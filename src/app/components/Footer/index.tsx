// UI
import { Clock } from './Clock';
import { ArrowRightIcon, DrawingPinIcon } from '@radix-ui/react-icons';

// Types
import type { FC } from 'react';

export interface Props {}

export const Footer: FC<Props> = () => {
    const now = new Date();

    return (
        <div className="mt-12 flex items-center text-xs text-stone-500 dark:text-neutral-500">
            <DrawingPinIcon className="mr-2 inline" /> Berlin{' '}
            <ArrowRightIcon className="mx-2 w-3 text-orange-500" /> <Clock time={now.getTime()} />
        </div>
    );
};
