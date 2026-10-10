import { Link } from 'react-router';
import GuideCard from '../learn/GuideCard';
import { verifiedFeaturedGuides } from '../../data/guides';

export default function ImportantGuides() {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
            <div className="flex items-center justify-between mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-text">
                    Dapat Alamin ng Lahat
                </h2>
                <Link
                    to="/learn"
                    className="text-learn font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
                    View all guides →
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {verifiedFeaturedGuides.map((guide) => (
                    <GuideCard key={guide.slug} guide={guide} />
                ))}
            </div>
        </section>
    );
}
