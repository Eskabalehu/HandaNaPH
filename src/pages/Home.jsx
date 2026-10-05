import { BookOpen, ShieldCheck, Siren } from 'lucide-react';
import Navbar from '../components/layout/Navbar';

function Home() {
    return (
        <div className="flex flex-col min-h-[100dvh] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
            <Navbar />

            <main className="flex-1">
                <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 mt-6 md:mt-10 min-h-auto lg:min-h-[650px] grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-8 lg:gap-16 pb-16 lg:pb-0">
                    <div className="mx-auto flex flex-col items-center lg:items-start text-center lg:text-left max-w-[700px] w-full">
                        <div className="inline-flex items-center justify-center min-h-[40px] px-3.5 py-1.5 rounded-full bg-prepare-tint text-prepare border border-current text-[0.82rem] font-bold text-center leading-tight">
                            🇵🇭 Made for the Philippines
                        </div>

                        <h1 className="w-full mt-5 md:mt-6 font-sans text-[clamp(2.25rem,10vw,4rem)] md:text-[clamp(3rem,8vw,5.4rem)] leading-[1.05] tracking-tight break-words">
                            Know what to do
                            <span className="text-learn"> before it matters.</span>
                        </h1>

                        <p className="w-full max-w-[620px] mt-4 md:mt-6 text-text-muted text-[1rem] md:text-[1.08rem] leading-relaxed">
                            Learn essential emergency and disaster preparedness through
                            visual guides, interactive scenarios, and practical resources.
                        </p>

                        <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 md:gap-4 mt-8 md:mt-10">
                            <a href="#learn" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[56px] sm:min-h-[44px] px-5 py-3 sm:py-3.5 rounded-xl font-bold text-on-solid bg-learn-solid hover:brightness-96 transition-all shrink-0">
                                <BookOpen size={19} />
                                Start Learning
                            </a>

                            <a href="#prepare" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[56px] sm:min-h-[44px] px-5 py-3 sm:py-3.5 rounded-xl font-bold border border-border bg-surface text-text hover:bg-surface-2 transition-colors shrink-0">
                                Prepare Now
                            </a>
                        </div>
                    </div>

                    <div className="relative min-h-auto lg:min-h-[460px] flex flex-col sm:flex-row lg:block flex-wrap items-stretch justify-center gap-4 mt-8 lg:mt-0">
                        <div className="static lg:absolute w-full sm:flex-1 lg:flex-none lg:w-[250px] min-h-[140px] lg:min-h-[150px] p-5 lg:p-6 rounded-3xl flex flex-col justify-between bg-emergency-tint border border-border lg:border-transparent lg:shadow-[0_20px_50px_rgba(16,24,40,0.12)] text-emergency lg:top-[20px] lg:right-[70px]">
                            <Siren size={32} />
                            <div className="mt-5 lg:mt-7 flex flex-col">
                                <strong className="font-sans text-[1.15rem] leading-tight">Emergency</strong>
                                <span className="text-text-muted text-[0.88rem] mt-1 leading-snug">Know what to do.</span>
                            </div>
                        </div>

                        <div className="static lg:absolute w-full sm:flex-1 lg:flex-none lg:w-[250px] min-h-[140px] lg:min-h-[150px] p-5 lg:p-6 rounded-3xl flex flex-col justify-between bg-learn-tint border border-border lg:border-transparent lg:shadow-[0_20px_50px_rgba(16,24,40,0.12)] text-learn lg:top-[180px] lg:left-[20px]">
                            <BookOpen size={32} />
                            <div className="mt-5 lg:mt-7 flex flex-col">
                                <strong className="font-sans text-[1.15rem] leading-tight">Learn</strong>
                                <span className="text-text-muted text-[0.88rem] mt-1 leading-snug">Understand the basics.</span>
                            </div>
                        </div>

                        <div className="static lg:absolute w-full sm:flex-1 lg:flex-none lg:w-[250px] min-h-[140px] lg:min-h-[150px] p-5 lg:p-6 rounded-3xl flex flex-col justify-between bg-prepare-tint border border-border lg:border-transparent lg:shadow-[0_20px_50px_rgba(16,24,40,0.12)] text-prepare lg:bottom-[20px] lg:right-[0]">
                            <ShieldCheck size={32} />
                            <div className="mt-5 lg:mt-7 flex flex-col">
                                <strong className="font-sans text-[1.15rem] leading-tight">Prepare</strong>
                                <span className="text-text-muted text-[0.88rem] mt-1 leading-snug">Be ready before it happens.</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;