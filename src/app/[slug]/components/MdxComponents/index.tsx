// UI
import Image from 'next/image';

// Types
import type { Components } from 'react-markdown';

export const mdxComponents: Components = {
    p: ({ children }) => <p className="mt-4 leading-relaxed">{children}</p>,
    img: ({ alt, src }) => (
        <div className="relative my-6 aspect-video w-full drop-shadow-xl">
            <Image src={src || ''} alt={alt || ''} fill objectFit="cover" className="rounded-xl" />
        </div>
    ),
};
