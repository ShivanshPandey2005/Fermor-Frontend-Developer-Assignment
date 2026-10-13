"use client";

const nav = [
  {
    heading: "Products",
    links: [
      { label: "Market", href: "#" },
      { label: "Portfolio", href: "#" },
      { label: "ACT", href: "#" },
      { label: "Ask Fermor", href: "#" },
      { label: "For Kids", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blogs", href: "#" },
      { label: "Calculators", href: "#calculator" },
      { label: "SIP Calculator", href: "#calculator" },
      { label: "EMI Calculator", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080A0B",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "60px 20px 32px",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr repeat(3, auto)",
            gap: "40px 60px",
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: "linear-gradient(135deg, #75FB90 0%, #4ae367 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 15,
                  color: "#0D0F10",
                }}
              >
                F
              </div>
              <span
                style={{
                  fontSize: 19,
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.025em",
                }}
              >
                Fermor
              </span>
            </div>
            <p
              style={{
                fontSize: 13.5,
                color: "rgba(255,255,255,0.38)",
                lineHeight: 1.65,
                maxWidth: 280,
                margin: 0,
              }}
            >
              Building a better way for people to understand, act and grow
              financially. Made for India.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://twitter.com/fermor_in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fermor on X (Twitter)"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.5)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#fff";
                  el.style.borderColor = "rgba(255,255,255,0.2)";
                  el.style.background = "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "rgba(255,255,255,0.5)";
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {nav.map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.35)",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {col.links.map((link) => (
                  <li key={link.label} style={{ marginBottom: 10 }}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: 13.5,
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "rgba(255,255,255,0.5)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", margin: 0 }}>
            © 2025 Fermor. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", margin: 0 }}>
            Calculators are for illustrative purposes only and do not constitute financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
