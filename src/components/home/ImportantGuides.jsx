import { Link } from 'react-router';
import * as Icons from 'lucide-react';
import { WifiOff } from 'lucide-react';
import Badge from '../ui/Badge';
import { featuredGuides } from '../../data/guides';

const getSeverityColor = (severity) => {
    switch (severity) {
        case 'critical':
            return 'critical';
        case 'high':
            return 'important';
        default:
            return 'general';
    }
};

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
                {featuredGuides.map((guide) => {
                    const Icon = Icons[guide.icon];
                    return (
                        <Link
                            key={guide.slug}
                            to={`/learn/${guide.slug}`}
                            className="flex flex-col p-5 rounded-2xl bg-surface border border-border text-text transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="w-10 h-10 min-w-[40px] flex items-center justify-center rounded-lg bg-learn-tint text-learn">
                                    <Icon size={20} aria-hidden="true" />
                                </div>
                                {guide.offlineReady && (
                                    <Badge variant="offline" icon={WifiOff}>
                                        Offline
                                    </Badge>
                                )}
                            </div>
                            <h3 className="font-semibold text-text text-base md:text-lg leading-tight mb-2">
                                {guide.title}
                            </h3>
                            <p className="text-text-muted text-sm leading-relaxed mb-3 line-clamp-2">
                                {guide.summary}
                            </p>
                            <div className="flex items-center gap-2 mt-auto">
                                <Badge variant={getSeverityColor(guide.severity)}>
                                    {guide.severity}
                                </Badge>
                                <span className="text-text-muted text-xs">
                                    {guide.readTime}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
