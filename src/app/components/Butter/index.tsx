// UI
import { DockTile } from './DockTile';

// Types
import type { FC } from 'react';

interface Props {}

export const Butter: FC<Props> = ({}) => {
    return (
        <section className="mt-24">
            <h2 className="font-semibold">Dock</h2>
            <div className="mt-8 grid grid-cols-4 gap-4 md:grid-cols-8">
                <DockTile
                    title="Webstorm"
                    src="/butter/webstorm.webp"
                    link="https://www.jetbrains.com/webstorm/"
                />
                <DockTile title="Linear" src="/butter/linear.webp" link="https://www.linear.app" />
                <DockTile title="Warp" src="/butter/warp.webp" link="https://warp.dev" />
                <DockTile title="Arc" src="/butter/arc.webp" link="https://arc.dev" />
                <DockTile title="Figma" src="/butter/figma.webp" link="https://www.figma.com" />
                <DockTile title="Notion" src="/butter/notion.webp" link="https://www.notion.so" />
                <DockTile title="Slack" src="/butter/slack.webp" link="https://slack.com" />
                <DockTile title="Cron" src="/butter/cron.webp" link="https://cron.app" />
            </div>
        </section>
    );
};
