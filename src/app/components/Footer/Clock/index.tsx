'use client';

import { ClockIcon } from '@radix-ui/react-icons';
import { formatInTimeZone } from 'date-fns-tz';
import { useEffect, useState } from 'react';

interface Props {
    time: number;
}

export const Clock = ({ time: initial }: Props) => {
    const [time, setTime] = useState(new Date(initial));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <ClockIcon className="mr-2 inline" />
            <span className="tabular-nums">
                {formatInTimeZone(time, 'Europe/Berlin', 'HH')}
                <span>:</span>
                {formatInTimeZone(time, 'Europe/Berlin', 'mm')}
            </span>
        </>
    );
};
