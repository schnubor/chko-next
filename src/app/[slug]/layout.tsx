// UI
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { Header } from '../components/Header';
import Link from 'next/link';

// Types
import type { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => (
    <main className="mt-12">
        <Header>
            <Link href="/">
                <button className="group flex items-center py-2 pr-2 text-sm text-stone-500 transition hover:text-stone-900 dark:text-neutral-400 dark:hover:text-neutral-300">
                    <ArrowLeftIcon className="h-5 w-5 transition-all group-hover:text-orange-500" />
                    <span className="ml-2 font-semibold transition-all duration-500 ease-out group-hover:ml-3">
                        Home
                    </span>
                </button>
            </Link>
        </Header>

        <div className="mt-8">{children}</div>
    </main>
);

export default Layout;
