import React, { useState } from 'react';
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
 * @property {string} footer
 * @property {string} lang
 * @property {string} htmlElements
 * @property {string} backToHome
 * @property {string} htmlElementsTitle
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
    footer: 'ACK ACK ACK! • MARS EMPIRE © 2024 • ALL HUMANS RESERVED FOR EXPERIMENTATION',
    lang: 'RU',
    htmlElements: 'HTML Elements Demo',
    backToHome: 'Back to Home',
    htmlElementsTitle: 'HTML Elements Showcase'
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
    footer: 'АК АК АК! • ИМПЕРИЯ МАРСА © 2024 • ВСЕ ЛЮДИ ЗАРЕЗЕРВИРОВАНЫ ДЛЯ ЭКСПЕРИМЕНТОВ',
    lang: 'EN',
    htmlElements: 'HTML Элементы Демо',
    backToHome: 'Назад на Главную',
    htmlElementsTitle: 'Витрина HTML Элементов'
  }
};

function App() {
  /** @type {['EN' | 'RU', Function]} */
  const [lang, setLang] = useState('EN');
  /** @type {['home' | 'html-elements', Function]} */
  const [currentPage, setCurrentPage] = useState('home');
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
          {currentPage === 'home' ? (
            <>
              <li><a href="#hero"><span>Hero</span></a></li>
              <li><a href="#features"><span>Features</span></a></li>
              <li><a href="#test-zone"><span>Test Zone</span></a></li>
              <li><button onClick={() => setCurrentPage('html-elements')} className="nav-btn"><span>{t.htmlElements}</span></button></li>
              <li><a href="#footer"><span>Footer</span></a></li>
            </>
          ) : (
            <>
              <li><button onClick={() => setCurrentPage('home')} className="nav-btn"><span>{t.backToHome}</span></button></li>
            </>
          )}
        </ul>
      </nav>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <button className="lang-switch-btn" aria-label="Switch language" onClick={() => setLang(l => l === 'EN' ? 'RU' : 'EN')}>
          <span className="btn-icon" role="img" aria-label="language">🌐</span>
          <span>{t.lang}</span>
        </button>
      <div className="mars-landing" id="main-content" role="main">
        {currentPage === 'home' ? (
          <HomePage t={t} setCurrentPage={setCurrentPage} />
        ) : (
          <HTMLElementsPage t={t} />
        )}
      </div>
    </>
  )
}

function HomePage({ t, setCurrentPage }) {
  return (
    <>
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
            <button className="hero-cta"><span className="btn-icon" role="img" aria-label="adventure">⚡</span><span>Start Your Adventure</span></button>
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
      {/* Navigation to HTML Elements Page */}
      <section className="html-elements-nav">
        <div className="container">
          <button 
            className="btn btn-primary" 
            onClick={() => setCurrentPage('html-elements')}
            aria-label="Navigate to HTML Elements showcase"
          >
            <span className="btn-icon" role="img" aria-label="elements">🧱</span>
            <span>{t.htmlElements}</span>
          </button>
        </div>
      </section>
      <div className="section-divider" />
      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="container">
          <p><span>{t.footer}</span></p>
        </div>
      </footer>
    </>
  );
}

function HTMLElementsPage({ t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: 'general',
    newsletter: false,
    rating: '5'
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="html-elements-page">
      <div className="container">
        <header className="page-header">
          <h1>{t.htmlElementsTitle}</h1>
          <p>A comprehensive showcase of common HTML elements with Martian styling</p>
        </header>

        {/* Typography Section */}
        <section className="elements-section">
          <h2>Typography & Text Elements</h2>
          <div className="typography-showcase">
            <h1>Heading 1 - Mars Invasion Protocol</h1>
            <h2>Heading 2 - Alien Technology Division</h2>
            <h3>Heading 3 - Brain Extraction Unit</h3>
            <h4>Heading 4 - Death Ray Department</h4>
            <h5>Heading 5 - Mind Control Section</h5>
            <h6>Heading 6 - UFO Maintenance Crew</h6>
            
            <p>This is a <strong>paragraph</strong> with <em>emphasized text</em>, <mark>highlighted content</mark>, and <small>small text</small>.</p>
            <p>Here's some <code>inline code</code> and a <kbd>keyboard shortcut</kbd>.</p>
            
            <blockquote>
              "Resistance is futile. Your technology will be assimilated into our Martian empire."
              <cite>- Supreme Martian Commander</cite>
            </blockquote>

            <pre><code>{`// Martian invasion code
function invadeEarth() {
  console.log("ACK ACK ACK!");
  return "Mission accomplished";
}`}</code></pre>
          </div>
        </section>

        {/* Lists Section */}
        <section className="elements-section">
          <h2>Lists</h2>
          <div className="lists-showcase">
            <div className="list-group">
              <h3>Unordered List - Invasion Supplies</h3>
              <ul>
                <li>Death Ray Batteries</li>
                <li>Brain Storage Containers</li>
                <li>UFO Fuel Cells</li>
                <li>Mind Control Helmets</li>
                <li>Martian Translation Devices</li>
              </ul>
            </div>

            <div className="list-group">
              <h3>Ordered List - Invasion Steps</h3>
              <ol>
                <li>Scout Earth defenses</li>
                <li>Deploy UFO fleet</li>
                <li>Activate death rays</li>
                <li>Begin brain harvesting</li>
                <li>Establish Martian rule</li>
              </ol>
            </div>

            <div className="list-group">
              <h3>Description List - Alien Species</h3>
              <dl>
                <dt>Martians</dt>
                <dd>Green-skinned beings with advanced technology and big brains</dd>
                <dt>Venusians</dt>
                <dd>Mysterious cloud-dwellers with acidic personalities</dd>
                <dt>Earthlings</dt>
                <dd>Primitive bipeds suitable for experimentation</dd>
              </dl>
            </div>
          </div>
        </section>

        {/* Form Elements Section */}
        <section className="elements-section">
          <h2>Form Elements</h2>
          <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <legend>Alien Registration Form</legend>
              
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your Earth name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select 
                  id="category" 
                  name="category" 
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="general">General Inquiry</option>
                  <option value="surrender">Willing to Surrender</option>
                  <option value="resistance">Joining Resistance</option>
                  <option value="alien">Already an Alien</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="rating">Invasion Rating:</label>
                <input 
                  type="range" 
                  id="rating" 
                  name="rating" 
                  min="1" 
                  max="10" 
                  value={formData.rating}
                  onChange={handleInputChange}
                />
                <span>Value: {formData.rating}</span>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your planet..."
                ></textarea>
              </div>

              <div className="form-group checkbox-group">
                <input 
                  type="checkbox" 
                  id="newsletter" 
                  name="newsletter" 
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                />
                <label htmlFor="newsletter">Subscribe to Martian Newsletter</label>
              </div>

              <div className="form-group radio-group">
                <p>Preferred Contact Method:</p>
                <div>
                  <input type="radio" id="telepathy" name="contact" value="telepathy" />
                  <label htmlFor="telepathy">Telepathy</label>
                </div>
                <div>
                  <input type="radio" id="probe" name="contact" value="probe" />
                  <label htmlFor="probe">Alien Probe</label>
                </div>
                <div>
                  <input type="radio" id="email-contact" name="contact" value="email" />
                  <label htmlFor="email-contact">Primitive Email</label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Submit to Martian Command</button>
            </fieldset>
          </form>
        </section>

        {/* Table Section */}
        <section className="elements-section">
          <h2>Table</h2>
          <div className="table-container">
            <table className="demo-table">
              <caption>Martian Fleet Status Report</caption>
              <thead>
                <tr>
                  <th>Ship ID</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Crew</th>
                  <th>Mission</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>UFO-001</td>
                  <td>Mothership</td>
                  <td className="status-active">Active</td>
                  <td>150</td>
                  <td>Command Center</td>
                </tr>
                <tr>
                  <td>UFO-042</td>
                  <td>Scout</td>
                  <td className="status-active">Active</td>
                  <td>5</td>
                  <td>Earth Reconnaissance</td>
                </tr>
                <tr>
                  <td>UFO-123</td>
                  <td>Harvester</td>
                  <td className="status-maintenance">Maintenance</td>
                  <td>25</td>
                  <td>Brain Collection</td>
                </tr>
                <tr>
                  <td>UFO-777</td>
                  <td>Destroyer</td>
                  <td className="status-active">Active</td>
                  <td>75</td>
                  <td>Death Ray Operations</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="3">Total Fleet</th>
                  <th>255</th>
                  <th>4 Active Missions</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Media Elements Section */}
        <section className="elements-section">
          <h2>Media & Interactive Elements</h2>
          <div className="media-showcase">
            <div className="media-group">
              <h3>Image with Caption</h3>
              <figure>
                <img 
                  src={reactLogo} 
                  alt="React Logo representing alien technology" 
                  className="demo-image"
                />
                <figcaption>Advanced Martian React Technology</figcaption>
              </figure>
            </div>

            <div className="media-group">
              <h3>Progress Bar</h3>
              <label htmlFor="invasion-progress">Invasion Progress:</label>
              <progress id="invasion-progress" value="75" max="100">75%</progress>
              <span>75% Complete</span>
            </div>

            <div className="media-group">
              <h3>Meter</h3>
              <label htmlFor="earth-defense">Earth Defense Level:</label>
              <meter id="earth-defense" value="0.3" min="0" max="1">30%</meter>
              <span>Low</span>
            </div>
          </div>
        </section>

        {/* Semantic Elements Section */}
        <section className="elements-section">
          <h2>Semantic Elements</h2>
          <article className="demo-article">
            <header>
              <h3>Breaking News: Martian Fleet Approaches Earth</h3>
              <time dateTime="2024-03-15">March 15, 2024</time>
            </header>
            <p>In a shocking turn of events, our deep space monitoring stations have detected a massive Martian fleet approaching Earth...</p>
            <aside>
              <h4>Related Links</h4>
              <ul>
                <li><a href="#defense">Earth Defense Protocol</a></li>
                <li><a href="#evacuation">Evacuation Plans</a></li>
                <li><a href="#surrender">Surrender Instructions</a></li>
              </ul>
            </aside>
          </article>

          <details className="demo-details">
            <summary>Classified Martian Intel (Click to expand)</summary>
            <p>According to our sources, the Martians possess advanced technology including:</p>
            <ul>
              <li>Quantum death rays</li>
              <li>Mind control devices</li>
              <li>Interdimensional travel capabilities</li>
              <li>Brain preservation technology</li>
            </ul>
          </details>
        </section>

        {/* Interactive Elements */}
        <section className="elements-section">
          <h2>Interactive Elements</h2>
          <div className="interactive-showcase">
            <button type="button" className="btn btn-primary">Primary Button</button>
            <button type="button" className="btn btn-secondary">Secondary Button</button>
            <button type="button" disabled className="btn btn-primary">Disabled Button</button>
            
            <div className="link-examples">
              <a href="#top">Internal Link</a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">External Link</a>
              <a href="mailto:aliens@mars.galaxy">Email Link</a>
              <a href="tel:+1-800-MARTIAN">Phone Link</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App

// DropdownSimulator: shows/hides a dropdown list
/** @param {{ t: Translation }} props */
function DropdownSimulator({ t }) {
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
