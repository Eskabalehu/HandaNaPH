import { Link } from 'react-router';
import * as Icons from 'lucide-react';
import { WifiOff } from 'lucide-react';
import Badge from '../ui/Badge';

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

export default function GuideCard({ guide }) {
    const Icon = Icons[guide.icon];
    
    return (
        <Link
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
}
