import { ShieldCheck, Siren } from 'lucide-react';
import { Link } from 'react-router';

function Navbar() {
    return (
        <header className="navbar">
            <a href="/" className="brand">
                <div className="brand-mark">
                    <ShieldCheck size={22} strokeWidth={2.5} />
                </div>

                <div>
                    <div className="brand-name">
                        HandaNa<span>PH</span>
                    </div>

                    <div className="brand-tagline">
                        Know. Prepare. Respond.
                    </div>
                </div>
            </a>

            <nav className="nav-links" aria-label="Primary navigation">
                <Link to="/learn">Learn</Link>
                <Link to="/practice">Practice</Link>
                <Link to="/prepare">Prepare</Link>

                <button type="button" className="emergency-button">
                    <Siren size={18} />
                    Emergency
                </button>
            </nav>
        </header>
    );
}

export default Navbar;