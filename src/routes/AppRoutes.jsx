import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Learn from '../pages/Learn';
import Practice from '../pages/Practice';
import Prepare from '../pages/Prepare';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/prepare" element={<Prepare />} />
        </Routes>
    );
}

export default AppRoutes;