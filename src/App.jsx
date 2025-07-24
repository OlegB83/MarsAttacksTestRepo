import { useState } from 'react';
import './App.css'
import reactLogo from './assets/react.svg';

/**
 * @typedef {Object} Translation
 * @property {string} heroTitle
 * @property {string} heroSubtitle
 * @property {string} join
 * @property {string} surrender
 * @property {string} featuresTitle
 * @property {string} brain
 * @property {string} brainDesc
 * @property {string} rays
 * @property {string} raysDesc
 * @property {string} mind
 * @property {string} mindDesc
 * @property {string} testZone
 * @property {string} dropdownShow
 * @property {string} dropdownHide
 * @property {string} martian
 * @property {string} venusian
 * @property {string} earthling
 * @property {string} textShow
 * @property {string} textHide
 * @property {string} line1
 * @property {string} line2
 * @property {string} line3
 * @property {string} click
 * @property {string} times
 * @property {string} martianRed
 * @property {string} martianGreen
 * @property {string} explore
 * @property {string} recruit
 * @property {string} launch
 * @property {string} defend
 * @property {string} negotiate
 * @property {string} evacuate
 * @property {string} footer
 * @property {string} lang
 */

/** @type {{ EN: Translation, RU: Translation }} */
const translations = {
  EN: {
    heroTitle: 'MARS ATTACKS!',
    heroSubtitle: 'THE INVASION HAS BEGUN • RESISTANCE IS FUTILE • WELCOME YOUR NEW OVERLORDS',
    join: 'JOIN THE INVASION',
    surrender: 'SURRENDER NOW',
    featuresTitle: 'ALIEN TECHNOLOGY',
    brain: 'BRAIN EXTRACTION',
    brainDesc: 'Advanced Martian technology for efficient human brain harvesting and analysis.',
    rays: 'DEATH RAYS',
    raysDesc: 'State-of-the-art disintegration weapons that reduce humans to colorful skeletons.',
    mind: 'MIND CONTROL',
    mindDesc: 'Hypnotic Martian powers to bend human will and establish our galactic empire.',
    testZone: 'INTERACTIVE TEST ZONE',
    dropdownShow: 'Show Drop-down',
    dropdownHide: 'Hide Drop-down',
    martian: 'Martian',
    venusian: 'Venusian',
    earthling: 'Earthling',
    textShow: 'Show Text Lines',
    textHide: 'Hide Text Lines',
    line1: '• The Martians are coming!',
    line2: '• Hide your cows!',
    line3: '• Prepare the death rays!',
    click: 'Clicked',
    times: 'times',
    martianRed: 'Martian Red',
    martianGreen: 'Martian Green',
    explore: 'EXPLORE GALAXY',
    recruit: 'RECRUIT HUMANS',
    launch: 'LAUNCH ATTACK',
    defend: 'Nope',
    negotiate: 'NEGOTIATE PEACE',
    evacuate: 'EVACUATE PLANET',
    footer: 'ACK ACK ACK! • MARS EMPIRE © 2024 • ALL HUMANS RESERVED FOR EXPERIMENTATION',
    lang: 'RU'
  },
  RU: {
    heroTitle: 'НАПАДЕНИЕ МАРСА!',
    heroSubtitle: 'НАЧАЛОСЬ ВТОРЖЕНИЕ • СОПРОТИВЛЕНИЕ БЕСПОЛЕЗНО • ПРИВЕТСТВУЙТЕ НОВЫХ ПОВЕЛИТЕЛЕЙ',
    join: 'ПРИСОЕДИНИТЬСЯ К ВТОРЖЕНИЮ',
    surrender: 'СДАТЬСЯ СЕЙЧАС',
    featuresTitle: 'ИННОВАЦИИ ИНОПЛАНЕТЯН',
    brain: 'ИЗВЛЕЧЕНИЕ МОЗГА',
    brainDesc: 'Передовые марсианские технологии для эффективного сбора и анализа человеческих мозгов.',
    rays: 'ЛУЧИ СМЕРТИ',
    raysDesc: 'Современное оружие дезинтеграции, превращающее людей в цветные скелеты.',
    mind: 'КОНТРОЛЬ РАЗУМА',
    mindDesc: 'Гипнотические силы марсиан для подчинения человеческой воли и создания галактической империи.',
    testZone: 'ИНТЕРАКТИВНАЯ ЗОНА ТЕСТА',
    dropdownShow: 'Показать выпадающий список',
    dropdownHide: 'Скрыть выпадающий список',
    martian: 'Марсианин',
    venusian: 'Венерианец',
    earthling: 'Землянин',
    textShow: 'Показать строки текста',
    textHide: 'Скрыть строки текста',
    line1: '• Марсиане идут!',
    line2: '• Прячьте коров!',
    line3: '• Готовьте лучи смерти!',
    click: 'Кликов',
    times: '',
    martianRed: 'Марсианский Красный',
    martianGreen: 'Марсианский Зелёный',
    explore: 'ИССЛЕДОВАТЬ ГАЛАКТИКУ',
    recruit: 'ЗАВЕРБОВАТЬ ЛЮДЕЙ',
    launch: 'ЗАПУСТИТЬ АТАКУ',
    defend: 'ЗАЩИТИТЬ ЗЕМЛЮ',
    negotiate: 'ДОГОВОРИТЬСЯ О МИРЕ',
    evacuate: 'ЭВАКУИРОВАТЬ ПЛАНЕТУ',
    footer: 'АК АК АК! • ИМПЕРИЯ МАРСА © 2024 • ВСЕ ЛЮДИ ЗАРЕЗЕРВИРОВАНЫ ДЛЯ ЭКСПЕРИМЕНТОВ',
    lang: 'EN'
  }
};

function App() {
  /** @type {[('EN' | 'RU'), React.Dispatch<React.SetStateAction<'EN' | 'RU'>>]} */
  const [lang, setLang] = useState('EN');
  /** @type {Translation} */
  const t = translations[lang];
  return (
    <>
      {/* Navigation Bar */}
      <nav className="main-nav" role="navigation" aria-label="Main Navigation">
        <div className="nav-logo">
          <img src={reactLogo} alt="Logo" style={{ height: '2.5rem', verticalAlign: 'middle' }} />
        </div>
        <ul className="nav-links">
          <li><a href="#hero"><span>Hero</span></a></li>
          <li><a href="#features"><span>Features</span></a></li>
          <li><a href="#test-zone"><span>Test Zone</span></a></li>
          <li><a href="#footer"><span>Footer</span></a></li>
        </ul>
      </nav>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <button className="lang-switch-btn" aria-label="Switch language" onClick={() => setLang(l => l === 'EN' ? 'RU' : 'EN')}>
          <span className="btn-icon" role="img" aria-label="language">🌐</span>
          <span>{t.lang}</span>
        </button>
      <div className="mars-landing" id="main-content" role="main">
        {/* Hero Section */}
        <section id="hero" className="hero">
          {/* Animated stars background */}
          <svg className="hero-bg-anim" width="100%" height="100%" viewBox="0 0 1440 600" preserveAspectRatio="none">
            <circle cx="200" cy="100" r="2.5" fill="#fff" opacity="0.7">
              <animate attributeName="cy" values="100;120;100" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="400" cy="200" r="1.5" fill="#ffff00" opacity="0.6">
              <animate attributeName="cy" values="200;220;200" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="800" cy="80" r="2" fill="#ff0000" opacity="0.5">
              <animate attributeName="cy" values="80;100;80" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="1200" cy="300" r="2.2" fill="#00ff00" opacity="0.7">
              <animate attributeName="cy" values="300;320;300" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="1000" cy="500" r="1.8" fill="#fff" opacity="0.5">
              <animate attributeName="cy" values="500;520;500" dur="4.2s" repeatCount="indefinite"/>
            </circle>
          </svg>
          <div className="alien-overlay"></div>
          <div className="hero-content">
            <div className="ufo">🛸</div>
            <h1 className="hero-title"><span>{t.heroTitle}</span></h1>
            <div className="hero-tagline"><span>Defend Earth or Join the Martian Empire. The choice is yours!</span></div>
            <p className="hero-subtitle">
              <span>{t.heroSubtitle}</span>
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" aria-label="Join the invasion"><span className="btn-icon" role="img" aria-label="join">🚀</span><span>{t.join}</span></button>
              <button className="btn btn-secondary" aria-label="Surrender now"><span className="btn-icon" role="img" aria-label="surrender">🕊️</span><span>{t.surrender}</span></button>
              <button className="hero-cta"><span>Start Your Adventure</span></button>
              <button className="btn btn-primary" aria-label="Explore galaxy"><span className="btn-icon" role="img" aria-label="explore">🌌</span><span>{t.explore}</span></button>
              <button className="btn btn-secondary" aria-label="Recruit humans"><span className="btn-icon" role="img" aria-label="recruit">👥</span><span>{t.recruit}</span></button>
            </div>
          </div>
          <div className="mars-bg"></div>
        </section>
        <div className="section-divider" />
        {/* Features Section */}
        <section id="features" className="features">
          <div className="container">
            <h2 className="section-title"><span>{t.featuresTitle}</span></h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">👽</div>
                <h3><span>{t.brain}</span></h3>
                <p><span>{t.brainDesc}</span></p>
                <button className="learn-more" aria-label="Learn more about brain extraction"><span>Learn More</span></button>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛸</div>
                <h3><span>{t.rays}</span></h3>
                <p><span>{t.raysDesc}</span></p>
                <button className="learn-more" aria-label="Learn more about death rays"><span>Learn More</span></button>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔴</div>
                <h3><span>{t.mind}</span></h3>
                <p><span>{t.mindDesc}</span></p>
                <button className="learn-more" aria-label="Learn more about mind control"><span>Learn More</span></button>
              </div>
            </div>
          </div>
        </section>
        <div className="section-divider" />
        {/* Action Buttons Section */}
        <section id="actions" className="features">
          <div className="container">
            <h2 className="section-title"><span>MISSION CONTROL</span></h2>
            <div className="action-buttons-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              <ActionButton icon="⚔️" label={t.launch} description="Begin the final assault on Earth" />
              <ActionButton icon="🛡️" label={t.defend} description="Protect your home planet" />
              <ActionButton icon="🤝" label={t.negotiate} description="Seek diplomatic solutions" />
              <ActionButton icon="🚀" label={t.evacuate} description="Emergency evacuation protocol" />
            </div>
          </div>
        </section>
        <div className="section-divider" />
        {/* Interactive Test Section */}
        <section id="test-zone" className="features">
          <div className="container">
            <h2 className="section-title"><span>{t.testZone}</span></h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', marginTop: '2rem' }}>
              {/* Dropdown simulation */}
              <DropdownSimulator t={t} />
              {/* Text lines toggle */}
              <TextLinesToggle t={t} />
              {/* Click counter */}
              <ClickCounter t={t} />
              {/* Color toggle button */}
              <ColorToggleButton t={t} />
            </div>
          </div>
        </section>
        <div className="section-divider" />
        {/* Footer */}
        <footer id="footer" className="footer">
          <div className="container">
            <p><span>{t.footer}</span></p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App

// DropdownSimulator: shows/hides a dropdown list
/** @param {{ t: Translation }} props */
function DropdownSimulator({ t }) {
  /** @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} */
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className="btn btn-primary" aria-label={show ? t.dropdownHide : t.dropdownShow} onClick={() => setShow(s => !s)}>
        <span className="btn-icon" role="img" aria-label="dropdown">{show ? '▲' : '▼'}</span>
        <span>{show ? t.dropdownHide : t.dropdownShow}</span>
      </button>
      {show && (
        <select style={{ marginLeft: '1rem', padding: '0.5rem', fontSize: '1rem' }}>
          <option><span>{t.martian}</span></option>
          <option><span>{t.venusian}</span></option>
          <option><span>{t.earthling}</span></option>
        </select>
      )}
    </div>
  );
}

// TextLinesToggle: shows/hides several text lines
/** @param {{ t: Translation }} props */
function TextLinesToggle({ t }) {
  /** @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} */
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className="btn btn-secondary" aria-label={show ? t.textHide : t.textShow} onClick={() => setShow(s => !s)}>
        <span className="btn-icon" role="img" aria-label="toggle-text">{show ? '🙈' : '📝'}</span>
        <span>{show ? t.textHide : t.textShow}</span>
      </button>
      {show && (
        <div style={{ marginTop: '0.5rem', color: '#ffff00', textAlign: 'left' }}>
          <div><span>{t.line1}</span></div>
          <div><span>{t.line2}</span></div>
          <div><span>{t.line3}</span></div>
        </div>
      )}
    </div>
  );
}

// ClickCounter: button that counts clicks
/** @param {{ t: Translation }} props */
function ClickCounter({ t }) {
  /** @type {[number, React.Dispatch<React.SetStateAction<number>>]} */
  const [count, setCount] = useState(0);
  return (
    <button className="btn btn-primary" aria-label="Click counter" onClick={() => setCount(c => c + 1)}>
      <span className="btn-icon" role="img" aria-label="click">🖱️</span>
      <span>{t.click} {count} {t.times}</span>
    </button>
  );
}

// ColorToggleButton: toggles color on click
/** @param {{ t: Translation }} props */
function ColorToggleButton({ t }) {
  /** @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} */
  const [on, setOn] = useState(false);
  return (
    <button
      className={on ? 'btn btn-secondary' : 'btn btn-primary'}
      aria-label="Toggle Martian color"
      onClick={() => setOn(o => !o)}
    >
      <span className="btn-icon" role="img" aria-label="color">🎨</span>
      <span>{on ? t.martianGreen : t.martianRed}</span>
    </button>
  );
}

// ActionButton: interactive mission control button
/** @param {{ icon: string, label: string, description: string }} props */
function ActionButton({ icon, label, description }) {
  /** @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} */
  const [activated, setActivated] = useState(false);
  /** @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} */
  const [loading, setLoading] = useState(false);
  
  const handleClick = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setActivated(!activated);
      setLoading(false);
    }, 1000);
  };
  
  return (
    <div className="action-button-card" style={{ 
      background: activated ? 'linear-gradient(135deg, #4a5d23 0%, #2d3d0f 100%)' : 'linear-gradient(135deg, #8B0000 0%, #4B0000 100%)', 
      border: activated ? '2px solid #9acd32' : '2px solid #ff4444',
      borderRadius: '10px', 
      padding: '1.5rem', 
      textAlign: 'center',
      transition: 'all 0.3s ease',
      cursor: loading ? 'wait' : 'pointer'
    }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
      <button 
        className={activated ? 'btn btn-secondary' : 'btn btn-primary'} 
        onClick={handleClick}
        disabled={loading}
        style={{ 
          width: '100%', 
          marginBottom: '1rem',
          opacity: loading ? 0.7 : 1
        }}
      >
        <span>{loading ? '⏳ Processing...' : (activated ? '✅ ' + label : label)}</span>
      </button>
      <p style={{ 
        color: activated ? '#9acd32' : '#ffff00', 
        fontSize: '0.9rem', 
        margin: 0,
        fontStyle: 'italic'
      }}>
        {description}
      </p>
    </div>
  );
}
