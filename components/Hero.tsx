"use client";

import { useState, useRef } from "react";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setStatus("error");
      setErrMsg("Please enter your email address.");
      inputRef.current?.focus();
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(trimmed)) {
      setStatus("error");
      setErrMsg("Please enter a valid email address.");
      inputRef.current?.focus();
      return;
    }
    setStatus("success");
    setErrMsg("");
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(170deg, #0D0F10 0%, #111416 50%, #0D0F10 100%)",
        minHeight: "100vh",
        paddingTop: 90,
      }}
    >
      {/* Ambient glow blobs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 600,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(117,251,144,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          left: "-5%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(80,100,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          right: "-5%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(117,251,144,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="relative z-10 mx-auto px-5"
        style={{ maxWidth: 1200 }}
      >
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 pt-8 pb-16 lg:pb-0">
          {/* Left: Text + CTA */}
          <div className="flex-1 text-center lg:text-left" style={{ maxWidth: 560 }}>
            {/* Pill badge */}
            <div
              className="inline-flex items-center gap-2 mb-6"
              style={{
                padding: "6px 14px 6px 8px",
                borderRadius: 999,
                background: "rgba(117,251,144,0.08)",
                border: "1px solid rgba(117,251,144,0.2)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#75FB90",
                  display: "inline-block",
                  boxShadow: "0 0 8px rgba(117,251,144,0.8)",
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#75FB90",
                  letterSpacing: "0.04em",
                }}
              >
                Now in early access · Join the waitlist
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: "clamp(36px, 5.2vw, 68px)",
                fontWeight: 600,
                color: "#ffffff",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              Build your wealth
              <br />
              with{" "}
              <span style={{ color: "#75FB90", position: "relative" }}>
                Fermor
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(15px, 1.5vw, 17px)",
                color: "rgba(255,255,255,0.58)",
                lineHeight: 1.65,
                marginBottom: 36,
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Invest, track and plan in one place. Clear insights, free tools,
              and AI-powered advice — built for India.
            </p>

            {/* Email waitlist form */}
            <form
              id="waitlist"
              onSubmit={handleSubmit}
              style={{ maxWidth: 480 }}
              className="mx-auto lg:mx-0"
              noValidate
            >
              {status === "success" ? (
                <div
                  className="flex items-center gap-3"
                  style={{
                    padding: "14px 20px",
                    borderRadius: 999,
                    background: "rgba(117,251,144,0.1)",
                    border: "1px solid rgba(117,251,144,0.3)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#75FB90" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span style={{ color: "#75FB90", fontWeight: 600, fontSize: 14 }}>
                    You&apos;re on the list! We&apos;ll be in touch soon.
                  </span>
                </div>
              ) : (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(255,255,255,0.04)",
                      border: `1px solid ${status === "error" ? "rgba(255,100,80,0.5)" : "rgba(255,255,255,0.1)"}`,
                      borderRadius: 999,
                      padding: "5px 5px 5px 18px",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <input
                      ref={inputRef}
                      id="hero-email-input"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      style={{
                        flex: 1,
                        minWidth: 0,
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        fontSize: 14.5,
                        color: "#ffffff",
                        fontFamily: "inherit",
                      }}
                    />
                    <button
                      id="hero-waitlist-btn"
                      type="submit"
                      style={{
                        flexShrink: 0,
                        background: "#75FB90",
                        color: "#0D0F10",
                        border: "none",
                        fontFamily: "inherit",
                        fontSize: 13.5,
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        padding: "11px 20px",
                        borderRadius: 999,
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        transition: "transform 0.15s, box-shadow 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 20px rgba(117,251,144,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      Join Waitlist
                    </button>
                  </div>
                  {status === "error" && (
                    <p
                      role="alert"
                      style={{
                        marginTop: 8,
                        fontSize: 12.5,
                        color: "rgba(255,120,100,0.9)",
                        paddingLeft: 18,
                      }}
                    >
                      {errMsg}
                    </p>
                  )}
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: 12,
                      color: "rgba(255,255,255,0.35)",
                      paddingLeft: 18,
                    }}
                  >
                    Free forever · No spam · Unsubscribe anytime
                  </p>
                </>
              )}
            </form>

            {/* Social proof numbers */}
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
              {[
                { val: "10K+", label: "Beta signups" },
                { val: "Free", label: "Core tools" },
                { val: "India", label: "Built for" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#ffffff",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {stat.val}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.4)",
                      marginTop: 2,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end w-full" style={{ maxWidth: 580 }}>
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: "linear-gradient(to bottom, transparent, #0D0F10)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
