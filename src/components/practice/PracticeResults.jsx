import { Link } from 'react-router';
import {
    Trophy,
    RefreshCcw,
    ArrowLeft,
    BookOpen,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    Info,
} from 'lucide-react';
import Button from '../ui/Button';
import Callout from '../ui/Callout';

export default function PracticeResults({
    practiceItem,
    answers,
    onRetry,
}) {
    const questions = practiceItem.questions;
    const total = questions.length;
    const correctCount = answers.filter((a) => a.correct).length;
    const percentage = Math.round((correctCount / total) * 100);
    const incorrectAnswers = answers.filter((a) => !a.correct);

    // Determine how well they did for the visual badge
    let resultIcon = Info;
    let resultMessage = 'Magpatuloy sa pag-aaral!';

    if (percentage === 100) {
        resultIcon = Trophy;
        resultMessage = 'Perpekto! Napakahusay!';
    } else if (percentage >= 70) {
        resultIcon = CheckCircle2;
        resultMessage = 'Magaling! Halos lahat tama!';
    } else if (percentage >= 40) {
        resultIcon = BookOpen;
        resultMessage = 'Magandang simula! Subukan muli.';
    }

    const ResultIcon = resultIcon;

    return (
        <div className="w-full max-w-[700px] mx-auto">
            {/* Result Header */}
            <div className="text-center mb-8">
                <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                        percentage >= 70
                            ? 'bg-success-tint text-success'
                            : percentage >= 40
                            ? 'bg-prepare-tint text-prepare'
                            : 'bg-learn-tint text-learn'
                    }`}
                >
                    <ResultIcon size={40} aria-hidden="true" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">
                    {resultMessage}
                </h2>
                <p className="text-text-muted text-lg">
                    {practiceItem.title}
                </p>
            </div>

            {/* Score Card */}
            <div className="p-6 rounded-2xl bg-surface border border-border text-center mb-6">
                <div className="text-5xl md:text-6xl font-bold text-text mb-2">
                    {correctCount}
                    <span className="text-text-muted text-2xl md:text-3xl font-normal">
                        {' '}/ {total}
                    </span>
                </div>
                <p className="text-text-muted text-sm">
                    {percentage}% tamang sagot
                </p>

                {/* Visual score dots */}
                <div
                    className="flex flex-wrap justify-center gap-2 mt-4"
                    role="list"
                    aria-label="Mga sagot"
                >
                    {answers.map((answer, index) => (
                        <div
                            key={index}
                            role="listitem"
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                                answer.correct
                                    ? 'bg-success text-on-solid'
                                    : 'bg-emergency-solid text-on-solid'
                            }`}
                            aria-label={`Tanong ${index + 1}: ${answer.correct ? 'Tama' : 'Mali'}`}
                        >
                            {answer.correct ? (
                                <CheckCircle2 size={16} aria-hidden="true" />
                            ) : (
                                <XCircle size={16} aria-hidden="true" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Review incorrect answers */}
            {incorrectAnswers.length > 0 && (
                <div className="mb-6">
                    <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                        <AlertTriangle size={20} className="text-prepare" aria-hidden="true" />
                        Mga dapat balikan
                    </h3>
                    <div className="space-y-3">
                        {incorrectAnswers.map((answer) => {
                            const question = questions.find((q) => q.id === answer.questionId);
                            if (!question) return null;
                            const correctChoice = question.choices.find((c) => c.correct);
                            return (
                                <div
                                    key={answer.questionId}
                                    className="p-4 rounded-xl bg-surface-2 border border-border"
                                >
                                    <p className="font-medium text-text text-sm mb-2">
                                        {question.prompt}
                                    </p>
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle2
                                            size={16}
                                            className="text-success shrink-0 mt-0.5"
                                            aria-hidden="true"
                                        />
                                        <span className="text-text-muted">
                                            Tamang sagot: <strong className="text-text">{correctChoice?.label}</strong>
                                        </span>
                                    </div>
                                    {question.explanation && (
                                        <p className="text-xs text-text-muted mt-2 pl-6">
                                            {question.explanation}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Disclaimer */}
            <Callout variant="tip" title="Paalala" className="mb-6">
                Para sa pag-aaral lang — hindi opisyal na sertipiko.
            </Callout>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
                <Button
                    variant="primary"
                    icon={RefreshCcw}
                    onClick={onRetry}
                    fullWidth
                >
                    Subukan Muli
                </Button>
                <Link
                    to="/practice"
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 rounded-xl font-semibold bg-surface-2 text-text border border-border transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring w-full sm:w-auto"
                >
                    <ArrowLeft size={18} aria-hidden="true" />
                    <span>Bumalik sa Practice</span>
                </Link>
            </div>
        </div>
    );
}
