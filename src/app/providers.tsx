'use client';

import { ThemeProvider } from 'next-themes';

// Types
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
