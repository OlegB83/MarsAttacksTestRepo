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
    reactShowcase: 'React Showcase',
    backToHome: 'Back to Home',
    htmlElementsTitle: 'HTML Elements Showcase',
    reactShowcaseTitle: 'React Elements Showcase'
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
    reactShowcase: 'React Витрина',
    backToHome: 'Назад на Главную',
    htmlElementsTitle: 'Витрина HTML Элементов',
    reactShowcaseTitle: 'React Элементы Витрина'
  }
};

function App() {
  /** @type {['EN' | 'RU', Function]} */
  const [lang, setLang] = useState('EN');
  /** @type {['home' | 'html-elements' | 'react-showcase', Function]} */
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
              <li><button onClick={() => setCurrentPage('react-showcase')} className="nav-btn"><span>{t.reactShowcase}</span></button></li>
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
        ) : currentPage === 'html-elements' ? (
          <HTMLElementsPage t={t} />
        ) : (
          <ReactShowcasePage t={t} />
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
            style={{ marginRight: '1rem' }}
          >
            <span className="btn-icon" role="img" aria-label="elements">🧱</span>
            <span>{t.htmlElements}</span>
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => setCurrentPage('react-showcase')}
            aria-label="Navigate to React Showcase"
          >
            <span className="btn-icon" role="img" aria-label="react">⚛️</span>
            <span>{t.reactShowcase}</span>
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

function ReactShowcasePage({ t }) {
  // Multiple state variables for demonstration
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedColor, setSelectedColor] = useState('red');
  const [isVisible, setIsVisible] = useState(true);
  const [todos, setTodos] = useState(['Learn React', 'Build awesome apps']);
  const [newTodo, setNewTodo] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState('light');
  const [progress, setProgress] = useState(50);
  const [rating, setRating] = useState(0);

  // useEffect for real-time clock
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // useEffect for theme persistence
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Event handlers
  const handleIncrement = () => setCounter(prev => prev + 1);
  const handleDecrement = () => setCounter(prev => Math.max(0, prev - 1));
  const handleReset = () => setCounter(0);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos(prev => [...prev, newTodo.trim()]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index) => {
    setTodos(prev => prev.filter((_, i) => i !== index));
  };

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setUserData({
        id: Math.floor(Math.random() * 1000),
        name: 'Martian Commander ' + Math.floor(Math.random() * 100),
        planet: 'Mars',
        mission: 'Earth Invasion'
      });
      setIsLoading(false);
    }, 2000);
  };

  const StarRating = ({ rating, onRatingChange }) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            className={`star ${star <= rating ? 'filled' : ''}`}
            onClick={() => onRatingChange(star)}
            style={{
              cursor: 'pointer',
              fontSize: '2rem',
              color: star <= rating ? '#FFD700' : '#ccc',
              userSelect: 'none'
            }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const ProgressBar = ({ value, max = 100 }) => (
    <div style={{
      width: '100%',
      height: '20px',
      backgroundColor: '#ddd',
      borderRadius: '10px',
      overflow: 'hidden'
    }}>
      <div style={{
        width: `${(value / max) * 100}%`,
        height: '100%',
        backgroundColor: '#4CAF50',
        transition: 'width 0.3s ease'
      }} />
    </div>
  );

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '90%',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '10px',
              right: '15px',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className={`react-showcase-page theme-${theme}`}>
      <div className="container">
        <header className="page-header">
          <h1>{t.reactShowcaseTitle}</h1>
          <p>A comprehensive demonstration of React components, hooks, and interactive elements</p>
          <div style={{ marginTop: '1rem' }}>
            <strong>Current Time: </strong>
            <span style={{ color: '#e74c3c', fontFamily: 'monospace' }}>
              {currentTime.toLocaleTimeString()}
            </span>
          </div>
        </header>

        {/* Theme Toggle */}
        <section className="elements-section">
          <h2>🎨 Theme Control</h2>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="btn btn-primary"
              style={{
                backgroundColor: theme === 'dark' ? '#2c3e50' : '#3498db',
                color: 'white'
              }}
            >
              Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
            <span>Current theme: <strong>{theme}</strong></span>
          </div>
        </section>

        {/* Counter Section */}
        <section className="elements-section">
          <h2>🔢 Interactive Counter</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={handleDecrement} className="btn btn-secondary">-</button>
            <span style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: counter > 10 ? '#27ae60' : '#e74c3c',
              minWidth: '60px',
              textAlign: 'center'
            }}>
              {counter}
            </span>
            <button onClick={handleIncrement} className="btn btn-primary">+</button>
            <button onClick={handleReset} className="btn btn-secondary">Reset</button>
            {counter > 0 && (
              <span style={{ color: '#f39c12' }}>
                {counter === 1 ? '1 click!' : `${counter} clicks!`}
              </span>
            )}
          </div>
        </section>

        {/* Form Inputs Section */}
        <section className="elements-section">
          <h2>📋 Dynamic Form Controls</h2>
          <div style={{ display: 'grid', gap: '1rem', maxWidth: '600px' }}>
            <div>
              <label>Name: </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                style={{ marginLeft: '1rem', padding: '0.5rem', borderRadius: '4px' }}
              />
              {name && <span style={{ marginLeft: '1rem', color: '#27ae60' }}>Hello, {name}! 👋</span>}
            </div>
            
            <div>
              <label>Email: </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{ marginLeft: '1rem', padding: '0.5rem', borderRadius: '4px' }}
              />
              {email && email.includes('@') && (
                <span style={{ marginLeft: '1rem', color: '#27ae60' }}>✓ Valid email format</span>
              )}
            </div>

            <div>
              <label>Favorite Color: </label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                style={{ marginLeft: '1rem', padding: '0.5rem', borderRadius: '4px' }}
              >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
                <option value="orange">Orange</option>
              </select>
              <div
                style={{
                  display: 'inline-block',
                  width: '30px',
                  height: '30px',
                  backgroundColor: selectedColor,
                  marginLeft: '1rem',
                  borderRadius: '50%',
                  border: '2px solid #333'
                }}
              />
            </div>
          </div>
        </section>

        {/* Conditional Rendering Section */}
        <section className="elements-section">
          <h2>👁️ Conditional Rendering</h2>
          <div>
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="btn btn-primary"
            >
              {isVisible ? 'Hide' : 'Show'} Secret Message
            </button>
            {isVisible && (
              <div style={{
                marginTop: '1rem',
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                border: '2px dashed #6c757d',
                borderRadius: '8px'
              }}>
                <p>🛸 <strong>Top Secret Martian Intel:</strong> The invasion will begin at midnight! 
                   Prepare your ray guns and polish your flying saucers! 👽</p>
              </div>
            )}
          </div>
        </section>

        {/* Todo List Section */}
        <section className="elements-section">
          <h2>📝 Dynamic Todo List</h2>
          <form onSubmit={handleAddTodo} style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              style={{ padding: '0.5rem', marginRight: '1rem', borderRadius: '4px', minWidth: '200px' }}
            />
            <button type="submit" className="btn btn-primary">Add Task</button>
          </form>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map((todo, index) => (
              <li key={index} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.5rem',
                margin: '0.5rem 0',
                backgroundColor: '#f8f9fa',
                borderRadius: '4px',
                border: '1px solid #dee2e6'
              }}>
                <span>📌 {todo}</span>
                <button
                  onClick={() => handleRemoveTodo(index)}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p><strong>Total tasks:</strong> {todos.length}</p>
        </section>

        {/* Progress Bar Section */}
        <section className="elements-section">
          <h2>📊 Progress Control</h2>
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Progress: {progress}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                style={{ width: '100%', margin: '0.5rem 0' }}
              />
            </div>
            <ProgressBar value={progress} />
            <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem' }}>
              <button onClick={() => setProgress(0)} className="btn btn-secondary">0%</button>
              <button onClick={() => setProgress(25)} className="btn btn-secondary">25%</button>
              <button onClick={() => setProgress(50)} className="btn btn-secondary">50%</button>
              <button onClick={() => setProgress(75)} className="btn btn-secondary">75%</button>
              <button onClick={() => setProgress(100)} className="btn btn-secondary">100%</button>
            </div>
          </div>
        </section>

        {/* Star Rating Section */}
        <section className="elements-section">
          <h2>⭐ Interactive Rating</h2>
          <div>
            <p>Rate your Mars invasion experience:</p>
            <StarRating rating={rating} onRatingChange={setRating} />
            <p style={{ marginTop: '1rem' }}>
              {rating === 0 && "Click stars to rate!"}
              {rating === 1 && "😞 Terrible invasion!"}
              {rating === 2 && "😐 Could use more death rays"}
              {rating === 3 && "🙂 Decent alien technology"}
              {rating === 4 && "😊 Great Martian experience!"}
              {rating === 5 && "🤩 Best invasion ever!"}
            </p>
          </div>
        </section>

        {/* Modal Section */}
        <section className="elements-section">
          <h2>🔲 Modal Dialog</h2>
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-primary"
          >
            Open Martian Communication Portal
          </button>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <h3>🛸 Martian Command Center</h3>
            <p>Greetings, Earthling! You have successfully opened communication with Mars.</p>
            <p><strong>Status:</strong> Ready to receive your surrender</p>
            <p><strong>Next Steps:</strong> Prepare for peaceful assimilation</p>
            <button
              onClick={() => setShowModal(false)}
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
            >
              End Transmission
            </button>
          </Modal>
        </section>

        {/* Loading State Section */}
        <section className="elements-section">
          <h2>⏳ Loading States & Data Fetching</h2>
          <button
            onClick={simulateLoading}
            disabled={isLoading}
            className="btn btn-primary"
            style={{ opacity: isLoading ? 0.6 : 1 }}
          >
            {isLoading ? 'Loading Martian Data...' : 'Fetch Alien Intelligence'}
          </button>
          
          {isLoading && (
            <div style={{ marginTop: '1rem' }}>
              <div style={{
                width: '100%',
                height: '4px',
                backgroundColor: '#f0f0f0',
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '30%',
                  height: '100%',
                  backgroundColor: '#e74c3c',
                  animation: 'slide 1.5s infinite'
                }} />
              </div>
              <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                🛸 Connecting to Mars satellites...
              </p>
            </div>
          )}
          
          {userData && !isLoading && (
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#d4edda',
              border: '1px solid #c3e6cb',
              borderRadius: '8px'
            }}>
              <h4>👽 Alien Profile Retrieved:</h4>
              <p><strong>ID:</strong> {userData.id}</p>
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Home Planet:</strong> {userData.planet}</p>
              <p><strong>Mission:</strong> {userData.mission}</p>
            </div>
          )}
        </section>

        {/* Component Composition Example */}
        <section className="elements-section">
          <h2>🧩 Component Composition</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {['Scout Ship', 'Battle Cruiser', 'Mothership'].map((shipType, index) => (
              <div key={shipType} style={{
                padding: '1rem',
                border: '2px solid #6c757d',
                borderRadius: '8px',
                backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#e9ecef'
              }}>
                <h4>🛸 {shipType}</h4>
                <p><strong>Status:</strong> {['Active', 'Maintenance', 'Deployed'][index]}</p>
                <p><strong>Crew:</strong> {[5, 25, 150][index]} aliens</p>
                <button className="btn btn-secondary" style={{ fontSize: '0.8rem' }}>
                  Launch Mission
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Real-time Updates Section */}
        <section className="elements-section">
          <h2>⚡ Real-time Updates</h2>
          <div style={{
            padding: '1rem',
            backgroundColor: '#fff3cd',
            border: '1px solid #ffeaa7',
            borderRadius: '8px'
          }}>
            <p><strong>🕐 Mars Standard Time:</strong> {currentTime.toLocaleString()}</p>
            <p><strong>🌍 Earth Coordinates:</strong> {Math.sin(Date.now() / 10000).toFixed(6)}, {Math.cos(Date.now() / 10000).toFixed(6)}</p>
            <p><strong>🛰️ Active UFOs:</strong> {Math.floor(Math.sin(Date.now() / 5000) * 10) + 15}</p>
            <p><strong>⚡ Energy Level:</strong> {Math.floor(Math.abs(Math.sin(Date.now() / 3000)) * 100)}%</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
            🎉 You've experienced {Object.values({counter, todos: todos.length, rating, progress}).reduce((a, b) => a + b, 0)} interactions!
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .theme-dark {
          background-color: #2c3e50;
          color: #ecf0f1;
        }
        .theme-dark .elements-section {
          background-color: #34495e;
          border-color: #7f8c8d;
        }
      `}</style>
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
