import { useState, useEffect, useMemo } from 'react';
import { Briefcase, CheckCircle2, Plus, Trash2, Printer } from 'lucide-react';
import { goBagCategories } from '../../data/goBag';
import Button from '../ui/Button';
import Callout from '../ui/Callout';

const STORAGE_KEY = 'handanaph-gobag';

export default function GoBagBuilder() {
    const [bagState, setBagState] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : { checkedItems: [], customItems: [] };
        } catch {
            return { checkedItems: [], customItems: [] };
        }
    });

    const [newItemText, setNewItemText] = useState('');
    const [selectedCategoryForNew, setSelectedCategoryForNew] = useState(goBagCategories[0].id);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(bagState));
        } catch {
            // Ignore write errors
        }
    }, [bagState]);

    const handleToggleItem = (itemId) => {
        setBagState(prev => {
            const isChecked = prev.checkedItems.includes(itemId);
            if (isChecked) {
                return { ...prev, checkedItems: prev.checkedItems.filter(id => id !== itemId) };
            } else {
                return { ...prev, checkedItems: [...prev.checkedItems, itemId] };
            }
        });
    };

    const handleAddCustomItem = (e) => {
        e.preventDefault();
        if (!newItemText.trim()) return;

        const newItem = {
            id: `custom_${Date.now()}`,
            categoryId: selectedCategoryForNew,
            name: newItemText.trim(),
            essential: false
        };

        setBagState(prev => ({
            ...prev,
            customItems: [...prev.customItems, newItem],
            checkedItems: [...prev.checkedItems, newItem.id] // Auto-check new items
        }));
        setNewItemText('');
    };

    const handleDeleteCustomItem = (itemId) => {
        setBagState(prev => ({
            ...prev,
            customItems: prev.customItems.filter(item => item.id !== itemId),
            checkedItems: prev.checkedItems.filter(id => id !== itemId)
        }));
    };

    const { totalItems, checkedCount, percentage } = useMemo(() => {
        const defaultTotal = goBagCategories.reduce((acc, cat) => acc + cat.items.length, 0);
        const total = defaultTotal + bagState.customItems.length;
        const checked = bagState.checkedItems.length;
        const pct = total === 0 ? 0 : Math.round((checked / total) * 100);
        
        return { totalItems: total, checkedCount: checked, percentage: pct };
    }, [bagState]);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="w-full max-w-[1000px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 print:hidden">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-prepare-tint text-prepare">
                            <Briefcase size={24} aria-hidden="true" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-text" tabIndex={-1}>
                            Go-Bag Builder
                        </h1>
                    </div>
                    <p className="text-text-muted text-lg max-w-2xl">
                        Ihanda ang iyong emergency go-bag. I-check ang mga items na meron ka na. 
                        Ise-save ito nang awtomatiko sa iyong device.
                    </p>
                </div>
                <Button variant="secondary" icon={Printer} onClick={handlePrint}>
                    Print Checklist
                </Button>
            </div>

            {/* Print Header (Visible only on print) */}
            <div className="hidden print:block mb-8 border-b-2 border-black pb-4">
                <h1 className="text-4xl font-bold mb-2">Emergency Go-Bag Checklist</h1>
                <p className="text-gray-600">Generated from HandaNaPH | handanaph.org</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8 p-6 rounded-2xl bg-surface border border-border print:hidden">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-text">Progress ng Iyong Go-Bag</h2>
                    <span className="text-2xl font-bold text-prepare">{percentage}%</span>
                </div>
                <div className="w-full h-4 bg-surface-2 rounded-full overflow-hidden border border-border mb-2" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
                    <div 
                        className="h-full bg-prepare-solid transition-all duration-500 ease-out"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
                <p className="text-sm text-text-muted">
                    {checkedCount} out of {totalItems} items completed
                </p>
            </div>

            {/* Add Custom Item Form */}
            <div className="mb-8 p-5 md:p-6 rounded-2xl bg-surface-2 border border-border print:hidden">
                <h3 className="text-lg font-bold text-text mb-4">Magdagdag ng Iyong Sariling Item</h3>
                <form onSubmit={handleAddCustomItem} className="flex flex-col md:flex-row gap-3">
                    <input
                        type="text"
                        value={newItemText}
                        onChange={(e) => setNewItemText(e.target.value)}
                        placeholder="Pangalan ng item (hal. Gamot ni lola)"
                        className="flex-1 min-h-[48px] px-4 rounded-xl border border-border bg-surface text-text placeholder:text-text-muted focus-visible:outline-2 focus-visible:outline-focus-ring"
                        required
                    />
                    <select
                        value={selectedCategoryForNew}
                        onChange={(e) => setSelectedCategoryForNew(e.target.value)}
                        className="min-h-[48px] px-4 rounded-xl border border-border bg-surface text-text focus-visible:outline-2 focus-visible:outline-focus-ring"
                    >
                        {goBagCategories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.title}</option>
                        ))}
                    </select>
                    <Button type="submit" variant="prepare" icon={Plus}>
                        Add Item
                    </Button>
                </form>
            </div>

            <Callout variant="warning" className="mb-8 print:hidden" title="Mahalagang Paalala">
                Siguraduhing sapat ang inyong supply para sa hindi bababa sa 3 araw (72 oras) para sa bawat miyembro ng pamilya.
            </Callout>

            {/* Categories */}
            <div className="space-y-8">
                {goBagCategories.map(category => {
                    const defaultItems = category.items;
                    const customItems = bagState.customItems.filter(item => item.categoryId === category.id);
                    const allItems = [...defaultItems, ...customItems];
                    
                    if (allItems.length === 0) return null;

                    const catCheckedCount = allItems.filter(i => bagState.checkedItems.includes(i.id)).length;
                    const isCatComplete = catCheckedCount === allItems.length;

                    return (
                        <section key={category.id} className="print:break-inside-avoid">
                            <div className="flex items-center justify-between mb-4 pb-2 border-b border-border print:border-black">
                                <h2 className="text-2xl font-bold text-text flex items-center gap-2">
                                    {category.title}
                                    {isCatComplete && <CheckCircle2 className="text-success w-6 h-6 print:hidden" />}
                                </h2>
                                <span className="text-text-muted font-medium print:hidden">
                                    {catCheckedCount} / {allItems.length}
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                {allItems.map(item => {
                                    const isChecked = bagState.checkedItems.includes(item.id);
                                    const isCustom = item.id.startsWith('custom_');
                                    
                                    return (
                                        <label 
                                            key={item.id} 
                                            className={`flex items-start p-4 rounded-xl border-2 transition-all cursor-pointer ${
                                                isChecked 
                                                    ? 'bg-success-tint border-success/30 print:border-black' 
                                                    : 'bg-surface border-border hover:border-prepare/40 print:border-gray-300'
                                            }`}
                                        >
                                            <div className="relative flex items-center justify-center mt-0.5">
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={() => handleToggleItem(item.id)}
                                                    className="peer sr-only"
                                                />
                                                <div className="w-6 h-6 rounded border-2 border-text-muted peer-checked:bg-success peer-checked:border-success peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-focus-ring flex items-center justify-center transition-all print:border-black print:peer-checked:bg-white print:peer-checked:border-black">
                                                    {isChecked && <CheckCircle2 className="w-4 h-4 text-white print:text-black" />}
                                                </div>
                                            </div>
                                            
                                            <div className="ml-3 flex-1">
                                                <div className="flex items-start justify-between gap-2">
                                                    <div>
                                                        <span className={`font-medium leading-tight ${isChecked ? 'text-text line-through opacity-70 print:no-underline print:opacity-100' : 'text-text'}`}>
                                                            {item.name}
                                                        </span>
                                                        {item.essential && (
                                                            <span className="ml-2 inline-flex text-[10px] font-bold tracking-wider uppercase text-emergency-strong bg-emergency-tint px-1.5 rounded print:hidden">
                                                                Essential
                                                            </span>
                                                        )}
                                                    </div>
                                                    {isCustom && (
                                                        <button 
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleDeleteCustomItem(item.id);
                                                            }}
                                                            className="text-text-muted hover:text-emergency p-1 print:hidden focus-visible:outline-2 focus-visible:outline-focus-ring rounded"
                                                            aria-label={`Delete ${item.name}`}
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </label>
                                    );
                                })}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}
