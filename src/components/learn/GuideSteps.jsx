export default function GuideSteps({ steps, activeTab }) {
    if (!steps || steps.length === 0) {
        return (
            <div className="p-6 rounded-2xl bg-surface-2 border border-border">
                <p className="text-text-muted text-center">
                    No steps available for this section.
                </p>
            </div>
        );
    }

    return (
        <div 
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="space-y-4"
        >
            {steps.map((step) => (
                <div
                    key={step.id}
                    className="p-5 rounded-2xl bg-surface border border-border"
                >
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 min-w-[40px] flex items-center justify-center rounded-full bg-learn-tint text-learn font-bold text-lg">
                            {step.id}
                        </div>
                        <div className="flex-1">
                            <p className="text-text text-lg font-medium leading-relaxed mb-2">
                                {step.action}
                            </p>
                            {step.why && (
                                <div className="mt-3 p-3 rounded-xl bg-surface-2 border border-border">
                                    <p className="text-text-muted text-sm">
                                        <span className="font-semibold text-text">Bakit:</span> {step.why}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
