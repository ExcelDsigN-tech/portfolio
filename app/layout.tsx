import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Damilare Oduyomi (ExcelDsigN-tech) — Soroban engineer. 148 merged PRs across 78 repos, security fixes in five teams' Soroban contracts, and founder of DukaPay, an agent-banking protocol on Stellar.";

export const metadata: Metadata = {
  title: "Damilare Oduyomi — Soroban Engineer",
  description,
  keywords: [
    "Soroban",
    "Stellar",
    "Rust smart contracts",
    "blockchain developer",
    "smart contract security",
    "DukaPay",
    "Web3",
    "TypeScript",
    "Next.js",
    "remittances",
  ],
  authors: [{ name: "Oluwadamilare Oduyomi" }],
  creator: "ExcelDsigN-tech",
  openGraph: {
    title: "Damilare Oduyomi — Soroban Engineer",
    description,
    type: "website",
    locale: "en_US",
    url: "https://github.com/ExcelDsigN-tech",
    siteName: "ExcelDsigN-tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damilare Oduyomi — Soroban Engineer",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-base-950 font-sans text-slate-200 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}