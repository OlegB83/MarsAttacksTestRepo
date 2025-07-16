import './App.css'

function App() {
  return (
    <div className="mars-landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="alien-overlay"></div>
        <div className="hero-content">
          <div className="ufo">🛸</div>
          <h1 className="hero-title">MARS ATTACKS!</h1>
          <p className="hero-subtitle">
            THE INVASION HAS BEGUN • RESISTANCE IS FUTILE • WELCOME YOUR NEW OVERLORDS
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">JOIN THE INVASION</button>
            <button className="btn btn-secondary">SURRENDER NOW</button>
          </div>
        </div>
        <div className="mars-bg"></div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">ALIEN TECHNOLOGY</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👽</div>
              <h3>BRAIN EXTRACTION</h3>
              <p>Advanced Martian technology for efficient human brain harvesting and analysis.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛸</div>
              <h3>DEATH RAYS</h3>
              <p>State-of-the-art disintegration weapons that reduce humans to colorful skeletons.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔴</div>
              <h3>MIND CONTROL</h3>
              <p>Hypnotic Martian powers to bend human will and establish our galactic empire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>ACK ACK ACK! • MARS EMPIRE © 2024 • ALL HUMANS RESERVED FOR EXPERIMENTATION</p>
        </div>
      </footer>
    </div>
  )
}

export default App
