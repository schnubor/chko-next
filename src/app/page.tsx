// UI
import { Dock } from '@/app/components/Dock';
import { Work } from '@/app/components/Work';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <Header>
                <div className="flex items-center space-x-4">
                    <Image
                        src="/avatar.jpg"
                        alt="Christian Korndörfer"
                        width={64}
                        height={64}
                        className="rounded-full border-2 border-stone-400/50 dark:border-neutral-700/50"
                        quality={100}
                    />
                    <div className="flex-col">
                        <h1 className="text-lg font-semibold">Christian Korndörfer</h1>
                        <h2 className="text-xs text-stone-500 dark:text-neutral-500">
                            Senior Software Engineer
                        </h2>
                    </div>
                </div>
            </Header>

            <section className="mt-12 text-lg leading-relaxed">
                <p>
                    I design, build and ship web applications since 2008 and enjoy helping
                    enthusiastic people bringing their ideas to life with less, but better.
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
