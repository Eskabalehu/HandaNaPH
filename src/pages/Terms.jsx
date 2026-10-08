import Card from '../components/ui/Card';

export default function Terms() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12 md:py-16 space-y-8">
            <div className="space-y-4 mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Terms of Use</h1>
                <p className="text-lg text-text-muted">
                    Please read these terms carefully before using HandaNaPH.
                </p>
            </div>

            <Card className="p-6 md:p-8 space-y-6">
                <section className="space-y-3">
                    <h2 className="text-xl font-bold">1. Educational Purpose Only</h2>
                    <p className="text-text-muted leading-relaxed">
                        HandaNaPH is strictly an educational preparedness tool. The information provided is for general guidance and learning purposes. 
                        It is <strong>not</strong> a substitute for professional advice, medical diagnosis, or instructions from official emergency authorities, law enforcement, or medical professionals.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold">2. No Liability</h2>
                    <p className="text-text-muted leading-relaxed">
                        By using this application, you acknowledge that the creators and maintainers of HandaNaPH are not liable for any damages, injuries, or losses that may occur before, during, or after an emergency. 
                        Your safety is ultimately your responsibility. Always use your best judgment and rely on official channels during actual crises.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold">3. Accuracy of Information</h2>
                    <p className="text-text-muted leading-relaxed">
                        While we strive to keep the information in this app accurate and up to date based on credible sources, emergency protocols can change. We cannot guarantee that all information is completely accurate, exhaustive, or applicable to your specific situation.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold">4. User Data</h2>
                    <p className="text-text-muted leading-relaxed">
                        Any information you enter into the app (such as checklists and family plans) is stored locally on your device. You are responsible for securing your device to protect your local data.
                    </p>
                </section>
            </Card>
        </main>
    );
}
