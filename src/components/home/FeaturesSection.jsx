import * as Icons from 'lucide-react';
import { features } from '../../data/features';

export default function FeaturesSection() {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-6 md:mb-8">
                Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {features.map((feature) => {
                    const Icon = Icons[feature.icon];
                    return (
                        <div
                            key={feature.title}
                            className="flex items-start gap-4 p-5 rounded-2xl bg-surface border border-border"
                        >
                            <div className="flex-shrink-0 w-12 h-12 min-w-[48px] flex items-center justify-center rounded-xl bg-learn-tint text-learn">
                                <Icon size={24} aria-hidden="true" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-text text-base md:text-lg leading-tight mb-1">
                                    {feature.title}
                                </h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
