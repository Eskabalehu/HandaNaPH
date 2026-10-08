import { Link } from 'react-router';
import * as Icons from 'lucide-react';
import { emergencySituations } from '../../data/emergency';

export default function EmergencyTriage() {
    return (
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-6 md:mb-8">
                Ano ang nangyayari?
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {emergencySituations.map((situation) => {
                    const Icon = Icons[situation.icon];
                    return (
                        <Link
                            key={situation.slug}
                            to={`/emergency/${situation.slug}`}
                            className="flex flex-col items-center justify-center min-h-[120px] md:min-h-[140px] p-6 rounded-2xl bg-surface border-2 border-border text-text transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:border-learn [@media(hover:hover)_and_(pointer:fine)]:hover:bg-learn-tint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            <Icon 
                                size={48} 
                                className="shrink-0 text-emergency mb-3"
                                aria-hidden="true"
                            />
                            <span className="text-lg md:text-xl font-semibold text-center leading-tight">
                                {situation.title}
                            </span>
                        </Link>
                    );
                })}
            </div>

            <div className="mt-8 md:mt-12 p-6 rounded-2xl bg-emergency-tint border border-emergency/20">
                <p className="text-emergency text-lg md:text-xl font-semibold text-center">
                    If you are in an emergency right now, call <span className="text-2xl md:text-3xl">911</span>
                </p>
            </div>
        </div>
    );
}
