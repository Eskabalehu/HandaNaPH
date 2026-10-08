import { useState, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router';
import EmergencyProgress from './EmergencyProgress';
import EmergencyStep from './EmergencyStep';
import EmergencyScriptCard from './EmergencyScriptCard';
import EmergencyCallBar from './EmergencyCallBar';
import CprTool from './CprTool';
import { getEmergencyBySlug } from '../../data/emergency';

export default function EmergencyFlow() {
    const { situation } = useParams();
    const navigate = useNavigate();
    const emergency = getEmergencyBySlug(situation);
    const [currentStep, setCurrentStep] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const stepHeadingRef = useRef(null);

    // Redirect if situation not found
    useEffect(() => {
        if (!emergency) {
            navigate('/emergency');
        }
    }, [emergency, navigate]);

    // Announce step change to screen readers
    useEffect(() => {
        if (stepHeadingRef.current) {
            stepHeadingRef.current.focus();
        }
    }, [currentStep]);

    if (!emergency) {
        return null;
    }

    const totalSteps = emergency.steps.length;
    const currentStepData = emergency.steps[currentStep];

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsComplete(true);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleExit = () => {
        navigate('/emergency');
    };

    const handleRestart = () => {
        setCurrentStep(0);
        setIsComplete(false);
    };

    // Completion state
    if (isComplete) {
        return (
            <div className="min-h-screen pb-24">
                <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 py-8 md:py-12">
                    <div className="flex items-center justify-between mb-6">
                        <button
                            onClick={handleExit}
                            className="text-text-muted hover:text-text transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            ← Exit
                        </button>
                    </div>

                    <div className="text-center py-12">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success-tint text-success flex items-center justify-center">
                            <svg 
                                className="w-10 h-10" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M5 13l4 4L19 7" 
                                />
                            </svg>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                            Steps Complete
                        </h2>
                        <p className="text-text-muted text-lg mb-8 max-w-md mx-auto">
                            You have completed all emergency steps for {emergency.title}.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={handleRestart}
                                className="min-h-[56px] px-8 py-4 rounded-xl bg-surface border border-border text-text font-bold text-lg transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                            >
                                Restart
                            </button>
                            <Link
                                to="/"
                                className="min-h-[56px] px-8 py-4 rounded-xl bg-learn-solid text-on-solid font-bold text-lg text-center transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                            >
                                Return Home
                            </Link>
                        </div>
                    </div>
                </div>

                <EmergencyCallBar />
            </div>
        );
    }

    // Active flow state
    return (
        <div className="min-h-screen pb-24">
            <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={handleExit}
                        className="text-text-muted hover:text-text transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    >
                        ← Exit
                    </button>
                </div>

                <EmergencyProgress currentStep={currentStep + 1} totalSteps={totalSteps} />

                <EmergencyStep 
                    step={currentStepData}
                    stepNumber={currentStep + 1}
                    totalSteps={totalSteps}
                    icon={emergency.icon}
                    ref={stepHeadingRef}
                />

                {/* Show 911 script on first step if applicable */}
                {currentStep === 0 && emergency.call911 && (
                    <EmergencyScriptCard />
                )}

                {/* Show CPR tool for medical emergency */}
                {situation === 'medical' && currentStep === 1 && (
                    <CprTool />
                )}

                <div className="flex gap-3 mt-8">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 0}
                        className="flex-1 min-h-[56px] px-6 py-4 rounded-xl bg-surface border border-border text-text font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        className="flex-1 min-h-[56px] px-6 py-4 rounded-xl bg-learn-solid text-on-solid font-bold text-lg transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    >
                        {currentStep === totalSteps - 1 ? 'Complete' : 'Susunod'}
                    </button>
                </div>
            </div>

            <EmergencyCallBar />
        </div>
    );
}
