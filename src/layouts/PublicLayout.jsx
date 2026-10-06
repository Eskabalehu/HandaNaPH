import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import SkipLink from '../components/layout/SkipLink';
import Navbar from '../components/layout/Navbar';
import MobileBottomNav from '../components/layout/MobileBottomNav';
import Footer from '../components/layout/Footer';
import SettingsSheet from '../components/layout/SettingsSheet';

export default function PublicLayout() {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const location = useLocation();

    // Route-change focus management: move focus to main content area
    useEffect(() => {
        // Skip focus shift on first load (page already focused normally)
        const heading = document.querySelector('#main-content h1, #main-content [tabindex="-1"]');
        if (heading) {
            heading.focus({ preventScroll: false });
        }
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-[100dvh] w-full min-w-0">
            <SkipLink />

            <Navbar onSettingsOpen={() => setSettingsOpen(true)} />

            {/* Main content — has bottom padding on mobile to clear the fixed nav */}
            <main
                id="main-content"
                className="flex-1 w-full min-w-0 pb-36 md:pb-0 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]"
                tabIndex={-1}
                style={{ outline: 'none' }}
            >
                <Outlet />
            </main>

            <Footer />

            {/* Mobile: bottom nav sits above footer, fixed */}
            <MobileBottomNav />

            {/* Settings sheet / drawer */}
            <SettingsSheet
                isOpen={settingsOpen}
                onClose={() => setSettingsOpen(false)}
            />
        </div>
    );
}
