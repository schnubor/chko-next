import { CommandButton } from '../CommandMenu/CommandButton';

// Types
import type { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const Header: FC<Props> = ({ children }) => {
    return (
        <header className="mt-20 w-full">
            <div className="flex h-16 w-full items-center justify-between">
                {children}

                <CommandButton />
            </div>
        </header>
    );
};
