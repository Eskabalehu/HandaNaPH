import { Link } from 'react-router';
import { ShieldCheck } from 'lucide-react';

const footerLinks = [
    {
        heading: 'App',
        links: [
            { label: 'Learn',    to: '/learn' },
            { label: 'Practice', to: '/practice' },
            { label: 'Prepare',  to: '/prepare' },
            { label: 'Hotlines', to: '/hotlines' },
        ],
    },
    {
        heading: 'About',
        links: [
            { label: 'About HandaNaPH', to: '/about' },
            { label: 'Sources',         to: '/sources' },
            { label: 'Contact',         to: '/contact' },
        ],
    },
    {
        heading: 'Legal',
        links: [
            { label: 'Terms of Use', to: '/terms' },
            { label: 'Privacy',      to: '/privacy' },
            { label: 'Disclaimer',   to: '/disclaimer' },
        ],
    },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border bg-surface mt-auto pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)]">
            {/* Mobile bottom-nav clearance already handled by PublicLayout padding */}
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-10">

                    {/* Brand column */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring focus-visible:rounded-lg">
                            <div className="w-9 h-9 shrink-0 rounded-[10px] grid place-items-center text-on-solid bg-learn-solid">
                                <ShieldCheck className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
                            </div>
                            <span className="font-extrabold text-[1rem] tracking-tight">
                                HandaNa<span className="text-emergency">PH</span>
                            </span>
                        </Link>
                        <p className="text-sm text-text-muted leading-relaxed max-w-[280px]">
                            Free emergency preparedness tools for every Filipino. Learn what to do before disaster strikes.
                        </p>
                        <p className="text-xs text-text-muted">
                            For general preparedness information only.<br />
                            In a real emergency, call <strong>911</strong>.
                        </p>
                    </div>

                    {/* Link columns */}
                    {footerLinks.map((group) => (
                        <div key={group.heading} className="space-y-3">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-text-muted">
                                {group.heading}
                            </h2>
                            <ul className="space-y-2.5">
                                {group.links.map(({ label, to }) => (
                                    <li key={to}>
                                        <Link
                                            to={to}
                                            className="text-sm text-text-muted transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring focus-visible:rounded"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center text-xs text-text-muted">
                    <span>© {year} HandaNaPH. For educational purposes only.</span>
                    <span>Not affiliated with any government agency.</span>
                </div>
            </div>
        </footer>
    );
}
