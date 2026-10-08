import { Link } from 'react-router';
import { Briefcase, Users, Home, Bell } from 'lucide-react';
import Card from '../components/ui/Card';

export default function Prepare() {
    return (
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-4" tabIndex={-1}>
                Prepare
            </h1>
            <p className="text-text-muted text-lg mb-8 max-w-2xl">
                Be ready before an emergency strikes. Use these tools to build your readiness plan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to="/prepare/go-bag" className="block focus-visible:outline-2 focus-visible:outline-focus-ring rounded-2xl">
                    <Card variant="interactive" className="h-full">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-prepare-tint text-prepare">
                                <Briefcase size={24} aria-hidden="true" />
                            </div>
                            <h2 className="text-xl font-bold">Go-Bag Builder</h2>
                        </div>
                        <p className="text-text-muted">
                            Create and track your emergency survival kit with items for food, water, and first aid.
                        </p>
                    </Card>
                </Link>

                <Link to="/prepare/family-plan" className="block focus-visible:outline-2 focus-visible:outline-focus-ring rounded-2xl">
                    <Card variant="interactive" className="h-full">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-learn-tint text-learn">
                                <Users size={24} aria-hidden="true" />
                            </div>
                            <h2 className="text-xl font-bold">Family Plan</h2>
                        </div>
                        <p className="text-text-muted">
                            Establish meeting points, contacts, and roles for your family members during a crisis.
                        </p>
                    </Card>
                </Link>

                <Link to="/prepare/home-audit" className="block focus-visible:outline-2 focus-visible:outline-focus-ring rounded-2xl">
                    <Card variant="interactive" className="h-full">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-success-tint text-success">
                                <Home size={24} aria-hidden="true" />
                            </div>
                            <h2 className="text-xl font-bold">Home Safety Audit</h2>
                        </div>
                        <p className="text-text-muted">
                            Review common areas in your home to minimize hazards before an emergency.
                        </p>
                    </Card>
                </Link>

                <Link to="/prepare/drills" className="block focus-visible:outline-2 focus-visible:outline-focus-ring rounded-2xl">
                    <Card variant="interactive" className="h-full">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emergency-tint text-emergency">
                                <Bell size={24} aria-hidden="true" />
                            </div>
                            <h2 className="text-xl font-bold">Drill Reminders</h2>
                        </div>
                        <p className="text-text-muted">
                            Set reminders to practice evacuation routes and test your emergency equipment.
                        </p>
                    </Card>
                </Link>
            </div>
        </div>
    );
}