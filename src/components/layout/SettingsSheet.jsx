import { useEffect, useRef } from 'react';
import useSettings from '../../context/useSettings';
import { X } from 'lucide-react';

function SettingRow({ label, children }) {
    return (
        <div className="flex items-start justify-between gap-4 py-3.5 border-b border-border last:border-b-0">
            <span className="text-sm font-medium text-text pt-0.5 shrink-0">{label}</span>
            <div className="flex flex-wrap gap-2 justify-end">{children}</div>
        </div>
    );
}

function OptionButton({ active, onClick, label, id }) {
    return (
        <button
            id={id}
            type="button"
            onClick={onClick}
            aria-pressed={active}
            className={[
                'min-h-[36px] px-3.5 py-1.5 rounded-lg text-sm font-semibold border transition-colors',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring',
                active
                    ? 'bg-learn-solid text-on-solid border-learn-solid'
                    : 'bg-surface text-text border-border [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2',
            ].join(' ')}
        >
            {label}
        </button>
    );
}

function Toggle({ checked, onChange, id, label }) {
    return (
        <button
            id={id}
            type="button"
            role="switch"
            aria-checked={checked}
            aria-label={label}
            onClick={() => onChange(!checked)}
            className={[
                'relative w-11 h-6 rounded-full transition-colors shrink-0',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring',
                checked ? 'bg-learn-solid' : 'bg-border',
            ].join(' ')}
        >
            <span
                className={[
                    'absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-on-solid shadow transition-transform',
                    checked ? 'translate-x-5' : 'translate-x-0',
                ].join(' ')}
                aria-hidden="true"
            />
        </button>
    );
}

export default function SettingsSheet({ isOpen, onClose }) {
    const { settings, updateSetting } = useSettings();
    const closeButtonRef = useRef(null);

    // Focus the close button when sheet opens
    useEffect(() => {
        if (isOpen) {
            // Small delay ensures the element is visible
            const id = setTimeout(() => closeButtonRef.current?.focus(), 50);
            return () => clearTimeout(id);
        }
    }, [isOpen]);

    // Escape key to close
    useEffect(() => {
        if (!isOpen) return;
        function onKeyDown(e) {
            if (e.key === 'Escape') onClose();
        }
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const themeOptions = [
        { value: 'system', label: 'System' },
        { value: 'light',  label: 'Light' },
        { value: 'dark',   label: 'Dark' },
        { value: 'hc',     label: 'High Contrast', shortLabel: 'HC' },
    ];

    const textSizeOptions = [
        { value: 'A',   label: 'A' },
        { value: 'A+',  label: 'A+' },
        { value: 'A++', label: 'A++' },
    ];

    const languageOptions = [
        { value: 'fil', label: 'Filipino' },
        { value: 'en',  label: 'English' },
    ];

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                aria-hidden="true"
                onClick={onClose}
            />

            {/* Sheet panel */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Settings"
                className={[
                    // Mobile: bottom sheet
                    'fixed inset-x-0 bottom-0 z-50 max-h-[90dvh] overflow-y-auto',
                    'rounded-t-2xl bg-surface shadow-xl',
                    'pb-[env(safe-area-inset-bottom)]',
                    // Desktop: right-side panel
                    'md:inset-x-auto md:right-4 md:top-16 md:bottom-auto md:w-[380px] md:max-h-[calc(100dvh-5rem)]',
                    'md:rounded-2xl',
                ].join(' ')}
            >
                {/* Header */}
                <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-border sticky top-0 bg-surface z-10">
                    {/* Drag handle (mobile visual cue) */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-border md:hidden" aria-hidden="true" />
                    <h2 className="font-bold text-base mt-1 md:mt-0">Settings</h2>
                    <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Close settings"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-text-muted transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    >
                        <X className="w-5 h-5" aria-hidden="true" />
                    </button>
                </div>

                {/* Body */}
                <div className="px-5 pb-4 space-y-0">

                    <SettingRow label="Language">
                        {languageOptions.map((opt) => (
                            <OptionButton
                                key={opt.value}
                                id={`lang-${opt.value}`}
                                active={settings.language === opt.value}
                                onClick={() => updateSetting('language', opt.value)}
                                label={opt.label}
                            />
                        ))}
                    </SettingRow>

                    <SettingRow label="Theme">
                        {themeOptions.map((opt) => (
                            <OptionButton
                                key={opt.value}
                                id={`theme-${opt.value}`}
                                active={settings.theme === opt.value}
                                onClick={() => updateSetting('theme', opt.value)}
                                label={opt.shortLabel ?? opt.label}
                            />
                        ))}
                    </SettingRow>

                    <SettingRow label="Text Size">
                        {textSizeOptions.map((opt) => (
                            <OptionButton
                                key={opt.value}
                                id={`textsize-${opt.value}`}
                                active={settings.textSize === opt.value}
                                onClick={() => updateSetting('textSize', opt.value)}
                                label={opt.label}
                            />
                        ))}
                    </SettingRow>

                    <SettingRow label="Read Aloud">
                        <Toggle
                            id="toggle-readaloud"
                            label="Read Aloud"
                            checked={settings.readAloud}
                            onChange={(val) => updateSetting('readAloud', val)}
                        />
                    </SettingRow>

                    <SettingRow label="Reduce Motion">
                        <Toggle
                            id="toggle-reducemotion"
                            label="Reduce Motion"
                            checked={settings.reduceMotion}
                            onChange={(val) => updateSetting('reduceMotion', val)}
                        />
                    </SettingRow>

                    <SettingRow label="Kids Mode">
                        <Toggle
                            id="toggle-kidsmode"
                            label="Kids Mode"
                            checked={settings.kidsMode}
                            onChange={(val) => updateSetting('kidsMode', val)}
                        />
                    </SettingRow>

                    <SettingRow label="Senior Mode">
                        <Toggle
                            id="toggle-seniormode"
                            label="Senior Mode"
                            checked={settings.seniorMode}
                            onChange={(val) => updateSetting('seniorMode', val)}
                        />
                    </SettingRow>

                </div>
            </div>
        </>
    );
}
