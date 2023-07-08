// Utils
import { format } from 'date-fns';
import Image from 'next/image';

// UI
import { ClockIcon, DrawingPinIcon } from '@radix-ui/react-icons';

export default function Home() {
    return (
        <>
            <p className="mt-12 leading-relaxed">
                I design, build and ship web applications since 2008 and enjoy helping enthusiastic
                people bringing their ideas to life. Currently at{' '}
                <a
                    className="text-stone-500 outline-none transition hover:text-stone-900 dark:hover:text-stone-300"
                    href="https://perspective.co"
                    target="_blank"
                    rel="noopener"
                >
                    perspective
                </a>
                .
            </p>

            <div className="mt-2 flex items-center text-xs text-stone-500">
                <DrawingPinIcon className="mr-2 inline" /> Berlin ·{' '}
                <ClockIcon className="mx-2 inline" /> {format(new Date(), 'HH:mm')}
            </div>

            <div className="mt-24">
                <h2 className="font-semibold">Work</h2>
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="col-span-2 rounded-lg bg-stone-300 p-4 dark:bg-stone-800">
                        <Image src="/perspective.png" alt="Perspective" width={50} height={50} />
                        <div className="mt-6">
                            <h3 className="font-semibold">perspective.co</h3>
                            <span className="text-sm">2017 - today</span>
                        </div>
                    </div>
                    <div className="rounded-lg bg-stone-300 p-4 dark:bg-stone-800">
                        <Image src="/perspective.png" alt="Perspective" width={50} height={50} />
                        <div className="mt-6">
                            <h3 className="font-semibold">styla.com</h3>
                            <span className="text-sm">2014 - 2017</span>
                        </div>
                    </div>
                    <div className="rounded-lg bg-stone-300 p-4 dark:bg-stone-800">
                        <Image src="/perspective.png" alt="Perspective" width={50} height={50} />
                        <div className="mt-6">
                            <h3 className="font-semibold">tape.tv</h3>
                            <span className="text-sm">2012 - 2014</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
