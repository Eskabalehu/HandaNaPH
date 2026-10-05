import { ShieldCheck, Siren } from 'lucide-react';
import { Link } from 'react-router';

function Navbar() {
    return (
        <header className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-5 flex items-center justify-between gap-2 md:gap-6">
            <a href="/" className="flex items-center gap-2 md:gap-3 shrink-0 min-w-0">
                <div className="w-8 h-8 md:w-11 md:h-11 shrink-0 rounded-[10px] md:rounded-xl grid place-items-center text-on-solid bg-learn-solid shadow-[0_10px_24px_rgba(21,94,239,0.2)]">
                    <ShieldCheck className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" strokeWidth={2.5} />
                </div>

                <div className="min-w-0">
                    <div className="font-sans text-[0.95rem] md:text-[1.15rem] font-extrabold tracking-tight whitespace-nowrap">
                        HandaNa<span className="text-emergency">PH</span>
                    </div>

                    <div className="hidden md:block mt-[1px] text-text-muted text-[0.72rem]">
                        Know. Prepare. Respond.
                    </div>
                </div>
            </a>

            <nav className="flex items-center gap-0 md:gap-6 shrink-0" aria-label="Primary navigation">
                <Link to="/learn" className="hidden md:block text-text-muted text-[0.92rem] font-semibold hover:text-learn transition-colors">Learn</Link>
                <Link to="/practice" className="hidden md:block text-text-muted text-[0.92rem] font-semibold hover:text-learn transition-colors">Practice</Link>
                <Link to="/prepare" className="hidden md:block text-text-muted text-[0.92rem] font-semibold hover:text-learn transition-colors">Prepare</Link>

                <button type="button" className="inline-flex items-center justify-center gap-1.5 md:gap-2 min-h-[44px] px-3 md:px-4 py-2 md:py-2.5 rounded-full text-on-solid bg-emergency-solid font-bold hover:bg-emergency-strong transition-colors shrink-0 text-[0.8rem] md:text-base">
                    <Siren className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                    <span>Emergency</span>
                </button>
            </nav>
        </header>
    );
}

export default Navbar;