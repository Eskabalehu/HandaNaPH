import { Route, Routes } from 'react-router';
import PublicLayout from '../layouts/PublicLayout';
import Home from '../pages/Home';
import Learn from '../pages/Learn';
import Practice from '../pages/Practice';
import Prepare from '../pages/Prepare';
import Emergency from '../pages/Emergency';
import Hotlines from '../pages/Hotlines';
import DesignSystem from '../pages/DesignSystem';

function AppRoutes() {
    return (
        <Routes>
            {/* All public pages share the PublicLayout shell */}
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/prepare" element={<Prepare />} />
                <Route path="/emergency" element={<Emergency />} />
                <Route path="/hotlines" element={<Hotlines />} />
            </Route>

            {/* Dev-only QA route — outside PublicLayout so it has its own shell */}
            <Route path="/design-system" element={<DesignSystem />} />
        </Routes>
    );
}

export default AppRoutes;