import { Pill } from './Pill';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import type { Dispatch, FC, SetStateAction } from 'react';

interface Props {
    activeMenu: string;
    onPillClick: Dispatch<SetStateAction<string>>;
}

export const Breadcrumb: FC<Props> = ({ activeMenu, onPillClick }) => {
    if (activeMenu === 'main') {
        return null;
    }

    return (
        <div className="mb-2 flex items-center gap-2">
            <Pill name="Home" onClick={() => onPillClick('main')} />

            {activeMenu === 'work' && (
                <>
                    <ArrowRightIcon className="size-4 text-stone-500 dark:text-neutral-500" />
                    <p className="text-xs text-stone-800 dark:text-neutral-300">Work</p>
                </>
            )}

            {activeMenu === 'dock' && (
                <>
                    <ArrowRightIcon className="size-4 text-stone-500 dark:text-neutral-500" />
                    <p className="text-xs text-stone-800 dark:text-neutral-300">Dock</p>
                </>
            )}
        </div>
    );
};
