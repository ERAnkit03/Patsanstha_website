import React from 'react';
import { Link } from 'react-router-dom';

const DEPOSIT_SCHEMES = [
  {
    icon: 'bi-piggy-bank',
    title: 'Savings Account',
    body: 'Start your Savings Account effortlessly and grow with us securely.',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Fixed Deposit',
    body: 'Secure your money with Fixed Deposits at attractive interest rates.',
  },
  {
    icon: 'bi-arrow-repeat',
    title: 'Recurring Deposit',
    body: 'Build wealth with easy and regular Recurring Deposits.',
  },
];

const LOAN_SERVICES = [
  {
    icon: 'bi-house-heart',
    title: 'Home Loan',
    body: 'Own your dream home with our easy and affordable Home Loans.',
  },
  {
    icon: 'bi-wallet2',
    title: 'Personal Loan',
    body: 'Quick Personal Loans tailored for your personal finance needs.',
  },
  {
    icon: 'bi-gem',
    title: 'Gold Loan',
    body: 'Get instant funds by pledging your gold with us safely.',
  },
  {
    icon: 'bi-briefcase',
    title: 'Business Loan',
    body: 'Expand your business with our easy and transparent Business Loans.',
  },
  {
    icon: 'bi-car-front',
    title: 'Vehicle Loan',
    body: 'Drive away with ease through affordable Vehicle Loan options.',
  },
];

export default function Services() {
  return (
    <>
      <section className="section-pad hero-services reveal">
        <div className="container text-center">
          <span className="eyebrow fade-up">What we offer</span>
          <h1 className="mt-2 mb-2 fade-up delay-1">Our Services</h1>
          <p className="text-ink-soft mb-0 mx-auto fade-up delay-2" style={{ maxWidth: 560 }}>
            Explore deposit schemes and loan services tailored to your financial goals.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream section-animate">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7">
              <span className="eyebrow fade-up">Save with confidence</span>
              <h2 className="mt-2 mb-2 fade-up delay-1">Deposit Schemes</h2>
              <p className="text-ink-soft mb-0 fade-up delay-2" style={{ maxWidth: 560 }}>
                Choose from flexible deposit plans designed to grow your savings with safety and attractive returns.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {DEPOSIT_SCHEMES.map((s, index) => (
              <div className="col-md-6 col-lg-4" key={s.title}>
                <div
                  className="card-soft h-100 p-4 lift-on-hover fade-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="icon-bubble mb-3">
                    <i className={`bi ${s.icon} fs-4 text-marigold`}></i>
                  </div>
                  <h5 className="mb-2" style={{ fontSize: '1.05rem' }}>{s.title}</h5>
                  <p className="text-ink-soft mb-0" style={{ fontSize: '0.92rem' }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad loan-services reveal" style={{ background: 'var(--color-paper)' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7">
              <span className="eyebrow fade-up">Borrow with ease</span>
              <h2 className="mt-2 mb-2 fade-up delay-1">Loan Services</h2>
              <p className="text-ink-soft mb-0 fade-up delay-2" style={{ maxWidth: 560 }}>
                From home to vehicle, our loan services provide quick approvals and member-friendly terms for your financial growth.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {LOAN_SERVICES.map((s, index) => (
              <div className="col-md-6 col-lg-4" key={s.title}>
                <div
                  className="card-soft h-100 p-4 lift-on-hover fade-up"
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <div className="icon-bubble icon-bubble-indigo mb-3">
                    <i className={`bi ${s.icon} fs-4 text-indigo`}></i>
                  </div>
                  <h5 className="mb-2" style={{ fontSize: '1.05rem' }}>{s.title}</h5>
                  <p className="text-ink-soft mb-0" style={{ fontSize: '0.92rem' }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 stat-strip reveal">
        <div className="container text-center">
          <h2 className="text-white mb-3 glow-in">Ready to bank with people who know your name?</h2>
          <p className="mb-4 fade-up" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto' }}>
            Visit our Shukrawar Peth branch or start your account online in a few minutes.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3 fade-up delay-2">
            <Link to="/services" className="btn-brand btn btn-lg btn-motion">
              Our Services
            </Link>
            <Link to="/contact" className="btn btn-lg btn-outline-light rounded-pill btn-motion">
              Contact Branch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}