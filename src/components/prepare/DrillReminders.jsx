import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Bell, Calendar, Clock, Plus, Trash2, RotateCcw } from 'lucide-react';
import Button from '../ui/Button';
import Callout from '../ui/Callout';
import { DRILL_TYPES } from '../../data/drills';

const STORAGE_KEY = 'handanaph-drill-reminders';

export default function DrillReminders() {
    const [reminders, setReminders] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    const [type, setType] = useState(DRILL_TYPES[0].id);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
        } catch {
            // ignore
        }
    }, [reminders]);

    const handleAdd = (e) => {
        e.preventDefault();
        if (!date || !time) return;

        const newReminder = {
            id: Date.now().toString(),
            type,
            date,
            time,
        };

        setReminders(prev => [...prev, newReminder].sort((a, b) => {
            return new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`);
        }));

        setDate('');
        setTime('');
    };

    const handleDelete = (id) => {
        setReminders(prev => prev.filter(r => r.id !== id));
    };

    const handleClearAll = () => {
        if (window.confirm('Are you sure you want to clear all reminders?')) {
            setReminders([]);
        }
    };

    return (
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
            <nav className="mb-6 print:hidden" aria-label="Breadcrumb">
                <Link to="/prepare" className="text-text-muted hover:text-text transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring">
                    ← Bumalik sa Prepare
                </Link>
            </nav>

            <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emergency-tint text-emergency">
                    <Bell size={24} aria-hidden="true" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-text" tabIndex={-1}>Drill Reminders</h1>
                </div>
            </div>
            
            <p className="text-text-muted text-lg mb-8 max-w-2xl">
                Magtakda ng oras para magsanay kasama ang pamilya. Ang regular na practice ay nagliligtas ng buhay.
            </p>

            <Callout variant="tip" className="mb-8" title="Note">
                These reminders are saved locally to help you keep track of your practice schedule. Background notifications are not currently supported in this browser environment.
            </Callout>

            <form onSubmit={handleAdd} className="bg-surface-2 p-6 rounded-2xl border border-border mb-8">
                <h2 className="text-xl font-bold text-text mb-4">Magdagdag ng Reminder</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="drill-type" className="block text-sm font-medium text-text mb-1">
                            Drill Type
                        </label>
                        <select
                            id="drill-type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full min-h-[48px] px-4 rounded-xl border border-border bg-surface text-text focus-visible:outline-2 focus-visible:outline-focus-ring"
                        >
                            {DRILL_TYPES.map(t => (
                                <option key={t.id} value={t.id}>{t.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label htmlFor="drill-date" className="block text-sm font-medium text-text mb-1 flex items-center gap-2">
                            <Calendar size={16} /> Date
                        </label>
                        <input
                            type="date"
                            id="drill-date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full min-h-[48px] px-4 rounded-xl border border-border bg-surface text-text focus-visible:outline-2 focus-visible:outline-focus-ring"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="drill-time" className="block text-sm font-medium text-text mb-1 flex items-center gap-2">
                            <Clock size={16} /> Time
                        </label>
                        <input
                            type="time"
                            id="drill-time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full min-h-[48px] px-4 rounded-xl border border-border bg-surface text-text focus-visible:outline-2 focus-visible:outline-focus-ring"
                            required
                        />
                    </div>
                </div>

                <Button type="submit" variant="primary" icon={Plus}>
                    I-save ang Reminder
                </Button>
            </form>

            <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-text">Mga Nakatakdang Drill</h2>
                    {reminders.length > 0 && (
                        <Button variant="secondary" icon={RotateCcw} onClick={handleClearAll}>
                            Clear All
                        </Button>
                    )}
                </div>
                
                {reminders.length === 0 ? (
                    <div className="p-8 text-center bg-surface border border-border rounded-2xl">
                        <p className="text-text-muted">Wala pang nakatakdang reminders.</p>
                    </div>
                ) : (
                    reminders.map(reminder => {
                        const typeInfo = DRILL_TYPES.find(t => t.id === reminder.type);
                        const dateObj = new Date(`${reminder.date}T${reminder.time}`);
                        const isPast = dateObj < new Date();

                        return (
                            <div key={reminder.id} className={`flex items-center justify-between p-4 rounded-2xl border ${isPast ? 'bg-surface-2 border-border opacity-75' : 'bg-surface border-prepare/30'}`}>
                                <div>
                                    <h3 className="font-bold text-text text-lg">{typeInfo?.label}</h3>
                                    <div className="flex gap-4 text-text-muted mt-1 text-sm">
                                        <span className="flex items-center gap-1"><Calendar size={14}/> {new Date(reminder.date).toLocaleDateString()}</span>
                                        <span className="flex items-center gap-1"><Clock size={14}/> {reminder.time}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDelete(reminder.id)}
                                    className="p-3 text-text-muted hover:text-emergency bg-surface-2 hover:bg-emergency-tint rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-focus-ring"
                                    aria-label="Delete reminder"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}
