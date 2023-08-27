// UI
import { Dock } from '@/app/components/Dock';
import { Work } from '@/app/components/Work';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

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

            <section className="mt-12 text-lg leading-relaxed">
                <p>
                    I design, build and ship web applications since 2008 and enjoy helping
                    enthusiastic people bringing their ideas to life. Less, but better.
                </p>

                <p className="mt-2">
                    Currently at{' '}
                    <a
                        className="animate-gradient-x bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text font-semibold text-transparent outline-none transition"
                        href="https://perspective.co"
                        target="_blank"
                        rel="noopener"
                    >
                        perspective.co
                    </a>
                </p>
            </section>

            <Work />

            <Dock />
        </>
    );
}
