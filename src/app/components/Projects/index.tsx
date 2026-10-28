import { WorkTile } from '../Work/WorkTile';

export const Projects = () => {
    return (
        <section className="mt-24">
            <h2 className="font-semibold">Projects</h2>
            <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                <WorkTile
                    link="https://www.foerderkreis-braunsammlung.de"
                    external
                    title="Förderkreis Braunsammlung e.V."
                    description="Redesign, relaunch and maintenance of the website for the association preserving the Braun Design heritage."
                    className="group col-span-1 sm:col-span-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                    >
                        <rect
                            className="text-stone-900 dark:text-neutral-300"
                            width="32"
                            height="32"
                            rx="6"
                            fill="currentColor"
                        />
                        <circle cx="16" cy="16" r="8" fill="#DD4814" />
                    </svg>
                </WorkTile>
            </ul>
        </section>
    );
};
