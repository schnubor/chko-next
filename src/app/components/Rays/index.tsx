export function Rays() {
    return (
        <div className="fixed inset-0 -z-10 hidden w-full opacity-50 dark:block">
            <div className="relative mx-auto max-w-screen-xl">
                <div className="h-6 w-96 rotate-[60deg] rounded-[50%] bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-lg" />
                <div className="left-0 h-48 max-w-screen-sm rotate-[60deg] rounded-[50%] bg-gradient-to-r from-rose-800 to-orange-800 opacity-50 blur-2xl" />
                <div className="absolute -bottom-32 h-12 w-full rotate-[60deg] bg-neutral-900 opacity-50 blur-md" />
            </div>
        </div>
    );
}
