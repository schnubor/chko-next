export const Skeleton = () => {
    return (
        <div className="w-full animate-pulse">
            <div className="mt-0.5 flex items-center space-x-4">
                <div className="h-9 w-9 rounded-full bg-stone-300 dark:bg-neutral-800" />

                <div>
                    <div className="h-4 w-32 rounded-lg bg-stone-300 dark:bg-neutral-800" />
                    <div className="mt-2 h-2 w-48 rounded-lg bg-stone-300 dark:bg-neutral-800" />
                </div>
            </div>

            <div className="mt-4 flex flex-wrap">
                <div className="mr-2 mb-2 h-6 w-16 rounded-lg bg-stone-300 dark:bg-neutral-800" />
                <div className="mr-2 mb-2 h-6 w-16 rounded-lg bg-stone-300 dark:bg-neutral-800" />
                <div className="mr-2 mb-2 h-6 w-16 rounded-lg bg-stone-300 dark:bg-neutral-800" />
                <div className="mr-2 mb-2 h-6 w-16 rounded-lg bg-stone-300 dark:bg-neutral-800" />
            </div>

            <div className="mt-8 w-full space-y-2.5">
                <div className="h-4 w-full rounded-lg bg-stone-300 dark:bg-neutral-800" />
                <div className="h-4 w-full rounded-lg bg-stone-300 dark:bg-neutral-800" />
                <div className="h-4 w-full rounded-lg bg-stone-300 dark:bg-neutral-800" />
                <div className="h-4 w-48 rounded-lg bg-stone-300 dark:bg-neutral-800" />
            </div>

            <div className="mt-6 w-full space-y-2.5">
                <div className="h-4 w-full rounded-lg bg-stone-300 dark:bg-neutral-800" />
                <div className="h-4 w-full rounded-lg bg-stone-300 dark:bg-neutral-800" />
                <div className="h-4 w-full rounded-lg bg-stone-300 dark:bg-neutral-800" />
                <div className="h-4 w-48 rounded-lg bg-stone-300 dark:bg-neutral-800" />
            </div>

            <div className="mt-8 aspect-video w-full rounded-lg bg-stone-300 dark:bg-neutral-800" />
        </div>
    );
};
