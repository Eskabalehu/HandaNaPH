import { Link } from 'react-router';
import { ShieldCheck } from 'lucide-react';

export default function PrepareCta() {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
            <div className="p-8 md:p-10 rounded-2xl bg-learn-tint border border-learn/20 text-center">
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 min-h-[64px] flex items-center justify-center rounded-full bg-learn text-on-solid">
                        <ShieldCheck size={32} aria-hidden="true" />
                    </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-learn mb-3">
                    Start Preparing Today
                </h2>
                <p className="text-text text-base md:text-lg max-w-[600px] mx-auto mb-6 leading-relaxed">
                    Build your emergency plan, create your go-bag, and protect your family. 
                    Every step you take now matters when disaster strikes.
                </p>
                <Link
                    to="/prepare"
                    className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl font-bold text-on-solid bg-learn-solid transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
                    Prepare Now
                </Link>
            </div>
        </section>
    );
}
