import { Link } from 'react-router';
import * as Icons from 'lucide-react';
import { quickActions } from '../../data/quickActions';

export default function QuickActions() {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-6 md:mb-8">
                Quick Actions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
                {quickActions.map((action) => {
                    const Icon = Icons[action.icon];
                    return (
                        <Link
                            key={action.label}
                            to={action.path}
                            className="flex flex-col items-center justify-center min-h-[88px] sm:min-h-[100px] p-4 rounded-2xl bg-surface border border-border text-text transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            <Icon 
                                size={28} 
                                className={`shrink-0 ${action.color === 'emergency' ? 'text-emergency' : 'text-prepare'}`}
                                aria-hidden="true"
                            />
                            <span className="mt-2 text-sm font-medium text-center leading-tight">
                                {action.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
