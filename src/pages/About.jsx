import React from 'react';
import SealBadge from '../components/SealBadge';

const VALUES = [
  {
    icon: 'bi-shield-check',
    title: 'Transparency',
    body: 'Every ledger entry is open to the member it belongs to — no hidden charges, no fine print.',
  },
  {
    icon: 'bi-people',
    title: 'Community First',
    body: 'Decisions are made by a member-elected board that lives in the same neighbourhood it serves.',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Steady Growth',
    body: 'Conservative, well-secured lending has kept the society stable through more than two decades.',
  },
];

const MILESTONES = [
  { year: '2003', text: 'Registered under the Maharashtra Co-operative Societies Act, Reg. No. PNA/PNA/(1)/RSR/(CR)/2618.' },
  { year: '2008', text: 'Crossed a thousand active member accounts across Shukrawar Peth and neighbouring peths.' },
  { year: '2015', text: 'Introduced flexible recurring deposit and gold-loan schemes for local traders.' },
  { year: 'Today', text: 'A trusted branch at Swami Prasad Apartment, still run on the same founding principles.' },
];

export default function About() {
  return (
    <>
      <section className="hero-section section-pad reveal">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <span className="eyebrow fade-up delay-1">About the society</span>
              <h1 className="display-5 mt-3 mb-3 fade-up delay-2">
                Built by the neighbourhood, run for the neighbourhood
              </h1>
              <div className="divider-gold mb-3 scale-in delay-3"></div>
              <p className="fs-5 text-ink-soft mb-0 fade-up delay-3" style={{ maxWidth: 600 }}>
                Shivadnya Nagari Sahakari Patsanstha Ltd., Pune is a registered urban cooperative credit
                society headquartered at Swami Prasad Apartment, Shukrawar Peth. Since our registration
                in 2003, we have offered every member a straightforward place to save and borrow.
              </p>
            </div>

            <div className="col-lg-5 d-flex justify-content-center">
              <img
                src="/assets/logo.jpeg"
                alt="Society seal"
                className="rounded-circle hero-seal float-soft"
                style={{
                  width: 220,
                  height: 220,
                  objectFit: 'cover',
                  border: '4px solid var(--color-indigo)',
                  boxShadow: 'var(--shadow-soft)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream reveal">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-soft h-100 p-4 p-md-5 lift-on-hover">
                <span className="eyebrow fade-up">Our purpose</span>
                <h3 className="mt-2 mb-3 fade-up delay-1">Mission</h3>
                <p className="text-ink-soft mb-0 fade-up delay-2">
                  To give every member of Shukrawar Peth and its neighbouring peths a fair, transparent
                  place to grow their savings and access credit — without the distance or paperwork of a
                  large commercial bank.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-soft h-100 p-4 p-md-5 lift-on-hover">
                <span className="eyebrow fade-up">Where we're headed</span>
                <h3 className="mt-2 mb-3 fade-up delay-1">Vision</h3>
                <p className="text-ink-soft mb-0 fade-up delay-2">
                  To remain the most trusted cooperative credit society in the area — measured not by
                  size, but by how many families call it their own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-animate" style={{ background: 'var(--color-indigo-tint)' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7">
              <span className="eyebrow fade-up">What guides us</span>
              <h2 className="mt-2 mb-0 fade-up delay-1">Principles behind every account we open</h2>
            </div>
          </div>

          <div className="row g-4">
            {VALUES.map((v, index) => (
              <div className="col-md-4" key={v.title}>
                <div
                  className="card-soft h-100 p-4 text-center lift-on-hover fade-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center mb-3 rounded-circle mx-auto icon-bubble"
                  >
                    <i className={`bi ${v.icon} fs-4 text-marigold`}></i>
                  </div>
                  <h5 className="mb-2">{v.title}</h5>
                  <p className="text-ink-soft mb-0" style={{ fontSize: '0.92rem' }}>
                    {v.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream reveal">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7">
              <span className="eyebrow fade-up">Our journey</span>
              <h2 className="mt-2 mb-0 fade-up delay-1">Two decades, one seal of trust</h2>
            </div>
          </div>

          <div className="row g-4">
            {MILESTONES.map((m, index) => (
              <div className="col-md-6 col-lg-3" key={m.year}>
                <div
                  className="d-flex flex-column align-items-center text-center milestone-card fade-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="milestone-pop">
                    <SealBadge number={m.year} label="Milestone" />
                  </div>
                  <p className="text-ink-soft mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 stat-strip reveal">
        <div className="container text-center">
          <span className="eyebrow" style={{ color: 'var(--color-marigold)' }}>
            Registered &amp; regulated
          </span>
          <h2 className="text-white mt-2 mb-3 glow-in">
            Reg. No. PNA/PNA/(1)/RSR/(CR)/2618 · Dated 31/5/2003
          </h2>
          <p className="mb-0 mr-text" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Swami Prasad Apartment, Shukrawar Peth, Pune – 411002
          </p>
        </div>
      </section>
    </>
  );
}