const tabs = [
    { id: 'before', label: 'Before' },
    { id: 'during', label: 'During' },
    { id: 'after', label: 'After' }
];

export default function GuideTabs({ activeTab, onTabChange, sections }) {
    // Only show tabs that have content
    const availableTabs = tabs.filter(tab => 
        sections[tab.id] && sections[tab.id].length > 0
    );

    if (availableTabs.length === 0) return null;

    return (
        <div className="mb-8">
            <div 
                className="flex flex-wrap gap-2 border-b border-border"
                role="tablist"
                aria-label="Guide sections"
            >
                {availableTabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        role="tab"
                        aria-selected={activeTab === tab.id}
                        aria-controls={`panel-${tab.id}`}
                        id={`tab-${tab.id}`}
                        className={`px-4 py-3 font-medium text-base border-b-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
                            activeTab === tab.id
                                ? 'border-learn text-learn'
                                : 'border-transparent text-text-muted hover:text-text'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
