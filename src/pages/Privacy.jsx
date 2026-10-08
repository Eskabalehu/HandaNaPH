import Card from '../components/ui/Card';

export default function Privacy() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12 md:py-16 space-y-8">
            <div className="space-y-4 mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
                <p className="text-lg text-text-muted">
                    How we handle your data and privacy.
                </p>
            </div>

            <Card className="p-6 md:p-8 space-y-6">
                <section className="space-y-3">
                    <h2 className="text-xl font-bold">Local Data Storage</h2>
                    <p className="text-text-muted leading-relaxed">
                        HandaNaPH respects your privacy. All your personal data—including your Family Plan, Go-Bag checklists, Home Safety Audit results, and application settings—is stored <strong>locally on your device</strong>. 
                        We do not transmit this data to any servers, and we do not collect personal information over the internet.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold">No Accounts Required</h2>
                    <p className="text-text-muted leading-relaxed">
                        You do not need to create an account or provide an email address to use HandaNaPH. The tool is designed to work completely offline once loaded, ensuring your data remains in your control.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold">Analytics and Tracking</h2>
                    <p className="text-text-muted leading-relaxed">
                        We do not track your individual usage, location, or personal information. Any data you input into the app stays on the browser of the device you are currently using. 
                        If you clear your browser data, your saved plans and checklists will be permanently deleted.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold">Changes to this Policy</h2>
                    <p className="text-text-muted leading-relaxed">
                        We may update our Privacy Policy from time to time if the functionality of the app changes. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                </section>
            </Card>
        </main>
    );
}
