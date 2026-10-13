"use client";

import { useEffect, useRef } from "react";

// Animated dashboard mockup — pure CSS/SVG, no external images
export default function DashboardMockup() {
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const heights = [45, 62, 38, 78, 55, 90, 68, 82, 71, 95, 84, 100];
    barRefs.current.forEach((bar, i) => {
      if (bar) {
        setTimeout(() => {
          bar.style.height = `${heights[i]}%`;
          bar.style.opacity = "1";
        }, i * 60);
      }
    });
  }, []);

  return (
    // Outer wrapper — extra padding so floating cards don't get clipped
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 520,
        paddingTop: 16,
        paddingRight: 80,   // room for Net Worth badge on the right
        paddingBottom: 120, // room for Ask Fermor card at the bottom
        paddingLeft: 40,    // room for Ask Fermor card going left
      }}
    >
      {/* Outer glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: -40,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(117,251,144,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main dashboard card */}
      <div
        style={{
          width: "100%",
          borderRadius: 24,
          background: "rgba(18,21,26,0.9)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          boxShadow:
            "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset",
          overflow: "hidden",
          padding: 24,
          position: "relative",
        }}
      >
        {/* Dashboard header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 500, letterSpacing: "0.08em", marginBottom: 3 }}>
              PORTFOLIO VALUE
            </p>
            <div className="flex items-baseline gap-2">
              <span style={{ fontSize: 28, fontWeight: 700, color: "#fff", letterSpacing: "-0.04em" }}>
                ₹14,82,450
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#75FB90",
                  background: "rgba(117,251,144,0.1)",
                  padding: "2px 8px",
                  borderRadius: 999,
                }}
              >
                +12.4%
              </span>
            </div>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>
              All time · Updated just now
            </p>
          </div>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #75FB90, #4ae367)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 16,
              color: "#0D0F10",
              flexShrink: 0,
            }}
          >
            P
          </div>
        </div>

        {/* Chart area */}
        <div
          style={{
            height: 120,
            borderRadius: 16,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            padding: "12px 16px 10px",
            marginBottom: 16,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 460 90"
            preserveAspectRatio="none"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.9 }}
          >
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#75FB90" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#75FB90" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 80 C40 72,80 60,120 52 C160 44,200 35,240 28 C280 21,320 18,360 12 C400 6,440 5,460 4 L460 90 L0 90 Z"
              fill="url(#chartGrad)"
            />
            <path
              d="M0 80 C40 72,80 60,120 52 C160 44,200 35,240 28 C280 21,320 18,360 12 C400 6,440 5,460 4"
              fill="none"
              stroke="#75FB90"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ strokeDasharray: "1000", strokeDashoffset: "0", animation: "chart-draw 2.5s ease-out forwards" }}
            />
            <circle cx="460" cy="4" r="4" fill="#75FB90" style={{ filter: "drop-shadow(0 0 6px rgba(117,251,144,0.9))" }} />
          </svg>
          <div className="absolute bottom-2 left-4 right-4 flex justify-between">
            {["Jan", "Mar", "May", "Jul", "Sep", "Now"].map((m) => (
              <span key={m} style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>{m}</span>
            ))}
          </div>
        </div>

        {/* Holdings */}
        <div style={{ marginBottom: 14 }}>
          <p style={{ fontSize: 10.5, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", marginBottom: 8 }}>
            TOP HOLDINGS
          </p>
          {[
            { name: "Nifty 50 ETF", type: "ETF", change: "+2.1%", val: "₹4,21,000", pos: true },
            { name: "HDFC Mid-Cap Fund", type: "Mutual Fund", change: "+5.8%", val: "₹2,88,200", pos: true },
            { name: "Reliance Ind.", type: "Stock", change: "-0.4%", val: "₹1,54,800", pos: false },
          ].map((h) => (
            <div
              key={h.name}
              className="flex items-center justify-between"
              style={{
                padding: "9px 12px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.05)",
                marginBottom: 6,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    background: h.pos ? "rgba(117,251,144,0.1)" : "rgba(255,100,80,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    fontWeight: 700,
                    color: h.pos ? "#75FB90" : "#FF8066",
                    flexShrink: 0,
                  }}
                >
                  {h.name[0]}
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{h.name}</p>
                  <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{h.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{h.val}</p>
                <p style={{ fontSize: 10, fontWeight: 600, color: h.pos ? "#75FB90" : "#FF8066" }}>{h.change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Spending bars */}
        <div
          style={{
            padding: "12px 14px 10px",
            borderRadius: 14,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", marginBottom: 8 }}>
            MONTHLY SPEND
          </p>
          <div className="flex items-end gap-1.5" style={{ height: 48 }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                ref={(el) => { barRefs.current[i] = el; }}
                style={{
                  flex: 1,
                  height: "10%",
                  opacity: 0,
                  borderRadius: "3px 3px 1px 1px",
                  background: i === 11 ? "#75FB90" : "rgba(255,255,255,0.15)",
                  transition: `height 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease`,
                  alignSelf: "flex-end",
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>Jan</span>
            <span style={{ fontSize: 9, color: "#75FB90", fontWeight: 600 }}>Oct ▲</span>
          </div>
        </div>
      </div>

      {/* ── Floating Net Worth badge — inside padding zone, no clipping ── */}
      <div
        style={{
          position: "absolute",
          top: 36,
          right: 0,           // flush with the right padding edge — fully visible
          padding: "10px 14px",
          borderRadius: 14,
          background: "rgba(22,24,32,0.97)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
          backdropFilter: "blur(20px)",
          minWidth: 148,
        }}
      >
        <p style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", marginBottom: 3, fontWeight: 500 }}>
          Net Worth
        </p>
        <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", margin: 0 }}>
          ₹24.6L
        </p>
        <div className="flex items-center gap-1 mt-1.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#75FB90" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
          <span style={{ fontSize: 10.5, color: "#75FB90", fontWeight: 600, whiteSpace: "nowrap" }}>
            +₹1.2L this month
          </span>
        </div>
      </div>

      {/* ── Floating Ask Fermor card — with mini graph below the answer ── */}
      <div
        style={{
          position: "absolute",
          bottom: 8,          // sits in the bottom padding zone — fully visible
          left: 0,            // flush with left padding edge
          width: 230,
          padding: "14px 16px 12px",
          borderRadius: 18,
          background: "rgba(22,24,32,0.97)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 8,
              background: "linear-gradient(135deg, #668CFF, #8A68FF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C13.8 9.8 14.2 10.2 22 12C14.2 13.8 13.8 14.2 12 22C10.2 14.2 9.8 13.8 2 12C9.8 10.2 10.2 9.8 12 2Z" fill="white" />
            </svg>
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Ask Fermor</span>
          <span
            style={{
              marginLeft: "auto",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#75FB90",
              boxShadow: "0 0 8px rgba(117,251,144,0.8)",
              animation: "pulse-dot 2s infinite",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
        </div>

        {/* Question */}
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", lineHeight: 1.45, marginBottom: 6 }}>
          &quot;How much should I invest monthly to reach ₹1Cr in 10 years?&quot;
        </p>

        {/* Answer */}
        <p style={{ fontSize: 12.5, color: "#75FB90", fontWeight: 700, marginBottom: 10 }}>
          ₹43,290/month at 12% p.a.
        </p>

        {/* Mini forecast graph */}
        <div
          style={{
            borderRadius: 10,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "8px 10px 6px",
          }}
        >
          <p style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", marginBottom: 6 }}>
            WEALTH FORECAST
          </p>
          <svg viewBox="0 0 200 60" preserveAspectRatio="none" style={{ width: "100%", height: 52, display: "block" }}>
            <defs>
              <linearGradient id="askGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#668CFF" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#668CFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Area fill */}
            <path
              d="M0 58 C30 54,60 48,90 40 C120 32,150 22,200 8 L200 60 L0 60 Z"
              fill="url(#askGrad)"
            />
            {/* Line */}
            <path
              d="M0 58 C30 54,60 48,90 40 C120 32,150 22,200 8"
              fill="none"
              stroke="#668CFF"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Goal dot */}
            <circle cx="200" cy="8" r="3.5" fill="#75FB90" style={{ filter: "drop-shadow(0 0 5px rgba(117,251,144,0.9))" }} />
            {/* Year markers */}
            {[0, 50, 100, 150, 200].map((x, i) => (
              <line key={x} x1={x} y1="56" x2={x} y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            ))}
          </svg>
          <div className="flex justify-between mt-1">
            <span style={{ fontSize: 8.5, color: "rgba(255,255,255,0.25)" }}>Yr 1</span>
            <span style={{ fontSize: 8.5, color: "#75FB90", fontWeight: 600 }}>₹1Cr · Yr 10 🎯</span>
          </div>
        </div>
      </div>
    </div>
  );
}
