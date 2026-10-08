import Card from '../components/ui/Card';

export default function Sources() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12 md:py-16 space-y-8">
            <div className="space-y-4 mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Sources & References</h1>
                <p className="text-lg text-text-muted">
                    Safety information should always come from credible and official sources.
                </p>
            </div>

            <Card className="p-6 md:p-8 space-y-4">
                <p className="text-text-muted leading-relaxed">
                    The preparedness guides, emergency procedures, and safety checklists provided in HandaNaPH are adapted from established guidelines and official sources.
                    While we strive to keep this information accurate and easy to understand, you should always verify critical procedures with your local authorities.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">Official References</h2>
                <ul className="list-disc pl-5 space-y-3 text-text-muted">
                    <li><strong>NDRRMC</strong> (National Disaster Risk Reduction and Management Council) - Disaster response guidelines and protocols in the Philippines.</li>
                    <li><strong>Philippine Red Cross</strong> - First aid and basic life support procedures.</li>
                    <li><strong>PAGASA</strong> - Weather updates, typhoon signals, and flood warnings guidelines.</li>
                    <li><strong>PHIVOLCS</strong> - Earthquake and volcanic eruption preparedness.</li>
                    <li><strong>BFP</strong> (Bureau of Fire Protection) - Fire safety and prevention.</li>
                    <li><strong>DOH</strong> (Department of Health) - Public health advisories and medical emergency basics.</li>
                </ul>
            </Card>

            <Card className="p-6 md:p-8 space-y-4">
                <h2 className="text-xl font-bold">Hotlines</h2>
                <p className="text-text-muted leading-relaxed">
                    The hotlines listed in this application are official numbers for Philippine emergency services. 
                    These numbers may change, so we encourage you to save your local unit's direct contact numbers in your phone.
                </p>
            </Card>
        </main>
    );
}
