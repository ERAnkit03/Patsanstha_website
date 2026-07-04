import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
  
];

function TopBar() {
  return (
    <div className="top-bar">
      <div className="container d-flex justify-content-end align-items-center">
        <div className="d-flex flex-wrap align-items-center gap-3 gap-md-4">
          <a href="tel:+919209546376" className="top-bar-link">
            <i className="bi bi-telephone-fill"></i>
            <span>+91 92095 46376</span>
          </a>

          <a
            href="mailto:shivadnyapatsanstha@gmail.com"
            className="top-bar-link"
          >
            <i className="bi bi-envelope-fill"></i>
            <span>shivadnyapatsanstha@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopBar />
      <nav className="navbar navbar-expand-lg brand-navbar sticky-top py-2">
        <div className="container">
          <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
            <img
              src="/assets/logo.jpeg"
              alt="Shivadnya Nagari Sahakari Patsanstha Ltd.seal"
              width="46"
              height="46"
              className="rounded-circle"
              style={{ objectFit: 'cover', border: '2px solid var(--color-indigo)' }}
            />
            <span className="d-flex flex-column lh-sm">
              <span className="fw-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-indigo-dark)', fontSize: '1.05rem' }}>
                Shivadnya Nagari Sahakari Patsanstha Ltd.
              </span>
              <span className="mr-text" style={{ fontSize: '0.7rem', color: 'var(--color-marigold-dark)', fontWeight: 600 }}>
                Shukravar Peth , Pune
              </span>
            </span>
          </NavLink>

          <button
            className="navbar-toggler border-0"
            type="button"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1 mb-3 mb-lg-0">
              {NAV_LINKS.map((link) => (
                <li className="nav-item" key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className="nav-link"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              {/* <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <NavLink to="/login" className="btn-brand-outline btn d-inline-block" onClick={() => setOpen(false)}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <NavLink to="/signup" className="btn-brand btn d-inline-block" onClick={() => setOpen(false)}>
                  Sign Up
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}