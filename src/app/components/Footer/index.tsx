import { Clock } from './Clock';
import { ArrowRightIcon, DrawingPinIcon } from '@radix-ui/react-icons';

export const Footer = () => {
    const now = new Date();

    return (
        <div className="mt-12 flex items-center text-xs text-stone-600 dark:text-neutral-400">
            <DrawingPinIcon className="mr-2 inline" /> Berlin{' '}
            <ArrowRightIcon className="mx-2 w-3 text-orange-500" /> <Clock time={now.getTime()} />
        </div>
    );
};
