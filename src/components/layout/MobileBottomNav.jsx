import { NavLink } from 'react-router';
import { Home, BookOpen, Siren, ClipboardList, ShieldCheck } from 'lucide-react';

const items = [
    { to: '/',          label: 'Home',      icon: Home,          exact: true,  isEmergency: false },
    { to: '/learn',     label: 'Learn',     icon: BookOpen,      exact: false, isEmergency: false },
    { to: '/emergency', label: 'Emergency', icon: Siren,         exact: false, isEmergency: true  },
    { to: '/practice',  label: 'Practice',  icon: ClipboardList, exact: false, isEmergency: false },
    { to: '/prepare',   label: 'Prepare',   icon: ShieldCheck,   exact: false, isEmergency: false },
];

export default function MobileBottomNav() {
    return (
        <nav
            className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-surface border-t border-border pb-[env(safe-area-inset-bottom)]"
            aria-label="Bottom navigation"
        >
            {/*
                5 items across minimum 320px = 64px per slot.
                Labels use text-sm (0.875rem) per spec — longer labels like "Emergency"
                and "Practice" will wrap to 2 lines at narrow widths. That is intentional.
                The nav bar grows taller to fit; main content has matching bottom clearance.
                No label is ever truncated or hidden.
            */}
            <div className="flex items-end justify-around w-full pt-1 pb-1.5">
                {items.map(({ to, label, icon: Icon, exact, isEmergency }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={exact}
                        className={({ isActive }) =>
                            [
                                // Full touch column — equal flex share, 44px minimum height
                                'flex flex-col items-center justify-end gap-0.5',
                                'flex-1 min-w-0 min-h-[44px] pb-0.5',
                                'transition-colors',
                                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring focus-visible:rounded-lg',
                                isEmergency
                                    ? ''
                                    : isActive
                                        ? 'text-learn'
                                        : 'text-text-muted [@media(hover:hover)_and_(pointer:fine)]:hover:text-text',
                            ].join(' ')
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {/* Icon container */}
                                {isEmergency ? (
                                    // Raised red circle — visual lift via -mt, border trick
                                    <span
                                        className={[
                                            'flex items-center justify-center',
                                            'w-11 h-11 rounded-full border-4 border-surface',
                                            'bg-emergency-solid text-on-solid',
                                            'shadow-[0_4px_16px_rgba(220,38,38,0.35)]',
                                            '-mt-4',
                                            'transition-transform active:scale-95',
                                            isActive ? 'ring-2 ring-emergency-solid ring-offset-2 ring-offset-surface' : '',
                                        ].join(' ')}
                                        aria-hidden="true"
                                    >
                                        <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                                    </span>
                                ) : (
                                    <span
                                        className={[
                                            'flex items-center justify-center w-8 h-6 rounded-full transition-colors',
                                            isActive ? 'bg-learn-tint' : '',
                                        ].join(' ')}
                                        aria-hidden="true"
                                    >
                                        <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                                    </span>
                                )}

                                {/* Visible label — always rendered, never sr-only, never truncated */}
                                <span
                                    className={[
                                        // text-sm = 0.875rem per spec requirement for critical info
                                        // break-words + leading-tight lets "Emergency" wrap to 2 lines
                                        // rather than truncating or shrinking below spec
                                        'text-sm font-semibold leading-tight text-center w-full break-words px-0.5 mt-0.5',
                                        isEmergency
                                            ? isActive ? 'text-emergency' : 'text-text-muted'
                                            : '',
                                    ].join(' ')}
                                >
                                    {label}
                                </span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
