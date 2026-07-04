import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="hero-section section-pad contact-hero reveal">
        <div className="container">
          <span className="eyebrow fade-up">Get in touch</span>
          <h1 className="display-5 mt-3 mb-3 fade-up delay-1">Talk to your branch directly</h1>
          <div className="divider-gold mb-3 scale-in delay-2"></div>
          <p className="fs-5 text-ink-soft mb-0 fade-up delay-2" style={{ maxWidth: 600 }}>
            Questions about a deposit scheme, a loan application, or your passbook? Reach us at the
            branch, by phone, or by leaving a message below.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream section-animate">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="card-soft p-4 p-md-5 h-100 lift-on-hover info-panel">
                <h4 className="mb-4">Branch details</h4>
                <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
                  <li className="d-flex gap-3 info-row">
                    <i className="bi bi-geo-alt fs-5 text-marigold info-icon"></i>
                    <div>
                      <strong className="d-block">Address</strong>
                      <span className="text-ink-soft">Swami Prasad Apartment, Shukrawar Peth, Pune – 411002</span>
                    </div>
                  </li>
                  <li className="d-flex gap-3 info-row">
                    <i className="bi bi-telephone fs-5 text-marigold info-icon"></i>
                    <div>
                      <strong className="d-block">Phone</strong>
                      <span className="text-ink-soft">+91 92095 46376</span>
                    </div>
                  </li>
                  <li className="d-flex gap-3 info-row">
                    <i className="bi bi-envelope fs-5 text-marigold info-icon"></i>
                    <div>
                      <strong className="d-block">Email</strong>
                      <span className="text-ink-soft">shivadnyapatsanstha@gmail.com</span>
                    </div>
                  </li>
                  <li className="d-flex gap-3 info-row">
                    <i className="bi bi-clock fs-5 text-marigold info-icon"></i>
                    <div>
                      <strong className="d-block">Branch Hours</strong>
                      <span className="text-ink-soft">Mon – Sat, 10:00 AM – 6:00 PM</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="card-soft p-4 p-md-5 form-panel lift-on-hover">
                <h4 className="mb-4">Send a message</h4>

                {sent && (
                  <div className="alert alert-success d-flex align-items-center gap-2 success-pop" role="alert">
                    <i className="bi bi-check-circle"></i>
                    <span>Thank you — your message has been noted. Our staff will call you back shortly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                      <input
                        type="text"
                        className="form-control form-control-brand"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>

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

                    <div className="col-12">
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

                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-semibold">Message</label>
                      <textarea
                        className="form-control form-control-brand"
                        id="message"
                        name="message"
                        rows="4"
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="How can we help?"
                      />
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn-brand btn btn-lg btn-motion">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}