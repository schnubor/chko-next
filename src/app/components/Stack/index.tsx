import { FC } from 'react';

interface Props {}

export const Stack: FC<Props> = ({}) => {
    return (
        <section className="mt-24">
            <h2 className="font-semibold">Stack & Tools</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"></div>
        </section>
    );
};
