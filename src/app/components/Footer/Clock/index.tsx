'use client';

// UI
import { ClockIcon } from '@radix-ui/react-icons';

// Utils
import { formatInTimeZone } from 'date-fns-tz';

// Hooks
import { useEffect, useState } from 'react';

export const Clock = () => {
    const [time, setTime] = useState(Date.now());
    const [tick, setTick] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date.now());
            setTick(true);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (tick) {
            setTimeout(() => setTick(false), 1000);
        }
    }, [tick]);

    console.log('render');

    return (
        <>
            <ClockIcon className="mr-2 inline" />
            <span suppressHydrationWarning>
                {formatInTimeZone(time, 'Europe/Berlin', 'HH')}
                <span className={tick ? 'opacity-100' : 'opacity-0'}>:</span>
                {formatInTimeZone(time, 'Europe/Berlin', 'mm')}
            </span>
        </>
    );
};
