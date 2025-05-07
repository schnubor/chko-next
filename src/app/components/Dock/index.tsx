import { DOCK_ITEMS } from '@/app/constants';

// UI
import { DockTile } from './DockTile';

// Types
import type { FC } from 'react';

interface Props {}

export const Dock: FC<Props> = ({}) => {
    return (
        <section className="mt-24">
            <h2 className="font-semibold">Dock</h2>
            <ul className="mt-8 grid grid-cols-4 gap-4 md:grid-cols-8">
                {DOCK_ITEMS.map((item) => (
                    <DockTile key={item.title} title={item.title} src={item.src} link={item.link} />
                ))}
            </ul>
        </section>
    );
};
