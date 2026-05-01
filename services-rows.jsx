// Services page sections

const SVC_BRAND_LABEL = { nws: 'Neuro Wellness Spa', cbh: 'Clear Behavioral Health', nlh: 'New Life House' };
const SVC_BRAND_COLOR = { nws: '#7A3DB8', cbh: '#2E6DC7', nlh: '#D4A227' };
const SVC_BRAND_URL   = { nws: 'https://neurowellnessspa.com', cbh: 'https://clearbehavioralhealth.com', nlh: 'https://newlifehouse.com' };

const SvcIcon = ({ id, color = 'currentColor' }) => {
  const props = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (id) {
    case 'med':   return <svg {...props}><rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)"/><line x1="9" y1="9" x2="15" y2="15" transform="rotate(-30 12 12)"/></svg>;
    case 'brief': return <svg {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
    case 'tms':   return <svg {...props}><path d="M12 2a7 7 0 0 0-7 7c0 3 2 5 4 7v4h6v-4c2-2 4-4 4-7a7 7 0 0 0-7-7z"/><path d="M9 22h6"/></svg>;
    case 'viop':  return <svg {...props}><rect x="2" y="4" width="20" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
    case 'iop':   return <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>;
    case 'php':   return <svg {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
    case 'detox': return <svg {...props}><path d="M19 14c1.5-1.5 3-3 3-6a4 4 0 0 0-7-2.7A4 4 0 0 0 8 8c0 3 1.5 4.5 3 6l1 1 1-1z"/><path d="M2 12h7l2-3 2 6 2-3h7"/></svg>;
    case 'sober': return <svg {...props}><path d="M3 12L12 3l9 9"/><path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/><path d="M9 21V14h6v7"/></svg>;
    default:      return <svg {...props}><circle cx="12" cy="12" r="9"/></svg>;
  }
};

const SERVICES_DATA = [
  { id: 'med',   name: 'Medication Management',   brand: 'nws', ages: '12+',    stage: 'Continuing Care',
    short: 'Comprehensive psychiatric assessment and ongoing medication management — online or in-person.',
    long:  'Pharmacological and non-pharmacological treatment options, with patient education and regular monitoring by prescribers across a wide range of specialties.' },
  { id: 'brief', name: 'Brief Psychotherapy',     brand: 'nws', ages: '12+',    stage: 'Outpatient Intervention',
    short: 'Short-term, evidence-based talk therapy with experienced clinicians.',
    long:  'CBT, DBT, ERP, mindfulness, psychodynamic, and narrative therapy — available in-person or online with therapists trained in diverse specialties.' },
  { id: 'tms',   name: 'TMS Therapy',             brand: 'nws', ages: '15+',    stage: 'Outpatient Intervention',
    short: 'FDA-cleared neuromodulation for depression, anxiety, OCD, and more.',
    long:  'A nine-week course of treatment using magnetic pulses, guided by clinical rating scales and physician evaluations every two weeks. Includes psychoeducation around sleep, nutrition, and lifestyle.' },
  { id: 'viop',  name: 'Virtual IOP',             brand: 'cbh', ages: 'Adults', stage: 'Implementation',
    short: 'Structured outpatient programming delivered virtually.',
    long:  'Day and evening schedules let patients balance treatment with daily life. Focus areas include enhanced self-efficacy, skill implementation, and sustained recovery.' },
  { id: 'iop',   name: 'Intensive Outpatient',    brand: 'cbh', ages: '12+',    stage: 'Implementation',
    short: 'Group and individual therapy several days a week.',
    long:  'Structured support for transitioning back to everyday life — comprehensive treatment planning, skill implementation, and ongoing therapeutic work.' },
  { id: 'php',   name: 'Partial Hospitalization', brand: 'cbh', ages: '12+',    stage: 'Integration',
    short: 'Daily structured immersion just below inpatient care.',
    long:  'Identification of external stressors, daily structured immersion, skill integration, and an integrative multi-modality approach (trauma-informed CBT, DBT, EMDR).' },
  { id: 'detox', name: 'Detox & Residential',     brand: 'cbh', ages: 'Adults', stage: 'Stabilization',
    short: 'Medically supervised detox and 24/7 residential treatment.',
    long:  'Distinct programs for detox, residential rehab, and residential mental health. Includes acute medical stabilization, motivation enhancement, immediate crisis management, and skill acquisition.' },
  { id: 'sober', name: 'Residential Sober Living',brand: 'nlh', ages: 'Young men', stage: 'Recovery',
    short: 'Structured sober homes for young men in long-term recovery.',
    long:  '24-hour supervised, safe housing with educational and vocational skills support. Reunites families, repairs relationships, and provides clinical programming with therapists and case managers throughout each episode of care.' },
];

// ── Helpers ───────────────────────────────────────────────────────

const useIsNarrow = () => {
  const [narrow, setNarrow] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const h = () => setNarrow(window.innerWidth < 768);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return narrow;
};

const ChevronLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const ChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const NavBtn = ({ onClick, disabled, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      width: 44, height: 44, borderRadius: '50%',
      border: '1px solid var(--line)',
      background: disabled ? 'transparent' : 'var(--paper)',
      color: disabled ? 'var(--line)' : 'var(--ink)',
      cursor: disabled ? 'default' : 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, transition: 'all 0.15s',
    }}
  >
    {children}
  </button>
);

const DotNav = ({ count, active, onGo }) => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    {Array.from({ length: count }).map((_, i) => (
      <button
        key={i}
        onClick={() => onGo(i)}
        aria-label={`Go to ${i + 1}`}
        style={{
          width: i === active ? 24 : 8, height: 8, borderRadius: 4,
          background: i === active ? 'var(--ink)' : 'var(--line)',
          border: 'none', cursor: 'pointer', padding: 0,
          transition: 'all 0.22s',
        }}
      />
    ))}
  </div>
);

// ── Video placeholder ──────────────────────────────────────────────

const VideoPlaceholder = ({ accent }) => {
  const c = SVC_BRAND_COLOR[accent] || '#333';
  return (
    <div style={{
      position: 'relative', background: '#111827',
      aspectRatio: '16/9', width: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', borderRadius: 14,
    }}>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${c}30 0%, transparent 60%)` }} />
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
      }} />
      <div style={{
        width: 64, height: 64, borderRadius: '50%',
        background: 'rgba(255,255,255,0.1)',
        border: '1.5px solid rgba(255,255,255,0.22)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)" style={{ marginLeft: 3 }}>
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>
      <div style={{
        position: 'absolute', bottom: 14, left: 16, zIndex: 1,
        fontSize: 10, fontWeight: 600, letterSpacing: '0.1em',
        color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase',
        fontFamily: 'var(--font-mono)',
      }}>
        Video placeholder
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────
// 1 · Hero
// ──────────────────────────────────────────────────────────────────
const ServicesHero = () => (
  <section className="hero" data-screen-label="01 Hero">
    <Crumb label="Services" />
    <div className="container" style={{ paddingTop: 48 }}>
      <div style={{ maxWidth: 760 }}>
        <span className="eyebrow accent">Services · Your Behavioral Health</span>
        <h1 className="display">A full continuum of <span className="ink">care.</span></h1>
        <p className="hero-lede">Whether you're starting with a single therapy session or stepping into 24/7 residential care, we have a place for you. Three brands, eight levels of care, one connected system designed to meet you exactly where you are.</p>
      </div>
    </div>
  </section>
);

// ──────────────────────────────────────────────────────────────────
// Patient journey data
// ──────────────────────────────────────────────────────────────────
const JOURNEYS = [
  {
    id: 'depression',
    title: 'Depression that resists medication',
    accent: 'nws',
    steps: [
      { brand: 'nws', svc: 'med',   label: 'Initial psychiatric eval + medication management' },
      { brand: 'nws', svc: 'brief', label: 'Brief therapy alongside medication' },
      { brand: 'nws', svc: 'tms',   label: 'Referred to TMS when meds fall short' },
      { brand: 'nws', svc: 'brief', label: 'Continued therapy + ongoing medication review' },
    ],
  },
  {
    id: 'adolescent',
    title: 'Mental health care for a teenager',
    accent: 'cbh',
    steps: [
      { brand: 'cbh', svc: 'php',   label: 'Partial hospitalization — structured daily stabilization' },
      { brand: 'cbh', svc: 'iop',   label: 'Step down to IOP — group therapy and skill-building' },
      { brand: 'nws', svc: 'med',   label: 'Ongoing medication management' },
      { brand: 'nws', svc: 'tms',   label: 'TMS for treatment-resistant symptoms (ages 15+)' },
      { brand: 'nws', svc: 'brief', label: 'Continued talk therapy for long-term support' },
    ],
  },
  {
    id: 'recovery',
    title: 'Stepping down from acute substance use',
    accent: 'cbh',
    steps: [
      { brand: 'cbh', svc: 'detox', label: 'Medically supervised detox + residential' },
      { brand: 'cbh', svc: 'php',   label: 'Step down to PHP — daily structured care' },
      { brand: 'cbh', svc: 'iop',   label: 'IOP a few days/week as he returns to work' },
      { brand: 'cbh', svc: 'viop',  label: 'Alumni support + virtual touch-points' },
      { brand: 'nws', svc: 'med',   label: 'Continuing therapy + medication at NWS' },
    ],
  },
  {
    id: 'wraparound',
    title: 'Wraparound care for a young man in recovery',
    accent: 'nlh',
    steps: [
      { brand: 'nlh', svc: 'sober', label: 'Moves into structured sober living' },
      { brand: 'cbh', svc: 'iop',   label: 'Daily IOP for substance use + co-occurring needs' },
      { brand: 'nws', svc: 'med',   label: 'Psychiatric medication management' },
      { brand: 'nws', svc: 'tms',   label: 'TMS for treatment-resistant depression' },
    ],
  },
];

const JourneyTimeline = ({ steps }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
    {steps.map((step, i) => {
      const c = SVC_BRAND_COLOR[step.brand];
      const isLast = i === steps.length - 1;
      return (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 16, position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: c + '18', color: c, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '2px solid ' + c }}>
              <SvcIcon id={step.svc} color={c} />
            </div>
            {!isLast && <div style={{ width: 2, flex: 1, background: 'var(--line)', minHeight: 24 }} />}
          </div>
          <div style={{ paddingTop: 8, paddingBottom: isLast ? 0 : 28 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: c, marginBottom: 4 }}>
              {SVC_BRAND_LABEL[step.brand]}
            </div>
            <div style={{ fontSize: 15, color: 'var(--ink)', lineHeight: 1.45, fontWeight: 500 }}>{step.label}</div>
          </div>
        </div>
      );
    })}
  </div>
);

// ──────────────────────────────────────────────────────────────────
// 2 · Patient journeys — alternating list
// ──────────────────────────────────────────────────────────────────
const ServicesJourneys = () => {
  const isNarrow = useIsNarrow();

  return (
    <section style={{ padding: '96px 0', background: 'var(--cream)' }} data-screen-label="02 Journeys">
      <div className="container">

        <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1.6fr', gap: 48, alignItems: 'end', marginBottom: 56 }}>
          <div>
            <span className="eyebrow accent">02 · Patient journeys</span>
            <h2 className="display-2" style={{ marginTop: 18 }}>How care actually flows.</h2>
          </div>
          {!isNarrow && (
            <p className="body" style={{ marginBottom: 0 }}>
              Four real-world examples of how patients move through our network. No two journeys are identical — but every one is coordinated across brands, providers, and levels of care.
            </p>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {JOURNEYS.map((j, idx) => {
            const flip = !isNarrow && idx % 2 === 1;

            const videoCol = (
              <div style={{ padding: isNarrow ? '24px 24px' : '36px 44px', borderBottom: isNarrow ? '1px solid var(--line)' : 'none', ...(flip ? {} : { borderRight: '1px solid var(--line)' }) }}>
                <VideoPlaceholder accent={j.accent} />
                <p className="body-sm" style={{ marginTop: 20, marginBottom: 0, color: 'var(--ink-4)', fontStyle: 'italic' }}>
                  Video placeholder — description to be added when footage is available.
                </p>
              </div>
            );

            const pathCol = (
              <div style={{ padding: isNarrow ? '24px 24px 32px' : '36px 44px', ...(flip ? { borderRight: '1px solid var(--line)' } : {}) }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 24 }}>The path</div>
                <JourneyTimeline steps={j.steps} />
              </div>
            );

            return (
              <div key={j.id} style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 24, overflow: 'hidden' }}>
                <div style={{ padding: isNarrow ? '28px 24px 20px' : '36px 44px 28px', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)', display: 'block', marginBottom: 10 }}>0{idx + 1} / 0{JOURNEYS.length}</span>
                  <h3 style={{ fontSize: isNarrow ? 22 : 28, margin: 0, fontWeight: 600, lineHeight: 1.18 }}>{j.title}</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr' }}>
                  {flip ? <>{pathCol}{videoCol}</> : <>{videoCol}{pathCol}</>}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// ──────────────────────────────────────────────────────────────────
// 3 · Continuum — card carousel
// ──────────────────────────────────────────────────────────────────
const ServicesContinuum = () => {
  const [filter, setFilter] = React.useState('all');
  const [idx, setIdx] = React.useState(0);
  const [touchX, setTouchX] = React.useState(null);
  const isNarrow = useIsNarrow();

  const list = filter === 'all' ? SERVICES_DATA : SERVICES_DATA.filter(s => s.brand === filter);

  React.useEffect(() => { setIdx(0); }, [filter]);

  const go = (n) => setIdx(Math.max(0, Math.min(list.length - 1, n)));
  const svc = list[idx] || list[0];

  return (
    <section style={{ padding: '96px 0', background: 'var(--cream)' }} data-screen-label="03 Continuum">
      <div className="container">

        <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1.4fr', gap: 48, alignItems: 'end', marginBottom: 40 }}>
          <div>
            <span className="eyebrow accent">03 · Our continuum</span>
            <h2 className="display-2" style={{ marginTop: 18 }}>Eight levels of care, one network.</h2>
          </div>
          {!isNarrow && (
            <p className="body" style={{ marginBottom: 0 }}>
              Each level of care is delivered by one of our three specialized brands — and patients can move seamlessly between them as their needs change.
            </p>
          )}
        </div>

        {/* Filter buttons */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
          {[['all', 'All services', null], ['nws', 'Neuro Wellness Spa', SVC_BRAND_COLOR.nws], ['cbh', 'Clear Behavioral Health', SVC_BRAND_COLOR.cbh], ['nlh', 'New Life House', SVC_BRAND_COLOR.nlh]].map(([k, label, color]) => (
            <button key={k} onClick={() => setFilter(k)} className={'loc-filter' + (filter === k ? ' on' : '')} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer', border: '1px solid', fontFamily: 'inherit' }}>
              {color && <span style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />}
              {label}
            </button>
          ))}
        </div>

        {/* Service card */}
        {svc && (
          <div
            onTouchStart={e => setTouchX(e.touches[0].clientX)}
            onTouchEnd={e => {
              if (touchX === null) return;
              const d = touchX - e.changedTouches[0].clientX;
              if (d > 48) go(idx + 1);
              if (d < -48) go(idx - 1);
              setTouchX(null);
            }}
          >
            <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 20, padding: isNarrow ? '28px 24px' : '40px 44px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 2fr', gap: isNarrow ? 24 : 48, alignItems: 'start' }}>

                <div>
                  <div style={{ width: 60, height: 60, borderRadius: 16, background: SVC_BRAND_COLOR[svc.brand] + '18', color: SVC_BRAND_COLOR[svc.brand], display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <SvcIcon id={svc.id} color={SVC_BRAND_COLOR[svc.brand]} />
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: SVC_BRAND_COLOR[svc.brand], letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>{svc.stage}</div>
                  <h3 style={{ fontSize: isNarrow ? 22 : 26, margin: '0 0 14px', fontWeight: 600, lineHeight: 1.2 }}>{svc.name}</h3>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ padding: '4px 10px', borderRadius: 999, background: SVC_BRAND_COLOR[svc.brand] + '15', color: SVC_BRAND_COLOR[svc.brand], fontSize: 11, fontWeight: 600 }}>Ages {svc.ages}</span>
                    <span style={{ padding: '4px 10px', borderRadius: 999, background: 'var(--cream)', color: 'var(--ink-2)', fontSize: 11, fontWeight: 600 }}>{SVC_BRAND_LABEL[svc.brand]}</span>
                  </div>
                </div>

                <div>
                  <p className="body" style={{ marginTop: 0 }}>{svc.short}</p>
                  <p className="body-sm" style={{ marginTop: 12 }}>{svc.long}</p>
                  <a href={SVC_BRAND_URL[svc.brand]} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 20, fontSize: 14, fontWeight: 600, color: SVC_BRAND_COLOR[svc.brand] }}>
                    Learn more at {SVC_BRAND_LABEL[svc.brand]} <Arrow />
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 28 }}>
          <NavBtn onClick={() => go(idx - 1)} disabled={idx === 0}><ChevronLeft /></NavBtn>
          <DotNav count={list.length} active={idx} onGo={go} />
          <NavBtn onClick={() => go(idx + 1)} disabled={idx === list.length - 1}><ChevronRight /></NavBtn>
        </div>

      </div>
    </section>
  );
};

// ──────────────────────────────────────────────────────────────────
// 4 · Brand quick-links
// ──────────────────────────────────────────────────────────────────
const ServicesBrands = () => (
  <section style={{ padding: '96px 0', background: 'var(--cream)' }} data-screen-label="04 Brands">
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48, alignItems: 'end', marginBottom: 48 }}>
        <div>
          <span className="eyebrow accent">04 · Our brands</span>
          <h2 className="display-2" style={{ marginTop: 18 }}>Three brands, one network.</h2>
        </div>
        <p className="body" style={{ marginBottom: 0 }}>
          Each brand owns its specialty — but our care teams talk to each other. That's how a single phone call gets you to the right next step, even if it crosses brands.
        </p>
      </div>
      <div className="brands-grid">
        {[
          { cls: 'b1', logo: 'assets/brand-nws.png', alt: 'Neuro Wellness Spa', heading: 'Outpatient psychiatry, TMS & therapy', body: 'Medication management, evidence-based talk therapy, and FDA-cleared TMS — for adolescents and adults across SoCal.', pills: [['purple','Psychiatry'],['purple','TMS'],['purple','Therapy']], visit: 'Visit neurowellnessspa.com', url: 'https://neurowellnessspa.com' },
          { cls: 'b2', logo: 'assets/brand-cbh.png', alt: 'Clear Behavioral Health', heading: 'Higher levels of care for mental health & addiction', body: 'Detox, residential, PHP, IOP, and virtual programs for adults and adolescents managing mental health and substance use.', pills: [['blue','Detox'],['blue','Residential'],['blue','PHP / IOP']], visit: 'Visit clearbehavioralhealth.com', url: 'https://clearbehavioralhealth.com' },
          { cls: 'b3', logo: 'assets/brand-nlh.png', alt: 'New Life House', heading: 'Structured sober living for young men', body: 'Long-term, community-based recovery housing for young men since 1985 — with case management and clinical wraparound.', pills: [['gold','Sober living'],['gold','Aftercare'],['gold','Young men']], visit: 'Visit newlifehouse.com', url: 'https://newlifehouse.com' },
        ].map((c) => (
          <a key={c.cls} href={c.url} target="_blank" rel="noopener noreferrer" className={`brand-card ${c.cls}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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

Object.assign(window, {
  ServicesHero, ServicesContinuum, ServicesJourneys, ServicesBrands,
});
