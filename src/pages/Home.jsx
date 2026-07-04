import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SealBadge from "../components/SealBadge";

const SERVICES = [
  {
    icon: "bi-piggy-bank",
    title: "Savings & Recurring Deposits",
    body: "Grow steady interest on daily savings and monthly RD plans, with passbooks you can walk in and update.",
  },
  {
    icon: "bi-cash-coin",
    title: "Fixed Deposits",
    body: "Lock in a tenure that suits you and earn a fixed, guaranteed rate — no market surprises.",
  },
  {
    icon: "bi-house-heart",
    title: "Personal & Home Loans",
    body: "Transparent paperwork, clear EMI schedules, and lending decisions made by people who know the neighbourhood.",
  },
  {
    icon: "bi-briefcase",
    title: "Business & Gold Loans",
    body: "Working-capital and gold-backed credit for local traders and families, sanctioned without the runaround.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Open an account",
    body: "Visit the branch or sign up online with your KYC documents.",
  },
  {
    n: "02",
    title: "Choose a scheme",
    body: "Pick a savings, RD or FD plan that matches your goal and tenure.",
  },
  {
    n: "03",
    title: "Track with ease",
    body: "Follow your balance and maturity dates through your passbook or login.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <>
      {/* HERO */}

      <section className="hero-section section-pad overflow-hidden">
        <div className="container">
          <div className="row align-items-center gy-5">

            <motion.div
              className="col-lg-7"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="eyebrow">
                Reliable community banking · Shukrawar Peth, Pune
              </span>

              <h1
                className="display-4 mt-3 mb-3"
                style={{ lineHeight: 1.12 }}
              >
                Your savings, your loans,
                <br />
                looked after by your own{" "}
                <span className="text-marigold">
                  patsanstha
                </span>
                .
              </h1>

              <div className="divider-gold mb-3"></div>

              <p
                className="fs-5 text-ink-soft mb-4"
                style={{ maxWidth: 560 }}
              >
                Shivadnya Nagari Sahakari Patsanstha Ltd. has served Pune families
                since 2003 with transparent deposit schemes and honest, quick
                loan approvals.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.06 }}>
                  <Link to="/services" className="btn-brand btn btn-lg">
                    Our Services
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.06 }}>
                  <Link
                    to="/about"
                    className="btn-brand-outline btn btn-lg"
                  >
                    Learn About Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-5 d-flex justify-content-center"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="card-soft p-4 text-center"
                whileHover={{
                  scale: 1.04,
                  rotate: 1,
                }}
                transition={{ duration: 0.4 }}
                style={{ maxWidth: 360 }}
              >
                <motion.img
                  src="/assets/logo.jpeg"
                  className="seal-ring-logo mx-auto mb-3"
                  alt=""
                  animate={{
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                  }}
                />

                <p
                  className="fw-semibold"
                  style={{ color: "var(--color-indigo-dark)" }}
                >
                  शिवाज्ञा नागरी सहकारी पतसंस्था मर्या. पुणे
                </p>

                <p className="text-ink-soft mb-0">
                  Reg. No. PNA/PNA/(1)/RSR/(CR)/2618 · Est. 2003 - 2004
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST */}

      <section className="py-5">
        <div className="container">
          <div className="row text-center gy-4 justify-content-center">

            {[
              ["21+", "Years of Trust"],
              ["1", "Registered Society"],
              ["4+", "Deposit Schemes"],
              ["100%", "Transparent Ledgers"],
            ].map((item, index) => (
              <motion.div
                key={index}
                className="col-6 col-md-3"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                >
                  <SealBadge number={item[0]} label={item[1]} />
                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="section-pad bg-cream">
        <div className="container">

          <motion.div
            className="row mb-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="col-lg-7">
              <span className="eyebrow">
                What we offer
              </span>

              <h2 className="mt-2">
                Deposits and loans built around real household needs
              </h2>
            </div>

            <div className="col-lg-5 text-lg-end mt-3">
              <Link
                to="/services"
                className="btn-brand-outline btn"
              >
                View All Services
              </Link>
            </div>
          </motion.div>

          <div className="row g-4">

            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                className="col-sm-6 col-lg-3"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.35 }}
                  className="card-soft h-100 p-4"
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                    }}
                    transition={{ duration: 0.7 }}
                    className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: 55,
                      height: 55,
                      background: "var(--color-marigold-tint)",
                    }}
                  >
                    <i
                      className={`bi ${service.icon} fs-4 text-marigold`}
                    ></i>
                  </motion.div>

                  <h5>{service.title}</h5>

                  <p className="text-ink-soft mb-0">
                    {service.body}
                  </p>
                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* HOW */}

      <section
        className="section-pad"
        style={{
          background: "var(--color-indigo-tint)",
        }}
      >
        <div className="container">

          <div className="row g-4">

            {STEPS.map((step, index) => (
              <motion.div
                key={step.n}
                className="col-md-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{
                    y: -12,
                  }}
                  className="p-4 h-100"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                    }}
                    style={{
                      fontSize: "2.4rem",
                      fontWeight: 800,
                      color: "var(--color-marigold)",
                    }}
                  >
                    {step.n}
                  </motion.span>

                  <h5 className="mt-3">
                    {step.title}
                  </h5>

                  <p className="text-ink-soft">
                    {step.body}
                  </p>
                </motion.div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <motion.section
        className="py-5 stat-strip"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container text-center " style={{
              color: "rgba(255,255,255,.85)",
            }}>

          <motion.h2
            initial={{ y: 40 }}
            whileInView={{ y: 0 }} 
           style={{
              color: "rgba(255,255,255,.85)",
            }}>
            Ready to bank with people who know your name?
          </motion.h2>

          <p
            className="mb-4"
            style={{
              maxWidth: 560,
              margin: "auto",
              color: "rgba(255,255,255,.85)",
            }}
          >
            Visit our Shukrawar Peth branch or start your account online in a
            few minutes.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">

            <motion.div whileHover={{ scale: 1.07 }}>
              <Link
                to="/services"
                className="btn-brand btn btn-lg"
              >
                Our Services
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.07 }}>
              <Link
                to="/contact"
                className="btn btn-outline-light btn-lg rounded-pill"
              >
                Contact Branch
              </Link>
            </motion.div>

          </div>
        </div>
      </motion.section>
    </>
  );
}