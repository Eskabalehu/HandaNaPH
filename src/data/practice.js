// Practice scenarios and quizzes
// Source-backed learning content for preparedness.

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
                prompt: 'What is the most effective way to move through a smoke-filled room?',
                choices: [
                    { id: 'a', label: 'Run as fast as you can to the exit', correct: false },
                    { id: 'b', label: 'Stay low and crawl to the exit', correct: true },
                    { id: 'c', label: 'Walk normally while covering your mouth', correct: false }
                ],
                explanation: 'Smoke and toxic gases rise. Crawling keeps you in the clearer, cooler air near the floor, which is safer to breathe.'
            },
            {
                id: 2,
                prompt: 'What should you do before opening a closed door during a fire?',
                choices: [
                    { id: 'a', label: 'Test the door with the back of your hand', correct: true },
                    { id: 'b', label: 'Open it quickly to see if there is fire', correct: false },
                    { id: 'c', label: 'Kick the door open', correct: false }
                ],
                explanation: 'Testing the door with the back of your hand lets you feel if there is intense heat (fire) on the other side. If it is hot, do not open it.'
            },
            {
                id: 3,
                prompt: 'Once you have safely evacuated a burning building, what is your next step?',
                choices: [
                    { id: 'a', label: 'Go back inside to grab your pets or valuables', correct: false },
                    { id: 'b', label: 'Call emergency services (911 or BFP) and stay outside', correct: true },
                    { id: 'c', label: 'Wait near the door for others', correct: false }
                ],
                explanation: 'Never re-enter a burning building. Call for professional help once you are at a safe distance.'
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
                prompt: 'What are the three essential actions to take the moment an earthquake starts?',
                choices: [
                    { id: 'a', label: 'Run, Hide, and Wait', correct: false },
                    { id: 'b', label: 'Drop, Cover, and Hold On', correct: true },
                    { id: 'c', label: 'Stand in a doorway', correct: false }
                ],
                explanation: 'Dropping prevents you from being knocked down, covering protects your head and neck from falling debris, and holding on keeps your shelter stable.'
            },
            {
                id: 2,
                prompt: 'If you are inside a tall building during an earthquake, what should you avoid?',
                choices: [
                    { id: 'a', label: 'Taking cover under a sturdy desk', correct: false },
                    { id: 'b', label: 'Using the elevators to evacuate', correct: true },
                    { id: 'c', label: 'Staying away from windows', correct: false }
                ],
                explanation: 'Elevators can lose power or sustain damage, trapping you inside. Always use the stairs after the shaking has stopped.'
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
                prompt: '[UNVERIFIED MEDICAL CONTENT: What should you do first when approaching an injured person?]',
                choices: [
                    { id: 'a', label: '[PLACEHOLDER: Choice A]', correct: false },
                    { id: 'b', label: '[PLACEHOLDER: Choice B]', correct: true },
                    { id: 'c', label: '[PLACEHOLDER: Choice C]', correct: false }
                ],
                explanation: '[PLACEHOLDER: Pending medical review]'
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
                prompt: 'What should you do immediately when flood waters start rising rapidly in your area?',
                choices: [
                    { id: 'a', label: 'Wait for the water to enter your house before acting', correct: false },
                    { id: 'b', label: 'Move to higher ground and evacuate if instructed', correct: true },
                    { id: 'c', label: 'Try to drive your car to a safer place through the flood', correct: false }
                ],
                explanation: 'Flash floods are highly unpredictable and fast-moving. You must move to higher ground immediately.'
            },
            {
                id: 2,
                prompt: 'Why must you turn off your main electrical switch if water is about to enter your home?',
                choices: [
                    { id: 'a', label: 'To save money on electricity', correct: false },
                    { id: 'b', label: 'To prevent electrocution and structural fires', correct: true },
                    { id: 'c', label: 'To stop appliances from getting wet', correct: false }
                ],
                explanation: 'Water is highly conductive. Active electrical outlets submerged in water can electrocute anyone nearby and start fires.'
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
                prompt: 'How many days worth of food and water should an emergency Go-Bag contain?',
                choices: [
                    { id: 'a', label: 'At least 1 day', correct: false },
                    { id: 'b', label: 'At least 3 days', correct: true },
                    { id: 'c', label: 'At least 7 days', correct: false }
                ],
                explanation: 'Standard disaster preparedness guidelines (like those from NDRRMC) recommend having enough supplies to survive independently for at least 72 hours (3 days) while waiting for relief.'
            },
            {
                id: 2,
                prompt: 'Why should you include physical copies of important documents in your kit?',
                choices: [
                    { id: 'a', label: 'Because mobile devices may run out of battery or get lost', correct: true },
                    { id: 'b', label: 'Because digital copies are illegal', correct: false },
                    { id: 'c', label: 'Because paper is waterproof', correct: false }
                ],
                explanation: 'During emergencies, power outages are common and electronics can fail or be lost. Physical copies in a waterproof container ensure you retain your identification.'
            }
        ]
    }
];

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
