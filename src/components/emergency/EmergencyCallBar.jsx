import { Phone } from 'lucide-react';

export default function EmergencyCallBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t-2 border-emergency p-4 md:p-6 pb-safe">
            <a
                href="tel:911"
                className="flex items-center justify-center gap-3 w-full min-h-[56px] md:min-h-[64px] px-6 py-4 rounded-xl bg-emergency-solid text-on-solid font-bold text-lg md:text-xl transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-emergency-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
                <Phone size={28} aria-hidden="true" />
                <span className="text-2xl md:text-3xl">911</span>
                <span className="text-base md:text-lg">Call Emergency</span>
            </a>
        </div>
    );
}
