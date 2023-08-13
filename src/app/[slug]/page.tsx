import { notFound } from 'next/navigation';
import { ALLOWED_PAGES } from '../constants';

const Perspective = ({ params }: { params: { slug: string } }) => {
    if (!ALLOWED_PAGES.includes(params.slug)) {
        notFound()
    }

    return <h1>{params.slug}</h1>
}

export default Perspective;
