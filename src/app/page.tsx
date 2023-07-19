// Utils
import { format } from 'date-fns';

// UI
import { ClockIcon, DrawingPinIcon } from '@radix-ui/react-icons';
import { Butter } from '@/app/components/Butter';
import { Work } from '@/app/components/Work';

export default function Home() {
    return (
        <>
            <p className="mt-12 leading-relaxed">
                I design, build and ship web applications since 2008 and enjoy helping enthusiastic
                people bringing their ideas to life. Currently at{' '}
                <a
                    className="text-stone-500 outline-none transition hover:text-stone-900 dark:text-neutral-500 dark:hover:text-neutral-300"
                    href="https://perspective.co"
                    target="_blank"
                    rel="noopener"
                >
                    perspective
                </a>
                .
            </p>

            <div className="mt-2 flex items-center text-xs text-stone-500 dark:text-neutral-500">
                <DrawingPinIcon className="mr-2 inline" /> Berlin ·{' '}
                <ClockIcon className="mx-2 inline" /> {format(new Date(), 'HH:mm')}
            </div>

            <Work />

            <Butter />
        </>
    );
}
