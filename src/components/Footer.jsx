import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-indigo text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img
                src="/assets/logo.jpeg"
                alt="Society seal"
                width="48"
                height="48"
                className="rounded-circle"
                style={{ objectFit: 'cover', border: '2px solid rgba(255,255,255,0.6)' }}
              />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem' }}>
                Shivadnya Nagari Sahakari Patsanstha Ltd.
              </span>
            </div>
            <p className="mb-1" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem' }}>
              A registered cooperative credit society serving Shukrawar Peth, Pune since 2003 — built on transparent deposits and honest lending.
            </p>
            <p className="mr-text mb-0" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem' }}>
              {/* नोंदणी क्रमांक: पीएनए/पीएनए/(१)/आरएसआर/(सीआर)/२६७८/सन २००३-२००४ */}
              Reg. No. PNA/PNA/(1)/RSR/(CR)/2618 · Est. 2003 - 2004
            </p>
          </div>

          {/* <div className="col-lg-2 col-6">
            <h6 className="text-uppercase fw-bold mb-3" style={{ fontSize: '0.78rem', letterSpacing: '0.08em', color: 'var(--color-marigold)' }}>
              Navigate
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white-50 text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-white-50 text-decoration-none">Contact</Link></li>
            </ul>
          </div> */}

          <div className="col-lg-2 col-6">
            <h6 className="text-uppercase fw-bold mb-3" style={{ fontSize: '0.78rem', letterSpacing: '0.08em', color: 'var(--color-marigold)' }}>
              Account
            </h6>
           <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
              <li><Link to="/services" className="text-white-50 text-decoration-none">Services</Link></li>
              <li><Link to="/about" className="text-white-50 text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-white-50 text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h6 className="text-uppercase fw-bold mb-3" style={{ fontSize: '0.78rem', letterSpacing: '0.08em', color: 'var(--color-marigold)' }}>
              Reach the branch
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)' }}>
              <li className="d-flex gap-2"><i className="bi bi-geo-alt mt-1"></i><span>Swami Prasad Apartment, Shukrawar Peth, Pune – 411002</span></li>
              <li className="d-flex gap-2"><i className="bi bi-telephone mt-1"></i><span>+91 92095 46376</span></li>
              <li className="d-flex gap-2"><i className="bi bi-envelope mt-1"></i><span>shivadnyapatsanstha@gmail.com</span></li>
            </ul>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.15)' }} />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
            © {new Date().getFullYear()} Shivadnya Nagari Sahakari Patsanstha Ltd. , Pune. All rights reserved.
          </span>
          <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
            Registered under the Maharashtra Co-operative Societies Act
          </span>
        </div>
      </div>
    </footer>
  );
}