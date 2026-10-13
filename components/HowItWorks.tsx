"use client";

import React from "react";

const steps = [
  {
    num: "01",
    title: "Connect your accounts",
    desc: "Link your bank, brokerage, and mutual fund accounts securely. Fermor works with your existing financial life.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
        <path d="M12 2a10 10 0 0 1 10 10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Get instant clarity",
    desc: "See your net worth, spending patterns, and investment performance — all in one place, explained simply.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Make confident moves",
    desc: "Use AI-powered insights, scenario modelling, and free calculators to act on your financial goals with conviction.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ background: "#0D0F10", padding: "80px 20px" }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "#75FB90",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            How it works
          </p>
          <h2
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(28px, 3.6vw, 48px)",
              fontWeight: 600,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Three steps to financial{" "}
            <span style={{ color: "#75FB90" }}>clarity</span>
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            position: "relative",
          }}
        >
          {/* Connector line — desktop only */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 52,
              left: "calc(33.33% + 20px)",
              right: "calc(33.33% + 20px)",
              height: 1,
              background:
                "linear-gradient(to right, transparent, rgba(117,251,144,0.3), transparent)",
              pointerEvents: "none",
            }}
            className="hidden md:block"
          />

          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                borderRadius: 22,
                background: "rgba(18,21,26,0.7)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = "rgba(117,251,144,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              {/* Glow */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: -40,
                  left: -40,
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, rgba(117,251,144,${0.04 + i * 0.02}) 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Step number */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(117,251,144,0.08)",
                    border: "1px solid rgba(117,251,144,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#75FB90",
                    flexShrink: 0,
                  }}
                >
                  {step.icon}
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "rgba(117,251,144,0.6)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {step.num}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.025em",
                  marginBottom: 10,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
