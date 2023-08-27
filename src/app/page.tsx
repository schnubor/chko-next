// Utils
import { format } from 'date-fns';

// UI
import { ClockIcon, DrawingPinIcon } from '@radix-ui/react-icons';
import { Dock } from '@/app/components/Dock';
import { Work } from '@/app/components/Work';
import { Header } from './components/Header';

export default function Home() {
    return (
        <>
            <Header>
                <div className="flex-col">
                    <h1 className="font-semibold">Christian Korndörfer</h1>
                    <h2 className="text-xs text-stone-500 dark:text-neutral-500">
                        Senior Software Engineer
                    </h2>
                </div>
            </Header>

            <p className="mt-12 leading-relaxed">
                I design, build and ship web applications since 2008 and enjoy helping enthusiastic
                people bringing their ideas to life. Less, but better. Currently at{' '}
                <a
                    className="animate-gradient-x bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text font-semibold text-transparent outline-none transition"
                    href="https://perspective.co"
                    target="_blank"
                    rel="noopener"
                >
                    perspective.co
                </a>
            </p>

            <div className="mt-2 flex items-center text-xs text-stone-500 dark:text-neutral-500">
                <DrawingPinIcon className="mr-2 inline" /> Berlin ·{' '}
                <ClockIcon className="mx-2 inline" /> {format(new Date(), 'HH:mm')}
            </div>

            <Work />

            <Dock />
        </>
    );
}
