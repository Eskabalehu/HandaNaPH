

const cn = (...classes) => classes.filter(Boolean).join(' ');

export default function Card({
    variant = 'plain',
    className = '',
    children,
    onClick,
    ...props
}) {
    const isInteractive = variant === 'interactive' || !!onClick;
    
    const baseStyles = "rounded-2xl p-4 sm:p-6 w-full";
    
    // In plain variants, we just want border.
    // For tinted variants, we want border colored by the theme semantic values.
    const variants = {
        plain: "bg-surface border border-border text-text",
        learn: "bg-learn-tint border border-learn/20 text-text",
        emergency: "bg-emergency-tint border border-emergency/20 text-text",
        prepare: "bg-prepare-tint border border-prepare/20 text-text",
        interactive: "bg-surface border border-border text-text cursor-pointer transition-transform [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
    };

    const activeVariant = isInteractive && variant !== 'interactive' ? 'interactive' : variant;
    
    const Component = isInteractive ? 'button' : 'div';
    
    const interactiveProps = isInteractive ? {
        type: 'button',
        onClick
    } : {};

    return (
        <Component
            className={cn(baseStyles, variants[activeVariant], className)}
            {...interactiveProps}
            {...props}
        >
            {children}
        </Component>
    );
}
