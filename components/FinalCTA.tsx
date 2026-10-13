"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmed || !emailRe.test(trimmed)) {
      setStatus("error");
      return;
    }
    setStatus("success");
  };

  return (
    <section
      style={{
        background: "#0D0F10",
        padding: "80px 20px 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 500,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(117,251,144,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 24,
            padding: "6px 16px",
            borderRadius: 999,
            background: "rgba(117,251,144,0.06)",
            border: "1px solid rgba(117,251,144,0.18)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#75FB90",
              boxShadow: "0 0 8px rgba(117,251,144,0.8)",
              animation: "pulse-dot 2s ease-in-out infinite",
              display: "inline-block",
            }}
          />
          <span
            style={{ fontSize: 12, fontWeight: 600, color: "#75FB90", letterSpacing: "0.04em" }}
          >
            Join the waitlist — be first in line
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "clamp(32px, 4.5vw, 58px)",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            margin: "0 0 16px",
          }}
        >
          Start understanding
          <br />
          your money{" "}
          <span style={{ color: "#75FB90" }}>today</span>
        </h2>

        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.65,
            maxWidth: 480,
            margin: "0 auto 36px",
          }}
        >
          Fermor is building a better way to understand, act and grow
          financially. Free tools available now — full platform coming soon.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ maxWidth: 460, margin: "0 auto" }} noValidate>
          {status === "success" ? (
            <div
              style={{
                padding: "18px 24px",
                borderRadius: 999,
                background: "rgba(117,251,144,0.08)",
                border: "1px solid rgba(117,251,144,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#75FB90" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span style={{ color: "#75FB90", fontWeight: 600, fontSize: 15 }}>
                You&apos;re on the waitlist! We&apos;ll reach out soon.
              </span>
            </div>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  padding: "6px 6px 6px 20px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.04)",
                  border: `1.5px solid ${status === "error" ? "rgba(255,100,80,0.4)" : "rgba(255,255,255,0.1)"}`,
                  boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
                }}
              >
                <input
                  id="cta-email-input"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontSize: 15,
                    color: "#fff",
                    fontFamily: "inherit",
                    minWidth: 0,
                  }}
                />
                <button
                  id="cta-waitlist-btn"
                  type="submit"
                  style={{
                    flexShrink: 0,
                    background: "#75FB90",
                    color: "#0D0F10",
                    border: "none",
                    fontFamily: "inherit",
                    fontSize: 14,
                    fontWeight: 700,
                    padding: "13px 24px",
                    borderRadius: 999,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "transform 0.15s, box-shadow 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(117,251,144,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  Get Early Access
                </button>
              </div>
              {status === "error" && (
                <p role="alert" style={{ marginTop: 8, fontSize: 12.5, color: "rgba(255,120,100,0.9)" }}>
                  Please enter a valid email address.
                </p>
              )}
            </>
          )}
        </form>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-6 flex-wrap mt-8">
          {[
            { icon: "🔒", text: "Privacy first" },
            { icon: "✓", text: "Free forever" },
            { icon: "🇮🇳", text: "Built for India" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2">
              <span style={{ fontSize: 14 }}>{b.icon}</span>
              <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
                {b.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
