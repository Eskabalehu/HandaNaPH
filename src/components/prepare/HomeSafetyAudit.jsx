import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Home, CheckCircle2, RotateCcw } from 'lucide-react';
import Callout from '../ui/Callout';
import Button from '../ui/Button';
import { AUDIT_AREAS } from '../../data/prepareData';

const STORAGE_KEY = 'handanaph-home-audit';

export default function HomeSafetyAudit() {
    const [checkedItems, setCheckedItems] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedItems));
        } catch {
            // ignore
        }
    }, [checkedItems]);

    const handleToggle = (id) => {
        setCheckedItems(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            }
            return [...prev, id];
        });
    };

    const handleReset = () => {
        if(window.confirm('Are you sure you want to reset your audit progress?')) {
            setCheckedItems([]);
        }
    };

    const totalItems = AUDIT_AREAS.reduce((acc, area) => acc + area.items.length, 0);
    const completedItems = checkedItems.length;
    const percentage = Math.round((completedItems / totalItems) * 100) || 0;

    return (
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
            <nav className="mb-6 print:hidden" aria-label="Breadcrumb">
                <Link to="/prepare" className="text-text-muted hover:text-text transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring">
                    ← Bumalik sa Prepare
                </Link>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-success-tint text-success">
                        <Home size={24} aria-hidden="true" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-text" tabIndex={-1}>Home Safety Audit</h1>
                    </div>
                </div>
                <Button variant="secondary" icon={RotateCcw} onClick={handleReset} className="print:hidden">
                    Reset Checklist
                </Button>
            </div>
            
            <p className="text-text-muted text-lg mb-8 max-w-2xl">
                Tiyaking ligtas ang bawat bahagi ng inyong bahay bago dumating ang sakuna.
            </p>

            <Callout variant="tip" className="mb-8" title="Calm Preparedness">
                Checklist progress: <strong>{percentage}%</strong> completed. 
                Focus on making small improvements over time.
            </Callout>

            <div className="space-y-8">
                {AUDIT_AREAS.map(area => (
                    <section key={area.id} className="bg-surface p-6 rounded-2xl border border-border">
                        <h2 className="text-xl font-bold text-text mb-4 border-b border-border pb-2">
                            {area.title}
                        </h2>
                        <div className="space-y-3">
                            {area.items.map(item => {
                                const isChecked = checkedItems.includes(item.id);
                                return (
                                    <label 
                                        key={item.id} 
                                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-2 transition-colors cursor-pointer"
                                    >
                                        <div className="relative flex items-center justify-center mt-0.5">
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={() => handleToggle(item.id)}
                                                className="peer sr-only"
                                            />
                                            <div className="w-6 h-6 rounded border-2 border-text-muted peer-checked:bg-success peer-checked:border-success peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-focus-ring flex items-center justify-center transition-all">
                                                {isChecked && <CheckCircle2 className="w-4 h-4 text-white" />}
                                            </div>
                                        </div>
                                        <span className={`text-base flex-1 ${isChecked ? 'text-text-muted line-through' : 'text-text'}`}>
                                            {item.text}
                                        </span>
                                    </label>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
