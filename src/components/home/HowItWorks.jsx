import { BookOpen, PlayCircle, ShieldCheck } from 'lucide-react';

const steps = [
    {
        number: 1,
        icon: BookOpen,
        title: 'Learn',
        description: 'Study essential emergency procedures through visual guides'
    },
    {
        number: 2,
        icon: PlayCircle,
        title: 'Practice',
        description: 'Build muscle memory with interactive scenarios (coming soon)'
    },
    {
        number: 3,
        icon: ShieldCheck,
        title: 'Prepare',
        description: 'Create your emergency plan and build your go-bag'
    }
];

export default function HowItWorks() {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-6 md:mb-8">
                How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {steps.map((step) => {
                    const Icon = step.icon;
                    return (
                        <div
                            key={step.number}
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface border border-border"
                        >
                            <div className="flex items-center justify-center w-16 h-16 min-h-[64px] rounded-full bg-learn-tint text-learn mb-4">
                                <span className="text-2xl font-bold">{step.number}</span>
                            </div>
                            <div className="w-12 h-12 min-w-[48px] flex items-center justify-center rounded-xl bg-surface-2 text-learn mb-4">
                                <Icon size={24} aria-hidden="true" />
                            </div>
                            <h3 className="font-semibold text-text text-lg md:text-xl mb-2">
                                {step.title}
                            </h3>
                            <p className="text-text-muted text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
