import { Phone } from 'lucide-react';

export default function Hotlines() {
    return (
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 mt-8 md:mt-12">
            <div className="flex items-center gap-3 mb-4">
                <Phone className="w-7 h-7 text-learn shrink-0" aria-hidden="true" />
                <h1 className="font-sans text-3xl font-bold" tabIndex={-1}>Hotlines</h1>
            </div>
            <p className="text-text-muted max-w-prose">
                Philippine emergency hotlines and contact numbers are coming soon.
            </p>
            <p className="mt-4 font-semibold">
                National Emergency Hotline: <span className="text-learn font-bold text-xl">911</span>
            </p>
        </div>
    );
}
