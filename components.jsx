// Shared icons, atoms, and Nav
// activePage prop: 'home' | 'services' | 'careers' | 'about' | 'contact'

const Arrow = ({ size = 14, className = 'arrow' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 7h10M8 3l4 4-4 4" />
  </svg>
);

const PhoneIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/>
  </svg>
);

const MailIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2"/>
    <path d="M3 7l9 6 9-6"/>
  </svg>
);

const FormIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2"/>
    <path d="M8 8h8M8 12h8M8 16h5"/>
  </svg>
);

const Nav = ({ activePage = '' }) => {
  const isContact = activePage === 'contact';
  return (
    <div className="nav">
      <div className="nav-inner">
        <a href="index.html" className="nav-logo">
          <img src="assets/ybh-logo.png" alt="Your Behavioral Health" />
        </a>
        <div className="nav-links" style={{ display: window.innerWidth > 900 ? 'flex' : 'none' }}>
          <a href="index.html" className={activePage === 'home' ? 'active' : ''} aria-current={activePage === 'home' ? 'page' : undefined}>Home</a>
          <a href="services.html" className={activePage === 'services' ? 'active' : ''} aria-current={activePage === 'services' ? 'page' : undefined}>Services</a>
          <a href="careers.html" className={activePage === 'careers' ? 'active' : ''} aria-current={activePage === 'careers' ? 'page' : undefined}>Careers</a>
          <a href="about.html" className={activePage === 'about' ? 'active' : ''} aria-current={activePage === 'about' ? 'page' : undefined}>About</a>
          <a href="contact.html" className={activePage === 'contact' ? 'active' : ''} aria-current={activePage === 'contact' ? 'page' : undefined}>Contact</a>
        </div>
        {isContact
          ? <a href="#contact" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 14 }}>Jump to form <Arrow /></a>
          : <a href="contact.html#contact" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 14 }}>Get in touch <Arrow /></a>
        }
      </div>
    </div>
  );
};

// label: breadcrumb text for the current page, e.g. "About" or "Contact Us"
const Crumb = ({ label }) => (
  <div className="container" style={{ paddingTop: 24 }}>
    <div className="crumb">
      <a href="index.html">Home</a>
      <span className="sep">›</span>
      <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{label}</span>
    </div>
  </div>
);

Object.assign(window, { Arrow, PhoneIcon, MailIcon, FormIcon, Nav, Crumb });
