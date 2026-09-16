import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/* eslint-disable @next/next/no-page-custom-font */

const description =
  "Oluwadamilare Oduyomi (ExcelDsigN-tech) — Soroban / Stellar blockchain developer building escrow, payments, and reputation systems on the Stellar network. 16+ merged PRs into the Stellar ecosystem, flagship TrustLink protocol.";

export const metadata: Metadata = {
  title: "Oluwadamilare Oduyomi — Soroban / Stellar Blockchain Developer",
  description,
  keywords: [
    "Soroban",
    "Stellar",
    "Rust smart contracts",
    "blockchain developer",
    "escrow protocol",
    "TrustLink",
    "Solana",
    "Web3",
    "TypeScript",
    "Next.js",
    "remittances",
  ],
  authors: [{ name: "Oluwadamilare Oduyomi" }],
  creator: "ExcelDsigN-tech",
  openGraph: {
    title: "Oluwadamilare Oduyomi — Soroban / Stellar Blockchain Developer",
    description,
    type: "website",
    locale: "en_US",
    url: "https://github.com/ExcelDsigN-tech",
    siteName: "ExcelDsigN-tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oluwadamilare Oduyomi — Soroban / Stellar Blockchain Developer",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router: <head> in layout is global */}
{/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router: <head> in layout is global */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-base-950 font-sans text-slate-200 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}