import { DOCK_ITEMS } from '@/app/constants';

import { DockTile } from './DockTile';

export const Dock = () => {
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
