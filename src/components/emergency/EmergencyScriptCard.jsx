import { MessageSquare } from 'lucide-react';

export default function EmergencyScriptCard({ script }) {
    // If no verified script is available, show placeholder
    if (!script) {
        return (
            <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 mb-6">
                <div className="p-6 rounded-2xl bg-prepare-tint border border-prepare/20">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 min-w-[48px] flex items-center justify-center rounded-xl bg-prepare text-on-prepare-solid">
                            <MessageSquare size={24} aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-bold text-prepare mb-3">
                                Sabihin sa operator
                            </h3>
                            <p className="text-text-muted text-sm italic">
                                [PLACEHOLDER: Verified 911 script content needed]
                            </p>
                            <p className="text-text-muted text-xs mt-2">
                                This section will contain verified guidance on what to tell the 911 operator when calling for this emergency type.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // When verified script is available, render it here
    return (
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 mb-6">
            <div className="p-6 rounded-2xl bg-prepare-tint border border-prepare/20">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 min-w-[48px] flex items-center justify-center rounded-xl bg-prepare text-on-prepare-solid">
                        <MessageSquare size={24} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-prepare mb-3">
                            Sabihin sa operator
                        </h3>
                        <p className="text-text text-base leading-relaxed">
                            {script}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
