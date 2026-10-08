import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import PublicLayout from '../layouts/PublicLayout';

const Home = lazy(() => import('../pages/Home'));
const Learn = lazy(() => import('../pages/Learn'));
const Practice = lazy(() => import('../pages/Practice'));
const Prepare = lazy(() => import('../pages/Prepare'));
const Emergency = lazy(() => import('../pages/Emergency'));
const EmergencyFlow = lazy(() => import('../components/emergency/EmergencyFlow'));
const GuideDetail = lazy(() => import('../components/learn/GuideDetail'));
const ScenarioPlayer = lazy(() => import('../components/practice/ScenarioPlayer'));
const Hotlines = lazy(() => import('../pages/Hotlines'));
const DesignSystem = lazy(() => import('../pages/DesignSystem'));

const About = lazy(() => import('../pages/About'));
const Sources = lazy(() => import('../pages/Sources'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Accessibility = lazy(() => import('../pages/Accessibility'));
const Terms = lazy(() => import('../pages/Terms'));
const NotFound = lazy(() => import('../pages/NotFound'));

const GoBagBuilder = lazy(() => import('../components/prepare/GoBagBuilder'));
const FamilyPlanWizard = lazy(() => import('../components/prepare/FamilyPlanWizard'));
const HomeSafetyAudit = lazy(() => import('../components/prepare/HomeSafetyAudit'));
const DrillReminders = lazy(() => import('../components/prepare/DrillReminders'));

function AppRoutes() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-text-muted">Loading...</div>}>
            <Routes>
                {/* All public pages share the PublicLayout shell */}
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/learn/:slug" element={<GuideDetail />} />
                    <Route path="/practice" element={<Practice />} />
                    <Route path="/practice/:slug" element={<ScenarioPlayer />} />
                    <Route path="/prepare" element={<Prepare />} />
                    <Route path="/prepare/go-bag" element={<GoBagBuilder />} />
                    <Route path="/prepare/family-plan" element={<FamilyPlanWizard />} />
                    <Route path="/prepare/home-audit" element={<HomeSafetyAudit />} />
                    <Route path="/prepare/drills" element={<DrillReminders />} />
                    <Route path="/emergency" element={<Emergency />} />
                    <Route path="/emergency/:situation" element={<EmergencyFlow />} />
                    <Route path="/hotlines" element={<Hotlines />} />

                    <Route path="/about" element={<About />} />
                    <Route path="/sources" element={<Sources />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/accessibility" element={<Accessibility />} />
                    <Route path="/terms" element={<Terms />} />

                    <Route path="*" element={<NotFound />} />
                </Route>

                {/* Dev-only QA route — outside PublicLayout so it has its own shell */}
                <Route path="/design-system" element={<DesignSystem />} />
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;