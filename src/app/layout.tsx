import clsx from 'clsx';
import { GeistSans } from 'geist/font/sans';

import { Footer } from '@/app/components/Footer';
import { Providers } from '@/app/providers';

import './globals.css';

import { Grainient } from './components/Grainient';

import type { ReactNode } from 'react';

export const metadata = {
    title: 'Home | chko.org',
    description:
        'Personal website of Christian Korndörfer – Senior Software Engineer based in Berlin',
    openGraph: {
        title: 'Christian Korndörfer',
        description: 'Senior Software Engineer',
        url: 'https://chko.org',
        siteName: 'chko.org',
        images: [
            {
                url: 'https://chko.org/ogimage.jpg',
                width: 1200,
                height: 600,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en-US" suppressHydrationWarning>
            <body
                className={clsx(
                    GeistSans.className,
                    'selection:bg-orange-500/90 selection:text-white',
                )}
            >
                <Providers>
                    <Grainient className="fixed top-0 left-0 h-dvh w-dvw" />
                    <main className="relative mx-auto max-w-(--breakpoint-sm) px-6 pb-32 text-stone-900 sm:px-0 dark:text-neutral-300">
                        {children}

                        <Footer />
                    </main>
                </Providers>
            </body>
        </html>
    );
}
