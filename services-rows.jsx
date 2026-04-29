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
        <div className="hero-meta">
          <div className="hero-mini"><span className="k">Levels of care</span><span className="v">8 across our network</span></div>
          <div className="divider" />
          <div className="hero-mini"><span className="k">Specialties</span><span className="v">Mental health · Addiction · TMS</span></div>
          <div className="divider" />
          <div className="hero-mini"><span className="k">Ages served</span><span className="v">12+</span></div>
        </div>
      </div>
    </div>
  </section>
);

// ──────────────────────────────────────────────────────────────────
// 2 · Continuum (interactive horizontal flow)
// ──────────────────────────────────────────────────────────────────
const ServicesContinuum = () => {
  const [active, setActive] = React.useState('tms');
  const [filter, setFilter] = React.useState('all');
  const list = filter === 'all' ? SERVICES_DATA : SERVICES_DATA.filter(s => s.brand === filter);
  const activeSvc = SERVICES_DATA.find(s => s.id === active);

  return (
    <section style={{ padding: '96px 0', background: 'var(--cream)' }} data-screen-label="02 Continuum">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'end', marginBottom: 40 }}>
          <div>
            <span className="eyebrow accent">02 · Our continuum</span>
            <h2 className="display-2" style={{ marginTop: 18 }}>Eight levels of care, one network.</h2>
          </div>
          <p className="body" style={{ marginBottom: 0 }}>
            Click any stop along the continuum to learn more. Each level of care is delivered by one of our three specialized brands — and patients can move seamlessly between them as their needs change.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
          {[['all', 'All services', null], ['nws', 'Neuro Wellness Spa', SVC_BRAND_COLOR.nws], ['cbh', 'Clear Behavioral Health', SVC_BRAND_COLOR.cbh], ['nlh', 'New Life House', SVC_BRAND_COLOR.nlh]].map(([k, label, color]) => (
            <button key={k} onClick={() => setFilter(k)} className={'loc-filter' + (filter === k ? ' on' : '')} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer', border: '1px solid', fontFamily: 'inherit' }}>
              {color && <span style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />}
              {label}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', overflowX: 'auto', paddingBottom: 8 }}>
          <div style={{ display: 'flex', gap: 8, minWidth: 'max-content', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 32, left: 28, right: 28, height: 2, background: 'var(--line)', zIndex: 0 }} />
            {list.map((s) => {
              const isActive = s.id === active;
              const c = SVC_BRAND_COLOR[s.brand];
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  style={{
                    position: 'relative', zIndex: 1,
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    padding: '0 12px', minWidth: 140, fontFamily: 'inherit',
                  }}
                >
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: isActive ? c : 'var(--paper)',
                    color: isActive ? '#fff' : c,
                    border: '2px solid ' + (isActive ? c : 'var(--line)'),
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: isActive ? `0 8px 24px -8px ${c}66` : 'none',
                    transition: 'all 0.2s',
                  }}>
                    <SvcIcon id={s.id} color={isActive ? '#fff' : c} />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)', marginTop: 14, lineHeight: 1.2, textAlign: 'center' }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 4 }}>{s.ages}</div>
                </button>
              );
            })}
          </div>
        </div>

        {activeSvc && (filter === 'all' || filter === activeSvc.brand) && (
          <div style={{ marginTop: 36, background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 20, padding: '32px 36px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 36, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: SVC_BRAND_COLOR[activeSvc.brand] + '18', color: SVC_BRAND_COLOR[activeSvc.brand], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SvcIcon id={activeSvc.id} color={SVC_BRAND_COLOR[activeSvc.brand]} />
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, color: SVC_BRAND_COLOR[activeSvc.brand], letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 8 }}>{activeSvc.stage}</div>
              <h3 style={{ fontSize: 24, margin: 0, lineHeight: 1.2, fontWeight: 600 }}>{activeSvc.name}</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
                <span style={{ padding: '4px 10px', borderRadius: 999, background: SVC_BRAND_COLOR[activeSvc.brand] + '15', color: SVC_BRAND_COLOR[activeSvc.brand], fontSize: 11, fontWeight: 600 }}>Ages {activeSvc.ages}</span>
              </div>
            </div>
            <div>
              <p className="body" style={{ marginTop: 0 }}>{activeSvc.short}</p>
              <p className="body-sm" style={{ marginTop: 12 }}>{activeSvc.long}</p>
              <a href={SVC_BRAND_URL[activeSvc.brand]} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 18, fontSize: 14, fontWeight: 600, color: SVC_BRAND_COLOR[activeSvc.brand] }}>
                Learn more at {SVC_BRAND_LABEL[activeSvc.brand]} <Arrow />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// ──────────────────────────────────────────────────────────────────
// Patient journey data
// ──────────────────────────────────────────────────────────────────
const JOURNEYS = [
  {
    id: 'depression',
    title: 'Depression that resists medication',
    persona: 'A working professional, 34',
    summary: 'After two years of medication trials with limited results, Maya\'s psychiatrist refers her to TMS. She continues talk therapy throughout — same provider, same network.',
    photo: 'https://neurowellnessspa.com/wp-content/uploads/2025/10/tms-therapy-1200x800-1.jpg',
    accent: 'nws',
    steps: [
      { brand: 'nws', svc: 'med',   label: 'Initial psychiatric eval + medication management' },
      { brand: 'nws', svc: 'brief', label: 'Brief therapy alongside medication' },
      { brand: 'nws', svc: 'tms',   label: 'Referred to TMS when meds fall short' },
      { brand: 'nws', svc: 'brief', label: 'Continued therapy + ongoing medication review' },
    ],
  },
  {
    id: 'recovery',
    title: 'Stepping down from acute substance use',
    persona: 'A father of two, 42',
    summary: 'James enters detox in crisis, then steps down through PHP, IOP, and alumni support — eventually transitioning to outpatient psychiatry and therapy at Neuro Wellness Spa.',
    photo: 'https://clearbehavioralhealth.com/wp-content/uploads/2025/01/alcohol-detox-living-room-1200x780.webp',
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
    persona: 'A college student, 22',
    summary: 'Tyler moves into structured sober living while attending Clear\'s outpatient program — and gets psychiatric and TMS support from Neuro Wellness Spa, all coordinated.',
    photo: 'https://b2375669.smushcdn.com/2375669/wp-content/uploads/2024/05/Edited-2-1-scaled-e1751389578345.jpg',
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
// 3 · Patient journeys
// ──────────────────────────────────────────────────────────────────
const ServicesJourneys = () => (
  <section style={{ padding: '96px 0', background: 'var(--cream)' }} data-screen-label="03 Journeys">
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48, alignItems: 'end', marginBottom: 40 }}>
        <div>
          <span className="eyebrow accent">03 · Patient journeys</span>
          <h2 className="display-2" style={{ marginTop: 18 }}>How care actually flows.</h2>
        </div>
        <p className="body" style={{ marginBottom: 0 }}>
          Three real-world examples of how patients move through our network. No two journeys are identical — but every one is coordinated across brands, providers, and levels of care.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {JOURNEYS.map((j, idx) => {
          const c = SVC_BRAND_COLOR[j.accent];
          const flip = idx % 2 === 1;
          return (
            <div key={j.id} style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 24, overflow: 'hidden', display: 'grid', gridTemplateColumns: flip ? '1.2fr 1fr' : '1fr 1.2fr' }}>
              {!flip && (
                <div style={{ position: 'relative', minHeight: 420 }}>
                  <img src={j.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${c}cc 0%, ${c}55 100%)` }} />
                  <div style={{ position: 'relative', padding: '36px 32px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#fff' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#fff', opacity: 0.7, marginBottom: 8 }}>0{idx + 1} / 03</div>
                    <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.85, marginBottom: 6 }}>{j.persona}</div>
                    <h3 style={{ fontSize: 26, margin: 0, lineHeight: 1.2, fontWeight: 600 }}>{j.title}</h3>
                    <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.55, opacity: 0.92, maxWidth: '38ch' }}>{j.summary}</p>
                  </div>
                </div>
              )}
              <div style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 22 }}>The path</div>
                <JourneyTimeline steps={j.steps} />
              </div>
              {flip && (
                <div style={{ position: 'relative', minHeight: 420 }}>
                  <img src={j.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${c}cc 0%, ${c}55 100%)` }} />
                  <div style={{ position: 'relative', padding: '36px 32px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#fff' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#fff', opacity: 0.7, marginBottom: 8 }}>0{idx + 1} / 03</div>
                    <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.85, marginBottom: 6 }}>{j.persona}</div>
                    <h3 style={{ fontSize: 26, margin: 0, lineHeight: 1.2, fontWeight: 600 }}>{j.title}</h3>
                    <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.55, opacity: 0.92, maxWidth: '38ch' }}>{j.summary}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ──────────────────────────────────────────────────────────────────
// 4 · Adolescent services
// ──────────────────────────────────────────────────────────────────
const ServicesAdolescent = () => {
  const teenServices = [
    { id: 'med',   ages: '12+', title: 'Medication management',  brand: 'nws', body: 'Psychiatric evaluation and medication oversight from prescribers experienced with adolescents.' },
    { id: 'brief', ages: '12+', title: 'Talk therapy',             brand: 'nws', body: 'CBT, DBT, family therapy, and more — in-person or virtual, with therapists trained in adolescent care.' },
    { id: 'iop',   ages: '12+', title: 'Intensive Outpatient',     brand: 'cbh', body: 'Group therapy and skill-building for teens stepping up from outpatient or down from PHP.' },
    { id: 'php',   ages: '12+', title: 'Partial Hospitalization',  brand: 'cbh', body: 'Daily structured programming designed for adolescents managing acute mental health needs.' },
    { id: 'tms',   ages: '15+', title: 'TMS Therapy',              brand: 'nws', body: 'For older adolescents with depression, anxiety, or OCD who haven\'t responded to medication.' },
  ];

  return (
    <section style={{ padding: '96px 0' }} data-screen-label="04 Adolescents">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 64, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 100 }}>
            <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/5', position: 'relative', marginBottom: 32 }}>
              <img src="https://neurowellnessspa.com/wp-content/uploads/2025/10/teen-progam-1200x800-1.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span className="eyebrow accent">04 · For families with teens</span>
            <h2 className="display-2" style={{ marginTop: 18 }}>Specialized care for ages 12+.</h2>
            <p className="body" style={{ marginTop: 18 }}>
              Adolescents need clinicians trained specifically for them — and family systems that get supported, too. Most of our outpatient services are open to teens 12 and older, with TMS available starting at 15.
            </p>
            <a className="btn btn-dark" href="contact.html#contact" style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 8 }}>Talk to admissions <Arrow /></a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {teenServices.map((s) => {
              const c = SVC_BRAND_COLOR[s.brand];
              return (
                <div key={s.id + s.brand} style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 16, padding: '24px 28px', display: 'grid', gridTemplateColumns: '52px 1fr auto', gap: 20, alignItems: 'center' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: c + '18', color: c, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SvcIcon id={s.id} color={c} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                      <h3 style={{ fontSize: 17, margin: 0, fontWeight: 600 }}>{s.title}</h3>
                      <span style={{ padding: '2px 8px', borderRadius: 999, background: c + '15', color: c, fontSize: 11, fontWeight: 700 }}>Ages {s.ages}</span>
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: c, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>{SVC_BRAND_LABEL[s.brand]}</div>
                    <p className="body-sm" style={{ margin: 0 }}>{s.body}</p>
                  </div>
                </div>
              );
            })}
            <div style={{ background: 'var(--ink)', color: '#fff', borderRadius: 16, padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--yellow)', boxShadow: '0 0 0 6px rgba(255,199,39,.2)', flexShrink: 0 }} />
              <div style={{ fontSize: 14, lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--yellow)' }}>Sober living and residential care</strong> are available for adults only.
                Young men 18+ may also access New Life House and Clear's residential programs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ──────────────────────────────────────────────────────────────────
// 5 · Brand quick-links (lightweight version)
// ──────────────────────────────────────────────────────────────────
const ServicesBrands = () => (
  <section style={{ padding: '96px 0', background: 'var(--cream)' }} data-screen-label="05 Brands">
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48, alignItems: 'end', marginBottom: 48 }}>
        <div>
          <span className="eyebrow accent">05 · Our brands</span>
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

// ──────────────────────────────────────────────────────────────────
// 6 · CTA
// ──────────────────────────────────────────────────────────────────
const ServicesCTA = () => (
  <section className="careers" data-screen-label="06 CTA" style={{ padding: '96px 0' }}>
    <div className="container">
      <div className="careers-inner">
        <div>
          <span className="eyebrow accent">06 · Get started</span>
          <h2 style={{ marginTop: 18 }}>Not sure which level of care fits?</h2>
          <p className="lede">Tell us a bit about what's going on and we'll point you to the right brand and the right next step — whether that's a 30-minute call or a full assessment.</p>
          <div className="careers-actions" style={{ marginTop: 32 }}>
            <a className="btn btn-dark btn-lg" href="contact.html#contact">Contact admissions <Arrow /></a>
            <a className="btn btn-ghost btn-lg" href="tel:8777991985">Call (877) 799-1985</a>
          </div>
        </div>
        <div className="careers-side">
          <div className="careers-stats">
            <div className="careers-stat"><div className="n">8</div><div className="l">Levels of care</div></div>
            <div className="careers-stat"><div className="n">3</div><div className="l">Specialized brands</div></div>
            <div className="careers-stat"><div className="n">12+</div><div className="l">Ages served</div></div>
            <div className="careers-stat"><div className="n">~30</div><div className="l">SoCal locations</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, {
  ServicesHero, ServicesContinuum, ServicesJourneys,
  ServicesAdolescent, ServicesBrands, ServicesCTA,
});
