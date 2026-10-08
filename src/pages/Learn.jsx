import { useState } from 'react';
import { Search } from 'lucide-react';
import GuideCard from '../components/learn/GuideCard';
import { guides } from '../data/guides';

const categories = [
    { id: 'all', label: 'All' },
    { id: 'first-aid', label: 'First Aid' },
    { id: 'disasters', label: 'Disasters' },
    { id: 'prepare', label: 'Prepare' }
];

const severities = [
    { id: 'all', label: 'All Severity' },
    { id: 'critical', label: 'Critical' },
    { id: 'high', label: 'High' },
    { id: 'important', label: 'Important' }
];

export default function Learn() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSeverity, setSelectedSeverity] = useState('all');

    // Filter guides based on search, category, and severity
    const filteredGuides = guides.filter(guide => {
        // Safety First: Hide unverified medical content from the public UI
        if (guide.lastReviewed === 'Unverified') return false;

        // Apply search
        let matchesSearch = true;
        if (searchQuery.trim()) {
            const lowerQuery = searchQuery.toLowerCase();
            matchesSearch = 
                guide.title.toLowerCase().includes(lowerQuery) ||
                guide.summary.toLowerCase().includes(lowerQuery) ||
                guide.category.toLowerCase().includes(lowerQuery);
        }

        // Apply category filter
        let matchesCategory = true;
        if (selectedCategory !== 'all') {
            matchesCategory = guide.category === selectedCategory;
        }

        // Apply severity filter
        let matchesSeverity = true;
        if (selectedSeverity !== 'all') {
            matchesSeverity = guide.severity === selectedSeverity;
        }

        return matchesSearch && matchesCategory && matchesSeverity;
    });

    const handleReset = () => {
        setSearchQuery('');
        setSelectedCategory('all');
        setSelectedSeverity('all');
    };

    return (
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-4" tabIndex={-1}>
                Learn
            </h1>
            <p className="text-text-muted text-lg mb-8 max-w-2xl">
                Explore emergency and disaster preparedness guides. Learn essential skills to keep yourself and your family safe.
            </p>

            {/* Search */}
            <div className="mb-6">
                <div className="relative">
                    <Search 
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" 
                        size={20}
                        aria-hidden="true"
                    />
                    <input
                        type="text"
                        placeholder="Search guides..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-surface border border-border text-text placeholder:text-text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        aria-label="Search guides"
                    />
                </div>
            </div>

            {/* Filters */}
            <div className="mb-8 flex flex-wrap gap-3">
                <div className="flex flex-wrap gap-2">
                    <span className="text-text-muted text-sm py-2">Category:</span>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
                                selectedCategory === category.id
                                    ? 'bg-learn text-on-solid'
                                    : 'bg-surface-2 text-text hover:bg-surface'
                            }`}
                            aria-pressed={selectedCategory === category.id}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2">
                    <span className="text-text-muted text-sm py-2">Severity:</span>
                    {severities.map((severity) => (
                        <button
                            key={severity.id}
                            onClick={() => setSelectedSeverity(severity.id)}
                            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
                                selectedSeverity === severity.id
                                    ? 'bg-learn text-on-solid'
                                    : 'bg-surface-2 text-text hover:bg-surface'
                            }`}
                            aria-pressed={selectedSeverity === severity.id}
                        >
                            {severity.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Featured Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-text mb-6">
                    Dapat Alamin ng Lahat
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {guides.slice(0, 4).map((guide) => (
                        <GuideCard key={guide.slug} guide={guide} />
                    ))}
                </div>
            </div>

            {/* All Guides */}
            <div>
                <h2 className="text-2xl font-bold text-text mb-6">
                    All Guides
                </h2>
                
                {filteredGuides.length === 0 ? (
                    <div className="p-8 rounded-2xl bg-surface-2 border border-border text-center">
                        <p className="text-text-muted text-lg mb-4">
                            No guides match your search or filters.
                        </p>
                        <button
                            onClick={handleReset}
                            className="min-h-[44px] px-6 py-3 rounded-xl bg-learn-solid text-on-solid font-bold transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {filteredGuides.map((guide) => (
                            <GuideCard key={guide.slug} guide={guide} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
