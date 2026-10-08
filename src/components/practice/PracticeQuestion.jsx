import { CheckCircle2 } from 'lucide-react';

export default function PracticeQuestion({
    question,
    selectedAnswer,
    isLocked,
    onSelectAnswer,
}) {
    return (
        <div>
            {/* Question prompt */}
            <h2 className="text-xl md:text-2xl font-bold text-text mb-6 leading-relaxed">
                {question.prompt}
            </h2>

            {/* Answer choices */}
            <div
                className="flex flex-col gap-3"
                role="radiogroup"
                aria-label="Mga pagpipilian"
            >
                {question.choices.map((choice) => {
                    const isSelected = selectedAnswer === choice.id;
                    const showCorrect = isLocked && choice.correct;
                    const showWrong = isLocked && isSelected && !choice.correct;

                    let choiceStyles =
                        'bg-surface border-border text-text [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2 [@media(hover:hover)_and_(pointer:fine)]:hover:border-learn/40';

                    if (showCorrect) {
                        choiceStyles = 'bg-success-tint border-success text-text ring-2 ring-success';
                    } else if (showWrong) {
                        choiceStyles = 'bg-emergency-tint border-emergency-solid text-text ring-2 ring-emergency-solid';
                    } else if (isSelected && !isLocked) {
                        choiceStyles = 'bg-learn-tint border-learn text-text ring-2 ring-learn';
                    }

                    if (isLocked) {
                        choiceStyles += ' cursor-default';
                    }

                    return (
                        <button
                            key={choice.id}
                            onClick={() => !isLocked && onSelectAnswer(choice.id)}
                            disabled={isLocked}
                            className={`flex items-center gap-3 w-full min-h-[56px] p-4 rounded-xl border-2 text-left font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${choiceStyles}`}
                            role="radio"
                            aria-checked={isSelected}
                            aria-disabled={isLocked}
                        >
                            {/* Choice letter indicator */}
                            <span
                                className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold border-2 ${
                                    showCorrect
                                        ? 'bg-success text-on-solid border-success'
                                        : showWrong
                                        ? 'bg-emergency-solid text-on-solid border-emergency-solid'
                                        : isSelected
                                        ? 'bg-learn-solid text-on-solid border-learn-solid'
                                        : 'bg-surface-2 text-text-muted border-border'
                                }`}
                                aria-hidden="true"
                            >
                                {choice.id.toUpperCase()}
                            </span>

                            {/* Choice text */}
                            <span className="flex-1 text-base leading-relaxed">
                                {choice.label}
                            </span>

                            {/* Status icons for locked state */}
                            {showCorrect && (
                                <CheckCircle2
                                    className="text-success shrink-0"
                                    size={20}
                                    aria-label="Tamang sagot"
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
