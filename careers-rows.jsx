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
          <span className="eyebrow accent">02 · Open positions</span>
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
            <span className="eyebrow accent">03 · Why YBH</span>
            <h2 className="display-2" style={{ marginTop: 18 }}>More than a job.</h2>
            <p className="body" style={{ marginTop: 20 }}>We're not just filling roles — we're building a team that reflects the care we want to deliver. People here are curious, compassionate, and genuinely committed to the mission.</p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn btn-dark" href="https://your-behavioral-health.breezy.hr/" target="_blank" rel="noopener noreferrer">See open positions <Arrow /></a>
              <a className="btn btn-ghost" href="contact.html">Get in touch</a>
            </div>
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

Object.assign(window, { CareersHero, CareersPositions, CareersWhy, POSITIONS, CAR_BRAND_LABEL, CAR_BRAND_COLOR });
