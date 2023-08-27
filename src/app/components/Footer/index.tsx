// UI
import { Clock } from './Clock';
import { DrawingPinIcon } from '@radix-ui/react-icons';

// Types
import type { FC } from 'react';

export interface Props {}

export const Footer: FC<Props> = () => {
    return (
        <div className="mt-12 flex items-center text-xs text-stone-500 dark:text-neutral-500">
            <DrawingPinIcon className="mr-2 inline" /> Berlin <span className="mx-2">·</span>{' '}
            <Clock />
        </div>
    );
};
