// UI
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { Header } from '../components/Header';

// Types
import type { FC, ReactNode } from 'react';

0;
interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => (
    <main className="mt-12">
        <Header>
            <a href="/">
                <button className="py-2 pr-2 group flex items-center text-sm text-stone-500 hover:text-stone-900 transition dark:text-neutral-400 dark:hover:text-neutral-300">
                    <ArrowLeftIcon />
                    <span className="ml-2 transition-all duration-500 ease-out group-hover:ml-3">
                        Home
                    </span>
                </button>
            </a>
        </Header>

        <div className="mt-8">{children}</div>
    </main>
);

export default Layout;
