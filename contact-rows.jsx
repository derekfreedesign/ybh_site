// Contact page rows: Hero (3 variants), ReachRow, AdmissionsRow, FormRow

const HeroA = () => (
  <section className="hero" data-screen-label="01 Hero">
    <Crumb label="Contact Us" />
    <div className="container" style={{ paddingTop: 48 }}>
      <div className="hero-grid">
        <div>
          <span className="eyebrow accent">Contact · 01 / 07</span>
          <h1 className="display">Let's build something <span className="ink">meaningful</span></h1>
          <p className="hero-lede">Whether you're exploring a career in behavioral health, interested in partnering with our organization, or simply want to learn more about what we do — we'd love to hear from you.</p>
          <div className="hero-meta">
            <div className="hero-mini">
              <span className="k">Headquarters</span>
              <span className="v">Torrance, CA</span>
            </div>
            <div className="divider" />
            <div className="hero-mini">
              <span className="k">Reach us</span>
              <span className="v">Mon – Fri · 8am – 6pm PT</span>
            </div>
            <div className="divider" />
            <div className="hero-mini">
              <span className="k">Response</span>
              <span className="v">Within one business day</span>
            </div>
          </div>
        </div>
        <div className="hero-photo">
          <img src="assets/hq.jpg" alt="YBH Headquarters" />
          <div className="stamp"><span className="dot"/> YBH Headquarters · 1983 W. 190th St.</div>
        </div>
      </div>
    </div>
  </section>
);

const HeroB = () => (
  <section className="hero-b" data-screen-label="01 Hero (B)">
    <div className="bg"><img src="assets/hq.jpg" alt="" /></div>
    <div className="inner">
      <div className="container">
        <span className="eyebrow no-line" style={{ color: 'var(--yellow)' }}>Contact us</span>
        <h1 className="display" style={{ marginTop: 18 }}>Let's build something <span className="ink">meaningful</span></h1>
        <p className="hero-lede" style={{ maxWidth: '48ch' }}>Whether you're exploring a career in behavioral health, interested in partnering, or simply want to learn more about what we do — we'd love to hear from you.</p>
      </div>
    </div>
  </section>
);

const HeroC = () => (
  <section className="hero-c" data-screen-label="01 Hero (C)">
    <div className="container-wide">
      <span className="eyebrow accent">Contact · Say hello</span>
      <h1 className="huge" style={{ marginTop: 24 }}>Let's build<br/>something <em>meaningful.</em></h1>
      <div className="subrow">
        <p className="hero-lede" style={{ marginTop: 0 }}>Whether you're exploring a career in behavioral health, interested in partnering with our organization, or simply want to learn more about what we do — we'd love to hear from you.</p>
        <div className="photo-strip">
          <div className="chip tall"><img src="assets/hq.jpg" alt=""/></div>
        </div>
      </div>
    </div>
  </section>
);

const Hero = ({ variant }) => {
  if (variant === 'b') return <HeroB />;
  if (variant === 'c') return <HeroC />;
  return <HeroA />;
};

const ReachRow = () => (
  <section className="reach" data-screen-label="02 Reach us">
    <div className="container">
      <div className="reach-head">
        <div>
          <span className="eyebrow accent">02 · Three ways in</span>
          <h2 className="display-2" style={{ marginTop: 18 }}>Reach us however works best for you</h2>
        </div>
        <p className="body">Pick the channel you prefer — a real person on our team is watching all three. Admissions calls are routed to a specialist; general inquiries get a reply within one business day.</p>
      </div>
      <div className="reach-grid">
        <a href="tel:8663953181" className="reach-card c1" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div className="icon-wrap"><PhoneIcon /></div>
            <span className="num">01</span>
          </div>
          <h3>Give us a call</h3>
          <p className="body-sm">Speak with a member of our team directly — Monday through Friday, 8am–6pm Pacific.</p>
          <div className="cta phone">(866) 395-3181 <span className="arrow"><Arrow /></span></div>
        </a>
        <a href="mailto:info@yourbehavioralhealth.com" className="reach-card c2" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div className="icon-wrap"><MailIcon /></div>
            <span className="num">02</span>
          </div>
          <h3>Send an email</h3>
          <p className="body-sm">We'll get back to you within one business day — usually much sooner than that.</p>
          <div className="cta">info@yourbehavioralhealth.com <span className="arrow"><Arrow /></span></div>
        </a>
        <a href="#contact" className="reach-card c3" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div className="icon-wrap"><FormIcon /></div>
            <span className="num">03</span>
          </div>
          <h3>Fill out the form</h3>
          <p className="body-sm">Tell us a little about yourself and what you're looking for — we'll route it to the right person.</p>
          <div className="cta">Jump to form <span className="arrow"><Arrow /></span></div>
        </a>
      </div>
    </div>
  </section>
);

const AdmissionsRow = () => (
  <section className="admissions" data-screen-label="03 Admissions & crisis">
    <div className="container">
      <div className="admissions-grid">
        <div>
          <span className="eyebrow no-line" style={{ color: 'var(--yellow)' }}>03 · Seeking care?</span>
          <h2 className="display-2" style={{ marginTop: 18 }}>Looking for mental health or substance use support?</h2>
          <p className="lede">If you or someone you love is seeking care, our admissions team can help find the right path forward — they'll connect you with the program and providers best suited to your needs. Calls are confidential and there's never any pressure.</p>
          <div className="admissions-cta">
            <a href="tel:8777991985" className="big-phone">
              <span className="tag-sm">Admissions</span>
              (877) 799-1985
            </a>
            <a href="#" className="btn btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)' }}>
              What to expect on the call <Arrow />
            </a>
          </div>
        </div>
        <div className="crisis-card">
          <div className="bar">
            <span className="pulse" />
            <span className="label">In crisis right now?</span>
          </div>
          <h4>If you or someone you know is in immediate danger, please reach out to emergency services or the Suicide & Crisis Lifeline — they're available 24/7.</h4>
          <div className="nums">
            <a href="tel:911" className="crisis-num">
              <div className="n">911</div>
              <div className="l">Emergency</div>
            </a>
            <a href="tel:988" className="crisis-num">
              <div className="n">988</div>
              <div className="l">Suicide & Crisis Lifeline</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FormRow = () => {
  const [topics, setTopics] = React.useState(['Partnership']);
  const opts = ['Partnership', 'Media inquiry', 'Careers', 'General question', 'Vendor', 'Other'];
  const toggle = (t) => setTopics(ts => ts.includes(t) ? ts.filter(x => x !== t) : [...ts, t]);
  return (
    <section className="form-section" id="contact" data-screen-label="04 Form">
      <div className="container">
        <div className="form-grid">
          <aside className="form-aside">
            <span className="eyebrow accent">04 · Send a message</span>
            <h2 className="display-2" style={{ marginTop: 18 }}>Tell us what you're working on.</h2>
            <p className="body" style={{ marginTop: 20 }}>Have a question, an idea, or want to explore working together? Fill out the form and someone from our team will follow up shortly.</p>
            <div className="ticker">
              <div className="row"><span className="k">Typical response</span><span className="v">&lt; 1 business day</span></div>
              <div className="row"><span className="k">For admissions</span><span className="v"><a href="tel:8777991985">Call direct →</a></span></div>
              <div className="row"><span className="k">Press & media</span><span className="v">press@ybh.com</span></div>
              <div className="row"><span className="k">Privacy</span><span className="v">HIPAA-safe intake</span></div>
            </div>
          </aside>
          <form className="form-card" onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <div className="field">
                <label>First name</label>
                <input placeholder="Jordan" />
              </div>
              <div className="field">
                <label>Last name</label>
                <input placeholder="Rivera" />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label>Email</label>
                <input placeholder="you@company.com" type="email" />
              </div>
              <div className="field">
                <label>Phone <span style={{ color: 'var(--ink-4)', fontWeight: 400 }}>(optional)</span></label>
                <input placeholder="(555) 000-0000" type="tel" />
              </div>
            </div>
            <div className="field" style={{ marginBottom: 16 }}>
              <label>What's this about?</label>
              <div className="topic-chips">
                {opts.map(o => (
                  <span key={o} className={'topic-chip' + (topics.includes(o) ? ' on' : '')} onClick={() => toggle(o)}>{o}</span>
                ))}
              </div>
            </div>
            <div className="field" style={{ marginBottom: 8 }}>
              <label>Your message</label>
              <textarea placeholder="A few sentences about what you're looking for…" />
              <span className="hint">Please don't share protected health information here.</span>
            </div>
            <div className="form-footer">
              <p className="consent">By submitting, you agree to our privacy policy. We'll only use this to get back to you.</p>
              <button className="btn btn-primary btn-lg" type="submit">Send message <Arrow /></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero, HeroA, HeroB, HeroC, ReachRow, AdmissionsRow, FormRow });
