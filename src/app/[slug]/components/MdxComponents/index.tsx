// UI
import Image from 'next/image';

// Types
import type { Components } from 'react-markdown';

export const mdxComponents: Components = {
    p: ({ children }) => <p className="mt-4 leading-relaxed">{children}</p>,
    img: ({ alt, src }) => {
        return (
            <Image
                src={src || ''}
                alt={alt || ''}
                width={0}
                height={0}
                sizes="100vw"
                className="my-6 h-auto w-full rounded-xl drop-shadow-xl"
            />
        );
    },
};
