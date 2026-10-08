import Card from '../components/ui/Card';

export default function Accessibility() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12 md:py-16 space-y-8">
            <div className="space-y-4 mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Accessibility</h1>
                <p className="text-lg text-text-muted">
                    We believe emergency preparedness should be accessible to everyone.
                </p>
            </div>

            <Card className="p-6 md:p-8 space-y-6">
                <p className="text-text-muted leading-relaxed">
                    HandaNaPH is built with accessibility in mind. We have implemented several features to ensure that as many people as possible can use and benefit from this tool.
                </p>

                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Supported Features</h2>
                    <ul className="space-y-4 text-text-muted">
                        <li>
                            <strong className="text-text block mb-1">Themes & High Contrast</strong>
                            Support for Light, Dark, and High Contrast themes to help users with visual impairments or light sensitivity.
                        </li>
                        <li>
                            <strong className="text-text block mb-1">Adjustable Text Sizing</strong>
                            Text sizes can be increased to A, A+, or A++ without breaking the layout, making reading easier for everyone.
                        </li>
                        <li>
                            <strong className="text-text block mb-1">Reduced Motion</strong>
                            Animations and transitions can be disabled for users with vestibular disorders or those who prefer a static experience.
                        </li>
                        <li>
                            <strong className="text-text block mb-1">Keyboard Navigation</strong>
                            The entire application can be navigated using a keyboard, with clear and visible focus indicators.
                        </li>
                        <li>
                            <strong className="text-text block mb-1">Touch-Friendly Controls</strong>
                            Interactive elements have a minimum 44px touch target size to ensure they are easy to tap on mobile devices.
                        </li>
                        <li>
                            <strong className="text-text block mb-1">Read Aloud</strong>
                            A built-in Read Aloud feature is available where supported to provide audio guidance for text content.
                        </li>
                        <li>
                            <strong className="text-text block mb-1">Specialized Modes</strong>
                            Toggle <strong>Kids Mode</strong> for a simpler, friendlier interface or <strong>Senior Mode</strong> for larger typography, bigger touch targets, and stronger contrast.
                        </li>
                    </ul>
                </div>
            </Card>
        </main>
    );
}
