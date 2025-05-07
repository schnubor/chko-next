import { CommandButton } from '../CommandMenu/CommandButton';

import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const Header = ({ children }: Props) => {
    return (
        <header className="mt-20 w-full">
            <div className="flex h-16 w-full items-center justify-between">
                {children}

                <CommandButton />
            </div>
        </header>
    );
};
