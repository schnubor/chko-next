'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

export const Avatar = () => {
    const isDark = useTheme().theme === 'dark';

    return (
        <Image
            src={isDark ? '/avatar3.jpg' : '/avatar2.jpg'}
            alt="Christian Korndörfer"
            width={64}
            height={64}
            className="rounded-full border-2 border-stone-400/50 dark:border-neutral-700/50"
            quality={100}
        />
    );
};
