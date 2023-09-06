'use client';

// UI
import { ClockIcon } from '@radix-ui/react-icons';

// Utils
import { formatInTimeZone } from 'date-fns-tz';

// Hooks
import { useEffect, useState } from 'react';

// Types
import type { FC } from 'react';

export interface Props {
    time: number;
}

export const Clock: FC<Props> = ({ time: initial }) => {
    const [time, setTime] = useState(new Date(initial));
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
            <span className="tabular-nums">
                {formatInTimeZone(time, 'Europe/Berlin', 'HH')}
                <span className={tick ? 'opacity-100' : 'opacity-0'}>:</span>
                {formatInTimeZone(time, 'Europe/Berlin', 'mm')}
            </span>
        </>
    );
};
