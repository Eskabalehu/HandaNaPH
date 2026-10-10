import { useState, useCallback } from 'react';
import { Link, useParams } from 'react-router';
import * as Icons from 'lucide-react';
import { ArrowLeft, AlertTriangle, Home, ShieldAlert } from 'lucide-react';
import { getPracticeItemBySlug } from '../../data/practice';
import PracticeProgress from './PracticeProgress';
import PracticeQuestion from './PracticeQuestion';
import PracticeFeedback from './PracticeFeedback';
import PracticeResults from './PracticeResults';
import Badge from '../ui/Badge';
import Callout from '../ui/Callout';

export default function ScenarioPlayer() {
    const { slug } = useParams();
    const practiceItem = getPracticeItemBySlug(slug);

    // All hooks MUST be called before any early return
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isLocked, setIsLocked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const questions = practiceItem?.questions || [];
    const currentQuestion = questions[currentIndex] || null;
    const totalQuestions = questions.length;
    const isLastQuestion = currentIndex === totalQuestions - 1;

    const handleSelectAnswer = useCallback(
        (choiceId) => {
            if (isLocked || !currentQuestion) return;
            setSelectedAnswer(choiceId);

            const choice = currentQuestion.choices.find((c) => c.id === choiceId);
            const correct = choice?.correct || false;
            setIsCorrect(correct);
            setIsLocked(true);

            setAnswers((prev) => [
                ...prev,
                {
                    questionId: currentQuestion.id,
                    choiceId,
                    correct,
                },
            ]);
        },
        [isLocked, currentQuestion],
    );

    const handleNext = useCallback(() => {
        if (isLastQuestion) {
            setShowResults(true);
        } else {
            setCurrentIndex((i) => i + 1);
            setSelectedAnswer(null);
            setIsLocked(false);
            setIsCorrect(false);
        }
    }, [isLastQuestion]);

    const handleRetry = useCallback(() => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setIsLocked(false);
        setIsCorrect(false);
        setAnswers([]);
        setShowResults(false);
    }, []);

    const handleRetryQuestion = useCallback(() => {
        if (!currentQuestion) return;
        setAnswers((prev) => prev.filter((a) => a.questionId !== currentQuestion.id));
        setSelectedAnswer(null);
        setIsLocked(false);
        setIsCorrect(false);
    }, [currentQuestion]);

    // Handle invalid slug — placed AFTER all hooks
    if (!practiceItem) {
        return (
            <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 py-12">
                <div className="p-8 rounded-2xl bg-surface border border-border text-center">
                    <AlertTriangle
                        size={48}
                        className="text-emergency mx-auto mb-4"
                        aria-hidden="true"
                    />
                    <h1 className="text-2xl md:text-3xl font-bold text-text mb-4">
                        Hindi Nahanap
                    </h1>
                    <p className="text-text-muted mb-6">
                        Ang hinahanap mong practice scenario o quiz ay hindi available o tinanggal na.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            to="/practice"
                            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-learn-solid text-on-solid font-bold transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            <ArrowLeft size={18} aria-hidden="true" />
                            Bumalik sa Practice
                        </Link>
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-surface-2 text-text border border-border font-bold transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            <Home size={18} aria-hidden="true" />
                            Home
                        </Link>
                        <Link
                            to="/emergency"
                            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-emergency-solid text-on-solid font-bold transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-emergency-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            <ShieldAlert size={18} aria-hidden="true" />
                            Emergency
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Safety First: Block direct navigation to unverified medical content
    if (practiceItem.status === 'unverified') {
        return (
            <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 py-12">
                <div className="p-8 rounded-2xl bg-surface border border-border text-center">
                    <AlertTriangle
                        size={48}
                        className="text-emergency mx-auto mb-4"
                        aria-hidden="true"
                    />
                    <h1 className="text-2xl md:text-3xl font-bold text-text mb-4">
                        Hindi Nahanap
                    </h1>
                    <p className="text-text-muted mb-6">
                        Ang hinahanap mong practice scenario o quiz ay hindi available o tinanggal na.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            to="/practice"
                            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-learn-solid text-on-solid font-bold transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            <ArrowLeft size={18} aria-hidden="true" />
                            Bumalik sa Practice
                        </Link>
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-surface-2 text-text border border-border font-bold transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            <Home size={18} aria-hidden="true" />
                            Home
                        </Link>
                        <Link
                            to="/emergency"
                            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-emergency-solid text-on-solid font-bold transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-emergency-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            <ShieldAlert size={18} aria-hidden="true" />
                            Emergency
                        </Link>
                    </div>
                </div>
            </div>
        );
    }


    const Icon = Icons[practiceItem.icon];

    // Results screen
    if (showResults) {
        return (
            <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
                <nav className="mb-6" aria-label="Breadcrumb">
                    <Link
                        to="/practice"
                        className="text-text-muted hover:text-text transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    >
                        ← Bumalik sa Practice
                    </Link>
                </nav>
                <h1 className="sr-only">Mga Resulta: {practiceItem.title}</h1>
                <PracticeResults
                    practiceItem={practiceItem}
                    answers={answers}
                    onRetry={handleRetry}
                />
            </div>
        );
    }

    return (
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
                <Link
                    to="/practice"
                    className="text-text-muted hover:text-text transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
                    ← Bumalik sa Practice
                </Link>
            </nav>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 min-w-[40px] flex items-center justify-center rounded-lg bg-learn-tint text-learn">
                    <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-text">
                        {practiceItem.title}
                    </h1>
                    <Badge variant="general" className="mt-1">
                        {practiceItem.type === 'scenario' ? 'Scenario' : 'Quiz'}
                    </Badge>
                </div>
            </div>

            {/* Progress */}
            <PracticeProgress current={currentIndex + 1} total={totalQuestions} />

            {/* Question */}
            {currentQuestion && (
                <PracticeQuestion
                    question={currentQuestion}
                    selectedAnswer={selectedAnswer}
                    isLocked={isLocked}
                    onSelectAnswer={handleSelectAnswer}
                />
            )}

            {/* Feedback */}
            {isLocked && (
                <PracticeFeedback
                    isCorrect={isCorrect}
                    explanation={currentQuestion?.explanation}
                    onNext={isCorrect ? handleNext : handleRetryQuestion}
                    isLastQuestion={isLastQuestion}
                />
            )}

            {/* Educational disclaimer */}
            <Callout variant="tip" title="Paalala" className="mt-8">
                Para sa pag-aaral lang — hindi opisyal na sertipiko.
            </Callout>
        </div>
    );
}
