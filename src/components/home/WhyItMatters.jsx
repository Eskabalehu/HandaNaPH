import { AlertTriangle } from 'lucide-react';

export default function WhyItMatters() {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
            <div className="p-6 md:p-8 rounded-2xl bg-prepare-tint border border-prepare/20">
                <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 min-w-[48px] flex items-center justify-center rounded-xl bg-prepare text-on-prepare-solid">
                        <AlertTriangle size={24} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-prepare mb-3 md:mb-4">
                            Why Preparedness Matters
                        </h2>
                        <p className="text-text text-base leading-relaxed mb-4">
                            The Philippines is one of the most disaster-prone countries in the world. 
                            Typhoons, earthquakes, volcanic eruptions, and floods regularly affect communities 
                            across the archipelago.
                        </p>
                        <p className="text-text text-base leading-relaxed mb-4">
                            Being prepared saves lives. When disaster strikes, knowing what to do in the 
                            first few critical minutes can make the difference between safety and tragedy. 
                            Preparation also reduces panic and helps communities recover faster.
                        </p>
                        <p className="text-text-muted text-sm leading-relaxed">
                            HandaNaPH is designed to help every Filipino household build emergency readiness 
                            through simple, accessible guides that work even without internet connection.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
