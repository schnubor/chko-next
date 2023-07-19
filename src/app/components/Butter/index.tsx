import Image from 'next/image';

// Types
import type { FC } from 'react';

interface Props { }

export const Butter: FC<Props> = ({ }) => {
    return (
        <section className="mt-24">
            <h2 className="font-semibold">Butter</h2>
            <div className="mt-8 grid grid-cols-4 gap-4 md:grid-cols-8">
                <div className="rounded-lg bg-stone-300 dark:bg-neutral-800 p-2">
                    <Image src="/butter/webstorm.webp" width={200} height={200} alt="Webstorm" />
                </div>
                <div className="rounded-lg bg-stone-300 dark:bg-neutral-800 p-2">
                    <Image src="/butter/linear.webp" width={200} height={200} alt="Linear" />
                </div>
                <div className="rounded-lg bg-stone-300 dark:bg-neutral-800 p-2">
                    <Image src="/butter/warp.webp" width={200} height={200} alt="Warp" />
                </div>
                <div className="rounded-lg bg-stone-300 dark:bg-neutral-800 p-2">
                    <Image src="/butter/arc.webp" width={200} height={200} alt="Arc" />
                </div>
                <div className="rounded-lg bg-stone-300 dark:bg-neutral-800 p-2">
                    <Image src="/butter/figma.webp" width={200} height={200} alt="Figma" />
                </div>
                <div className="rounded-lg bg-stone-300 dark:bg-neutral-800 p-2">
                    <Image src="/butter/notion.webp" width={200} height={200} alt="Notion" />
                </div>
                <div className="rounded-lg bg-stone-300 dark:bg-neutral-800 p-2">
                    <Image src="/butter/slack.webp" width={200} height={200} alt="Slack" />
                </div>
                <div className="rounded-lg bg-stone-300 dark:bg-neutral-800 p-2">
                    <Image src="/butter/cron.webp" width={200} height={200} alt="Cron" />
                </div>
            </div>
        </section>
    );
};
