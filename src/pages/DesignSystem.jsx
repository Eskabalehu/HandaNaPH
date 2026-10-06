
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Callout from '../components/ui/Callout';
import { ShieldAlert, BookOpen, CheckCircle, WifiOff } from 'lucide-react';

export default function DesignSystem() {
    return (
        <div className="w-full min-w-0 min-h-screen bg-bg text-text px-4 py-8 sm:px-6 md:px-8 max-w-5xl mx-auto space-y-12 sm:space-y-16 pb-24">
            
            <header className="space-y-2 w-full min-w-0">
                <h1 className="text-2xl sm:text-3xl font-bold break-words">Design System</h1>
                <p className="text-sm sm:text-base text-text-muted break-words">Component visual QA page for HandaNaPH.</p>
            </header>

            {/* BUTTONS */}
            <section className="space-y-6 w-full min-w-0">
                <h2 className="text-xl sm:text-2xl font-semibold border-b border-border pb-2 break-words">Buttons</h2>
                
                <div className="space-y-4 w-full min-w-0">
                    <h3 className="text-lg font-medium break-words">Variants</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-3 sm:gap-4 items-stretch md:items-center w-full">
                        <Button variant="primary">Primary</Button>
                        <Button variant="emergency">Emergency</Button>
                        <Button variant="prepare">Prepare</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="call">Call Action</Button>
                        <div className="flex justify-start">
                            <Button variant="icon" aria-label="Icon only" icon={BookOpen} />
                        </div>
                    </div>
                </div>

                <div className="space-y-4 w-full min-w-0">
                    <h3 className="text-lg font-medium break-words">Sizes</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-3 sm:gap-4 items-stretch md:items-end w-full">
                        <Button variant="primary" size="md">Medium (md)</Button>
                        <Button variant="primary" size="lg">Large (lg)</Button>
                        <Button variant="primary" size="xl">Extra Large (xl)</Button>
                    </div>
                </div>

                <div className="space-y-4 w-full min-w-0">
                    <h3 className="text-lg font-medium break-words">States & Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-3 sm:gap-4 items-stretch md:items-center w-full">
                        <Button variant="primary" disabled>Disabled</Button>
                        <Button variant="primary" isLoading>Loading</Button>
                        <Button variant="primary" icon={ShieldAlert}>With Icon</Button>
                    </div>
                    <div className="w-full">
                        <Button variant="secondary" fullWidth className="max-w-md">Full Width Button</Button>
                    </div>
                </div>
            </section>

            {/* CARDS */}
            <section className="space-y-6 w-full min-w-0">
                <h2 className="text-xl sm:text-2xl font-semibold border-b border-border pb-2 break-words">Cards</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full min-w-0">
                    <Card variant="plain" className="w-full min-w-0 break-words">
                        <h3 className="font-semibold text-base sm:text-lg">Plain Card</h3>
                        <p className="text-sm mt-2 opacity-80">Default background with subtle border. Good for general content.</p>
                    </Card>

                    <Card variant="interactive" onClick={() => console.log('Clicked')} className="w-full min-w-0 break-words">
                        <h3 className="font-semibold text-base sm:text-lg">Interactive Card</h3>
                        <p className="text-sm mt-2 opacity-80">Clickable card. Lifts on hover for devices with fine pointers.</p>
                    </Card>

                    <Card variant="learn" className="w-full min-w-0 break-words">
                        <h3 className="font-semibold text-base sm:text-lg">Learn Card</h3>
                        <p className="text-sm mt-2 opacity-80">Uses learn theme tint and border.</p>
                    </Card>

                    <Card variant="prepare" className="w-full min-w-0 break-words">
                        <h3 className="font-semibold text-base sm:text-lg">Prepare Card</h3>
                        <p className="text-sm mt-2 opacity-80">Uses prepare theme tint and border.</p>
                    </Card>

                    <Card variant="emergency" className="w-full min-w-0 break-words">
                        <h3 className="font-semibold text-base sm:text-lg">Emergency Card</h3>
                        <p className="text-sm mt-2 opacity-80">Uses emergency theme tint and border.</p>
                    </Card>
                </div>
            </section>

            {/* BADGES */}
            <section className="space-y-6 w-full min-w-0">
                <h2 className="text-xl sm:text-2xl font-semibold border-b border-border pb-2 break-words">Badges</h2>
                
                <div className="flex flex-wrap gap-2 sm:gap-3 items-center w-full">
                    <Badge variant="critical" icon={ShieldAlert}>Critical</Badge>
                    <Badge variant="important" icon={ShieldAlert}>Important</Badge>
                    <Badge variant="general">General</Badge>
                    <Badge variant="verified" icon={CheckCircle}>Verified</Badge>
                    <Badge variant="offline" icon={WifiOff}>Offline</Badge>
                </div>
            </section>

            {/* CALLOUTS */}
            <section className="space-y-6 w-full min-w-0">
                <h2 className="text-xl sm:text-2xl font-semibold border-b border-border pb-2 break-words">Callouts</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full min-w-0">
                    <Callout variant="tip" title="Did you know?" className="w-full min-w-0 break-words">
                        This is a tip callout used for learning information and helpful advice.
                    </Callout>

                    <Callout variant="warning" title="Preparation required" className="w-full min-w-0 break-words">
                        This is a warning callout. Make sure you have your emergency kit ready.
                    </Callout>

                    <Callout variant="danger" title="Evacuation Notice" className="w-full min-w-0 break-words">
                        This is a danger callout used for critical, life-saving information.
                    </Callout>

                    <Callout variant="success" title="Verification complete" className="w-full min-w-0 break-words">
                        This is a success callout, showing that an action was completed correctly.
                    </Callout>
                </div>
            </section>

        </div>
    );
}
