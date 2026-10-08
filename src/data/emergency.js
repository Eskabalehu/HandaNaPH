// Emergency data structure
// Source-backed emergency procedures from official Philippine and international authorities.

export const emergencySituations = [
    {
        slug: 'sunog',
        title: 'Sunog',
        icon: 'Flame',
        call911: true,
        steps: [
            {
                id: 1,
                text: 'Stay low and crawl to the nearest exit.',
                why: 'Smoke rises. Crawling keeps you in the clearer, cooler air near the floor.',
                severity: 'critical'
            },
            {
                id: 2,
                text: 'Test doors with the back of your hand before opening.',
                why: 'If the door is hot, fire is on the other side. Use an alternate exit.',
                severity: 'critical'
            },
            {
                id: 3,
                text: 'Once outside, stay outside.',
                why: 'Never go back inside a burning building for belongings or pets.',
                severity: 'high'
            }
        ],
        source: {
            name: 'Bureau of Fire Protection (BFP)',
            url: 'https://bfp.gov.ph'
        }
    },
    {
        slug: 'lindol',
        title: 'Lindol',
        icon: 'Waves',
        call911: true,
        steps: [
            {
                id: 1,
                text: 'Drop, Cover, and Hold On.',
                why: 'This protects you from falling objects and keeps you stable during violent shaking.',
                severity: 'critical'
            },
            {
                id: 2,
                text: 'Stay away from windows, glass, and outside doors.',
                why: 'Glass and heavy objects can shatter and fall during an earthquake.',
                severity: 'critical'
            },
            {
                id: 3,
                text: 'Do not use elevators. Evacuate using stairs once shaking stops.',
                why: 'Power outages are common, and you may get trapped inside an elevator.',
                severity: 'high'
            }
        ],
        source: {
            name: 'DOST-PHIVOLCS',
            url: 'https://www.phivolcs.dost.gov.ph/'
        }
    },
    {
        slug: 'baha',
        title: 'Baha',
        icon: 'Droplets',
        call911: true,
        steps: [
            {
                id: 1,
                text: 'Move immediately to higher ground.',
                why: 'Flash floods can develop rapidly and sweep away people and vehicles.',
                severity: 'critical'
            },
            {
                id: 2,
                text: 'Turn off main electrical switches and valves.',
                why: 'This prevents electrocution and structural fires if water enters your home.',
                severity: 'critical'
            },
            {
                id: 3,
                text: 'Do not walk or drive through moving water.',
                why: 'Just 6 inches of moving water can knock you down. 12 inches can sweep away a car.',
                severity: 'high'
            }
        ],
        source: {
            name: 'NDRRMC',
            url: 'https://ndrrmc.gov.ph/'
        }
    },
    {
        slug: 'medical',
        title: 'Medical Emergency',
        icon: 'HeartPulse',
        call911: true,
        steps: [
            {
                id: 1,
                text: 'Assess the scene for immediate danger.',
                why: 'You cannot help others if you become a victim yourself.',
                severity: 'critical'
            },
            {
                id: 2,
                text: 'Call 911 or local emergency services immediately.',
                why: 'Professional medical responders must be dispatched as quickly as possible.',
                severity: 'critical'
            },
            {
                id: 3,
                text: 'Do not move the injured person unless absolutely necessary.',
                why: 'Moving a person with a severe injury (especially neck or spine) can cause permanent damage.',
                severity: 'high'
            }
        ],
        source: {
            name: 'Philippine Red Cross',
            url: 'https://redcross.org.ph'
        }
    },
    {
        slug: 'bagyo',
        title: 'Bagyo',
        icon: 'Wind',
        call911: true,
        steps: [
            {
                id: 1,
                text: 'Stay indoors and away from windows.',
                why: 'Flying debris and strong winds are extremely dangerous.',
                severity: 'critical'
            },
            {
                id: 2,
                text: 'Monitor official weather updates from PAGASA.',
                why: 'Staying informed helps you make decisions if evacuation becomes necessary.',
                severity: 'critical'
            },
            {
                id: 3,
                text: 'Prepare your Go-Bag and fully charge mobile devices.',
                why: 'Power outages are likely, and you may need to evacuate on short notice.',
                severity: 'high'
            }
        ],
        source: {
            name: 'DOST-PAGASA',
            url: 'https://bagong.pagasa.dost.gov.ph/'
        }
    }
];

export const getEmergencyBySlug = (slug) => {
    return emergencySituations.find(s => s.slug === slug);
};
