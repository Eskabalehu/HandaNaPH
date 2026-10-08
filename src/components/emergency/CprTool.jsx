import { Heart, Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CprTool() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [beatCount, setBeatCount] = useState(0);
    const [soundEnabled, setSoundEnabled] = useState(true);

    // Placeholder - actual beat counter logic to be implemented with verified content
    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setBeatCount(prev => prev + 1);
            }, 60000 / 110); // 110 BPM
            return () => clearInterval(interval);
        }
    }, [isPlaying]);

    // Placeholder - actual CPR tempo logic and verified instructions needed
    const targetTempo = 110; // beats per minute

    const toggleSound = () => {
        setSoundEnabled(!soundEnabled);
    };

    const reset = () => {
        setIsPlaying(false);
        setBeatCount(0);
    };

    return (
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 mb-6">
            <div className="p-6 rounded-2xl bg-emergency-tint border border-emergency/20">
                <div className="flex items-center gap-3 mb-4">
                    <Heart size={32} className="text-emergency" aria-hidden="true" />
                    <h3 className="text-xl md:text-2xl font-bold text-emergency">
                        CPR Tempo Guide
                    </h3>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-surface border border-border">
                        <div>
                            <p className="text-text-muted text-sm mb-1">Target Tempo</p>
                            <p className="text-2xl font-bold text-text">{targetTempo} BPM</p>
                        </div>
                        <div className="text-right">
                            <p className="text-text-muted text-sm mb-1">Beats</p>
                            <p className="text-2xl font-bold text-emergency">{beatCount}</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="flex-1 min-h-[56px] px-6 py-4 rounded-xl bg-emergency-solid text-on-solid font-bold text-lg transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-emergency-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                            {isPlaying ? 'Pause' : 'Start'}
                        </button>

                        <button
                            onClick={reset}
                            className="min-h-[56px] min-w-[56px] px-4 py-4 rounded-xl bg-surface border border-border text-text transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                            aria-label="Reset counter"
                        >
                            <Heart size={24} aria-hidden="true" />
                        </button>

                        <button
                            onClick={toggleSound}
                            className="min-h-[56px] min-w-[56px] px-4 py-4 rounded-xl bg-surface border border-border text-text transition-all [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                            aria-label={soundEnabled ? 'Mute sound' : 'Enable sound'}
                        >
                            {soundEnabled ? (
                                <Volume2 size={24} aria-hidden="true" />
                            ) : (
                                <VolumeX size={24} aria-hidden="true" />
                            )}
                        </button>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-2 border border-border">
                        <p className="text-text-muted text-sm italic">
                            [PLACEHOLDER: Verified CPR tempo guidance and instructions needed]
                        </p>
                        <p className="text-text-muted text-xs mt-2">
                            This tool will provide visual and audio tempo guidance for CPR compressions when verified medical content is integrated.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
