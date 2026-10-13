import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fermor — Smart financial decisions for India",
  description:
    "Invest, track and plan in one place. Free tools, AI-powered insights, and clear calculators built for India. No hidden fees, no dark patterns.",
  keywords: [
    "personal finance India",
    "SIP calculator",
    "investment tracker",
    "financial planning",
    "mutual funds",
    "tax calculator India",
    "Fermor",
  ],
  authors: [{ name: "Fermor" }],
  openGraph: {
    title: "Fermor — Smart financial decisions for India",
    description:
      "Invest, track and plan in one place. Free tools, AI-powered insights, and clear calculators built for India.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fermor_in",
    title: "Fermor — Smart financial decisions for India",
    description:
      "Invest, track and plan in one place. Free tools and AI insights built for India.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${poppins.variable}`}>
      <body
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          background: "#0D0F10",
          color: "#ffffff",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
