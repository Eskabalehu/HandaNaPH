import { forwardRef } from 'react';
import Badge from '../ui/Badge';

const EmergencyStep = forwardRef(({ step, stepNumber, totalSteps, icon: Icon }, ref) => {
    const isCritical = step.severity === 'critical';

    return (
        <div 
            ref={ref}
            className="w-full max-w-[800px] mx-auto px-4 md:px-6"
            role="region"
            aria-live="polite"
            aria-label={`Step ${stepNumber} of ${totalSteps}`}
            tabIndex={-1}
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 min-w-[64px] md:min-w-[80px] flex items-center justify-center rounded-full bg-emergency-tint text-emergency">
                    <Icon size={32} aria-hidden="true" />
                </div>
                <div>
                    <h2 
                        className="text-xl md:text-2xl lg:text-3xl font-bold text-text leading-tight"
                        tabIndex={-1}
                    >
                        Step {stepNumber}
                    </h2>
                    {isCritical && (
                        <Badge variant="critical" className="mt-2">
                            Critical
                        </Badge>
                    )}
                </div>
            </div>

            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text leading-relaxed mb-6">
                {step.text}
            </p>

            {step.why && (
                <div className="p-4 md:p-6 rounded-2xl bg-surface-2 border border-border">
                    <p className="text-text-muted text-base md:text-lg leading-relaxed">
                        <span className="font-semibold text-text">Bakit:</span> {step.why}
                    </p>
                </div>
            )}
        </div>
    );
});

EmergencyStep.displayName = 'EmergencyStep';

export default EmergencyStep;
