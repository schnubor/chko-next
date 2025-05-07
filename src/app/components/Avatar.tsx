import Image from 'next/image';

export const Avatar = () => {
    return (
        <Image
            src="/avatar2.jpg"
            alt=""
            width={64}
            height={64}
            className="rounded-full border-2 border-stone-400/50 dark:border-neutral-700/50"
            quality={100}
        />
    );
};
