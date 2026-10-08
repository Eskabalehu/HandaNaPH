// Emergency data structure
// IMPORTANT: Do NOT invent medical, disaster, evacuation, CPR, or other life-safety instructions.
// Use only verified emergency content from official sources.
// Steps below are PLACEHOLDERS - replace with verified instructions before production use.

export const emergencySituations = [
    {
        slug: 'sunog',
        title: 'Sunog',
        icon: 'Flame',
        call911: true,
        steps: [
            {
                id: 1,
                text: '[PLACEHOLDER: Verified fire escape instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'critical'
            },
            {
                id: 2,
                text: '[PLACEHOLDER: Verified fire escape instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'critical'
            },
            {
                id: 3,
                text: '[PLACEHOLDER: Verified fire escape instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'high'
            }
        ]
    },
    {
        slug: 'lindol',
        title: 'Lindol',
        icon: 'Waves',
        call911: true,
        steps: [
            {
                id: 1,
                text: '[PLACEHOLDER: Verified earthquake drop-cover-hold instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'critical'
            },
            {
                id: 2,
                text: '[PLACEHOLDER: Verified earthquake evacuation instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'critical'
            },
            {
                id: 3,
                text: '[PLACEHOLDER: Verified post-earthquake safety instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'high'
            }
        ]
    },
    {
        slug: 'baha',
        title: 'Baha',
        icon: 'Droplets',
        call911: true,
        steps: [
            {
                id: 1,
                text: '[PLACEHOLDER: Verified flood safety instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'critical'
            },
            {
                id: 2,
                text: '[PLACEHOLDER: Verified flood evacuation instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'critical'
            },
            {
                id: 3,
                text: '[PLACEHOLDER: Verified flood electrical safety instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'high'
            }
        ]
    },
    {
        slug: 'medical',
        title: 'Medical Emergency',
        icon: 'HeartPulse',
        call911: true,
        steps: [
            {
                id: 1,
                text: '[PLACEHOLDER: Verified medical emergency response instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'critical'
            },
            {
                id: 2,
                text: '[PLACEHOLDER: Verified first aid instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'critical'
            },
            {
                id: 3,
                text: '[PLACEHOLDER: Verified patient monitoring instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'high'
            }
        ]
    },
    {
        slug: 'bagyo',
        title: 'Bagyo',
        icon: 'Wind',
        call911: true,
        steps: [
            {
                id: 1,
                text: '[PLACEHOLDER: Verified typhoon preparation instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'critical'
            },
            {
                id: 2,
                text: '[PLACEHOLDER: Verified typhoon safety instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'critical'
            },
            {
                id: 3,
                text: '[PLACEHOLDER: Verified post-typhoon safety instruction needed]',
                why: '[PLACEHOLDER: Explanation needed]',
                severity: 'high'
            }
        ]
    }
];

export const getEmergencyBySlug = (slug) => {
    return emergencySituations.find(s => s.slug === slug);
};
