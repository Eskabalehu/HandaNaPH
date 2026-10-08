import { Link } from 'react-router';
import * as Icons from 'lucide-react';
import { Clock, HelpCircle, Dumbbell, BookOpen } from 'lucide-react';
import Badge from '../ui/Badge';

const getDifficultyVariant = (difficulty) => {
    switch (difficulty) {
        case 'beginner':
            return 'verified';
        case 'intermediate':
            return 'important';
        case 'advanced':
            return 'critical';
        default:
            return 'general';
    }
};

const getTypeInfo = (type) => {
    switch (type) {
        case 'scenario':
            return { label: 'Scenario', Icon: Dumbbell, className: 'text-learn' };
        case 'quiz':
            return { label: 'Quiz', Icon: BookOpen, className: 'text-prepare' };
        default:
            return { label: type, Icon: HelpCircle, className: 'text-text-muted' };
    }
};

export default function PracticeCard({ item }) {
    const Icon = Icons[item.icon];
    const typeInfo = getTypeInfo(item.type);
    const TypeIcon = typeInfo.Icon;
    const questionCount = item.questions?.length || 0;

    return (
        <Link
            to={`/practice/${item.slug}`}
            className="flex flex-col p-5 rounded-2xl bg-surface border border-border text-text transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            aria-label={`${item.title} — ${typeInfo.label}, ${item.difficulty}, ${item.estimatedTime}, ${questionCount} tanong`}
        >
            <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 min-w-[40px] flex items-center justify-center rounded-lg bg-learn-tint text-learn">
                    <Icon size={20} aria-hidden="true" />
                </div>
                <Badge variant={getDifficultyVariant(item.difficulty)}>
                    {item.difficulty}
                </Badge>
            </div>

            {/* Type indicator */}
            <div className="flex items-center gap-1.5 mb-2">
                <TypeIcon size={14} className={typeInfo.className} aria-hidden="true" />
                <span className={`text-xs font-medium uppercase tracking-wide ${typeInfo.className}`}>
                    {typeInfo.label}
                </span>
            </div>

            <h3 className="font-semibold text-text text-base md:text-lg leading-tight mb-2">
                {item.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-3 line-clamp-2">
                {item.description}
            </p>

            {/* Meta row */}
            <div className="flex items-center gap-4 mt-auto text-text-muted text-xs">
                <span className="inline-flex items-center gap-1">
                    <Clock size={14} aria-hidden="true" />
                    <span>{item.estimatedTime}</span>
                </span>
                <span className="inline-flex items-center gap-1">
                    <HelpCircle size={14} aria-hidden="true" />
                    <span>{questionCount} tanong</span>
                </span>
            </div>
        </Link>
    );
}
