import { ShieldCheck } from 'lucide-react';
import Card from '../components/ui/Card';

export default function About() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12 md:py-16 space-y-8">
            <div className="text-center space-y-4 mb-12">
                <div className="mx-auto w-16 h-16 rounded-2xl grid place-items-center text-on-solid bg-learn-solid shadow-sm">
                    <ShieldCheck className="w-8 h-8" strokeWidth={2.5} aria-hidden="true" />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">About HandaNa<span className="text-emergency">PH</span></h1>
                <p className="text-lg text-text-muted">Know. Prepare. Respond.</p>
            </div>

            <Card className="p-6 md:p-8 space-y-4">
                <h2 className="text-xl font-bold">What is HandaNaPH?</h2>
                <p className="text-text-muted leading-relaxed">
                    HandaNaPH is a free, localized emergency preparedness web application built for the Philippines. 
                    It is designed to educate and guide individuals and families on how to prepare for and respond to common emergencies.
                </p>
                <p className="text-text-muted leading-relaxed">
                    Whether it's an earthquake, typhoon, or a medical emergency, having the right knowledge at your fingertips can save lives.
                </p>
            </Card>

            <Card className="p-6 md:p-8 space-y-4">
                <h2 className="text-xl font-bold">Our Purpose</h2>
                <p className="text-text-muted leading-relaxed">
                    Our goal is simple: to make emergency preparedness accessible, easy to understand, and actionable for every Filipino. 
                    We believe that preparation shouldn't be complicated or intimidating.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-text-muted">
                    <li><strong>Know:</strong> Learn essential safety information through simple guides.</li>
                    <li><strong>Prepare:</strong> Build your go-bags, family plans, and audit your home safety.</li>
                    <li><strong>Respond:</strong> Access quick, step-by-step instructions during an emergency.</li>
                </ul>
            </Card>

            <Card className="p-6 md:p-8 space-y-4">
                <h2 className="text-xl font-bold">Important Notice</h2>
                <p className="text-text-muted leading-relaxed">
                    HandaNaPH is an educational tool. It is <strong>not</strong> a substitute for professional medical advice, diagnosis, or instructions from official government and emergency authorities. 
                    In a real emergency, always follow the guidance of local responders and contact official hotlines immediately.
                </p>
            </Card>
        </main>
    );
}
