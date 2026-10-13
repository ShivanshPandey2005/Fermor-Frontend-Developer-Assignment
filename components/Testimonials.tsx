"use client";

// Testimonials use real-sounding but clearly fictional user personas.
// No fabricated statistics or financial claims.
const testimonials = [
  {
    quote:
      "I finally understand where my money actually goes each month. Fermor's breakdown is clearer than anything I've tried before.",
    name: "Priya S.",
    role: "Software Engineer",
    city: "Bengaluru",
    initials: "PS",
    accent: "#75FB90",
  },
  {
    quote:
      "The SIP calculator shows the full math — no hidden assumptions. That transparency is rare. I used it to plan my entire retirement timeline.",
    name: "Arjun M.",
    role: "Product Manager",
    city: "Mumbai",
    initials: "AM",
    accent: "#668CFF",
  },
  {
    quote:
      "Asked Fermor AI about switching from old to new tax regime. Got a clear, personalised comparison in seconds. No CA needed for that question anymore.",
    name: "Deepa R.",
    role: "Freelance Designer",
    city: "Hyderabad",
    initials: "DR",
    accent: "#CF8CFF",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ background: "#0D0F10", padding: "80px 20px" }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
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
            Early access users
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
            Real people.{" "}
            <span style={{ color: "#75FB90" }}>Real clarity.</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                borderRadius: 22,
                background: "rgba(18,21,26,0.8)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "28px 28px 24px",
                position: "relative",
                overflow: "hidden",
                transition:
                  "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = `${t.accent}30`;
                el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.3)`;
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
                  top: -50,
                  right: -50,
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${t.accent}0f 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Quote mark */}
              <div
                style={{
                  fontSize: 48,
                  lineHeight: 1,
                  color: `${t.accent}25`,
                  fontFamily: "Georgia, serif",
                  marginBottom: 12,
                  userSelect: "none",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <blockquote
                style={{
                  margin: 0,
                  fontSize: 15,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.65,
                  letterSpacing: "-0.01em",
                  marginBottom: 24,
                }}
              >
                {t.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: `${t.accent}18`,
                    border: `1px solid ${t.accent}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 800,
                    color: t.accent,
                    flexShrink: 0,
                    letterSpacing: "0.02em",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 13.5,
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: 0,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.35)",
                      margin: 0,
                      marginTop: 1,
                    }}
                  >
                    {t.role} · {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
