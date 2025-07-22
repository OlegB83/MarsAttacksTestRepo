import React, { useState } from 'react';
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

      {/* Interactive Test Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">INTERACTIVE TEST ZONE</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', marginTop: '2rem' }}>
            {/* Dropdown simulation */}
            <DropdownSimulator />
            {/* Text lines toggle */}
            <TextLinesToggle />
            {/* Click counter */}
            <ClickCounter />
            {/* Color toggle button */}
            <ColorToggleButton />
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

// DropdownSimulator: shows/hides a dropdown list
function DropdownSimulator() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className="btn btn-primary" onClick={() => setShow(s => !s)}>
        {show ? 'Hide' : 'Show'} Drop-down
      </button>
      {show && (
        <select style={{ marginLeft: '1rem', padding: '0.5rem', fontSize: '1rem' }}>
          <option>Martian</option>
          <option>Venusian</option>
          <option>Earthling</option>
        </select>
      )}
    </div>
  );
}

// TextLinesToggle: shows/hides several text lines
function TextLinesToggle() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className="btn btn-secondary" onClick={() => setShow(s => !s)}>
        {show ? 'Hide' : 'Show'} Text Lines
      </button>
      {show && (
        <div style={{ marginTop: '0.5rem', color: '#ffff00', textAlign: 'left' }}>
          <div>• The Martians are coming!</div>
          <div>• Hide your cows!</div>
          <div>• Prepare the death rays!</div>
        </div>
      )}
    </div>
  );
}

// ClickCounter: button that counts clicks
function ClickCounter() {
  const [count, setCount] = useState(0);
  return (
    <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>
      Clicked {count} times
    </button>
  );
}

// ColorToggleButton: toggles color on click
function ColorToggleButton() {
  const [on, setOn] = useState(false);
  return (
    <button
      className={on ? 'btn btn-secondary' : 'btn btn-primary'}
      onClick={() => setOn(o => !o)}
    >
      {on ? 'Martian Green' : 'Martian Red'}
    </button>
  );
}
