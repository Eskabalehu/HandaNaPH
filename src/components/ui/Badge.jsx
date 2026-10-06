

const cn = (...classes) => classes.filter(Boolean).join(' ');

export default function Badge({
    variant = 'general',
    icon: Icon,
    className = '',
    children,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-full px-2.5 py-0.5 text-sm gap-1.5 whitespace-nowrap";
    
    const variants = {
        critical: "bg-emergency-solid text-on-solid",
        important: "bg-prepare-solid text-on-prepare-solid",
        general: "bg-surface-2 text-text border border-border",
        verified: "bg-success text-on-solid",
        offline: "bg-surface text-text-muted border border-border border-dashed"
    };

    return (
        <span
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {Icon && <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
            {children}
        </span>
    );
}
