'use client';

// UI
import { ClockIcon } from '@radix-ui/react-icons';

// Hooks
import { useEffect, useState } from 'react';

export const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <ClockIcon className="mr-2 inline" />
            {time.toLocaleTimeString()}
        </>
    );
};
