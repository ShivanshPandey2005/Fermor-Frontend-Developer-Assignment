"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const products = [
  { name: "Market", desc: "Live prices & trends" },
  { name: "Portfolio", desc: "Track your investments" },
  { name: "ACT", desc: "Take financial action" },
  { name: "Ask Fermor", desc: "AI-powered money advice" },
];

const resources = [
  { name: "Blogs", href: "#" },
  { name: "Calculators", href: "#calculator" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setProductsOpen(false);
      setResourcesOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[120] flex justify-center transition-all duration-500"
      style={{
        padding: "10px 20px 0",
        transform: hidden ? "translateY(-110%)" : "translateY(0)",
        opacity: hidden ? 0 : 1,
      }}
    >
      <nav
        className="w-full flex items-center gap-3 relative"
        style={{
          maxWidth: "1120px",
          padding: "8px 10px 8px 18px",
          borderRadius: "999px",
          background: scrolled
            ? "rgba(13,15,16,0.82)"
            : "rgba(255,255,255,0.06)",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          border: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(255,255,255,0.12)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.4)"
            : "0 4px 24px rgba(0,0,0,0.2)",
          transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 flex-shrink-0"
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "8px",
              background: "linear-gradient(135deg, #75FB90 0%, #4ae367 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 14,
              color: "#0D0F10",
              letterSpacing: "-0.04em",
              flexShrink: 0,
            }}
          >
            F
          </div>
          <span
            style={{
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "#ffffff",
            }}
          >
            Fermor
          </span>
        </Link>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {/* Products dropdown */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setProductsOpen((v) => !v);
                setResourcesOpen(false);
              }}
              className="flex items-center gap-1.5 text-sm font-medium px-4 py-2.5 rounded-full transition-all"
              style={{
                color: "rgba(255,255,255,0.78)",
                background: productsOpen ? "rgba(255,255,255,0.08)" : "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Products
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                style={{
                  transition: "transform 0.22s ease",
                  transform: productsOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path
                  d="M2 4L5 7L8 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {productsOpen && (
              <div
                className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2"
                style={{
                  minWidth: 220,
                  padding: 8,
                  borderRadius: 16,
                  background: "rgba(18,20,24,0.96)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {products.map((p) => (
                  <a
                    key={p.name}
                    href="#"
                    className="flex flex-col px-3 py-2.5 rounded-xl transition-all"
                    style={{ textDecoration: "none", color: "#fff" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.background =
                        "rgba(117,251,144,0.1)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.background = "transparent")
                    }
                  >
                    <span style={{ fontSize: 13.5, fontWeight: 600 }}>{p.name}</span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                      {p.desc}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#"
            className="text-sm font-medium px-4 py-2.5 rounded-full transition-all"
            style={{
              color: "rgba(255,255,255,0.78)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#fff";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.78)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            For Kids
          </a>

          {/* Resources dropdown */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setResourcesOpen((v) => !v);
                setProductsOpen(false);
              }}
              className="flex items-center gap-1.5 text-sm font-medium px-4 py-2.5 rounded-full"
              style={{
                color: "rgba(255,255,255,0.78)",
                background: resourcesOpen ? "rgba(255,255,255,0.08)" : "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Resources
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                style={{
                  transition: "transform 0.22s ease",
                  transform: resourcesOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path
                  d="M2 4L5 7L8 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {resourcesOpen && (
              <div
                className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2"
                style={{
                  minWidth: 160,
                  padding: 8,
                  borderRadius: 16,
                  background: "rgba(18,20,24,0.96)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {resources.map((r) => (
                  <a
                    key={r.name}
                    href={r.href}
                    className="block px-3 py-2.5 rounded-xl text-sm font-semibold transition-all"
                    style={{ textDecoration: "none", color: "#fff" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.background =
                        "rgba(117,251,144,0.1)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.background = "transparent")
                    }
                  >
                    {r.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <a
            href="#"
            className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
            style={{
              color: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(255,255,255,0.12)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            Login
          </a>
          <a
            href="#waitlist"
            className="text-sm font-bold px-5 py-2.5 rounded-full transition-all"
            style={{
              background: "#75FB90",
              color: "#0D0F10",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 24px rgba(117,251,144,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Get Started
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden ml-auto flex-shrink-0 flex items-center justify-center"
          style={{
            width: 42,
            height: 42,
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "transparent",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div
          className="absolute top-[calc(100%+6px)] left-5 right-5 md:hidden"
          style={{
            padding: 12,
            borderRadius: 20,
            background: "rgba(13,15,16,0.96)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
          }}
        >
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", padding: "10px 14px 4px", textTransform: "uppercase" }}>Products</p>
          {products.map((p) => (
            <a key={p.name} href="#" className="block px-4 py-3 rounded-xl text-sm font-semibold" style={{ color: "#fff", textDecoration: "none" }}>
              {p.name}
            </a>
          ))}
          <a href="#" className="block px-4 py-3 rounded-xl text-sm font-semibold" style={{ color: "#fff", textDecoration: "none" }}>For Kids</a>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", padding: "10px 14px 4px", textTransform: "uppercase" }}>Resources</p>
          {resources.map((r) => (
            <a key={r.name} href={r.href} className="block px-4 py-3 rounded-xl text-sm font-semibold" style={{ color: "#fff", textDecoration: "none" }}>
              {r.name}
            </a>
          ))}
          <div className="flex gap-2 mt-3 px-2 pb-2">
            <a href="#" className="flex-1 text-center text-sm font-semibold py-3 rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#fff", textDecoration: "none" }}>Login</a>
            <a href="#waitlist" className="flex-1 text-center text-sm font-bold py-3 rounded-xl" style={{ background: "#75FB90", color: "#0D0F10", textDecoration: "none" }} onClick={() => setMobileOpen(false)}>Get Started</a>
          </div>
        </div>
      )}
    </div>
  );
}
