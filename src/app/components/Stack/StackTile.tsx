// Types
import type { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const StackTile: FC<Props> = ({ children }) => {
    return <div className="flex h-10 items-center rounded-lg">{children}</div>;
};
