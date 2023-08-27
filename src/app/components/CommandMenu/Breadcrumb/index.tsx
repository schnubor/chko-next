import { Pill } from './Pill';

// Type
import type { Dispatch, FC, SetStateAction } from 'react';

interface Props {
    activeMenu: string;
    onPillClick: Dispatch<SetStateAction<string>>;
}

export const Breadcrumb: FC<Props> = ({ activeMenu, onPillClick }) => {
    return (
        <div className="space-x-2 p-2">
            <Pill name="Home" onClick={() => onPillClick('main')} />
            {activeMenu === 'work' && <Pill name="Work" />}
            {activeMenu === 'dock' && <Pill name="Dock" />}
        </div>
    );
};
