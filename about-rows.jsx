// About page sections

const AboutHero = () => (
  <section className="hero" data-screen-label="01 Hero">
    <Crumb label="About" />
    <div className="container" style={{ paddingTop: 48 }}>
      <div style={{ maxWidth: 720 }}>
        <span className="eyebrow accent">About · Your Behavioral Health</span>
        <h1 className="display">Better care starts with a better <span className="ink">system.</span></h1>
        <p className="hero-lede">Your Behavioral Health is on a mission to deliver personalized care, how and where you need it, today and every step of the way. We believe all people deserve access to high-quality, affordable behavioral health care — and the system delivering it should be as thoughtfully designed as the treatment itself.</p>
        <div className="hero-meta">
          <div className="hero-mini"><span className="k">Founded</span><span className="v">Two decades ago</span></div>
          <div className="divider" />
          <div className="hero-mini"><span className="k">Locations</span><span className="v">~30 across SoCal</span></div>
          <div className="divider" />
          <div className="hero-mini"><span className="k">Brands</span><span className="v">Three, one continuum</span></div>
        </div>
      </div>
    </div>
  </section>
);

const AboutBrandsRow = () => (
  <section className="brands" data-screen-label="02 Brands">
    <div className="container">
      <div className="brands-head">
        <div>
          <span className="eyebrow accent">02 · Our brands</span>
          <h2 className="display-2" style={{ marginTop: 18 }}>One organization, three specialized brands.</h2>
        </div>
        <p className="body">Each brand serves a distinct role in the behavioral health continuum — but together, they create a connected system of care that can support a person from their first appointment through long-term recovery.</p>
      </div>
      <div className="brands-grid">
        <a href="#" className="brand-card b1" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="logo-wrap"><img src="assets/brand-nws.png" alt="Neuro Wellness Spa"/></div>
          <h3>Psychiatry, therapy & TMS</h3>
          <p className="body-sm">Psychiatry, talk therapy, and TMS treatment for teens and adults in Southern California, with virtual care offered throughout the state.</p>
          <div className="services">
            <span className="pill purple">Psychiatry</span>
            <span className="pill purple">TMS</span>
            <span className="pill purple">Therapy</span>
          </div>
          <span className="visit">Visit neurowellnessspa.com <Arrow /></span>
          <div className="accent-bar" />
        </a>
        <a href="#" className="brand-card b2" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="logo-wrap"><img src="assets/brand-cbh.png" alt="Clear Behavioral Health"/></div>
          <h3>Mental health & substance use</h3>
          <p className="body-sm">Residential and outpatient treatment for mental health and substance use, including detox, dual diagnosis, PHP, IOP, and teen programs.</p>
          <div className="services">
            <span className="pill blue">Residential</span>
            <span className="pill blue">Detox</span>
            <span className="pill blue">PHP / IOP</span>
          </div>
          <span className="visit">Visit clearbehavioralhealth.com <Arrow /></span>
          <div className="accent-bar" />
        </a>
        <a href="#" className="brand-card b3" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="logo-wrap"><img src="assets/brand-nlh.png" alt="New Life House"/></div>
          <h3>Sober living for young men</h3>
          <p className="body-sm">Structured sober homes for young men — building a foundation for lasting recovery and bridging the gap between treatment and independent life.</p>
          <div className="services">
            <span className="pill gold">Sober living</span>
            <span className="pill gold">Aftercare</span>
            <span className="pill gold">Young men</span>
          </div>
          <span className="visit">Visit newlifehouse.com <Arrow /></span>
          <div className="accent-bar" />
        </a>
      </div>
    </div>
  </section>
);

const AboutCommunity = () => {
  const items = [
    { tag: 'Schools',       title: 'School-based mental health services',  body: 'Free counseling, teen wellness groups, parent education, and staff training on youth mental health for local school districts.' },
    { tag: 'First response',title: 'Alternative Crisis Response',           body: "Staffing the City of Redondo Beach's crisis response team — behavioral health professionals as first responders alongside emergency services." },
    { tag: 'Public health', title: 'Beach Cities Health District',          body: 'Active partnership with BCHD to reduce anxiety, depression, and substance use through volunteer services, the Allcove Center, and health programming.' },
    { tag: 'Education',     title: 'Free community education',              body: 'Quarterly parent webinars, monthly Hopestream mental health hours, continuing education for local clinicians, and the FACTMS patient assistance fund.' },
    { tag: 'Training',      title: 'Clinical training & internships',       body: 'CBH and NWS offer internship programs supporting students in formal training and those exploring early careers in behavioral health.' },
  ];
  const partners = ['Beach Cities Health District', 'FACTMS', 'Hopestream Community', 'City of Redondo Beach', 'Allcove Center', 'Sketchers Friendship Walk'];
  return (
    <section className="reach" data-screen-label="03 Community" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <div className="reach-head">
          <div>
            <span className="eyebrow accent">03 · Community</span>
            <h2 className="display-2" style={{ marginTop: 18 }}>Showing up beyond our walls.</h2>
          </div>
          <p className="body">We believe meaningful behavioral health care extends beyond the treatment room. Our teams are actively embedded in the communities we serve — partnering with local organizations, schools, and public agencies to expand access, reduce stigma, and support prevention before crisis.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {items.map((it, i) => (
            <div key={i} className="reach-card" style={{ minHeight: 220 }}>
              <span className="tag" style={{ color: 'var(--orange-deep)' }}>0{i+1} · {it.tag}</span>
              <h3 style={{ fontSize: 20 }}>{it.title}</h3>
              <p className="body-sm" style={{ margin: 0 }}>{it.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--line-2)' }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 16 }}>Community partners</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {partners.map(p => <span key={p} className="pill" style={{ padding: '10px 16px', fontSize: 13, background: 'var(--paper)', border: '1px solid var(--line)' }}>{p}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};

const LEADERS = [
  { img: 'about-matthew.jpg',    name: 'Matthew Zubiller',              title: 'Chief Executive Officer' },
  { img: 'about-koo.jpg',        name: 'Dr. Martha Koo, M.D.',          title: 'Chief Medical Officer' },
  { img: 'about-ackerman.jpg',   name: 'Lindsey Rae Ackerman, LMFT, CHHC', title: 'VP of Clinical Services' },
  { img: 'about-pedersen.jpg',   name: 'Emily Pedersen',                title: 'Vice President of Operations' },
  { img: 'about-kettlekamp.jpg', name: 'Greg Kettlekamp',               title: 'Executive Director of Operations' },
  { img: 'about-lalanne.jpg',    name: 'Sara Lalanne, M.A.',            title: 'Executive Director of Operations' },
  { img: 'about-martin.jpg',     name: 'Sebastian Martin',              title: 'Executive Director of Operations' },
  { img: 'about-barker.jpg',     name: 'Howard Barker',                 title: 'Director of Business Development' },
  { img: 'about-chocco.jpg',     name: 'David Chocco',                  title: 'Director of IT' },
];

const AboutLeadership = () => (
  <section className="admissions" data-screen-label="04 Leadership" style={{ padding: '100px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 48, marginBottom: 56 }}>
        <div>
          <span className="eyebrow no-line" style={{ color: 'var(--yellow)' }}>04 · Leadership</span>
          <h2 className="display-2" style={{ marginTop: 18, color: '#fff' }}>The people behind the mission.</h2>
        </div>
        <p className="lede" style={{ marginTop: 0 }}>Our leadership team brings together decades of clinical, operational, and business expertise — united by a shared belief that behavioral health care can and should be better. Many of our leaders came to this work through personal experience, and that perspective shapes everything we do.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        {LEADERS.map((p, i) => (
          <div key={p.name} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ aspectRatio: '1/1', background: '#2a2830', overflow: 'hidden' }}>
              <img src={'assets/' + p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}/>
            </div>
            <div style={{ padding: '18px 20px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--yellow)' }}>0{i+1}</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginTop: 6, lineHeight: 1.3 }}>{p.name}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', marginTop: 4 }}>{p.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutPress = () => {
  const outlets = ['Forbes', 'Healthline', 'National Geographic', 'TIME', 'Huffpost', 'Newsweek', 'Rolling Stone', 'U.S. News', "Reader's Digest", 'Verywell Mind', 'Medical News Today', 'Psychiatric Times', 'Elle', 'Entrepreneur', 'Daily Mail', 'BusinessWire', 'Parents Magazine'];
  return (
    <section className="brands" data-screen-label="05 Press" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <div className="brands-head">
          <div>
            <span className="eyebrow accent">05 · In the press</span>
            <h2 className="display-2" style={{ marginTop: 18 }}>Trusted voices in behavioral health.</h2>
          </div>
          <p className="body">Our clinicians and leaders are regularly sought out by top publications for their expertise in mental health, substance use, and psychiatric care. It's one of the ways we work to reduce stigma and expand access to accurate, compassionate information.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 0, border: '1px solid var(--line)', borderRadius: 20, overflow: 'hidden', background: 'var(--paper)' }}>
          {outlets.map(o => (
            <div key={o} style={{
              padding: '28px 20px', textAlign: 'center',
              fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em',
              color: 'var(--ink-2)', fontFamily: 'Georgia, serif',
              borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
            }}>{o}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutCareers = () => (
  <section className="careers" data-screen-label="07 Careers">
    <div className="container">
      <div className="careers-inner">
        <div>
          <span className="eyebrow accent">07 · Work with us</span>
          <h2 style={{ marginTop: 18 }}>Be part of what we're building.</h2>
          <p className="lede">We're growing a team of people who believe behavioral health care can be better — more accessible, more compassionate, more connected. If that sounds like you, we'd love to meet you.</p>
          <div className="careers-actions" style={{ marginTop: 32 }}>
            <a className="btn btn-dark btn-lg" href="#">Explore open positions <Arrow /></a>
            <a className="btn btn-ghost btn-lg" href="contact.html#contact">Get in touch</a>
          </div>
        </div>
        <div className="careers-side">
          <div className="careers-stats">
            <div className="careers-stat"><div className="n">~30</div><div className="l">Locations</div></div>
            <div className="careers-stat"><div className="n">3</div><div className="l">Brands</div></div>
            <div className="careers-stat"><div className="n">20 yrs</div><div className="l">Serving SoCal</div></div>
            <div className="careers-stat"><div className="n">1</div><div className="l">Mission</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { AboutHero, AboutBrandsRow, AboutCommunity, AboutLeadership, AboutPress, AboutCareers });
