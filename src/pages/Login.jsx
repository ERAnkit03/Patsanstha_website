import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ identifier: '', password: '', remember: false });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!form.identifier || !form.password) {
      setError('Please enter your member ID / phone and password.');
      return;
    }

    // Frontend-only demo: no backend wired up yet.
    setError('');
    alert('Login form submitted (frontend demo — connect to your backend to authenticate).');
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
            <span className="eyebrow">Member login</span>
            <h1 className="h3 mt-2 mb-1">Welcome Back</h1>
            <p className="text-ink-soft mb-0">Log in to check your balance and manage your accounts.</p>
          </div>

          <div className="card-soft p-4 p-md-5">
            <form onSubmit={handleSubmit} noValidate>
              {error && (
                <div className="alert alert-danger d-flex align-items-center gap-2" role="alert">
                  <i className="bi bi-exclamation-triangle"></i>
                  <span>{error}</span>
                </div>
              )}

              <div className="mb-3">
                <label htmlFor="identifier" className="form-label fw-semibold">Member ID / Phone Number</label>
                <input
                  type="text"
                  className="form-control form-control-brand"
                  id="identifier"
                  name="identifier"
                  required
                  value={form.identifier}
                  onChange={handleChange}
                  placeholder="Enter your member ID or phone"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control form-control-brand"
                  id="password"
                  name="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember"
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                  />
                  <label className="form-check-label text-ink-soft" htmlFor="remember" style={{ fontSize: '0.9rem' }}>
                    Remember me
                  </label>
                </div>
                <a href="#forgot-password" className="text-marigold fw-semibold" style={{ fontSize: '0.9rem' }}>
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn-brand btn btn-lg w-100">Log In</button>

              <p className="text-center text-ink-soft mt-4 mb-0" style={{ fontSize: '0.92rem' }}>
                New member? <Link to="/signup" className="text-marigold fw-semibold">Create an account</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}