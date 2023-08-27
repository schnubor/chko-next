// Utils
import { Providers } from '@/app/providers';

// UI
import './globals.css';
import { Inter } from 'next/font/google';
import { Footer } from '@/app/components/Footer';

// Types
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Christian Korndörfer',
    description: 'Senior Software Engineer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
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
