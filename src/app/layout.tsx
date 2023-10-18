// Utils
import { Providers } from '@/app/providers';

// UI
import './globals.css';
import { Inter } from 'next/font/google';
import { Footer } from '@/app/components/Footer';

// Types
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin-ext'] });

export const metadata = {
    title: 'Christian Korndörfer',
    description: 'Senior Software Engineer',
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
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <svg
                    className="pointer-events-none fixed inset-0 isolate z-50 opacity-30 mix-blend-soft-light"
                    width="100%"
                    height="100%"
                >
                    <filter id="pedroduarteisalegend">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.80"
                            numOctaves="4"
                            stitchTiles="stitch"
                        ></feTurbulence>
                    </filter>
                    <rect width="100%" height="100%" filter="url(#pedroduarteisalegend)"></rect>
                </svg>
                <Providers>
                    <main className="mx-auto max-w-screen-sm px-6 pb-32 font-sans text-stone-900 dark:text-neutral-300 sm:px-0">
                        {children}

                        <Footer />
                    </main>
                </Providers>
            </body>
        </html>
    );
}
