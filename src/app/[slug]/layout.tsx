// UI
import { ArrowLeftIcon } from "@radix-ui/react-icons";

// Types
import type { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
    <main className="mt-12">
        <a href="/">
            <button className="flex items-center text-sm group dark:text-neutral-400 dark:hover:text-neutral-300">
                <ArrowLeftIcon />
                <span className="ml-2 group-hover:ml-3 transition-all ease-out duration-500">Back</span>
            </button>
        </a>

        <div className="mt-8">
            {children}
        </div>
    </main>
);

export default Layout;
