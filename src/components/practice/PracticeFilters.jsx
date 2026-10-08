import { Layers, BookOpen, Dumbbell } from 'lucide-react';

const typeFilters = [
    { id: 'all', label: 'Lahat', icon: Layers },
    { id: 'scenario', label: 'Scenario', icon: Dumbbell },
    { id: 'quiz', label: 'Quiz', icon: BookOpen },
];

const difficultyFilters = [
    { id: 'all', label: 'All Levels' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
];

export default function PracticeFilters({
    selectedType,
    onTypeChange,
    selectedDifficulty,
    onDifficultyChange,
}) {
    return (
        <div className="flex flex-col gap-4 mb-8" role="group" aria-label="Practice filters">
            {/* Type Filter */}
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Practice type">
                {typeFilters.map((filter) => {
                    const Icon = filter.icon;
                    const isActive = selectedType === filter.id;
                    return (
                        <button
                            key={filter.id}
                            onClick={() => onTypeChange(filter.id)}
                            className={`inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl font-medium text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
                                isActive
                                    ? 'bg-learn-solid text-on-solid shadow-sm'
                                    : 'bg-surface-2 text-text border border-border [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface'
                            }`}
                            aria-pressed={isActive}
                            role="radio"
                            aria-checked={isActive}
                        >
                            <Icon size={16} aria-hidden="true" />
                            <span>{filter.label}</span>
                            {isActive && (
                                <span className="sr-only">(aktibong filter)</span>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Difficulty Filter */}
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Difficulty level">
                <span className="text-text-muted text-sm py-2 mr-1">Difficulty:</span>
                {difficultyFilters.map((filter) => {
                    const isActive = selectedDifficulty === filter.id;
                    return (
                        <button
                            key={filter.id}
                            onClick={() => onDifficultyChange(filter.id)}
                            className={`min-h-[44px] px-4 py-2 rounded-lg font-medium text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
                                isActive
                                    ? 'bg-learn text-on-solid'
                                    : 'bg-surface-2 text-text [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface'
                            }`}
                            aria-pressed={isActive}
                            role="radio"
                            aria-checked={isActive}
                        >
                            {filter.label}
                            {isActive && (
                                <span className="sr-only">(aktibong filter)</span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
