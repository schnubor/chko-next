import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

// allows conditionally joining one or more tailwind classes
export const cn = (...args: ClassValue[]) => {
    return twMerge(clsx(args));
};
