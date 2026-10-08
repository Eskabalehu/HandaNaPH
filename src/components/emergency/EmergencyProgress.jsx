export default function EmergencyProgress({ currentStep, totalSteps }) {
    const progressPercent = (currentStep / totalSteps) * 100;

    return (
        <div className="w-full mb-6">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-text-muted">
                    Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm font-medium text-text-muted">
                    {Math.round(progressPercent)}%
                </span>
            </div>
            <div 
                className="w-full h-2 rounded-full bg-surface-2 border border-border"
                role="progressbar"
                aria-valuenow={currentStep}
                aria-valuemin={1}
                aria-valuemax={totalSteps}
                aria-label={`Progress: step ${currentStep} of ${totalSteps}`}
            >
                <div 
                    className="h-full rounded-full bg-learn transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                />
            </div>
        </div>
    );
}
