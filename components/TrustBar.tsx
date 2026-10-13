"use client";

const stats = [
  { val: "100%", label: "Free forever" },
  { val: "No login", label: "Required for calculators" },
  { val: "Built for India", label: "INR · Indian tax laws" },
  { val: "Privacy first", label: "Your data stays yours" },
  { val: "No hidden fees", label: "Zero dark patterns" },
  { val: "Open methodology", label: "See every calculation" },
];

export default function TrustBar() {
  return (
    <section
      style={{
        background: "#0D0F10",
        padding: "0 0 4px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Divider line */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 0 }} />

      <div
        style={{
          padding: "24px 0",
          display: "flex",
          alignItems: "center",
          gap: 0,
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        {/* Scrolling track */}
        <div
          className="trust-scroll-track"
          style={{
            display: "flex",
            gap: 0,
            animation: "trust-scroll 28s linear infinite",
            willChange: "transform",
            flexShrink: 0,
          }}
        >
          {[...stats, ...stats, ...stats].map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 40,
                flexShrink: 0,
                paddingRight: 40,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#75FB90",
                    flexShrink: 0,
                    boxShadow: "0 0 8px rgba(117,251,144,0.6)",
                  }}
                />
                <span
                  style={{
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: "#ffffff",
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.val}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.38)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
    </section>
  );
}
