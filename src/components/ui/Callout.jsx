
import { AlertCircle, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

export default function Callout({
    variant = 'tip',
    title,
    className = '',
    children,
    ...props
}) {
    const baseStyles = "flex p-4 rounded-xl border-l-4 w-full";
    
    const variants = {
        danger: {
            container: "bg-emergency-tint text-text border-emergency-solid",
            icon: <AlertCircle className="w-5 h-5 text-emergency-solid shrink-0 mt-0.5" aria-hidden="true" />
        },
        warning: {
            container: "bg-prepare-tint text-text border-prepare-solid",
            icon: <AlertTriangle className="w-5 h-5 text-prepare-solid shrink-0 mt-0.5" aria-hidden="true" />
        },
        tip: {
            container: "bg-learn-tint text-text border-learn-solid",
            icon: <Info className="w-5 h-5 text-learn-solid shrink-0 mt-0.5" aria-hidden="true" />
        },
        success: {
            container: "bg-success-tint text-text border-success",
            icon: <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" aria-hidden="true" />
        }
    };

    const activeVariant = variants[variant] || variants.tip;

    return (
        <div
            className={cn(baseStyles, activeVariant.container, className)}
            role="region"
            aria-label={title || variant}
            {...props}
        >
            <div className="mr-3">
                {activeVariant.icon}
            </div>
            <div className="flex-1 min-w-0">
                {title && <h4 className="font-semibold mb-1">{title}</h4>}
                <div className="text-sm leading-relaxed opacity-90">
                    {children}
                </div>
            </div>
        </div>
    );
}
