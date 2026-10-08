import { CheckCircle2, XCircle, ArrowRight, Info } from 'lucide-react';
import Button from '../ui/Button';

export default function PracticeFeedback({ isCorrect, explanation, onNext, isLastQuestion }) {
    return (
        <div
            className={`mt-6 p-5 rounded-2xl border-l-4 ${
                isCorrect
                    ? 'bg-success-tint border-success'
                    : 'bg-emergency-tint border-emergency-solid'
            }`}
            role="alert"
            aria-live="assertive"
        >
            {/* Result header */}
            <div className="flex items-center gap-3 mb-3">
                {isCorrect ? (
                    <>
                        <CheckCircle2
                            className="text-success shrink-0"
                            size={24}
                            aria-hidden="true"
                        />
                        <span className="font-bold text-lg text-success">
                            Tama! Magaling!
                        </span>
                    </>
                ) : (
                    <>
                        <XCircle
                            className="text-emergency shrink-0"
                            size={24}
                            aria-hidden="true"
                        />
                        <span className="font-bold text-lg text-emergency">
                            Hindi pa tama. Subukan ulit.
                        </span>
                    </>
                )}
            </div>

            {/* Explanation */}
            {explanation && (
                <div className="flex items-start gap-2 mb-4 p-3 rounded-xl bg-surface/60">
                    <Info size={18} className="text-text-muted shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-sm text-text leading-relaxed">{explanation}</p>
                </div>
            )}

            {/* Next action — only show when correct or to allow retry */}
            {isCorrect && (
                <Button
                    variant="primary"
                    icon={ArrowRight}
                    onClick={onNext}
                    className="mt-2"
                >
                    {isLastQuestion ? 'Tingnan ang Resulta' : 'Susunod na Tanong'}
                </Button>
            )}
        </div>
    );
}
