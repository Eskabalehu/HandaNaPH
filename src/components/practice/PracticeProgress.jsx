export default function PracticeProgress({ current, total }) {
    const percentage = Math.round((current / total) * 100);

    return (
        <div className="mb-6" role="group" aria-label="Progress">
            {/* Text progress */}
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-text">
                    Tanong {current} ng {total}
                </span>
                <span className="text-sm text-text-muted" aria-hidden="true">
                    {percentage}%
                </span>
            </div>

            {/* Visual progress bar */}
            <div
                className="w-full h-2 bg-surface-2 rounded-full overflow-hidden border border-border"
                role="progressbar"
                aria-valuenow={current}
                aria-valuemin={1}
                aria-valuemax={total}
                aria-label={`Tanong ${current} ng ${total}`}
            >
                <div
                    className="h-full bg-learn-solid rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
