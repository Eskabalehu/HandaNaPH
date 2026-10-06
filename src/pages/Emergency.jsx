import { Siren } from 'lucide-react';

export default function Emergency() {
    return (
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 mt-8 md:mt-12">
            <div className="flex items-center gap-3 mb-4">
                <Siren className="w-8 h-8 text-emergency shrink-0" aria-hidden="true" />
                <h1 className="font-sans text-3xl font-bold" tabIndex={-1}>Emergency</h1>
            </div>
            <p className="text-text-muted max-w-prose">
                Emergency response guides and step-by-step instructions are coming soon.
            </p>
            <p className="mt-4 font-bold text-emergency">
                If you are in an emergency right now, call <span className="text-2xl">911</span>.
            </p>
        </div>
    );
}
