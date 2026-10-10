import { useState } from 'react';
import { Link, useParams } from 'react-router';
import * as Icons from 'lucide-react';
import { WifiOff, Check, X, ChevronLeft, ChevronRight, BookOpen, AlertTriangle, ExternalLink } from 'lucide-react';
import Badge from '../ui/Badge';
import GuideTabs from './GuideTabs';
import GuideSteps from './GuideSteps';
import { guides, getGuideBySlug } from '../../data/guides';

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

export default function GuideDetail() {
    const { slug } = useParams();
    const guide = getGuideBySlug(slug);
    const [activeTab, setActiveTab] = useState('during'); // Default to most relevant

    // Handle invalid slug
    if (!guide) {
        return (
            <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 py-12">
                <div className="p-8 rounded-2xl bg-surface border border-border text-center">
                    <AlertTriangle size={48} className="text-emergency mx-auto mb-4" aria-hidden="true" />
                    <h1 className="text-2xl md:text-3xl font-bold text-text mb-4">
                        Guide Not Found
                    </h1>
                    <p className="text-text-muted mb-6">
                        The guide you're looking for doesn't exist or has been removed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            to="/learn"
                            className="min-h-[48px] px-6 py-3 rounded-xl bg-learn-solid text-on-solid font-bold transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            Back to Learn
                        </Link>
                        <Link
                            to="/emergency"
                            className="min-h-[48px] px-6 py-3 rounded-xl bg-emergency-solid text-on-solid font-bold transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-emergency-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            Emergency
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Safety First: Block direct navigation to unverified medical content
    if (guide.lastReviewed === 'Unverified') {
        return (
            <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 py-12">
                <div className="p-8 rounded-2xl bg-surface border border-border text-center">
                    <AlertTriangle size={48} className="text-emergency mx-auto mb-4" aria-hidden="true" />
                    <h1 className="text-2xl md:text-3xl font-bold text-text mb-4">
                        Guide Not Found
                    </h1>
                    <p className="text-text-muted mb-6">
                        The guide you're looking for doesn't exist or has been removed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            to="/learn"
                            className="min-h-[48px] px-6 py-3 rounded-xl bg-learn-solid text-on-solid font-bold transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            Back to Learn
                        </Link>
                        <Link
                            to="/emergency"
                            className="min-h-[48px] px-6 py-3 rounded-xl bg-emergency-solid text-on-solid font-bold transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-emergency-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            Emergency
                        </Link>
                    </div>
                </div>
            </div>
        );
    }


    // Find previous and next guides
    const currentIndex = guides.findIndex(g => g.slug === slug);
    const previousGuide = currentIndex > 0 ? guides[currentIndex - 1] : null;
    const nextGuide = currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null;

    // Set default tab based on available content
    if (activeTab === 'during' && (!guide.sections.during || guide.sections.during.length === 0)) {
        if (guide.sections.before && guide.sections.before.length > 0) {
            setActiveTab('before');
        } else if (guide.sections.after && guide.sections.after.length > 0) {
            setActiveTab('after');
        }
    }

    const Icon = Icons[guide.icon];

    return (
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
                <Link
                    to="/learn"
                    className="text-text-muted hover:text-text transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
                    ← Back to Learn
                </Link>
            </nav>

            {/* Header */}
            <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 min-w-[64px] flex items-center justify-center rounded-2xl bg-learn-tint text-learn">
                        <Icon size={32} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">
                            {guide.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-3">
                            <Badge variant={getSeverityColor(guide.severity)}>
                                {guide.severity}
                            </Badge>
                            {guide.offlineReady && (
                                <Badge variant="offline" icon={WifiOff}>
                                    Offline
                                </Badge>
                            )}
                            <span className="text-text-muted text-sm">
                                {guide.readTime}
                            </span>
                        </div>
                    </div>
                </div>
                <p className="text-text text-lg leading-relaxed">
                    {guide.summary}
                </p>
            </div>

            {/* Tabs */}
            <GuideTabs
                activeTab={activeTab}
                onTabChange={setActiveTab}
                sections={guide.sections}
            />

            {/* Steps */}
            <GuideSteps
                steps={guide.sections[activeTab]}
                activeTab={activeTab}
            />

            {/* Do / Don't */}
            {(guide.do.length > 0 || guide.dont.length > 0) && (
                <div className="mt-8 grid md:grid-cols-2 gap-4">
                    {guide.do.length > 0 && (
                        <div className="p-5 rounded-2xl bg-success-tint border border-success/20">
                            <div className="flex items-center gap-2 mb-4">
                                <Check className="text-success" aria-hidden="true" />
                                <h3 className="font-semibold text-success">Do</h3>
                            </div>
                            <ul className="space-y-2">
                                {guide.do.map((item, index) => (
                                    <li key={index} className="text-text text-sm flex items-start gap-2">
                                        <span className="text-success mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {guide.dont.length > 0 && (
                        <div className="p-5 rounded-2xl bg-emergency-tint border border-emergency/20">
                            <div className="flex items-center gap-2 mb-4">
                                <X className="text-emergency" aria-hidden="true" />
                                <h3 className="font-semibold text-emergency">Don't</h3>
                            </div>
                            <ul className="space-y-2">
                                {guide.dont.map((item, index) => (
                                    <li key={index} className="text-text text-sm flex items-start gap-2">
                                        <span className="text-emergency mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {/* Sources */}
            {guide.sources && guide.sources.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-xl font-bold text-text mb-4">Sources</h3>
                    <div className="space-y-2">
                        {guide.sources.map((source, index) => (
                            <a
                                key={index}
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-4 rounded-xl bg-surface-2 border border-border text-text hover:bg-surface transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                            >
                                <div className="flex items-center gap-2">
                                    <ExternalLink size={16} aria-hidden="true" />
                                    <span className="font-medium">{source.name}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Meta */}
            <div className="mt-8 p-4 rounded-xl bg-surface-2 border border-border">
                <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                    <span>Last reviewed: {guide.lastReviewed}</span>
                    <span>•</span>
                    <span>Category: {guide.category}</span>
                </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between gap-4">
                {previousGuide ? (
                    <Link
                        to={`/learn/${previousGuide.slug}`}
                        className="flex items-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-surface border border-border text-text font-medium transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    >
                        <ChevronLeft aria-hidden="true" />
                        <span>Previous: {previousGuide.title}</span>
                    </Link>
                ) : (
                    <div />
                )}
                {nextGuide ? (
                    <Link
                        to={`/learn/${nextGuide.slug}`}
                        className="flex items-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-surface border border-border text-text font-medium transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    >
                        <span>Next: {nextGuide.title}</span>
                        <ChevronRight aria-hidden="true" />
                    </Link>
                ) : (
                    <div />
                )}
            </div>

            {/* Test Yourself CTA */}
            <div className="mt-8 p-6 rounded-2xl bg-learn-tint border border-learn/20 text-center">
                <BookOpen size={32} className="text-learn mx-auto mb-3" aria-hidden="true" />
                <h3 className="text-xl font-bold text-learn mb-2">Test Yourself</h3>
                <p className="text-text-muted mb-4">
                    Practice what you've learned with interactive scenarios.
                </p>
                <Link
                    to="/practice"
                    className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-learn-solid text-on-solid font-bold transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
                    Start Practice
                </Link>
            </div>
        </div>
    );
}
