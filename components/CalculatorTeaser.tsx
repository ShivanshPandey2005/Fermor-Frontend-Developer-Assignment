"use client";

import { useState, useCallback } from "react";

function formatINR(n: number): string {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${n.toFixed(0)}`;
}

function calcSIP(monthly: number, years: number, ratePercent: number): number {
  const r = ratePercent / 100 / 12;
  const n = years * 12;
  if (r === 0) return monthly * n;
  return monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
}

const PRESETS = [
  { label: "₹5K", val: 5000 },
  { label: "₹10K", val: 10000 },
  { label: "₹25K", val: 25000 },
  { label: "₹50K", val: 50000 },
];

export default function CalculatorTeaser() {
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const corpus = calcSIP(monthly, years, rate);
  const invested = monthly * years * 12;
  const gains = corpus - invested;
  const gainPct = ((gains / invested) * 100).toFixed(1);

  const handleMonthlyInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = parseInt(e.target.value.replace(/[^0-9]/g, ""), 10);
      if (!isNaN(v)) setMonthly(Math.min(Math.max(v, 500), 500000));
    },
    []
  );

  // Chart data — simplified bar representation
  const barYears = Array.from({ length: years }, (_, i) => i + 1);
  const maxCorpus = calcSIP(monthly, years, rate);

  return (
    <section
      id="calculator"
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
            Free tools
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
            See your money{" "}
            <span style={{ color: "#75FB90" }}>grow</span>
          </h2>
          <p
            style={{
              marginTop: 12,
              fontSize: 15,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 440,
              margin: "12px auto 0",
            }}
          >
            A live SIP calculator — no sign-up needed. Your numbers never leave
            your browser.
          </p>
        </div>

        {/* Calculator card */}
        <div
          style={{
            borderRadius: 28,
            background: "rgba(18,21,26,0.85)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
          className="calc-grid"
        >
          {/* Left: Inputs */}
          <div style={{ padding: "40px 36px", borderRight: "1px solid rgba(255,255,255,0.06)" }} className="calc-inputs">
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.02em",
                marginBottom: 28,
              }}
            >
              SIP Calculator
            </h3>

            {/* Monthly amount */}
            <div style={{ marginBottom: 28 }}>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="sip-monthly"
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "0.04em",
                  }}
                >
                  MONTHLY INVESTMENT
                </label>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#75FB90",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {formatINR(monthly)}
                </span>
              </div>
              {/* Presets */}
              <div className="flex gap-2 mb-3 flex-wrap">
                {PRESETS.map((p) => (
                  <button
                    key={p.val}
                    onClick={() => setMonthly(p.val)}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                      border: "1px solid",
                      transition: "all 0.15s",
                      background:
                        monthly === p.val
                          ? "rgba(117,251,144,0.12)"
                          : "rgba(255,255,255,0.04)",
                      borderColor:
                        monthly === p.val
                          ? "rgba(117,251,144,0.35)"
                          : "rgba(255,255,255,0.1)",
                      color: monthly === p.val ? "#75FB90" : "rgba(255,255,255,0.5)",
                      fontFamily: "inherit",
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <input
                id="sip-monthly"
                type="range"
                min={500}
                max={100000}
                step={500}
                value={monthly}
                onChange={(e) => setMonthly(Number(e.target.value))}
                className="sip-range"
                style={{ width: "100%" }}
              />
              <div className="flex justify-between mt-1">
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>₹500</span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>₹1L</span>
              </div>
            </div>

            {/* Duration */}
            <div style={{ marginBottom: 28 }}>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="sip-years"
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "0.04em",
                  }}
                >
                  TIME PERIOD
                </label>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#75FB90" }}>
                  {years} {years === 1 ? "year" : "years"}
                </span>
              </div>
              <input
                id="sip-years"
                type="range"
                min={1}
                max={30}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="sip-range"
                style={{ width: "100%" }}
              />
              <div className="flex justify-between mt-1">
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>1 yr</span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>30 yrs</span>
              </div>
            </div>

            {/* Rate */}
            <div style={{ marginBottom: 28 }}>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="sip-rate"
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "0.04em",
                  }}
                >
                  EXPECTED RETURN (P.A.)
                </label>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#75FB90" }}>
                  {rate}%
                </span>
              </div>
              <input
                id="sip-rate"
                type="range"
                min={4}
                max={20}
                step={0.5}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="sip-range"
                style={{ width: "100%" }}
              />
              <div className="flex justify-between mt-1">
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>4%</span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>20%</span>
              </div>
            </div>

            {/* Custom amount input */}
            <div>
              <label
                htmlFor="sip-custom"
                style={{
                  display: "block",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.04em",
                  marginBottom: 8,
                }}
              >
                OR ENTER AMOUNT
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 14px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>₹</span>
                <input
                  id="sip-custom"
                  type="text"
                  inputMode="numeric"
                  value={monthly.toLocaleString("en-IN")}
                  onChange={handleMonthlyInput}
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    fontFamily: "inherit",
                    flex: 1,
                    minWidth: 0,
                  }}
                />
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>/mo</span>
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div style={{ padding: "40px 36px", background: "rgba(0,0,0,0.15)" }} className="calc-results">
            {/* Main result */}
            <div style={{ marginBottom: 28 }}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 6,
                }}
              >
                ESTIMATED CORPUS
              </p>
              <div
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 800,
                  color: "#75FB90",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  transition: "all 0.3s ease",
                }}
              >
                {formatINR(corpus)}
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 6 }}>
                in {years} {years === 1 ? "year" : "years"} at {rate}% p.a.
              </p>
            </div>

            {/* Breakdown */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginBottom: 24,
              }}
            >
              {[
                { label: "Amount Invested", val: formatINR(invested), color: "rgba(255,255,255,0.7)" },
                { label: "Est. Returns", val: formatINR(gains), color: "#75FB90" },
                { label: "Gain %", val: `+${gainPct}%`, color: "#75FB90" },
                { label: "Monthly SIP", val: formatINR(monthly), color: "rgba(255,255,255,0.7)" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: "0.04em", marginBottom: 4 }}>{item.label}</p>
                  <p style={{ fontSize: 15, fontWeight: 700, color: item.color, letterSpacing: "-0.02em" }}>{item.val}</p>
                </div>
              ))}
            </div>

            {/* Growth chart bars */}
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", marginBottom: 10 }}>YEAR-BY-YEAR GROWTH</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 3,
                  height: 70,
                }}
              >
                {barYears.map((y) => {
                  const val = calcSIP(monthly, y, rate);
                  const frac = val / maxCorpus;
                  return (
                    <div
                      key={y}
                      title={`Year ${y}: ${formatINR(val)}`}
                      style={{
                        flex: 1,
                        height: `${Math.max(frac * 100, 4)}%`,
                        borderRadius: "3px 3px 1px 1px",
                        background:
                          y === years
                            ? "#75FB90"
                            : `rgba(117,251,144,${0.15 + frac * 0.35})`,
                        alignSelf: "flex-end",
                        transition: "height 0.4s cubic-bezier(0.34,1.2,0.64,1)",
                        boxShadow: y === years ? "0 0 10px rgba(117,251,144,0.35)" : "none",
                        cursor: "default",
                      }}
                    />
                  );
                })}
              </div>
              <div className="flex justify-between mt-1.5">
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.25)" }}>Yr 1</span>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.25)" }}>Yr {years}</span>
              </div>
            </div>

            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.22)", marginTop: 16, lineHeight: 1.5 }}>
              *Illustrative only. Actual returns vary. Past performance is not indicative of future results.
            </p>
          </div>
        </div>

        {/* More calculators link */}
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13.5,
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#75FB90")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
          >
            View all calculators — EMI, FD, Income Tax, Salary, PPF
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
