// Home page sections

const HomeHero = () => (
  <section className="hero-b" data-screen-label="01 Hero" style={{ minHeight: '88vh' }}>
    <div className="bg">
      <img src="https://yourbehavioralhealth.com/wp-content/uploads/2025/08/your-behaviral-health-united-brands.jpg" alt="" />
    </div>
    <div className="inner" style={{ paddingTop: 'clamp(80px, 14vh, 140px)', paddingBottom: 'clamp(60px, 10vh, 100px)' }}>
      <div className="container">
        <span className="eyebrow no-line" style={{ color: 'var(--yellow)' }}>Your Behavioral Health</span>
        <h1 className="display" style={{ marginTop: 20, color: '#fff', maxWidth: '16ch' }}>
          Creating change — one person at a <span className="ink">time.</span>
        </h1>
        <p className="hero-lede" style={{ color: 'rgba(255,255,255,.8)', maxWidth: '48ch', marginTop: 28 }}>
          We operate a connected network of behavioral health brands across Southern California — covering the full spectrum of care, from your first appointment through long-term recovery.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
          <a className="btn btn-primary btn-lg" href="contact.html#contact">Get in touch <Arrow /></a>
          <a className="btn btn-lg" href="about.html" style={{ background: 'rgba(255,255,255,.12)', color: '#fff', border: '1.5px solid rgba(255,255,255,.3)', backdropFilter: 'blur(8px)' }}>About us</a>
        </div>
        <div style={{ display: 'flex', gap: 32, marginTop: 56, flexWrap: 'wrap' }}>
          {[['20+', 'Years serving SoCal'], ['~30', 'Locations'], ['3', 'Specialized brands'], ['1', 'Mission']].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 500, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', marginTop: 4, fontWeight: 500 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const SERVICES = [
  {
    title: 'Psychiatry & Therapy',
    body: 'Medication management, talk therapy, and TMS treatment for adolescents and adults — in-office and via telehealth.',
    brand: 'Neuro Wellness Spa',
    color: '#7A3DB8',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    title: 'Mental Health Treatment',
    body: 'Residential, PHP, IOP, and virtual programs for adults and teens — all levels of care under one roof.',
    brand: 'Clear Behavioral Health',
    color: '#2E6DC7',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    title: 'Substance Use Treatment',
    body: 'Medical detox, dual-diagnosis residential care, and step-down programs that treat addiction and its underlying causes.',
    brand: 'Clear Behavioral Health',
    color: '#2E6DC7',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Aftercare & Sober Living',
    body: 'Structured sober homes for young men in early recovery — bridging the gap between treatment and independent life.',
    brand: 'New Life House',
    color: '#D4A227',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
];

const HomeServices = () => (
  <section style={{ padding: '96px 0', background: 'var(--cream)' }} data-screen-label="02 Services">
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48, alignItems: 'end', marginBottom: 56 }}>
        <div>
          <span className="eyebrow accent">02 · What we treat</span>
          <h2 className="display-2" style={{ marginTop: 18 }}>The full spectrum of behavioral health care.</h2>
        </div>
        <p className="body" style={{ marginBottom: 0 }}>
          Our three brands cover every major level of behavioral health care — so wherever someone is in their journey, there's a right next step within our network.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
        {SERVICES.map((s, i) => (
          <div key={i} style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 20, padding: '32px 28px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: s.color + '18', color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {s.icon}
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 600, margin: 0, lineHeight: 1.2 }}>{s.title}</h3>
            <p className="body-sm" style={{ margin: 0, flexGrow: 1 }}>{s.body}</p>
            <div style={{ paddingTop: 12, borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: s.color }}>{s.brand}</span>
              <Arrow />
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: s.color }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HomeAbout = () => (
  <section style={{ padding: '96px 0' }} data-screen-label="03 About">
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
          <img src="assets/about-hero.jpg" alt="Your Behavioral Health" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 20, left: 20, background: 'rgba(23,22,26,.85)', backdropFilter: 'blur(12px)', borderRadius: 12, padding: '12px 16px', color: '#fff' }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--yellow)', marginBottom: 4 }}>Founded</div>
            <div style={{ fontSize: 15, fontWeight: 500 }}>Serving SoCal since the mid-1980s</div>
          </div>
        </div>
        <div>
          <span className="eyebrow accent">03 · Who we are</span>
          <h2 className="display-2" style={{ marginTop: 18 }}>Disrupting behavioral health care — for good.</h2>
          <p className="body" style={{ marginTop: 20 }}>
            Your Behavioral Health has been at the forefront of transforming behavioral health care since the mid-1980s. We've built a comprehensive network of services designed around one belief: every person deserves access to high-quality, affordable care.
          </p>
          <p className="body" style={{ marginTop: 16 }}>
            We increase access to in-network treatment, lead with evidence-based care, and work to reduce the stigma around mental health and addiction — one person, one family, one community at a time.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 36 }}>
            {[
              ['Affordable', 'In-network with major insurers'],
              ['Evidence-based', 'Research-backed treatment methods'],
              ['Whole-person', 'Physical, mental, and social wellness'],
              ['Continuum', 'Every level of care in one network'],
            ].map(([k, v]) => (
              <div key={k} style={{ padding: '16px', background: 'var(--cream)', borderRadius: 12, border: '1px solid var(--line)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--orange-deep)' }}>{k}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 3 }}>{v}</div>
              </div>
            ))}
          </div>
          <a className="btn btn-dark" href="about.html" style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Our story <Arrow />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const HomeProcess = () => {
  const items = [
    {
      n: '01',
      title: 'Evidence-based, integrated care',
      body: 'We combine the best available research with decades of clinical expertise. Every treatment plan is individualized, coordinated across providers, and designed for sustained well-being — not just short-term relief.',
    },
    {
      n: '02',
      title: 'Accessible, in-network treatment',
      body: 'Navigating insurance shouldn\'t be a barrier to getting help. Our network accepts most major insurers, and our admissions team guides each patient through coverage, costs, and next steps.',
    },
    {
      n: '03',
      title: 'Mission-driven for superior outcomes',
      body: 'Every decision we make is guided by one question: what\'s best for the patient? Our care teams are clinically rigorous, culturally responsive, and personally invested in the people they serve.',
    },
  ];
  return (
    <section style={{ padding: '96px 0', background: 'var(--ink)' }} data-screen-label="04 How we work">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 56, marginBottom: 56, alignItems: 'end' }}>
          <div>
            <span className="eyebrow no-line" style={{ color: 'var(--yellow)' }}>04 · How we work</span>
            <h2 className="display-2" style={{ marginTop: 18, color: '#fff' }}>Care that's built differently.</h2>
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.65)', margin: 0 }}>
            Three principles guide everything we do — from how we design programs to how our staff show up for patients every day.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {items.map((item) => (
            <div key={item.n} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 20, padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--yellow)', letterSpacing: '0.05em' }}>{item.n}</div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.25 }}>{item.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,.6)', margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeTestimonials = () => {
  const quotes = [
    {
      text: "In my line of work, I need partners I can rely on. Your Behavioral Health has consistently shown up for the families I refer. They answer questions, cut through the confusion around coverage, and treat every person with real care.",
      name: 'Sarah T.',
      role: 'Referring Provider',
      img: 'https://yourbehavioralhealth.com/wp-content/uploads/2025/07/sarah_y_headshot.jpg',
    },
    {
      text: "Your Behavioral Health helps the families utilizing our aftercare services get a clear understanding of what the treatment process looks like, and helps them navigate their loved one's care every step of the way.",
      name: 'Ava Y.',
      role: 'Community Partner',
      img: 'https://yourbehavioralhealth.com/wp-content/uploads/2023/05/ava1.png',
    },
  ];
  return (
    <section style={{ padding: '96px 0', background: 'var(--cream)' }} data-screen-label="05 Testimonials">
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <span className="eyebrow accent">05 · What people say</span>
          <h2 className="display-2" style={{ marginTop: 18 }}>Trusted by providers, families, and partners.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {quotes.map((q, i) => (
            <div key={i} style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 20, padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 28 }}>
              <svg width="32" height="22" viewBox="0 0 32 22" fill="none">
                <path d="M0 22V13.4C0 5.8 4.267 1.533 12.8 0l1.6 2.6C10.133 3.667 7.8 6 7.2 9.6H13V22H0zm18 0V13.4C18 5.8 22.267 1.533 30.8 0l1.2 2.6C27.733 3.667 25.4 6 24.8 9.6H30V22H18z" fill="var(--orange)" opacity=".35"/>
              </svg>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0, fontStyle: 'italic' }}>"{q.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <img src={q.img} alt={q.name} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--line)' }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{q.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeBrands = () => (
  <section style={{ padding: '96px 0' }} data-screen-label="06 Brands">
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48, alignItems: 'end', marginBottom: 48 }}>
        <div>
          <span className="eyebrow accent">06 · Our brands</span>
          <h2 className="display-2" style={{ marginTop: 18 }}>One organization, three specialized brands.</h2>
        </div>
        <p className="body" style={{ marginBottom: 0 }}>
          Each brand is independently specialized but connected through shared leadership, shared values, and a coordinated care network — so patients move seamlessly from one level of care to the next.
        </p>
      </div>
      <div className="brands-grid">
        {[
          { cls: 'b1', logo: 'assets/brand-nws.png', alt: 'Neuro Wellness Spa', heading: 'Psychiatry, TMS & therapy', body: 'Outpatient psychiatry, medication management, TMS, and talk therapy for adolescents and adults across Southern California.', pills: [['purple','Psychiatry'],['purple','TMS'],['purple','Therapy']], visit: 'Visit neurowellnessspa.com' },
          { cls: 'b2', logo: 'assets/brand-cbh.png', alt: 'Clear Behavioral Health', heading: 'Mental health & addiction', body: 'Residential, PHP, IOP, and virtual programs for adults and teens experiencing mental health and substance use challenges.', pills: [['blue','Residential'],['blue','PHP / IOP'],['blue','Virtual IOP']], visit: 'Visit clearbehavioralhealth.com' },
          { cls: 'b3', logo: 'assets/brand-nlh.png', alt: 'New Life House', heading: 'Sober living for young men', body: 'Structured, community-based sober living homes supporting young men in long-term recovery since 1985.', pills: [['gold','Sober living'],['gold','Aftercare'],['gold','Young men']], visit: 'Visit newlifehouse.com' },
        ].map((c) => (
          <a key={c.cls} href="#" className={`brand-card ${c.cls}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="logo-wrap"><img src={c.logo} alt={c.alt} /></div>
            <h3>{c.heading}</h3>
            <p className="body-sm">{c.body}</p>
            <div className="services">
              {c.pills.map(([color, label]) => <span key={label} className={`pill ${color}`}>{label}</span>)}
            </div>
            <span className="visit">{c.visit} <Arrow /></span>
            <div className="accent-bar" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

const HomeCTA = () => (
  <section className="careers" data-screen-label="07 CTA" style={{ padding: '96px 0' }}>
    <div className="container">
      <div className="careers-inner">
        <div>
          <span className="eyebrow accent">07 · Get in touch</span>
          <h2 style={{ marginTop: 18 }}>We're here to help make sense of behavioral health care.</h2>
          <p className="lede">Whether you're looking for care for yourself, a loved one, or want to refer a patient — our team is ready to help you find the right path forward.</p>
          <div className="careers-actions" style={{ marginTop: 32 }}>
            <a className="btn btn-dark btn-lg" href="contact.html#contact">Contact us <Arrow /></a>
            <a className="btn btn-ghost btn-lg" href="tel:8663953181">(866) 395-3181</a>
          </div>
        </div>
        <div className="careers-side">
          <div className="careers-stats">
            <div className="careers-stat"><div className="n">24/7</div><div className="l">Crisis support</div></div>
            <div className="careers-stat"><div className="n">In-network</div><div className="l">Major insurers</div></div>
            <div className="careers-stat"><div className="n">Same-day</div><div className="l">Admissions calls</div></div>
            <div className="careers-stat"><div className="n">988</div><div className="l">Crisis lifeline</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { HomeHero, HomeServices, HomeAbout, HomeProcess, HomeTestimonials, HomeBrands, HomeCTA });
