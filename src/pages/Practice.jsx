import { useState } from 'react';
import { BookOpen, Info } from 'lucide-react';
import PracticeCard from '../components/practice/PracticeCard';
import PracticeFilters from '../components/practice/PracticeFilters';
import Callout from '../components/ui/Callout';
import { practiceItems } from '../data/practice';

export default function Practice() {
    const [selectedType, setSelectedType] = useState('all');
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');

    // Filter items
    const filteredItems = practiceItems.filter((item) => {
        const matchesType = selectedType === 'all' || item.type === selectedType;
        const matchesDifficulty =
            selectedDifficulty === 'all' || item.difficulty === selectedDifficulty;
        return matchesType && matchesDifficulty;
    });

    const scenarioItems = filteredItems.filter((i) => i.type === 'scenario');
    const quizItems = filteredItems.filter((i) => i.type === 'quiz');

    const handleReset = () => {
        setSelectedType('all');
        setSelectedDifficulty('all');
    };

    return (
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
            {/* Page header */}
            <div className="mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-text mb-4" tabIndex={-1}>
                    Practice
                </h1>
                <p className="text-text-muted text-lg mb-4 max-w-2xl">
                    Subukan ang iyong kaalaman sa emergency preparedness sa pamamagitan ng
                    interactive scenarios at quizzes.
                </p>
            </div>

            {/* Educational disclaimer */}
            <Callout variant="tip" title="Paalala" className="mb-8">
                Para sa pag-aaral lang — hindi opisyal na sertipiko.
            </Callout>

            {/* Filters */}
            <PracticeFilters
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                selectedDifficulty={selectedDifficulty}
                onDifficultyChange={setSelectedDifficulty}
            />

            {/* Empty state */}
            {filteredItems.length === 0 && (
                <div className="p-8 rounded-2xl bg-surface-2 border border-border text-center">
                    <Info size={32} className="text-text-muted mx-auto mb-3" aria-hidden="true" />
                    <p className="text-text-muted text-lg mb-4">
                        Walang practice items na tumutugma sa iyong mga filter.
                    </p>
                    <button
                        onClick={handleReset}
                        className="min-h-[44px] px-6 py-3 rounded-xl bg-learn-solid text-on-solid font-bold transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    >
                        I-reset ang Filters
                    </button>
                </div>
            )}

            {/* Scenarios section */}
            {scenarioItems.length > 0 && (
                <section className="mb-12" aria-labelledby="scenarios-heading">
                    <h2
                        id="scenarios-heading"
                        className="text-2xl font-bold text-text mb-6 flex items-center gap-2"
                    >
                        <BookOpen size={24} className="text-learn" aria-hidden="true" />
                        Mga Scenario
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {scenarioItems.map((item) => (
                            <PracticeCard key={item.slug} item={item} />
                        ))}
                    </div>
                </section>
            )}

            {/* Quizzes section */}
            {quizItems.length > 0 && (
                <section aria-labelledby="quizzes-heading">
                    <h2
                        id="quizzes-heading"
                        className="text-2xl font-bold text-text mb-6 flex items-center gap-2"
                    >
                        <BookOpen size={24} className="text-prepare" aria-hidden="true" />
                        Mga Quiz
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {quizItems.map((item) => (
                            <PracticeCard key={item.slug} item={item} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}