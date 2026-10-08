import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Users, MapPin, Phone, Shield, Navigation, CheckCircle2, ArrowLeft, ArrowRight, Printer } from 'lucide-react';
import Button from '../ui/Button';
import Callout from '../ui/Callout';

const STORAGE_KEY = 'handanaph-family-plan';

const STEPS = [
    { id: 'members', title: 'Members', icon: Users },
    { id: 'meeting', title: 'Meeting Points', icon: MapPin },
    { id: 'contacts', title: 'Contacts', icon: Phone },
    { id: 'roles', title: 'Roles', icon: Shield },
    { id: 'evacuation', title: 'Evacuation', icon: Navigation },
    { id: 'review', title: 'Review', icon: CheckCircle2 }
];

export default function FamilyPlanWizard() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [planData, setPlanData] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : {
                members: '',
                meetingPoints: '',
                contacts: '',
                roles: '',
                evacuation: ''
            };
        } catch {
            return {
                members: '',
                meetingPoints: '',
                contacts: '',
                roles: '',
                evacuation: ''
            };
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(planData));
        } catch {
            // ignore
        }
    }, [planData]);

    const handleNext = () => {
        if (currentStepIndex < STEPS.length - 1) {
            setCurrentStepIndex(i => i + 1);
        }
    };

    const handlePrev = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(i => i - 1);
        }
    };

    const handleChange = (field, value) => {
        setPlanData(prev => ({ ...prev, [field]: value }));
    };

    const handlePrint = () => {
        window.print();
    };

    const currentStep = STEPS[currentStepIndex];

    return (
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
            <nav className="mb-6 print:hidden" aria-label="Breadcrumb">
                <Link to="/prepare" className="text-text-muted hover:text-text transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring">
                    ← Bumalik sa Prepare
                </Link>
            </nav>

            <div className="flex items-center gap-3 mb-8 print:hidden">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-learn-tint text-learn">
                    <Users size={24} aria-hidden="true" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-text" tabIndex={-1}>Family Plan</h1>
                    <p className="text-text-muted">Draft your emergency family plan</p>
                </div>
            </div>

            {/* Print Header */}
            <div className="hidden print:block mb-8 border-b-2 border-black pb-4">
                <h1 className="text-4xl font-bold mb-2">Emergency Family Plan</h1>
                <p className="text-gray-600">Generated from HandaNaPH | handanaph.org</p>
            </div>

            {/* Progress Stepper */}
            <div className="mb-8 overflow-x-auto pb-4 print:hidden">
                <div className="flex items-center gap-2 min-w-max">
                    {STEPS.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = index === currentStepIndex;
                        const isPast = index < currentStepIndex;
                        return (
                            <div key={step.id} className="flex items-center">
                                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm ${
                                    isActive ? 'bg-learn text-on-solid' :
                                    isPast ? 'bg-learn-tint text-learn' : 'text-text-muted'
                                }`}>
                                    <Icon size={16} />
                                    <span>{step.title}</span>
                                </div>
                                {index < STEPS.length - 1 && (
                                    <div className="w-4 h-[2px] bg-border mx-2" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border shadow-sm print:shadow-none print:border-none print:p-0">
                
                {currentStep.id === 'members' && (
                    <div className="print:block">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Users size={20}/> Family Members</h2>
                        <Callout variant="tip" title="Tip" className="mb-4 print:hidden">
                            List all members of your household, including pets. Include ages or specific needs if any.
                        </Callout>
                        <div className="print:hidden">
                            <label htmlFor="members-input" className="block text-sm font-medium text-text mb-2">
                                Who is included in this plan?
                            </label>
                            <textarea
                                id="members-input"
                                rows={4}
                                value={planData.members}
                                onChange={(e) => handleChange('members', e.target.value)}
                                placeholder="e.g. Juan (Dad), Maria (Mom), Miguel (8yrs), Bantay (Dog)"
                                className="w-full p-4 rounded-xl border border-border bg-surface-2 text-text focus-visible:outline-2 focus-visible:outline-focus-ring resize-y"
                            />
                        </div>
                        <div className="hidden print:block whitespace-pre-wrap">{planData.members || '(None listed)'}</div>
                    </div>
                )}

                {currentStep.id === 'meeting' && (
                    <div className="print:block">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><MapPin size={20}/> Meeting Points</h2>
                        <Callout variant="tip" title="Tip" className="mb-4 print:hidden">
                            Choose one spot right outside your home (for sudden emergencies like fire) and one spot outside your neighborhood (if you can't return home).
                        </Callout>
                        <div className="print:hidden">
                            <label htmlFor="meeting-input" className="block text-sm font-medium text-text mb-2">
                                Where will we meet?
                            </label>
                            <textarea
                                id="meeting-input"
                                rows={4}
                                value={planData.meetingPoints}
                                onChange={(e) => handleChange('meetingPoints', e.target.value)}
                                placeholder="Near home: The big mango tree outside.&#10;Outside neighborhood: Brgy Hall court."
                                className="w-full p-4 rounded-xl border border-border bg-surface-2 text-text focus-visible:outline-2 focus-visible:outline-focus-ring resize-y"
                            />
                        </div>
                        <div className="hidden print:block whitespace-pre-wrap mt-6">{planData.meetingPoints || '(None listed)'}</div>
                    </div>
                )}

                {currentStep.id === 'contacts' && (
                    <div className="print:block">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Phone size={20}/> Emergency Contacts</h2>
                        <Callout variant="tip" title="Tip" className="mb-4 print:hidden">
                            Choose an out-of-town contact. It's often easier to text someone outside the disaster area.
                        </Callout>
                        <div className="print:hidden">
                            <label htmlFor="contacts-input" className="block text-sm font-medium text-text mb-2">
                                Who should we call/text?
                            </label>
                            <textarea
                                id="contacts-input"
                                rows={4}
                                value={planData.contacts}
                                onChange={(e) => handleChange('contacts', e.target.value)}
                                placeholder="Tita Rosa (Cebu): 0917-xxx-xxxx"
                                className="w-full p-4 rounded-xl border border-border bg-surface-2 text-text focus-visible:outline-2 focus-visible:outline-focus-ring resize-y"
                            />
                        </div>
                        <div className="hidden print:block whitespace-pre-wrap mt-6">{planData.contacts || '(None listed)'}</div>
                    </div>
                )}

                {currentStep.id === 'roles' && (
                    <div className="print:block">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Shield size={20}/> Family Roles</h2>
                        <Callout variant="tip" title="Tip" className="mb-4 print:hidden">
                            Assign responsibilities like grabbing the Go-Bag, securing pets, or turning off the main power switch.
                        </Callout>
                        <div className="print:hidden">
                            <label htmlFor="roles-input" className="block text-sm font-medium text-text mb-2">
                                What is everyone's task?
                            </label>
                            <textarea
                                id="roles-input"
                                rows={4}
                                value={planData.roles}
                                onChange={(e) => handleChange('roles', e.target.value)}
                                placeholder="Dad: Turn off breaker, carry Go-Bag.&#10;Mom: Grab important docs, handle kids."
                                className="w-full p-4 rounded-xl border border-border bg-surface-2 text-text focus-visible:outline-2 focus-visible:outline-focus-ring resize-y"
                            />
                        </div>
                        <div className="hidden print:block whitespace-pre-wrap mt-6">{planData.roles || '(None listed)'}</div>
                    </div>
                )}

                {currentStep.id === 'evacuation' && (
                    <div className="print:block">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Navigation size={20}/> Evacuation Route</h2>
                        <Callout variant="tip" title="Tip" className="mb-4 print:hidden">
                            Note down the safest path to your local evacuation center.
                        </Callout>
                        <div className="print:hidden">
                            <label htmlFor="evac-input" className="block text-sm font-medium text-text mb-2">
                                Where do we go if we must evacuate?
                            </label>
                            <textarea
                                id="evac-input"
                                rows={4}
                                value={planData.evacuation}
                                onChange={(e) => handleChange('evacuation', e.target.value)}
                                placeholder="Primary: Covered Court behind the church.&#10;Path: Avoid the creek side road."
                                className="w-full p-4 rounded-xl border border-border bg-surface-2 text-text focus-visible:outline-2 focus-visible:outline-focus-ring resize-y"
                            />
                        </div>
                        <div className="hidden print:block whitespace-pre-wrap mt-6">{planData.evacuation || '(None listed)'}</div>
                    </div>
                )}

                {currentStep.id === 'review' && (
                    <div className="print:block">
                        <h2 className="text-2xl font-bold mb-6 text-text flex items-center gap-2"><CheckCircle2 className="text-success"/> Plan Complete</h2>
                        <Callout variant="success" className="mb-6 print:hidden" title="Ready to print">
                            Your family plan is saved locally on this device. Review the details below.
                        </Callout>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-text mb-1 border-b pb-1">Members</h3>
                                <p className="whitespace-pre-wrap text-text-muted">{planData.members || '(None)'}</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-text mb-1 border-b pb-1">Meeting Points</h3>
                                <p className="whitespace-pre-wrap text-text-muted">{planData.meetingPoints || '(None)'}</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-text mb-1 border-b pb-1">Emergency Contacts</h3>
                                <p className="whitespace-pre-wrap text-text-muted">{planData.contacts || '(None)'}</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-text mb-1 border-b pb-1">Roles</h3>
                                <p className="whitespace-pre-wrap text-text-muted">{planData.roles || '(None)'}</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-text mb-1 border-b pb-1">Evacuation</h3>
                                <p className="whitespace-pre-wrap text-text-muted">{planData.evacuation || '(None)'}</p>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-3 print:hidden">
                            <Button variant="secondary" onClick={() => setCurrentStepIndex(0)} className="flex-1">Edit Plan</Button>
                            <Button variant="primary" icon={Printer} onClick={handlePrint} className="flex-1">Print Plan</Button>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-between print:hidden">
                    {currentStepIndex > 0 ? (
                        <Button variant="secondary" icon={ArrowLeft} onClick={handlePrev}>Back</Button>
                    ) : <div></div>}

                    {currentStepIndex < STEPS.length - 1 && (
                        <Button variant="primary" onClick={handleNext}>
                            Next <ArrowRight size={20} className="ml-2" />
                        </Button>
                    )}
                </div>

            </div>
            
            {/* Privacy Disclaimer */}
            <div className="mt-8 text-center text-sm text-text-muted print:hidden">
                <Shield size={16} className="inline mr-1" />
                Your data is saved securely on this device only. We do not store this on any server.
            </div>
        </div>
    );
}
