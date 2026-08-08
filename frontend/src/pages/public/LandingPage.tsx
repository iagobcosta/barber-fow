import React from 'react';

const pillars = [
  {
    title: 'Beauty Salon',
    description: 'Treatments, styling, and a polished salon experience designed for comfort and confidence.',
  },
  {
    title: 'Barbershop',
    description: 'Precision cuts, beard care, and gentleman-focused rituals crafted to feel effortless.',
  },
  {
    title: 'Bar',
    description: 'Elevated evenings with signature drinks, warm hospitality, and a refined nighttime mood.',
  },
];

export default function LandingPage() {
  return (
    <div style={{ paddingBottom: '3rem' }}>
      <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem', alignItems: 'center', padding: '2rem 0 3rem' }}>
        <div>
          <p className="chip">Elevated Lifestyle • One Place • Endless Rituals</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.7rem)', lineHeight: 1.12, margin: '1rem 0', maxWidth: '760px' }}>
            Premium care, refined style, and unforgettable evenings.
          </h1>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.8, color: '#d6cfc4', maxWidth: '680px' }}>
            Discover a space where beauty, grooming, and social energy meet in one unforgettable experience.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
            <a href="#booking" style={{ display: 'inline-block', borderRadius: '999px', background: '#f5c97a', color: '#171717', padding: '0.8rem 1.2rem', fontWeight: 600 }}>
              Reserve your visit
            </a>
            <a href="#pillars" style={{ display: 'inline-block', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', padding: '0.8rem 1.2rem', color: '#f7f3eb' }}>
              Explore the experience
            </a>
          </div>
        </div>
        <div className="hero-card" style={{ borderRadius: '2rem', padding: '1.25rem' }}>
          <div style={{ borderRadius: '1.5rem', padding: '1.25rem', background: 'rgba(5,5,5,0.7)' }}>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#f5c97a' }}>Signature service</p>
            <h2 style={{ fontSize: '1.55rem', margin: '0.6rem 0 1rem' }}>A polished ritual from first appointment to last drink.</h2>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderRadius: '0.9rem', border: '1px solid rgba(255,255,255,0.12)', padding: '0.8rem 0.95rem', color: '#ddd5ca' }}>
                <span>Hair + grooming consultation</span>
                <span style={{ color: '#f5c97a', fontWeight: 600 }}>15 min</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderRadius: '0.9rem', border: '1px solid rgba(255,255,255,0.12)', padding: '0.8rem 0.95rem', color: '#ddd5ca' }}>
                <span>Preferred slot suggestion</span>
                <span style={{ color: '#f5c97a', fontWeight: 600 }}>Peak-aware</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderRadius: '0.9rem', border: '1px solid rgba(255,255,255,0.12)', padding: '0.8rem 0.95rem', color: '#ddd5ca' }}>
                <span>Evening hospitality</span>
                <span style={{ color: '#f5c97a', fontWeight: 600 }}>Always inviting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pillars" style={{ padding: '1rem 0 2rem' }}>
        <p className="chip">Our pillars</p>
        <h2 style={{ fontSize: '1.8rem', margin: '0.6rem 0 1rem' }}>Three experiences, one elevated destination.</h2>
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="pillars-card">
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>{pillar.title}</h3>
              <p style={{ color: '#d6cfc4', lineHeight: 1.7 }}>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="booking" style={{ paddingTop: '1rem' }}>
        <div className="panel" style={{ borderRadius: '2rem', padding: '1.6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '720px' }}>
              <p className="chip">Book with ease</p>
              <h2 style={{ fontSize: '1.7rem', margin: '0.7rem 0 0.6rem' }}>Start with a beautiful suggestion and a calm confirmation flow.</h2>
              <p style={{ color: '#d6cfc4', lineHeight: 1.7 }}>Our booking experience blends premium presentation with practical staff confirmation.</p>
            </div>
            <a href="/client" style={{ display: 'inline-block', borderRadius: '999px', border: '1px solid rgba(245, 158, 11, 0.4)', background: 'rgba(245, 158, 11, 0.12)', color: '#f5c97a', padding: '0.8rem 1.2rem', fontWeight: 600 }}>
              Open booking experience
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
