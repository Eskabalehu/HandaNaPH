// Practice scenarios and quizzes
// IMPORTANT: Do NOT invent medical or emergency procedures.
// Use only verified content from official sources.
// Questions marked [PLACEHOLDER] require verified content before production use.

export const practiceItems = [
    {
        slug: 'fire-evacuation-scenario',
        title: 'Sunog Evacuation',
        description: 'Practice what to do when you hear a fire alarm',
        type: 'scenario',
        difficulty: 'beginner',
        estimatedTime: '5 min',
        icon: 'Flame',
        questions: [
            {
                id: 1,
                prompt: '[PLACEHOLDER: What should you do first when you hear a fire alarm?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false },
                    { id: 'd', label: '[PLACEHOLDER: Choice D]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Explanation needed]'
            },
            {
                id: 2,
                prompt: '[PLACEHOLDER: How should you move through a smoke-filled room?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Explanation needed]'
            },
            {
                id: 3,
                prompt: '[PLACEHOLDER: What should you do if a door is hot to the touch?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Explanation needed]'
            }
        ]
    },
    {
        slug: 'earthquake-drill',
        title: 'Lindol Drill',
        description: 'Practice drop, cover, and hold on',
        type: 'scenario',
        difficulty: 'beginner',
        estimatedTime: '3 min',
        icon: 'Waves',
        questions: [
            {
                id: 1,
                prompt: '[PLACEHOLDER: What is the first thing to do when an earthquake starts?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Explanation needed]'
            },
            {
                id: 2,
                prompt: '[PLACEHOLDER: Where should you take cover?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Explanation needed]'
            }
        ]
    },
    {
        slug: 'first-aid-basics-quiz',
        title: 'First Aid Basics Quiz',
        description: 'Test your knowledge of basic first aid',
        type: 'quiz',
        difficulty: 'intermediate',
        estimatedTime: '8 min',
        icon: 'Package',
        questions: [
            {
                id: 1,
                prompt: '[PLACEHOLDER: What should you do first when approaching an injured person?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false },
                    { id: 'd', label: '[PLACEHOLDER: Choice D]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Explanation needed]'
            },
            {
                id: 2,
                prompt: '[PLACEHOLDER: How do you check for responsiveness?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Explanation needed]'
            },
            {
                id: 3,
                prompt: '[PLACEHOLDER: When should you call emergency services?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Explanation needed]'
            },
            {
                id: 4,
                prompt: '[PLACEHOLDER: What information should you provide when calling for help?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Explanation needed]'
            }
        ]
    },
    {
        slug: 'flood-safety-scenario',
        title: 'Baha Safety',
        description: 'Practice flood safety procedures',
        type: 'scenario',
        difficulty: 'beginner',
        estimatedTime: '4 min',
        icon: 'Droplets',
        questions: [
            {
                id: 1,
                prompt: '[PLACEHOLDER: What should you do when flood waters start rising?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Explanation needed]'
            },
            {
                id: 2,
                prompt: '[PLACEHOLDER: Why should you avoid walking through floodwater?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Explanation needed]'
            }
        ]
    },
    {
        slug: 'emergency-kit-quiz',
        title: 'Emergency Kit Quiz',
        description: 'Test your knowledge of emergency kit essentials',
        type: 'quiz',
        difficulty: 'beginner',
        estimatedTime: '5 min',
        icon: 'Backpack',
        questions: [
            {
                id: 1,
                prompt: '[PLACEHOLDER: What is the most important item in an emergency kit?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Explanation needed]'
            },
            {
                id: 2,
                prompt: '[PLACEHOLDER: How much water should you store per person?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Explanation needed]'
            },
            {
                id: 3,
                prompt: '[PLACEHOLDER: How often should you check your emergency kit?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Explanation needed]'
            }
        ]
    }
];

// Helper functions
export const getPracticeItemBySlug = (slug) => {
    return practiceItems.find(item => item.slug === slug);
};

export const getPracticeItemsByType = (type) => {
    if (type === 'all') return practiceItems;
    return practiceItems.filter(item => item.type === type);
};

export const getPracticeItemsByDifficulty = (difficulty) => {
    if (difficulty === 'all') return practiceItems;
    return practiceItems.filter(item => item.difficulty === difficulty);
};
