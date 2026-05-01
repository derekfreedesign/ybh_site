// Rows used on multiple pages: Brands, Map, Careers, Footer

const BrandsRow = ({ eyebrow, headline, body, cards }) => {
  const defaultCards = [
    {
      cls: 'b1', logo: 'assets/brand-nws.png', alt: 'Neuro Wellness Spa',
      heading: 'Psychiatry, TMS & therapy',
      body: 'Outpatient psychiatry, medication management, TMS, and talk therapy for adolescents and adults.',
      pills: [['purple','Psychiatry'],['purple','TMS'],['purple','Therapy']],
      visit: 'Visit Neuro Wellness Spa',
    },
    {
      cls: 'b2', logo: 'assets/brand-cbh.png', alt: 'Clear Behavioral Health',
      heading: 'Mental health & addiction',
      body: 'Residential, PHP, IOP, and virtual programs for adults and teens experiencing mental health and substance use challenges.',
      pills: [['blue','Residential'],['blue','PHP / IOP'],['blue','Virtual IOP']],
      visit: 'Visit Clear Behavioral Health',
    },
    {
      cls: 'b3', logo: 'assets/brand-nlh.png', alt: 'New Life House',
      heading: 'Sober living for young men',
      body: 'Structured, community-based sober living homes supporting young men in long-term recovery since 1985.',
      pills: [['gold','Sober living'],['gold','Aftercare'],['gold','Young men']],
      visit: 'Visit New Life House',
    },
  ];
  const items = cards || defaultCards;
  return (
    <section className="brands" data-screen-label="Brands">
      <div className="container">
        <div className="brands-head">
          <div>
            <span className="eyebrow accent">{eyebrow || '05 · Our family of brands'}</span>
            <h2 className="display-2" style={{ marginTop: 18 }}>{headline || 'A full continuum of care.'}</h2>
          </div>
          <p className="body">{body || 'Your Behavioral Health operates three specialized brands, each focused on a different dimension of mental health and recovery. Together, we cover the full arc — from psychiatric care to residential treatment to long-term sober living.'}</p>
        </div>
        <div className="brands-grid">
          {items.map((c, i) => (
            <a key={i} href="#" className={`brand-card ${c.cls}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="logo-wrap"><img src={c.logo} alt={c.alt} /></div>
              <h3>{c.heading}</h3>
              <p className="body-sm">{c.body}</p>
              <div className="services">
                {c.pills.map(([color, label]) => (
                  <span key={label} className={`pill ${color}`}>{label}</span>
                ))}
              </div>
              <span className="visit">{c.visit} <Arrow /></span>
              <div className="accent-bar" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Real Southern California locations for the three brands
const LOCATIONS = [
  { id: 1,  brand: 'nws', name: 'Neuro Wellness Spa — Manhattan Beach',   city: 'Manhattan Beach, CA',  addr: '1200 Rosecrans Ave, Suite 208',       lat: 33.9025, lng: -118.3974 },
  { id: 2,  brand: 'nws', name: 'Neuro Wellness Spa — Torrance',          city: 'Torrance, CA',          addr: '2370 W. Carson St, Suite 150',        lat: 33.8309, lng: -118.3376 },
  { id: 3,  brand: 'nws', name: 'Neuro Wellness Spa — Westlake Village',  city: 'Westlake Village, CA',  addr: '960 S Westlake Blvd, Suite 204',      lat: 34.1411, lng: -118.8152 },
  { id: 4,  brand: 'nws', name: 'Neuro Wellness Spa — Santa Monica',      city: 'Santa Monica, CA',      addr: '2825 Santa Monica Blvd, Suite 100',   lat: 34.0316, lng: -118.4745 },
  { id: 5,  brand: 'nws', name: 'Neuro Wellness Spa — Mission Viejo',     city: 'Mission Viejo, CA',     addr: '26800 Crown Valley Pkwy, Suite 460',  lat: 33.5647, lng: -117.6650 },
  { id: 6,  brand: 'cbh', name: 'Clear Behavioral — Redondo Beach (Residential)', city: 'Redondo Beach, CA', addr: '514 N. Prospect Ave',           lat: 33.8530, lng: -118.3770 },
  { id: 7,  brand: 'cbh', name: 'Clear Behavioral — South Bay PHP/IOP',   city: 'Redondo Beach, CA',     addr: '1711 Via El Prado, Suite 101',        lat: 33.8400, lng: -118.3870 },
  { id: 8,  brand: 'cbh', name: 'Clear Behavioral — Long Beach',          city: 'Long Beach, CA',        addr: '3780 Kilroy Airport Way',             lat: 33.8188, lng: -118.1518 },
  { id: 9,  brand: 'cbh', name: 'Clear Behavioral — Pasadena',            city: 'Pasadena, CA',          addr: '55 S Lake Ave, Suite 1000',           lat: 34.1446, lng: -118.1310 },
  { id: 10, brand: 'cbh', name: 'Clear Behavioral — West LA',             city: 'Los Angeles, CA',       addr: '11500 W Olympic Blvd',                lat: 34.0364, lng: -118.4520 },
  { id: 11, brand: 'cbh', name: 'Clear Behavioral — Encino',              city: 'Encino, CA',            addr: '16130 Ventura Blvd, Suite 320',       lat: 34.1583, lng: -118.4940 },
  { id: 12, brand: 'cbh', name: 'Clear Behavioral — Torrance Detox',      city: 'Torrance, CA',          addr: '20911 Earl St',                       lat: 33.8515, lng: -118.3325 },
  { id: 13, brand: 'nlh', name: 'New Life House — Manhattan Beach',       city: 'Manhattan Beach, CA',   addr: "Manhattan Beach (men's home)",        lat: 33.8870, lng: -118.4108 },
  { id: 14, brand: 'nlh', name: 'New Life House — Hermosa Beach',         city: 'Hermosa Beach, CA',     addr: "Hermosa Beach (men's home)",          lat: 33.8622, lng: -118.3995 },
  { id: 15, brand: 'nlh', name: 'New Life House — Redondo Beach',         city: 'Redondo Beach, CA',     addr: "Redondo Beach (men's home)",          lat: 33.8492, lng: -118.3880 },
  { id: 16, brand: 'nlh', name: 'New Life House — Palos Verdes',          city: 'Palos Verdes, CA',      addr: "Palos Verdes (men's home)",           lat: 33.7800, lng: -118.3880 },
];

const BRAND_LABEL = { nws: 'Neuro Wellness Spa', cbh: 'Clear Behavioral', nlh: 'New Life House' };
const BRAND_COLOR = { nws: '#7A3DB8', cbh: '#2E6DC7', nlh: '#D4A227' };

const MapRow = ({ eyebrow, headline, body }) => {
  const [active, setActive] = React.useState(1);
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');
  const mapRef = React.useRef(null);
  const mapObj = React.useRef(null);
  const markersRef = React.useRef({});

  const filtered = LOCATIONS.filter(l =>
    (filter === 'all' || l.brand === filter) &&
    (q === '' || (l.name + l.city + l.addr).toLowerCase().includes(q.toLowerCase()))
  );

  const buildIcon = (brand, isActive) => {
    const color = BRAND_COLOR[brand];
    const size = isActive ? 34 : 26;
    const html = `<div style="width:${size}px;height:${size}px;border-radius:999px 999px 999px 0;transform:rotate(-45deg);background:${color};border:2.5px solid #17161A;box-shadow:0 6px 14px -4px rgba(0,0,0,.45);"></div>`;
    return L.divIcon({ className: 'ybh-pin', html, iconSize: [size, size], iconAnchor: [size/2, size] });
  };

  React.useEffect(() => {
    if (!window.L || !mapRef.current || mapObj.current) return;
    const map = L.map(mapRef.current, { zoomControl: true, scrollWheelZoom: false, attributionControl: true })
      .setView([33.92, -118.35], 10);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd', maxZoom: 19,
    }).addTo(map);
    mapObj.current = map;
  }, []);

  React.useEffect(() => {
    const map = mapObj.current;
    if (!map || !window.L) return;
    Object.values(markersRef.current).forEach(m => m.remove());
    markersRef.current = {};
    const bounds = [];
    filtered.forEach(l => {
      const m = L.marker([l.lat, l.lng], { icon: buildIcon(l.brand, l.id === active) })
        .addTo(map)
        .bindPopup(`<strong>${l.name}</strong><br/><span style="color:#6B6874;font-size:12px">${l.addr} · ${l.city}</span>`);
      m.on('click', () => setActive(l.id));
      markersRef.current[l.id] = m;
      bounds.push([l.lat, l.lng]);
    });
    if (bounds.length > 0) map.fitBounds(bounds, { padding: [40, 40], maxZoom: 11 });
  }, [filter, q]);

  React.useEffect(() => {
    const map = mapObj.current;
    if (!map || !window.L) return;
    Object.entries(markersRef.current).forEach(([id, m]) => {
      const loc = LOCATIONS.find(l => l.id === Number(id));
      if (loc) m.setIcon(buildIcon(loc.brand, Number(id) === active));
    });
    const m = markersRef.current[active];
    const loc = LOCATIONS.find(l => l.id === active);
    if (m && loc) { map.panTo([loc.lat, loc.lng], { animate: true }); m.openPopup(); }
  }, [active]);

  const counts = {
    all: LOCATIONS.length,
    nws: LOCATIONS.filter(l => l.brand === 'nws').length,
    cbh: LOCATIONS.filter(l => l.brand === 'cbh').length,
    nlh: LOCATIONS.filter(l => l.brand === 'nlh').length,
  };

  return (
    <section className="locations" data-screen-label="Locations">
      <div className="container-wide">
        <div className="loc-head">
          <div>
            <span className="eyebrow accent">{eyebrow || '06 · Rooted in community'}</span>
            <h2 className="display-2" style={{ marginTop: 18 }}>{headline || 'Close to where people live, work, and heal.'}</h2>
          </div>
          <p className="body">{body || 'We believe access changes outcomes. That\'s why we continue to grow our network of treatment centers across Southern California — every location is designed with intention: safe, comfortable, and clinically equipped to support the full continuum of care.'}</p>
        </div>
        <div className="loc-body">
          <div className="loc-sidebar">
            <div className="loc-search">
              <input placeholder="Search by city or address…" value={q} onChange={e => setQ(e.target.value)} />
            </div>
            <div className="loc-list">
              {filtered.map(l => (
                <div key={l.id} className={'loc-item' + (l.id === active ? ' active' : '')} onClick={() => setActive(l.id)}>
                  <span className="marker" style={{ background: BRAND_COLOR[l.brand] }}>{l.id}</span>
                  <div>
                    <div className="name">{l.name}</div>
                    <div className="addr">{l.addr} · {l.city}</div>
                    <div className="brand-tag" style={{ marginTop: 4, color: BRAND_COLOR[l.brand] }}>{BRAND_LABEL[l.brand]}</div>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && <div style={{ padding: 24, textAlign: 'center', color: 'var(--ink-3)', fontSize: 13 }}>No locations match that search.</div>}
            </div>
            <div className="loc-legend">
              <span><span className="swatch" style={{ background: BRAND_COLOR.nws }}></span>Neuro Wellness Spa</span>
              <span><span className="swatch" style={{ background: BRAND_COLOR.cbh }}></span>Clear Behavioral Health</span>
              <span><span className="swatch" style={{ background: BRAND_COLOR.nlh }}></span>New Life House</span>
            </div>
          </div>
          <div className="loc-map">
            <div className="loc-chip-row">
              <span className={'loc-filter' + (filter === 'all' ? ' on' : '')} onClick={() => setFilter('all')}>All locations ({counts.all})</span>
              <span className={'loc-filter' + (filter === 'nws' ? ' on' : '')} onClick={() => setFilter('nws')}><span className="dot" style={{ background: BRAND_COLOR.nws }}/>NWS ({counts.nws})</span>
              <span className={'loc-filter' + (filter === 'cbh' ? ' on' : '')} onClick={() => setFilter('cbh')}><span className="dot" style={{ background: BRAND_COLOR.cbh }}/>Clear ({counts.cbh})</span>
              <span className={'loc-filter' + (filter === 'nlh' ? ' on' : '')} onClick={() => setFilter('nlh')}><span className="dot" style={{ background: BRAND_COLOR.nlh }}/>NLH ({counts.nlh})</span>
            </div>
            <div ref={mapRef} style={{ position: 'absolute', inset: 0 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

const CareersRow = () => (
  <section className="careers" data-screen-label="Careers">
    <div className="container">
      <div className="careers-inner">
        <div>
          <span className="eyebrow accent">07 · Work with us</span>
          <h2 style={{ marginTop: 18 }}>Be part of what we're building.</h2>
          <p className="lede">We're growing a team of people who believe behavioral health care can be better — more accessible, more compassionate, more connected. If that sounds like you, we'd love to meet you.</p>
          <div className="careers-actions" style={{ marginTop: 32 }}>
            <a className="btn btn-ghost btn-lg" href="https://your-behavioral-health.breezy.hr/">Explore open positions <Arrow /></a>
            <a className="btn btn-ghost btn-lg" href="#">Life at YBH</a>
          </div>
          <div>
            <span className="eyebrow no-line" style={{ marginTop: 36, display: 'inline-flex' }}>Follow along</span>
            <div className="socials">
              <a className="social" href="#" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10h3V7h-3V5.5c0-.8.4-1.5 1.5-1.5H16V1h-2.5C11.2 1 10 2.5 10 5v2H7v3h3v10h3V10z"/></svg>
              </a>
              <a className="social" href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
              </a>
              <a className="social" href="#" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v16H4zM6 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM10 9h4v2c.6-1.2 2-2.3 4-2.3 3 0 4 2 4 5.3V20h-4v-5.5c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5V20h-4V9z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="careers-side">
          <div className="careers-stats">
            <div className="careers-stat"><div className="n">300+</div><div className="l">Team members</div></div>
            <div className="careers-stat"><div className="n">14</div><div className="l">Locations</div></div>
            <div className="careers-stat"><div className="n">3</div><div className="l">Specialized brands</div></div>
            <div className="careers-stat"><div className="n">40+</div><div className="l">Roles open</div></div>
          </div>
          <div style={{ padding: 22, background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 'auto 0 0 0', height: 3, background: 'var(--orange)' }} />
            <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange-deep)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--orange)', boxShadow: '0 0 0 4px rgba(245,166,35,.2)' }} /> Now hiring
            </div>
            <div style={{ fontSize: 16, fontWeight: 500, marginTop: 10, lineHeight: 1.5, color: 'var(--ink-2)' }}>Clinical Director · Intake Coordinator · Licensed Therapist · RN · Peer Support Specialist</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FooterRow = () => (
  <footer data-screen-label="Footer">
    <div className="container">
      <div className="foot-grid">
        <div className="foot-logo">
          <img src="assets/ybh-logo-reverse.png" alt="YBH" />
          <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: '28ch' }}>Creating change — one person, one family, one community at a time.</p>
          <div style={{ marginTop: 16, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.6)' }}>
            1983 W. 190th St., Suite 200<br/>
            Torrance, CA 90504<br/>
            <a href="tel:8663953181" style={{ color: 'var(--yellow)' }}>(866) 395-3181</a>
          </div>
        </div>
        <div className="foot-col">
          <h5>Services</h5>
          <ul>
            <li><a href="#">Psychiatry</a></li>
            <li><a href="#">Mental Health</a></li>
            <li><a href="#">Substance Use</a></li>
            <li><a href="#">Sober Living</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Company</h5>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="#">Our brands</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="tel:8663953181">(866) 395-3181</a></li>
            <li><a href="tel:8777991985">Admissions · (877) 799-1985</a></li>
            <li><a href="mailto:info@yourbehavioralhealth.com">info@yourbehavioralhealth.com</a></li>
            <li style={{ color: 'var(--pink)' }}>Crisis? Call 988</li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2025 Your Behavioral Health. All Rights Reserved.</span>
        <span style={{ display: 'flex', gap: 20 }}>
          <a href="#">Privacy Policy</a>
          <a href="#">SMS Terms</a>
          <a href="#">Terms of Use</a>
          <a href="#">Your Privacy Choices</a>
        </span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { BrandsRow, MapRow, CareersRow, FooterRow, LOCATIONS, BRAND_LABEL, BRAND_COLOR });
