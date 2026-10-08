// Complete guide data structure for the Learn system
// Source-backed emergency procedures from official Philippine authorities.

export const guides = [
    {
        slug: 'cpr-basics',
        title: 'CPR Basics',
        summary: 'Learn cardiopulmonary resuscitation essentials',
        category: 'first-aid',
        severity: 'critical',
        readTime: '5 min',
        offlineReady: true,
        icon: 'HeartPulse',
        lastReviewed: 'Unverified',
        sections: {
            before: [
                {
                    id: 1,
                    action: '[UNVERIFIED MEDICAL CONTENT: Check for responsiveness]',
                    why: '[PLACEHOLDER]'
                }
            ],
            during: [
                {
                    id: 1,
                    action: '[UNVERIFIED MEDICAL CONTENT: Start chest compressions]',
                    why: '[PLACEHOLDER]'
                }
            ],
            after: [
                {
                    id: 1,
                    action: '[UNVERIFIED MEDICAL CONTENT: Continue until help arrives]',
                    why: '[PLACEHOLDER]'
                }
            ]
        },
        do: ['[PLACEHOLDER]'],
        dont: ['[PLACEHOLDER]'],
        sources: [
            {
                name: '[PLACEHOLDER: Pending medical review]',
                url: '#'
            }
        ]
    },
    {
        slug: 'fire-safety',
        title: 'Sunog Safety',
        summary: 'Fire prevention and evacuation procedures',
        category: 'disasters',
        severity: 'critical',
        readTime: '8 min',
        offlineReady: true,
        icon: 'Flame',
        lastReviewed: '2026-10-08',
        sections: {
            before: [
                {
                    id: 1,
                    action: 'Install smoke alarms and check them monthly.',
                    why: 'Early detection is the most effective way to survive a fire.'
                },
                {
                    id: 2,
                    action: 'Create and practice an escape plan.',
                    why: 'Knowing two ways out of every room saves critical seconds during an emergency.'
                }
            ],
            during: [
                {
                    id: 1,
                    action: 'Stay low and crawl to the exit.',
                    why: 'Smoke and toxic gases rise; the cleanest air is near the floor.'
                },
                {
                    id: 2,
                    action: 'Test doors with the back of your hand before opening.',
                    why: 'A hot door indicates fire on the other side. Do not open it.'
                }
            ],
            after: [
                {
                    id: 1,
                    action: 'Call emergency services (911 or BFP) from outside.',
                    why: 'Do not delay evacuation to make a phone call inside the burning building.'
                }
            ]
        },
        do: [
            'Get out immediately and stay out.',
            'Use stairs, never use elevators.'
        ],
        dont: [
            'Do not hide under beds or in closets.',
            'Do not go back inside for pets or belongings.'
        ],
        sources: [
            {
                name: 'Bureau of Fire Protection (BFP)',
                url: 'https://bfp.gov.ph/'
            }
        ]
    },
    {
        slug: 'earthquake-response',
        title: 'Lindol Response',
        summary: 'What to do during and after an earthquake',
        category: 'disasters',
        severity: 'critical',
        readTime: '6 min',
        offlineReady: true,
        icon: 'Waves',
        lastReviewed: '2026-10-08',
        sections: {
            before: [
                {
                    id: 1,
                    action: 'Secure heavy furniture and appliances to the wall.',
                    why: 'Falling objects are the primary cause of injuries during an earthquake.'
                }
            ],
            during: [
                {
                    id: 1,
                    action: 'Drop, Cover, and Hold On.',
                    why: 'Dropping prevents being knocked down. Covering protects your head from debris.'
                },
                {
                    id: 2,
                    action: 'Stay away from glass, windows, and heavy fixtures.',
                    why: 'These can shatter or fall and cause severe lacerations or trauma.'
                }
            ],
            after: [
                {
                    id: 1,
                    action: 'Expect aftershocks.',
                    why: 'Secondary shocks can bring down already weakened structures.'
                }
            ]
        },
        do: [
            'Stay indoors until the shaking stops.',
            'If outdoors, move to a clear area away from buildings and power lines.'
        ],
        dont: [
            'Do not run outside during the shaking.',
            'Do not use elevators.'
        ],
        sources: [
            {
                name: 'DOST-PHIVOLCS',
                url: 'https://www.phivolcs.dost.gov.ph/'
            }
        ]
    },
    {
        slug: 'flood-safety',
        title: 'Baha Safety',
        summary: 'Flood preparedness and survival guide',
        category: 'disasters',
        severity: 'high',
        readTime: '7 min',
        offlineReady: true,
        icon: 'Droplets',
        lastReviewed: '2026-10-08',
        sections: {
            before: [
                {
                    id: 1,
                    action: 'Know your local evacuation routes and higher ground locations.',
                    why: 'Planning ahead ensures you do not get trapped when waters rise quickly.'
                }
            ],
            during: [
                {
                    id: 1,
                    action: 'Move to higher ground immediately.',
                    why: 'Flash floods can rise several feet in a matter of minutes.'
                },
                {
                    id: 2,
                    action: 'Turn off main utilities and electrical breakers.',
                    why: 'Water and electricity create a severe electrocution hazard.'
                }
            ],
            after: [
                {
                    id: 1,
                    action: 'Wait for official "All Clear" before returning home.',
                    why: 'Floodwaters may have weakened roads, bridges, and building foundations.'
                }
            ]
        },
        do: [
            'Monitor NDRRMC and local weather updates.',
            'Evacuate immediately when instructed by local authorities.'
        ],
        dont: [
            'Do not walk, swim, or drive through floodwaters.',
            'Do not touch electrical equipment if you are wet.'
        ],
        sources: [
            {
                name: 'NDRRMC',
                url: 'https://ndrrmc.gov.ph/'
            }
        ]
    },
    {
        slug: 'typhoon-preparedness',
        title: 'Bagyo Preparedness',
        summary: 'Stay safe before, during, and after typhoons',
        category: 'disasters',
        severity: 'high',
        readTime: '10 min',
        offlineReady: true,
        icon: 'Wind',
        lastReviewed: '2026-10-08',
        sections: {
            before: [
                {
                    id: 1,
                    action: 'Prepare an emergency Go-Bag.',
                    why: 'You need supplies ready in case immediate evacuation is required.'
                },
                {
                    id: 2,
                    action: 'Secure loose items outdoors and board up windows.',
                    why: 'Strong winds can turn ordinary objects into dangerous projectiles.'
                }
            ],
            during: [
                {
                    id: 1,
                    action: 'Stay indoors and away from windows.',
                    why: 'Flying debris can easily shatter glass and cause severe injury.'
                },
                {
                    id: 2,
                    action: 'Monitor PAGASA updates using a battery-powered radio.',
                    why: 'Power and cell towers may fail, but AM/FM broadcasts remain active.'
                }
            ],
            after: [
                {
                    id: 1,
                    action: 'Watch out for live wires and weakened structures.',
                    why: 'Typhoons cause widespread infrastructure damage that remains hazardous.'
                }
            ]
        },
        do: [
            'Charge all devices and power banks before the storm hits.',
            'Store enough drinking water for at least 3 days.'
        ],
        dont: [
            'Do not go outside during the calm eye of the storm.',
            'Do not wade through floodwaters.'
        ],
        sources: [
            {
                name: 'DOST-PAGASA',
                url: 'https://bagong.pagasa.dost.gov.ph/'
            }
        ]
    },
    {
        slug: 'first-aid-essentials',
        title: 'First Aid Essentials',
        summary: 'Basic medical response for common injuries',
        category: 'first-aid',
        severity: 'high',
        readTime: '12 min',
        offlineReady: true,
        icon: 'Package',
        lastReviewed: 'Unverified',
        sections: {
            before: [
                {
                    id: 1,
                    action: '[UNVERIFIED MEDICAL CONTENT: Keep first aid kit stocked]',
                    why: '[PLACEHOLDER]'
                }
            ],
            during: [
                {
                    id: 1,
                    action: '[UNVERIFIED MEDICAL CONTENT: Assess the situation safely]',
                    why: '[PLACEHOLDER]'
                }
            ],
            after: [
                {
                    id: 1,
                    action: '[UNVERIFIED MEDICAL CONTENT: Document the incident]',
                    why: '[PLACEHOLDER]'
                }
            ]
        },
        do: ['[PLACEHOLDER]'],
        dont: ['[PLACEHOLDER]'],
        sources: [
            {
                name: '[PLACEHOLDER: Pending medical review]',
                url: '#'
            }
        ]
    },
    {
        slug: 'emergency-kits',
        title: 'Emergency Kits',
        summary: 'Build your go-bag and home emergency supplies',
        category: 'prepare',
        severity: 'important',
        readTime: '8 min',
        offlineReady: true,
        icon: 'Backpack',
        lastReviewed: '2026-10-08',
        sections: {
            before: [
                {
                    id: 1,
                    action: 'Gather 3 days of non-perishable food and water.',
                    why: 'Relief operations may take up to 72 hours to reach you during a major disaster.'
                }
            ],
            during: [
                {
                    id: 1,
                    action: 'Keep your Go-Bag accessible near an exit.',
                    why: 'You must be able to grab it in seconds if ordered to evacuate.'
                }
            ],
            after: [
                {
                    id: 1,
                    action: 'Review and replace expired items every 6 months.',
                    why: 'Food, batteries, and medications lose effectiveness over time.'
                }
            ]
        },
        do: [
            'Include important documents in a waterproof container.',
            'Pack a first-aid kit and necessary prescription medications.'
        ],
        dont: [
            'Do not pack overly heavy items that slow down your evacuation.',
            'Do not forget supplies for pets or infants.'
        ],
        sources: [
            {
                name: 'NDRRMC Preparedness Guides',
                url: 'https://ndrrmc.gov.ph/'
            }
        ]
    },
    {
        slug: 'communication-plan',
        title: 'Communication Plan',
        summary: 'Stay connected with family during emergencies',
        category: 'prepare',
        severity: 'important',
        readTime: '6 min',
        offlineReady: true,
        icon: 'Phone',
        lastReviewed: '2026-10-08',
        sections: {
            before: [
                {
                    id: 1,
                    action: 'Write down emergency contacts on a physical card.',
                    why: 'Your mobile phone may die or get lost during an evacuation.'
                }
            ],
            during: [
                {
                    id: 1,
                    action: 'Use SMS text messaging instead of voice calls.',
                    why: 'Text messages require less bandwidth and are more likely to go through congested networks.'
                }
            ],
            after: [
                {
                    id: 1,
                    action: 'Mark yourself "Safe" on social platforms if internet is available.',
                    why: 'This reduces panic and prevents emergency responders from unnecessarily searching for you.'
                }
            ]
        },
        do: [
            'Establish an out-of-town contact person for the family to report to.',
            'Agree on a physical meeting place in case communication fails completely.'
        ],
        dont: [
            'Do not tie up emergency lines for non-life-threatening questions.',
            'Do not spread unverified rumors via text or social media.'
        ],
        sources: [
            {
                name: 'NDRRMC Preparedness Guides',
                url: 'https://ndrrmc.gov.ph/'
            }
        ]
    }
];

export const featuredGuides = guides.slice(0, 8);

export const getGuideBySlug = (slug) => {
    return guides.find(g => g.slug === slug);
};

export const getGuidesByCategory = (category) => {
    if (category === 'all') return guides;
    return guides.filter(g => g.category === category);
};

export const getGuidesBySeverity = (severity) => {
    if (severity === 'all') return guides;
    return guides.filter(g => g.severity === severity);
};

export const searchGuides = (query) => {
    const lowerQuery = query.toLowerCase();
    return guides.filter(g => 
        g.title.toLowerCase().includes(lowerQuery) ||
        g.summary.toLowerCase().includes(lowerQuery) ||
        g.category.toLowerCase().includes(lowerQuery)
    );
};
