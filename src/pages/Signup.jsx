import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    aadhaar: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match. Please re-enter them.');
      return;
    }
    if (!form.agree) {
      setError('Please accept the membership terms to continue.');
      return;
    }

    // Frontend-only demo: no backend wired up yet.
    setSuccess(true);
  };

  return (
    <section className="hero-section section-pad">
      <div className="container">
        <div className="auth-card">
          <div className="text-center mb-4">
            <img
              src="/assets/logo.jpeg"
              alt="Society seal"
              className="rounded-circle mb-3"
              style={{ width: 76, height: 76, objectFit: 'cover', border: '3px solid var(--color-indigo)' }}
            />
            <span className="eyebrow">Become a member</span>
            <h1 className="h3 mt-2 mb-1">Open Your Account</h1>
            <p className="text-ink-soft mb-0">Join Shivadnya Nagari Sahakari Patsanstha Ltd.in a few minutes.</p>
          </div>

          <div className="card-soft p-4 p-md-5">
            {success ? (
              <div className="text-center py-3">
                <i className="bi bi-patch-check-fill text-success" style={{ fontSize: '2.6rem' }}></i>
                <h4 className="mt-3">Application received</h4>
                <p className="text-ink-soft">
                  Bring a photo ID and address proof to the branch to complete your membership KYC.
                </p>
                <Link to="/login" className="btn-brand btn mt-2">Go to Login</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {error && (
                  <div className="alert alert-danger d-flex align-items-center gap-2" role="alert">
                    <i className="bi bi-exclamation-triangle"></i>
                    <span>{error}</span>
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    className="form-control form-control-brand"
                    id="fullName"
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="As per your ID proof"
                  />
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control form-control-brand"
                      id="phone"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      className="form-control form-control-brand"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="aadhaar" className="form-label fw-semibold">Aadhaar / ID Number</label>
                  <input
                    type="text"
                    className="form-control form-control-brand"
                    id="aadhaar"
                    name="aadhaar"
                    required
                    value={form.aadhaar}
                    onChange={handleChange}
                    placeholder="For KYC verification at the branch"
                  />
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="password" className="form-label fw-semibold">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-brand"
                      id="password"
                      name="password"
                      required
                      minLength={6}
                      value={form.password}
                      onChange={handleChange}
                      placeholder="At least 6 characters"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control form-control-brand"
                      id="confirmPassword"
                      name="confirmPassword"
                      required
                      minLength={6}
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder="Re-enter password"
                    />
                  </div>
                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={form.agree}
                    onChange={handleChange}
                  />
                  <label className="form-check-label text-ink-soft" htmlFor="agree" style={{ fontSize: '0.9rem' }}>
                    I agree to the society's membership terms and KYC requirements.
                  </label>
                </div>

                <button type="submit" className="btn-brand btn btn-lg w-100">Create Account</button>

                <p className="text-center text-ink-soft mt-4 mb-0" style={{ fontSize: '0.92rem' }}>
                  Already a member? <Link to="/login" className="text-marigold fw-semibold">Log in here</Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}