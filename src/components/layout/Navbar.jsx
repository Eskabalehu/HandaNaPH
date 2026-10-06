import { NavLink, Link } from 'react-router';
import { ShieldCheck, Siren, Settings } from 'lucide-react';

const navItems = [
    { to: '/learn',    label: 'Learn' },
    { to: '/practice', label: 'Practice' },
    { to: '/prepare',  label: 'Prepare' },
    { to: '/hotlines', label: 'Hotlines' },
];

function NavItem({ to, label }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                [
                    'relative inline-flex items-center min-h-[44px] px-1 py-2 text-[0.92rem] font-semibold transition-colors',
                    'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:rounded-full after:transition-all',
                    isActive
                        ? 'text-learn after:bg-learn'
                        : 'text-text-muted after:bg-transparent [@media(hover:hover)_and_(pointer:fine)]:hover:text-text',
                ].join(' ')
            }
        >
            {label}
        </NavLink>
    );
}

export default function Navbar({ onSettingsOpen }) {
    return (
        <header className="w-full bg-surface border-b border-border sticky top-0 z-40 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pt-[env(safe-area-inset-top)]">

            {/* ── DESKTOP HEADER (md+) ── */}
            <div className="hidden md:flex items-center justify-between gap-4 lg:gap-6 w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-3">

                {/* Brand */}
                <Link to="/" className="flex items-center gap-2.5 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring focus-visible:rounded-lg">
                    <div className="w-10 h-10 shrink-0 rounded-xl grid place-items-center text-on-solid bg-learn-solid shadow-[0_8px_20px_rgba(21,94,239,0.25)]">
                        <ShieldCheck className="w-[22px] h-[22px]" strokeWidth={2.5} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                        <div className="font-sans text-[1.1rem] font-extrabold tracking-tight leading-tight">
                            HandaNa<span className="text-emergency">PH</span>
                        </div>
                        <div className="text-text-muted text-[0.7rem] leading-tight hidden lg:block">
                            Know. Prepare. Respond.
                        </div>
                    </div>
                </Link>

                {/* Primary nav */}
                <nav className="flex items-center gap-1 lg:gap-2 min-w-0" aria-label="Primary navigation">
                    {navItems.map((item) => (
                        <NavItem key={item.to} {...item} />
                    ))}
                </nav>

                {/* Right controls */}
                <div className="flex items-center gap-2 shrink-0">
                    <button
                        type="button"
                        onClick={onSettingsOpen}
                        aria-label="Open settings"
                        className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-text-muted bg-transparent transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2 [@media(hover:hover)_and_(pointer:fine)]:hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    >
                        <Settings className="w-5 h-5" aria-hidden="true" />
                    </button>

                    <Link
                        to="/emergency"
                        className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 rounded-full bg-emergency-solid text-on-solid font-bold text-[0.875rem] shrink-0 transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:bg-emergency-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    >
                        <Siren className="w-[18px] h-[18px] shrink-0" aria-hidden="true" />
                        <span>Emergency</span>
                    </Link>
                </div>
            </div>

            {/* ── MOBILE TOP BAR (< md) ── */}
            <div className="flex md:hidden items-center justify-between gap-2 w-full px-3 py-2.5">

                {/* Brand */}
                <Link to="/" className="flex items-center gap-2 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring focus-visible:rounded-lg">
                    <div className="w-8 h-8 shrink-0 rounded-[10px] grid place-items-center text-on-solid bg-learn-solid">
                        <ShieldCheck className="w-[18px] h-[18px]" strokeWidth={2.5} aria-hidden="true" />
                    </div>
                    <span className="font-sans text-[0.95rem] font-extrabold tracking-tight">
                        HandaNa<span className="text-emergency">PH</span>
                    </span>
                </Link>

                {/* Right controls */}
                <div className="flex items-center gap-1.5 shrink-0">
                    <Link
                        to="/emergency"
                        className="inline-flex items-center justify-center gap-1.5 min-h-[44px] min-w-[44px] px-3 py-2 rounded-full bg-emergency-solid text-on-solid font-bold text-[0.8rem] shrink-0 transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:bg-emergency-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        aria-label="Emergency"
                    >
                        <Siren className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span className="hidden xs:inline">Emergency</span>
                        <span className="xs:hidden sr-only">Emergency</span>
                    </Link>

                    <button
                        type="button"
                        onClick={onSettingsOpen}
                        aria-label="Open settings"
                        className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-text-muted bg-transparent transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    >
                        <Settings className="w-5 h-5" aria-hidden="true" />
                        <span className="sr-only">Settings</span>
                    </button>
                </div>
            </div>
        </header>
    );
}