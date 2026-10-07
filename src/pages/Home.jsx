import HeroSection from '../components/home/HeroSection';
import QuickActions from '../components/home/QuickActions';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorks from '../components/home/HowItWorks';
import WhyItMatters from '../components/home/WhyItMatters';
import ImportantGuides from '../components/home/ImportantGuides';
import PrepareCta from '../components/home/PrepareCta';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <QuickActions />
            <FeaturesSection />
            <HowItWorks />
            <WhyItMatters />
            <ImportantGuides />
            <PrepareCta />
        </main>
    );
}