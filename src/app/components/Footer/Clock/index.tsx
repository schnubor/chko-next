'use client';

// UI
import { ClockIcon } from '@radix-ui/react-icons';

// Hooks
import { useEffect, useState } from 'react';

export const Clock = () => {
    const [time, setTime] = useState(new Date());
    const [tick, setTick] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
            setTick(true);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (tick) {
            setTimeout(() => setTick(false), 1000);
        }
    }, [tick]);

    return (
        <>
            <ClockIcon className="mr-2 inline" />
            <span suppressHydrationWarning>
                {time.getHours()}
                <span className={tick ? 'opacity-100' : 'opacity-0'}>:</span>
                {(time.getMinutes() < 10 ? '0' : '') + time.getMinutes()}
            </span>
        </>
    );
};
