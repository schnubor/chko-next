import { WorkTile } from './WorkTile';

export const Work = () => {
    return (
        <section className="mt-24">
            <h2 className="font-semibold">Work</h2>
            <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                <WorkTile
                    link="/perspective"
                    title="perspective.co"
                    description="Lead Frontend Engineer, 2017 - today"
                    className="group col-span-1 sm:col-span-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                        <path
                            className="text-stone-900 dark:text-neutral-300"
                            fill="currentColor"
                            d="M6.718 6.718c1.2-1.2 2.708-1.837 5.333-2.162C13.986 4.316 16.527 4 20 4c3.592 0 6.188.321 8.146.581 2.504.332 3.966.967 5.136 2.137 1.173 1.174 1.809 2.64 2.14 5.159.257 1.955.578 4.545.578 8.123 0 3.598-.322 6.197-.582 8.156-.333 2.498-.968 3.957-2.136 5.126-1.158 1.158-2.603 1.792-5.061 2.127-1.967.268-4.583.591-8.221.591-3.519 0-6.081-.318-8.025-.565-2.578-.328-4.068-.965-5.257-2.153-1.157-1.157-1.791-2.6-2.126-5.055C4.324 26.26 4 23.642 4 20c0-3.485.317-6.033.558-7.97.326-2.612.963-4.115 2.16-5.312Z"
                        />
                        <path
                            className="text-stone-200 dark:text-stone-900"
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M26.35 13.72c1.687 2.347 1.595 6.076-.227 8.39-1.59 2.016-4.99 2.872-8.618 1.2v6.49h-2.95V11.47h2.866l.049.822c4.31-1.542 7.069-1.09 8.88 1.429Zm-3.494 7.335c1.01-.671 1.648-1.902 1.635-3.385-.019-2.225-1.47-3.835-3.461-3.84a3.375 3.375 0 0 0-2.04.673c-.482.328-.884.78-1.153 1.33-.835 1.71-.43 3.944.933 5.03 1.082.863 2.316 1.053 3.558.486.028-.012.054-.027.082-.04l.057-.03a3.227 3.227 0 0 0 .372-.212l.017-.012Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </WorkTile>
                <WorkTile
                    title="styla.com"
                    description="Fullstack Developer, 2014 - 2017"
                    link="/styla"
                    className="group"
                >
                    <div className="h-6">
                        <svg
                            className="text-stone-900 dark:text-neutral-300"
                            height="100%"
                            viewBox="0 0 243 255"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect x="60" width="170" height="25" rx="12.5" fill="currentColor" />
                            <rect y="58" width="150" height="25" rx="12.5" fill="currentColor" />
                            <rect
                                x="33"
                                y="115"
                                width="168"
                                height="25"
                                rx="12.5"
                                fill="currentColor"
                            />
                            <rect
                                x="93"
                                y="172"
                                width="150"
                                height="25"
                                rx="12.5"
                                fill="currentColor"
                            />
                            <rect
                                x="19"
                                y="230"
                                width="170"
                                height="25"
                                rx="12.5"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </WorkTile>
                <WorkTile
                    title="tape.tv"
                    description="UI Designer & Frontend Developer, 2012 - 2014"
                    link="/tapetv"
                    className="group"
                >
                    <div className="h-6">
                        <svg
                            height="100%"
                            viewBox="0 0 602 152"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-stone-900 dark:text-neutral-300"
                        >
                            <path
                                d="M403.776 112.834H374.701V84.0841H403.776V112.834Z"
                                fill="currentColor"
                            />
                            <path
                                d="M45.9366 39.6353H56.1366V60.934H45.9366V83.1315C45.9366 88.984 47.4366 89.8815 51.7879 89.8815H56.1366V112.834H33.9366C21.9366 112.834 15.6366 107.282 15.6366 95.434V60.934H7.08661V39.6353H15.6366V7.08655H45.9366V39.6353Z"
                                fill="currentColor"
                            />
                            <path
                                d="M125.286 76.8351C125.286 69.1851 118.686 62.8838 111.036 62.8838C103.385 62.8838 97.386 69.4838 97.386 76.8351C97.386 84.6326 103.236 90.6313 111.036 90.6313C118.686 90.6313 125.286 84.6326 125.286 76.8351ZM153.936 60.9338V91.5326H162.337V112.834H125.586V102.033H125.286C118.536 110.583 111.636 115.234 100.086 115.234C78.1847 115.234 65.7347 96.3326 65.7347 76.2351C65.7347 54.0351 77.436 37.2351 100.986 37.2351C111.336 37.2351 120.636 42.4863 125.886 50.8851H126.186V39.6351H162.337V60.9338H153.936Z"
                                fill="currentColor"
                            />
                            <path
                                d="M223.384 90.6315C231.184 90.6315 237.484 84.4815 237.484 76.684C237.484 69.034 230.884 63.0352 223.384 63.0352C215.884 63.0352 210.034 69.3327 210.034 76.684C210.034 84.3327 215.584 90.6315 223.384 90.6315ZM209.584 48.7852C209.584 50.4365 216.334 37.2352 234.634 37.2352C256.685 37.2352 269.585 53.2852 269.585 74.434C269.585 96.7815 258.035 115.234 234.185 115.234C223.834 115.234 215.884 110.731 210.784 104.133H210.484V104.433V122.734H220.384V144.033H172.534V122.734H180.183V60.934H172.534V39.6352H209.584V48.7852Z"
                                fill="currentColor"
                            />
                            <path
                                d="M337.832 70.2336C337.832 61.6848 334.682 55.5361 325.232 55.5361C315.332 55.5361 310.532 62.2836 310.532 70.2336H337.832ZM364.231 94.9823C358.081 109.232 341.282 115.234 326.731 115.234C291.182 115.234 279.631 96.0323 279.631 76.8348C279.631 50.8848 299.881 37.2361 324.182 37.2361C354.932 37.2361 366.782 52.6861 366.782 82.2336H310.982C310.681 91.2323 315.632 96.3323 325.381 96.3323C330.481 96.3323 335.281 94.2323 337.981 89.7336L364.231 94.9823Z"
                                fill="currentColor"
                            />
                            <path
                                d="M444.93 39.6353H455.13V60.934H444.93V83.1315C444.93 88.984 446.431 89.8815 450.782 89.8815H455.13V112.834H432.93C420.931 112.834 414.63 107.282 414.63 95.434V60.934H406.08V39.6353H414.63V7.08655H444.93V39.6353Z"
                                fill="currentColor"
                            />
                            <path
                                d="M462.63 39.6353H504.029V59.434H497.579L509.881 84.4815L522.779 59.434H516.78V39.6353H555.03V60.934H550.381L522.33 112.834H494.28L467.579 60.934H462.63V39.6353Z"
                                fill="currentColor"
                            />
                            <path
                                d="M575.79 21.9914H577.809C579.541 21.9914 581.274 21.7351 581.274 19.6601C581.274 17.7589 579.085 17.7589 577.449 17.7589H575.79V21.9914ZM570.811 31.0989V29.0026H572.663V17.7589H570.811V15.6626H578.268C579.445 15.6626 581.995 15.4914 583.63 17.4176C584.425 18.3151 584.4 19.2764 584.4 19.5126C584.4 21.3064 583.511 22.3326 581.683 23.0164V23.0601C583.655 23.4876 583.823 24.5776 583.823 25.5201V29.0026H585.505V31.0989H580.696V25.6889C580.696 24.2364 578.941 24.0864 577.666 24.0864H575.79V29.0026H577.713V31.0989H570.811Z"
                                fill="currentColor"
                            />
                            <path
                                d="M565.525 23.3793C565.537 30.3543 571.185 36.0018 578.157 36.0131C585.134 36.0018 590.778 30.3543 590.792 23.3793C590.778 16.4031 585.134 10.7593 578.157 10.7481C571.185 10.7593 565.537 16.4031 565.525 23.3793ZM561.905 23.3793C561.907 14.4018 569.182 7.12931 578.157 7.12556C587.137 7.12931 594.409 14.4018 594.412 23.3793C594.409 32.3581 587.137 39.6331 578.157 39.6331C569.182 39.6331 561.907 32.3581 561.905 23.3793Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </WorkTile>
            </ul>
        </section>
    );
};
