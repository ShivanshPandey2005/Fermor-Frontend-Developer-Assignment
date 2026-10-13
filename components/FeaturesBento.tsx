"use client";

import React from "react";

const features = [
  {
    id: "invest",
    tag: "Invest",
    headline: "Stocks, Mutual Funds & ETFs — all in one place",
    body: "Explore and invest across asset classes with clear breakdowns of market movements and fund performance. No jargon, just clarity.",
    visual: "invest",
    accent: "#75FB90",
    size: "large",
  },
  {
    id: "track",
    tag: "Track",
    headline: "Your complete financial picture",
    body: "Net worth, monthly spend, savings rate — tracked automatically and presented cleanly.",
    visual: "track",
    accent: "#668CFF",
    size: "small",
  },
  {
    id: "ask",
    tag: "Ask Fermor AI",
    headline: "Answers grounded in your actual data",
    body: "Ask anything about your money. Get personalized, clear answers — not generic advice.",
    visual: "ask",
    accent: "#CF8CFF",
    size: "small",
  },
  {
    id: "plan",
    tag: "Plan",
    headline: "See your future wealth, today",
    body: "Interactive forecasting shows how different scenarios affect your long-term goals.",
    visual: "plan",
    accent: "#FFB066",
    size: "large",
  },
];

function InvestVisual() {
  return (
    <div style={{ padding: "20px 0 4px" }}>
      <div className="flex items-end gap-1" style={{ height: 80 }}>
        {[38, 52, 44, 68, 55, 82, 60, 95, 74, 100, 87, 92].map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              borderRadius: "3px 3px 1px 1px",
              background:
                i === 9
                  ? "#75FB90"
                  : `rgba(117,251,144,${0.08 + i * 0.015})`,
              alignSelf: "flex-end",
              transition: `height 0.6s cubic-bezier(0.34,1.2,0.64,1) ${i * 40}ms`,
              boxShadow: i === 9 ? "0 0 12px rgba(117,251,144,0.4)" : "none",
            }}
          />
        ))}
      </div>
      {/* Asset chips */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {["Nifty 50 ETF  +2.1%", "HDFC Mid-Cap  +5.8%", "Gold ETF  +1.2%"].map((t) => (
          <div
            key={t}
            style={{
              padding: "5px 12px",
              borderRadius: 999,
              background: "rgba(117,251,144,0.08)",
              border: "1px solid rgba(117,251,144,0.18)",
              fontSize: 12,
              fontWeight: 600,
              color: "#75FB90",
              whiteSpace: "nowrap",
            }}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function TrackVisual() {
  const cats = [
    { name: "Food", pct: 32, color: "#75FB90" },
    { name: "Transport", pct: 18, color: "#668CFF" },
    { name: "Shopping", pct: 28, color: "#CF8CFF" },
    { name: "Bills", pct: 22, color: "#FFB066" },
  ];
  return (
    <div style={{ marginTop: 16 }}>
      {/* Segmented bar */}
      <div
        className="flex overflow-hidden"
        style={{ height: 8, borderRadius: 999, gap: 2 }}
      >
        {cats.map((c) => (
          <div
            key={c.name}
            style={{
              flex: c.pct,
              background: c.color,
              borderRadius: 999,
              transition: "flex 0.8s ease",
            }}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-3 mt-3">
        {cats.map((c) => (
          <div key={c.name} className="flex items-center gap-1.5">
            <div style={{ width: 8, height: 8, borderRadius: 2, background: c.color, flexShrink: 0 }} />
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>
              {c.name} <span style={{ color: "#fff", fontWeight: 600 }}>{c.pct}%</span>
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 14,
          padding: "10px 12px",
          borderRadius: 10,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex justify-between items-center">
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>Net Worth</span>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>₹24,60,000</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>Savings Rate</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#75FB90" }}>34%</span>
        </div>
      </div>
    </div>
  );
}

function AskVisual() {
  return (
    <div style={{ marginTop: 16 }}>
      {[
        { q: "How much am I spending on food?", a: "₹8,400 in Oct — 12% more than last month" },
        { q: "When will I reach ₹50L?", a: "At current pace, around March 2028 · 17 months" },
      ].map((item, i) => (
        <div key={i} style={{ marginBottom: i === 0 ? 10 : 0 }}>
          <div
            style={{
              padding: "8px 12px",
              borderRadius: "12px 12px 4px 12px",
              background: "rgba(255,255,255,0.06)",
              fontSize: 12,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 6,
              display: "inline-block",
              maxWidth: "90%",
            }}
          >
            {item.q}
          </div>
          <div
            style={{
              padding: "8px 12px",
              borderRadius: "4px 12px 12px 12px",
              background: "rgba(207,140,255,0.1)",
              border: "1px solid rgba(207,140,255,0.18)",
              fontSize: 12,
              color: "#fff",
              fontWeight: 500,
              maxWidth: "90%",
              marginLeft: "auto",
            }}
          >
            <span style={{ marginRight: 6 }}>✦</span>
            {item.a}
          </div>
        </div>
      ))}
    </div>
  );
}

function PlanVisual() {
  return (
    <div style={{ paddingTop: 16 }}>
      {/* Forecast chart */}
      <svg viewBox="0 0 360 100" preserveAspectRatio="none" style={{ width: "100%", height: 90 }}>
        <defs>
          <linearGradient id="planGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFB066" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFB066" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Confidence band */}
        <path d="M0 95 C60 85,120 75,180 60 C240 45,300 32,360 18 L360 40 C300 52,240 65,180 78 C120 91,60 97,0 98 Z" fill="rgba(255,176,102,0.08)" />
        {/* Main forecast line */}
        <path d="M0 95 C60 85,120 75,180 60 C240 45,300 32,360 18" fill="none" stroke="#FFB066" strokeWidth="2.5" strokeLinecap="round" style={{ strokeDasharray: 600, strokeDashoffset: 0 }} />
        {/* Goal marker */}
        <circle cx="280" cy="35" r="4" fill="#FFB066" style={{ filter: "drop-shadow(0 0 6px rgba(255,176,102,0.8))" }} />
        <line x1="280" y1="35" x2="280" y2="95" stroke="rgba(255,176,102,0.25)" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
      <div className="flex justify-between mt-2">
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>Today</span>
        <div
          style={{
            padding: "3px 10px",
            borderRadius: 999,
            background: "rgba(255,176,102,0.1)",
            border: "1px solid rgba(255,176,102,0.2)",
            fontSize: 11,
            fontWeight: 600,
            color: "#FFB066",
          }}
        >
          ₹1Cr goal · 2031
        </div>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>2032</span>
      </div>
      {/* Scenario tags */}
      <div className="flex gap-2 mt-3">
        {["Conservative", "Moderate ✓", "Aggressive"].map((t, i) => (
          <div
            key={t}
            style={{
              flex: 1,
              padding: "6px 4px",
              borderRadius: 8,
              textAlign: "center",
              fontSize: 10,
              fontWeight: 600,
              background: i === 1 ? "rgba(255,176,102,0.12)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${i === 1 ? "rgba(255,176,102,0.3)" : "rgba(255,255,255,0.06)"}`,
              color: i === 1 ? "#FFB066" : "rgba(255,255,255,0.4)",
            }}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals: Record<string, React.ReactNode> = {
  invest: <InvestVisual />,
  track: <TrackVisual />,
  ask: <AskVisual />,
  plan: <PlanVisual />,
};

export default function FeaturesBento() {
  return (
    <section
      id="features"
      style={{ background: "#0D0F10", padding: "80px 20px 80px" }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Section heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
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
            Everything you need
          </p>
          <h2
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(30px, 4vw, 52px)",
              fontWeight: 600,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Finance, finally{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #75FB90, #4ae367)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              simple
            </span>
          </h2>
          <p
            style={{
              marginTop: 14,
              fontSize: 16,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 480,
              margin: "14px auto 0",
              lineHeight: 1.6,
            }}
          >
            Four powerful tools, one clean interface. Built for the way real
            people think about money in India.
          </p>
        </div>

        {/* Bento grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "auto auto",
            gap: 16,
          }}
        >
          {/* Invest — large left */}
          <div
            style={{
              gridColumn: "span 7",
              gridRow: "1",
            }}
            className="bento-card"
          >
            <BentoCard feature={features[0]} />
          </div>
          {/* Track — small right */}
          <div
            style={{
              gridColumn: "span 5",
              gridRow: "1",
            }}
            className="bento-card"
          >
            <BentoCard feature={features[1]} />
          </div>
          {/* Ask AI — small left */}
          <div
            style={{
              gridColumn: "span 5",
              gridRow: "2",
            }}
            className="bento-card"
          >
            <BentoCard feature={features[2]} />
          </div>
          {/* Plan — large right */}
          <div
            style={{
              gridColumn: "span 7",
              gridRow: "2",
            }}
            className="bento-card"
          >
            <BentoCard feature={features[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ feature }: { feature: (typeof features)[0] }) {
  return (
    <div
      style={{
        height: "100%",
        minHeight: 320,
        borderRadius: 24,
        background: "rgba(18,21,26,0.8)",
        border: "1px solid rgba(255,255,255,0.07)",
        padding: 28,
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-3px)";
        el.style.borderColor = `${feature.accent}30`;
        el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px ${feature.accent}18 inset`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "rgba(255,255,255,0.07)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Accent glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${feature.accent}12 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Tag */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 12px 4px 8px",
          borderRadius: 999,
          background: `${feature.accent}12`,
          border: `1px solid ${feature.accent}25`,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: feature.accent,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: feature.accent,
            letterSpacing: "0.06em",
          }}
        >
          {feature.tag}
        </span>
      </div>

      <h3
        style={{
          fontSize: "clamp(16px, 1.6vw, 21px)",
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.25,
          letterSpacing: "-0.025em",
          margin: 0,
        }}
      >
        {feature.headline}
      </h3>
      <p
        style={{
          marginTop: 8,
          fontSize: 13.5,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.6,
        }}
      >
        {feature.body}
      </p>

      {visuals[feature.visual]}
    </div>
  );
}
