// Careers page sections

const POSITIONS = [
  { title: 'Intake Specialist',               brand: 'ybh', dept: 'Admissions',   location: 'Encino, CA' },
  { title: 'Administrative Assistant',        brand: 'nws', dept: 'Admin',        location: 'Lake Forest, CA' },
  { title: 'Medical Front Desk Reception',    brand: 'nws', dept: 'Admin',        location: 'Lake Forest, CA' },
  { title: 'PMHNP',                           brand: 'nws', dept: 'Clinical',     location: 'Long Beach, CA' },
  { title: 'TMS Technician Floater',          brand: 'nws', dept: 'Clinical',     location: 'Los Angeles, CA' },
  { title: 'Behavioral Health Technician',    brand: 'cbh', dept: 'Clinical',     location: 'Manhattan Beach, CA' },
  { title: 'PMHNP',                           brand: 'nws', dept: 'Clinical',     location: 'Manhattan Beach, CA' },
  { title: 'Administrative Assistant',        brand: 'nws', dept: 'Admin',        location: 'Marina Del Rey, CA' },
  { title: 'TMS Technician',                  brand: 'nws', dept: 'Clinical',     location: 'North Orange County, CA' },
  { title: 'TMS Technician',                  brand: 'nws', dept: 'Clinical',     location: 'North Torrance, CA' },
  { title: 'Therapist',                       brand: 'cbh', dept: 'Clinical',     location: 'Pasadena, CA' },
  { title: 'TMS Technician',                  brand: 'nws', dept: 'Clinical',     location: 'Pasadena, CA' },
  { title: 'TMS Technician',                  brand: 'nws', dept: 'Clinical',     location: 'Santa Monica, CA' },
  { title: 'Behavioral Health Technician',    brand: 'cbh', dept: 'Clinical',     location: 'Torrance, CA' },
  { title: 'Insurance Collections Specialist',brand: 'ybh', dept: 'Operations',  location: 'Torrance, CA' },
  { title: 'Insurance Collector',             brand: 'ybh', dept: 'Operations',  location: 'Torrance, CA' },
  { title: 'Patient Collections Specialist',  brand: 'ybh', dept: 'Operations',  location: 'Torrance, CA' },
  { title: 'Payroll & HR Systems Specialist', brand: 'ybh', dept: 'People & HR', location: 'Torrance, CA' },
  { title: 'Utilization Review Coordinator',  brand: 'ybh', dept: 'Operations',  location: 'Torrance, CA' },
  { title: 'Clinic Manager',                  brand: 'nws', dept: 'Operations',  location: 'Westlake Village, CA' },
];

const CAR_BRAND_LABEL = { nws: 'Neuro Wellness Spa', cbh: 'Clear Behavioral Health', ybh: 'Your Behavioral Health' };
const CAR_BRAND_COLOR = { nws: '#7A3DB8', cbh: '#2E6DC7', ybh: '#E8911A' };

const CareersHero = () => (
  <section className="hero" data-screen-label="01 Hero">
    <Crumb label="Careers" />
    <div className="container" style={{ paddingTop: 48 }}>
      <div style={{ maxWidth: 720 }}>
        <span className="eyebrow accent">Careers · Your Behavioral Health</span>
        <h1 className="display">Help us build something <span className="ink">better.</span></h1>
        <p className="hero-lede">We're growing a team of people who believe behavioral health care can be more accessible, more compassionate, and more connected. Whether you're a clinician, administrator, or operator — there's a place for you here.</p>
        <div className="hero-meta">
          <div className="hero-mini"><span className="k">Open roles</span><span className="v">{POSITIONS.length}</span></div>
          <div className="divider" />
          <div className="hero-mini"><span className="k">Locations</span><span className="v">~30 across SoCal</span></div>
          <div className="divider" />
          <div className="hero-mini"><span className="k">Brands</span><span className="v">Three, one mission</span></div>
        </div>
      </div>
    </div>
  </section>
);

const CareersPositions = () => {
  const [filter, setFilter] = React.useState('all');

  const filtered = filter === 'all' ? POSITIONS : POSITIONS.filter(p => p.brand === filter);

  const counts = {
    all: POSITIONS.length,
    nws: POSITIONS.filter(p => p.brand === 'nws').length,
    cbh: POSITIONS.filter(p => p.brand === 'cbh').length,
    ybh: POSITIONS.filter(p => p.brand === 'ybh').length,
  };

  return (
    <section style={{ padding: '80px 0', background: 'var(--cream)' }} data-screen-label="02 Open Positions">
      <div className="container">
        <div style={{ marginBottom: 40 }}>
          <span className="eyebrow accent">03 · Open positions</span>
          <h2 className="display-2" style={{ marginTop: 18 }}>Find your role.</h2>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
          {[
            ['all', 'All positions', null],
            ['nws', 'Neuro Wellness Spa', CAR_BRAND_COLOR.nws],
            ['cbh', 'Clear Behavioral Health', CAR_BRAND_COLOR.cbh],
            ['ybh', 'Your Behavioral Health', CAR_BRAND_COLOR.ybh],
          ].map(([key, label, color]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={'loc-filter' + (filter === key ? ' on' : '')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer', border: '1px solid', fontFamily: 'inherit' }}
            >
              {color && <span style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />}
              {label}
              <span style={{
                background: filter === key ? 'rgba(255,255,255,.18)' : 'var(--paper)',
                color: filter === key ? '#fff' : 'var(--ink-3)',
                borderRadius: 999, padding: '1px 7px', fontSize: 11, fontWeight: 600,
              }}>{counts[key]}</span>
            </button>
          ))}
        </div>

        <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }}>
          {filtered.map((pos, i) => (
            <a
              key={i}
              href="https://your-behavioral-health.breezy.hr/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                alignItems: 'center',
                padding: '20px 24px',
                borderBottom: i < filtered.length - 1 ? '1px solid var(--line)' : 'none',
                textDecoration: 'none',
                color: 'inherit',
                gap: 16,
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--cream)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--ink)' }}>{pos.title}</div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 4, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 12, color: CAR_BRAND_COLOR[pos.brand], fontWeight: 600, display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: CAR_BRAND_COLOR[pos.brand], flexShrink: 0 }} />
                    {CAR_BRAND_LABEL[pos.brand]}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--line-2)' }}>·</span>
                  <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>{pos.dept}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
                <span style={{ fontSize: 13, color: 'var(--ink-2)', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  {pos.location}
                </span>
                <Arrow />
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 14, fontSize: 13, color: 'var(--ink-3)', textAlign: 'center' }}>
          Showing {filtered.length} of {POSITIONS.length} open positions &nbsp;·&nbsp;
          <a href="https://your-behavioral-health.breezy.hr/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange-deep)' }}>View all on Breezy</a>
        </div>
      </div>
    </section>
  );
};

const CareersWhy = () => {
  const items = [
    { n: '01', title: 'Mission-driven work', body: 'Every role — clinical or not — supports people at their most vulnerable. The work is meaningful at every level of the organization.' },
    { n: '02', title: 'Rooted in SoCal', body: 'All of our locations are in Southern California. We\'re committed to the communities we serve, and that extends to our team.' },
    { n: '03', title: 'Room to grow', body: 'We promote from within whenever possible and actively support career development across all three brands.' },
    { n: '04', title: 'A connected team', body: 'Three specialized brands, one shared culture. You\'ll feel genuine collaboration across teams, roles, and locations.' },
  ];
  return (
    <section style={{ padding: '80px 0' }} data-screen-label="03 Why YBH">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <span className="eyebrow accent">02 · Why YBH</span>
            <h2 className="display-2" style={{ marginTop: 18 }}>More than a job.</h2>
            <p className="body" style={{ marginTop: 20 }}>We're not just filling roles — we're building a team that reflects the care we want to deliver. People here are curious, compassionate, and genuinely committed to the mission.</p>
            <p className="body" style={{ marginTop: 16 }}>We support diversity, equity and inclusion both in our solutions and as we grow our organization. We actively encourage people of color, humans of all genders, members of the LGBTQ+ community, veterans, individuals with disabilities, and all other beautifully diverse people on this planet to apply.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {items.map((item) => (
              <div key={item.n} style={{ padding: '24px 20px', background: 'var(--cream)', border: '1px solid var(--line)', borderRadius: 16 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--orange-deep)', marginBottom: 10 }}>{item.n}</div>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8, lineHeight: 1.3 }}>{item.title}</div>
                <p className="body-sm" style={{ margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SPECIAL_VALUES = [
  { letter: 'S', text: <><strong>S</strong>peak Openly, Listen Deeply, &amp; Share the “Why”</> },
  { letter: 'P', text: <><strong>P</strong>rioritize Access &amp; Innovation</> },
  { letter: 'E', text: <><strong>E</strong>mbrace Change, Learning &amp; Collaboration as One Team</> },
  { letter: 'C', text: <><strong>C</strong>elebrate Everyday Wins</> },
  { letter: 'I', text: <><strong>I</strong>ntegrity &amp; Compliance: We Act in the Light of Day</> },
  { letter: 'A', text: <><strong>A</strong>ccountability: We Say It, We Do It</> },
  { letter: 'L', text: <><strong>L</strong>ead Decisions with Data, Quality &amp; Compassion</> },
];

const CareersValues = () => {
  const [active, setActive] = React.useState(0);
  const letters = SPECIAL_VALUES.map(v => v.letter);

  return (
    <section className="ybhs-wrap">
      <div className="ybhs-inner">

        <div className="ybhs-header">
          <div className="ybhs-eyebrow">04 · Our Values</div>
          <h2 className="ybhs-heading">
            Our values make us{' '}
            {letters.map((l, i) => (
              <React.Fragment key={i}>
                <span className={'ybhs-l' + (active === i ? ' active' : '')} onClick={() => setActive(i)}>{l}</span>
                {i < letters.length - 1 && <span className="ybhs-dot">.</span>}
              </React.Fragment>
            ))}
          </h2>
          <p style={{ marginTop: 20, fontSize: 18, color: '#4A4752', maxWidth: 600, margin: '20px auto 0', lineHeight: 1.6 }}>
            Our culture isn't just something we talk about — it's how we show up for patients, for each other, and for our communities every day.
          </p>
        </div>

        <div className="ybhs-letters">
          {letters.map((l, i) => (
            <button key={i} className={active === i ? 'active' : ''} onClick={() => setActive(i)}>{l}</button>
          ))}
        </div>

        <div className="ybhs-card">
          <div className="ybhs-icon">{SPECIAL_VALUES[active].letter}</div>
          <div>
            <div className="ybhs-label">VALUE {active + 1} OF 7</div>
            <p className="ybhs-value">{SPECIAL_VALUES[active].text}</p>
          </div>
        </div>

        <div className="ybhs-dots">
          {letters.map((_, i) => (
            <button key={i} className={active === i ? 'active' : ''} onClick={() => setActive(i)}></button>
          ))}
        </div>

      </div>
    </section>
  );
};

const GALLERY_PHOTOS = [
  { src: 'assets/about-hero.jpg', caption: 'The YBH team',            col: '1 / 3', row: '1 / 2' },
  { src: null, label: 'Team building event',                           col: '3 / 4', row: '1 / 3', bg: '#EDE3D6' },
  { src: 'assets/hq.jpg',         caption: 'Our Torrance headquarters', col: '1 / 2', row: '2 / 3' },
  { src: null, label: 'Monthly team lunch',                            col: '2 / 3', row: '2 / 3', bg: '#D4DCDF' },
  { src: null, label: 'Community outreach',                            col: '1 / 3', row: '3 / 4', bg: '#DDD5C8' },
  { src: null, label: 'Company celebration',                           col: '3 / 4', row: '3 / 4', bg: '#D8DFD5' },
];

const CareersGallery = () => {
  const [active, setActive] = React.useState(null);
  const count = GALLERY_PHOTOS.length;

  React.useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape')     setActive(null);
      if (e.key === 'ArrowRight') setActive(i => Math.min(i + 1, count - 1));
      if (e.key === 'ArrowLeft')  setActive(i => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  const CamIcon = ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="rgba(23,22,26,0.22)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  );

  const NavBtn = ({ onClick, style, children }) => (
    <button onClick={onClick} style={{
      background: 'rgba(255,255,255,0.13)', border: 'none', borderRadius: '50%',
      width: 44, height: 44, color: '#fff', fontSize: 22, cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      lineHeight: 1, ...style,
    }}>{children}</button>
  );

  const Placeholder = ({ photo, large }) => (
    <div style={{
      width: large ? 600 : '100%', height: large ? 380 : '100%',
      background: photo.bg, borderRadius: large ? 16 : 0,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: large ? 14 : 8,
    }}>
      <CamIcon size={large ? 52 : 36} />
      <span style={{ fontSize: large ? 15 : 12, color: 'rgba(23,22,26,0.4)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{photo.label}</span>
      <span style={{ fontSize: large ? 13 : 11, color: 'rgba(23,22,26,0.25)' }}>Photo coming soon</span>
    </div>
  );

  return (
    <section style={{ padding: '80px 0', background: 'var(--paper)' }} data-screen-label="05 Life at YBH">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="eyebrow accent">05 · Life at YBH</span>
          <h2 className="display-2" style={{ marginTop: 18 }}>Come as you are. Grow where you belong.</h2>
          <p className="body" style={{ maxWidth: 560, margin: '16px auto 0' }}>
            We work hard and celebrate often. Join a team where the culture is as strong as the mission.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '240px', gap: 12 }}>
          {GALLERY_PHOTOS.map((photo, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                gridColumn: photo.col, gridRow: photo.row,
                borderRadius: 16, overflow: 'hidden', cursor: 'pointer',
                background: photo.bg || 'var(--cream)',
                transition: 'transform 0.18s, box-shadow 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.015)'; e.currentTarget.style.boxShadow = '0 16px 48px -12px rgba(0,0,0,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              {photo.src
                ? <img src={photo.src} alt={photo.caption || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }} />
                : <Placeholder photo={photo} large={false} />
              }
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(10,10,12,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}
          onClick={() => setActive(null)}
        >
          <NavBtn onClick={e => { e.stopPropagation(); setActive(null); }} style={{ position: 'absolute', top: 20, right: 20 }}>✕</NavBtn>

          {active > 0 && (
            <NavBtn onClick={e => { e.stopPropagation(); setActive(i => i - 1); }} style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)' }}>‹</NavBtn>
          )}
          {active < count - 1 && (
            <NavBtn onClick={e => { e.stopPropagation(); setActive(i => i + 1); }} style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)' }}>›</NavBtn>
          )}

          <p style={{ position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.35)', fontSize: 12, margin: 0, letterSpacing: '0.06em' }}>
            {active + 1} / {count}
          </p>

          <div onClick={e => e.stopPropagation()}>
            {GALLERY_PHOTOS[active].src
              ? <img src={GALLERY_PHOTOS[active].src} alt={GALLERY_PHOTOS[active].caption || ''} style={{ maxWidth: '85vw', maxHeight: '80vh', objectFit: 'contain', borderRadius: 12, display: 'block' }} />
              : <Placeholder photo={GALLERY_PHOTOS[active]} large={true} />
            }
            {GALLERY_PHOTOS[active].caption && (
              <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 12, marginBottom: 0 }}>
                {GALLERY_PHOTOS[active].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

Object.assign(window, { CareersHero, CareersValues, CareersGallery, CareersPositions, CareersWhy, POSITIONS, CAR_BRAND_LABEL, CAR_BRAND_COLOR });
