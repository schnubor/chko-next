import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Header } from '../components/Header';

import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => (
    <section className="mt-12">
        <Header>
            <Link
                href="/"
                className="group flex items-center py-2 pr-2 text-sm text-stone-500 transition hover:text-stone-900 dark:text-neutral-400 dark:hover:text-neutral-300"
            >
                <ArrowLeftIcon className="size-5 transition-all group-hover:text-orange-500" />
                <span className="ml-2 font-semibold transition-all duration-500 ease-out group-hover:ml-3">
                    Home
                </span>
            </Link>
        </Header>

        <div className="mt-8">{children}</div>
    </section>
);

export default Layout;
