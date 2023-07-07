// Utils
import { Providers } from '@/app/providers';

// UI
import './globals.css';
import { Inter } from 'next/font/google';
import { CommandButton } from '@/app/components/CommandButton';

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
                    <main className="mx-auto max-w-screen-sm font-sans text-stone-900 dark:text-stone-300">
                        <header className="mt-12 w-full">
                            <div className="flex w-full items-center justify-between">
                                <div className="flex-col">
                                    <h1 className="font-semibold">Christian Korndörfer</h1>
                                    <h2 className="text-xs text-stone-500">
                                        Senior Software Engineer
                                    </h2>
                                </div>

                                <CommandButton />
                            </div>
                        </header>

                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}
