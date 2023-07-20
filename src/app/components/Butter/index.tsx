import Image from 'next/image';
import { Piece } from './Piece';

// Types
import type { FC } from 'react';

interface Props { }

export const Butter: FC<Props> = ({ }) => {
    return (
        <section className="mt-24">
            <h2 className="font-semibold">Butter</h2>
            <div className="mt-8 grid grid-cols-4 gap-4 md:grid-cols-8">
                <Piece title="Webstorm" src="/butter/webstorm.webp" link="https://www.jetbrains.com/webstorm/" />
                <Piece title="Linear" src="/butter/linear.webp" link="https://www.linear.app" />
                <Piece title="Warp" src="/butter/warp.webp" link="https://warp.dev" />
                <Piece title="Arc" src="/butter/arc.webp" link="https://arc.dev" />
                <Piece title="Figma" src="/butter/figma.webp" link="https://www.figma.com" />
                <Piece title="Notion" src="/butter/notion.webp" link="https://www.notion.so" />
                <Piece title="Slack" src="/butter/slack.webp" link="https://slack.com" />
                <Piece title="Cron" src="/butter/cron.webp" link="https://cron.app" />
            </div>
        </section>
    );
};
