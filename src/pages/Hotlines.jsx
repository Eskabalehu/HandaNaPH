import { useState, useMemo } from 'react';
import { Phone, Copy, CheckCircle2, Search, Info } from 'lucide-react';
import { hotlines, hotlineTypes } from '../data/hotlines';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Callout from '../components/ui/Callout';

export default function Hotlines() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [copiedId, setCopiedId] = useState(null);

    const filteredHotlines = useMemo(() => {
        return hotlines.filter(hotline => {
            const matchesSearch = hotline.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  hotline.number.includes(searchQuery) ||
                                  hotline.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesType = selectedType === 'all' || hotline.type === selectedType;
            return matchesSearch && matchesType;
        });
    }, [searchQuery, selectedType]);

    const handleCopy = (id, number) => {
        navigator.clipboard.writeText(number);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
            {/* Page header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emergency-tint text-emergency">
                        <Phone size={24} aria-hidden="true" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-text" tabIndex={-1}>
                        Hotlines
                    </h1>
                </div>
                <p className="text-text-muted text-lg max-w-2xl">
                    Mga mahalagang numero ng emergency para sa mabilisang tulong. Maaaring tawagan nang walang load ang 911.
                </p>
            </div>

            {/* Emergency Banner */}
            <Callout variant="danger" title="Sa Oras ng Matinding Panganib" className="mb-8">
                Tumawag agad sa <strong className="text-emergency-strong text-lg">911</strong> (National Emergency Hotline).
            </Callout>

            {/* Filters and Search */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} aria-hidden="true" />
                    <input
                        type="text"
                        placeholder="Maghanap ng hotline..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 min-h-[48px] rounded-xl bg-surface border border-border text-text placeholder:text-text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        aria-label="Search hotlines"
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0" role="radiogroup" aria-label="Filter by type">
                    {hotlineTypes.map(type => (
                        <button
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`whitespace-nowrap px-4 py-2 min-h-[48px] rounded-xl font-medium text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
                                selectedType === type.id
                                    ? 'bg-text text-bg'
                                    : 'bg-surface-2 text-text border border-border hover:bg-surface'
                            }`}
                            aria-pressed={selectedType === type.id}
                            role="radio"
                            aria-checked={selectedType === type.id}
                        >
                            {type.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Hotline List */}
            {filteredHotlines.length === 0 ? (
                 <div className="p-8 rounded-2xl bg-surface-2 border border-border text-center">
                    <Info size={32} className="text-text-muted mx-auto mb-3" aria-hidden="true" />
                    <p className="text-text-muted text-lg">
                        Walang nahanap na hotline para sa iyong hinahanap.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {filteredHotlines.map(hotline => (
                        <div key={hotline.id} className="flex flex-col p-5 rounded-2xl bg-surface border border-border transition-all hover:-translate-y-1 hover:shadow-md">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-text leading-tight pr-2">
                                    {hotline.name}
                                </h3>
                                {hotline.verified && (
                                    <Badge variant="verified" title="Verified Hotline">
                                        <CheckCircle2 size={12} className="mr-1 inline" />
                                        Verified
                                    </Badge>
                                )}
                            </div>
                            
                            <p className="text-sm text-text-muted mb-4 flex-grow">
                                {hotline.description}
                            </p>
                            
                            <div className="text-2xl font-bold text-learn mb-4 tracking-wide">
                                {hotline.number}
                            </div>
                            
                            <div className="flex gap-2 mt-auto">
                                <Button 
                                    variant="call" 
                                    icon={Phone} 
                                    className="flex-1"
                                    onClick={() => window.location.href = `tel:${hotline.number.replace(/[^0-9]/g, '')}`}
                                >
                                    Tawagan
                                </Button>
                                <Button 
                                    variant={copiedId === hotline.id ? 'primary' : 'secondary'}
                                    icon={copiedId === hotline.id ? CheckCircle2 : Copy}
                                    onClick={() => handleCopy(hotline.id, hotline.number)}
                                    aria-label="Copy number"
                                >
                                    {copiedId === hotline.id ? 'Copied' : 'Copy'}
                                </Button>
                            </div>
                            
                            <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-text-muted">
                                <span>Type: <span className="capitalize">{hotline.type}</span></span>
                                <span>Last checked: {hotline.lastChecked}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
