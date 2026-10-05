import { useEffect, useMemo, useState } from 'react';
import SettingsContext from './settings-context';

const SETTINGS_KEY = 'handanaph-settings';

const defaultSettings = {
    language: 'fil',
    theme: 'system',
    textSize: 'A',
    readAloud: false,
    reduceMotion: false,
    kidsMode: false,
    seniorMode: false,
};

function readStoredSettings() {
    try {
        const stored = localStorage.getItem(SETTINGS_KEY);

        if (!stored) {
            return defaultSettings;
        }

        return {
            ...defaultSettings,
            ...JSON.parse(stored),
        };
    } catch {
        return defaultSettings;
    }
}

function SettingsProvider({ children }) {
    const [settings, setSettings] = useState(readStoredSettings);

    useEffect(() => {
        try {
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
        } catch {
            // App continues working when storage is unavailable.
        }
    }, [settings]);

    useEffect(() => {
        const root = document.documentElement;

        if (settings.theme === 'system') {
            root.removeAttribute('data-theme');
        } else {
            root.setAttribute('data-theme', settings.theme);
        }

        root.dataset.textSize = settings.textSize;

        root.classList.toggle('reduce-motion', settings.reduceMotion);
        root.classList.toggle('kids-mode', settings.kidsMode);
        root.classList.toggle('senior-mode', settings.seniorMode);

        root.lang = settings.language;
    }, [settings]);

    const updateSetting = (key, value) => {
        setSettings((current) => ({
            ...current,
            [key]: value,
        }));
    };

    const value = useMemo(
        () => ({
            settings,
            updateSetting,
        }),
        [settings],
    );

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
}

export default SettingsProvider;