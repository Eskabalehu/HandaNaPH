import { ShieldCheck, BookOpen, Siren } from 'lucide-react';

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
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
        </div>

        <nav className="nav-links">
          <a href="#learn">Learn</a>
          <a href="#practice">Practice</a>
          <a href="#prepare">Prepare</a>
          <button className="emergency-button">
            <Siren size={18} />
            Emergency
          </button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              🇵🇭 Made for the Philippines
            </div>

            <h1>
              Know what to do
              <span> before it matters.</span>
            </h1>

            <p>
              Learn essential emergency and disaster preparedness through
              visual guides, interactive scenarios, and practical resources.
            </p>

            <div className="hero-actions">
              <a href="#learn" className="primary-button">
                <BookOpen size={19} />
                Start Learning
              </a>

              <a href="#prepare" className="secondary-button">
                Prepare Now
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card visual-red">
              <Siren size={32} />
              <strong>Emergency</strong>
              <span>Know what to do.</span>
            </div>

            <div className="visual-card visual-blue">
              <BookOpen size={32} />
              <strong>Learn</strong>
              <span>Understand the basics.</span>
            </div>

            <div className="visual-card visual-yellow">
              <ShieldCheck size={32} />
              <strong>Prepare</strong>
              <span>Be ready before it happens.</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;