'use client';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useEffect, useRef, useCallback, type ReactNode } from 'react';
import styled from 'styled-components';

import { cn } from '@/utils/cn';

interface Props {
    children: ReactNode;
    title: string;
    description: string;
    className?: string;
    link: string;
}

const CONFIG = {
    proximity: 100,
    opacity: 0,
};

const Glow = styled.div`
    pointer-events: none;
    position: absolute;
    inset: 0;
    filter: blur(calc(10 * 1px));
    display: none;

    @media (prefers-color-scheme: dark) {
        display: block;
    }

    &::before,
    &::after {
        box-sizing: border-box;
        content: '';
        background: conic-gradient(
            from 180deg at 50% 70%,
            hsla(0, 0%, 98%, 1) 0deg,
            #eec32d 72.0000010728836deg,
            #ec4b4b 144.0000021457672deg,
            #709ab9 216.00000858306885deg,
            #4dffbf 288.0000042915344deg,
            hsla(0, 0%, 98%, 1) 1turn
        );
        background-attachment: fixed;
        position: absolute;
        inset: -5px;
        border: 10px solid transparent;
        border-radius: 12px;
        mask: linear-gradient(#0000, #0000),
            conic-gradient(
                from calc((var(--angle, 0) - (20 * 0.5)) * 1deg),
                #000 0deg,
                #fff,
                #0000 calc(20 * 1deg)
            );
        mask-composite: intersect;
        mask-clip: padding-box, border-box;
        opacity: var(--opacity, 0);
        transition: opacity 1s;
    }
`;

const Container = styled.li`
    will-change: auto;

    &::before {
        position: absolute;
        inset: 0;
        border: 1px solid transparent;
        content: '';
        border-radius: 12px;
        pointer-events: none;
        background: hsl(280 10% 50% / 1);
        background-attachment: fixed;
        mask: linear-gradient(#0000, #0000),
            conic-gradient(
                from calc(((var(--angle, 0) + (20 * 0.25)) - (20 * 1.5)) * 1deg),
                hsl(0 0% 100% / 0.15) 0deg,
                white,
                hsl(0 0% 100% / 0.15) calc(20 * 2.5deg)
            );
        mask-clip: padding-box, border-box;
        mask-composite: intersect;
        opacity: var(--opacity, 0);
        transition: opacity 1s;
    }

    &::after {
        content: '';
        pointer-events: none;
        position: absolute;
        background: conic-gradient(
            from 180deg at 50% 70%,
            hsla(0, 0%, 98%, 1) 0deg,
            #eec32d 72.0000010728836deg,
            #ec4b4b 144.0000021457672deg,
            #709ab9 216.00000858306885deg,
            #4dffbf 288.0000042915344deg,
            hsla(0, 0%, 98%, 1) 1turn
        );
        background-attachment: fixed;
        border-radius: 12px;
        opacity: var(--opacity, 0);
        transition: opacity 1s;
        inset: 0;
        border: 1px solid transparent;
        mask: linear-gradient(#0000, #0000),
            conic-gradient(
                from calc(((var(--angle, 0) + (20 * 0.25)) - (20 * 0.5)) * 1deg),
                #0000 0deg,
                #fff,
                #0000 calc(20 * 0.5deg)
            );
        filter: brightness(1.5);
        mask-clip: padding-box, border-box;
        mask-composite: intersect;
    }
`;

export const WorkTile = ({ children, title, description, className = '', link }: Props) => {
    const ref = useRef<HTMLLIElement>(null);
    const rafIdRef = useRef<number>(null);

    const handleMouseMove = useCallback((event: globalThis.PointerEvent) => {
        if (!ref.current) {
            return;
        }

        // Cancel any pending animation frame
        if (rafIdRef.current) {
            cancelAnimationFrame(rafIdRef.current);
        }

        // Use requestAnimationFrame to throttle updates to screen refresh rate
        rafIdRef.current = requestAnimationFrame(() => {
            if (!ref.current) {
                return;
            }

            const card = ref.current;
            const rect = card.getBoundingClientRect();

            // Get distance between pointer and outerbounds of card
            const isInProximity =
                event.clientX > rect.left - CONFIG.proximity &&
                event.clientX < rect.left + rect.width + CONFIG.proximity &&
                event.clientY > rect.top - CONFIG.proximity &&
                event.clientY < rect.top + rect.height + CONFIG.proximity;

            // Update CSS custom property directly (no re-render!)
            card.style.setProperty('--opacity', isInProximity ? '1' : String(CONFIG.opacity));

            const cardCenter = [rect.left + rect.width * 0.5, rect.top + rect.height * 0.5];

            let angle =
                (Math.atan2(event.clientY - cardCenter[1], event.clientX - cardCenter[0]) * 180) /
                Math.PI;

            angle = angle < 0 ? angle + 360 : angle;

            // Update CSS custom property directly (no re-render!)
            card.style.setProperty('--angle', String(angle + 90));
        });
    }, []);

    useEffect(() => {
        document.body.addEventListener('pointermove', handleMouseMove);

        return () => {
            document.body.removeEventListener('pointermove', handleMouseMove);

            // Clean up any pending animation frame
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
        };
    }, [handleMouseMove]);

    return (
        <Container
            ref={ref}
            className={cn(
                'group hover:shadow-tile relative rounded-xl bg-stone-200/40 p-4 transition-all ease-out hover:bg-stone-200/50 dark:bg-neutral-800/40 dark:hover:bg-neutral-800/50',
                className,
            )}
        >
            <Glow />
            <Link href={link}>
                {children}
                <div className="mt-6">
                    <h3 className="font-semibold">{title}</h3>
                    <span className="text-xs text-stone-600 dark:text-neutral-400">
                        {description}
                    </span>
                </div>

                {link && (
                    <ArrowRightIcon className="absolute top-4 right-4 size-5 origin-left scale-0 text-orange-500 transition duration-200 ease-out group-hover:scale-100" />
                )}
            </Link>
        </Container>
    );
};
