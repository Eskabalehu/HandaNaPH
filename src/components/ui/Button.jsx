
import { Loader2 } from 'lucide-react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

export default function Button({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    isLoading = false,
    disabled = false,
    icon: Icon,
    className = '',
    children,
    type = 'button',
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";
    
    const variants = {
        primary: "bg-learn-solid text-on-solid [@media(hover:hover)_and_(pointer:fine)]:hover:bg-learn",
        emergency: "bg-emergency-solid text-on-solid [@media(hover:hover)_and_(pointer:fine)]:hover:bg-emergency-strong",
        prepare: "bg-prepare-solid text-on-prepare-solid [@media(hover:hover)_and_(pointer:fine)]:hover:bg-prepare",
        secondary: "bg-surface-2 text-text border border-border [@media(hover:hover)_and_(pointer:fine)]:hover:bg-border",
        ghost: "bg-transparent text-text [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2",
        icon: "bg-transparent text-text rounded-full [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2",
        call: "bg-success text-on-solid [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-90"
    };

    const sizes = {
        md: "min-h-[44px] px-4 py-2 text-base gap-2",
        lg: "min-h-[48px] px-6 py-3 text-lg gap-3",
        xl: "min-h-[56px] px-8 py-4 text-xl gap-3",
    };

    if (variant === 'icon') {
        sizes.md = "min-h-[44px] min-w-[44px] p-2";
        sizes.lg = "min-h-[48px] min-w-[48px] p-3";
        sizes.xl = "min-h-[56px] min-w-[56px] p-4";
    }

    const widthClass = fullWidth ? 'w-full flex' : 'inline-flex';
    const isDisabled = disabled || isLoading;

    return (
        <button
            type={type}
            disabled={isDisabled}
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                widthClass,
                className
            )}
            {...props}
        >
            {isLoading && <Loader2 className="animate-spin w-5 h-5 shrink-0" aria-hidden="true" />}
            {!isLoading && Icon && <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />}
            {children && <span>{children}</span>}
        </button>
    );
}
