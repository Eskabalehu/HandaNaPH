export const goBagCategories = [
    {
        id: 'water-food',
        title: 'Water & Food',
        icon: 'Droplets',
        items: [
            { id: 'w1', name: 'Water (1 gallon per person per day)', essential: true },
            { id: 'f1', name: 'Non-perishable food (canned goods)', essential: true },
            { id: 'f2', name: 'Manual can opener', essential: true },
            { id: 'f3', name: 'High-energy snacks (protein bars)', essential: false }
        ]
    },
    {
        id: 'first-aid',
        title: 'First Aid & Health',
        icon: 'BriefcaseMedical',
        items: [
            { id: 'fa1', name: 'First Aid Kit (bandages, antiseptics)', essential: true },
            { id: 'fa2', name: 'Prescription medications (7-day supply)', essential: true },
            { id: 'fa3', name: 'Over-the-counter meds (pain relievers)', essential: false },
            { id: 'fa4', name: 'Face masks / N95 masks', essential: true },
            { id: 'fa5', name: 'Personal hygiene items', essential: false }
        ]
    },
    {
        id: 'tools-supplies',
        title: 'Tools & Supplies',
        icon: 'Wrench',
        items: [
            { id: 'ts1', name: 'Flashlight (with extra batteries)', essential: true },
            { id: 'ts2', name: 'Battery-powered or hand-crank radio', essential: true },
            { id: 'ts3', name: 'Multi-tool or pocket knife', essential: true },
            { id: 'ts4', name: 'Whistle (to signal for help)', essential: true },
            { id: 'ts5', name: 'Duct tape', essential: false },
            { id: 'ts6', name: 'Garbage bags', essential: false }
        ]
    },
    {
        id: 'documents',
        title: 'Important Documents',
        icon: 'FolderOpen',
        items: [
            { id: 'd1', name: 'Copies of IDs (Passport, Driver\'s License)', essential: true },
            { id: 'd2', name: 'Insurance policies and bank records', essential: true },
            { id: 'd3', name: 'Emergency contact list', essential: true },
            { id: 'd4', name: 'Cash (in small denominations)', essential: true }
        ]
    },
    {
        id: 'clothing',
        title: 'Clothing & Bedding',
        icon: 'Shirt',
        items: [
            { id: 'c1', name: 'Sturdy shoes / boots', essential: true },
            { id: 'c2', name: 'Change of clothes (weather appropriate)', essential: true },
            { id: 'c3', name: 'Blanket or sleeping bag', essential: false },
            { id: 'c4', name: 'Rain gear / Poncho', essential: false }
        ]
    }
];
