export interface Project {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  repo: string;
  stars?: string;
  featured?: boolean;
  topics?: string[];
  image?: string;
}

export interface Contribution {
  repo: string;
  type: string;
  detail: string;
}

export const profile = {
  name: "Oluwadamilare Oduyomi",
  handle: "ExcelDsigN-tech",
  title: "Soroban / Stellar Blockchain Developer",
  tagline:
    "I build programmable trust — escrow, payments, and reputation systems on the Stellar network, engineered for the markets that need them most.",
  email: "oluwadamilareoduyomi@gmail.com",
  github: "https://github.com/ExcelDsigN-tech",
  linkedin: "https://www.linkedin.com/in/oluwadamilareoduyomi/",
  location: "Africa / Remote",
  mission:
    "Most cross-border and local economies run on trust gaps — pay first, hope later. I build the on-chain rails that replace that gap: milestone escrow, auditable agent-banking, remittances, and savings circles. My work targets the real world first: African remittances, escrow for agriculture, and low-cost payments.",
  stats: [
    { value: "16+", label: "Merged PRs into Stellar ecosystem" },
    { value: "67", label: "Public repositories" },
    { value: "4", label: "Layers: contracts, indexer, web, SDK" },
    { value: "100%", label: "Open source, MIT licensed" },
  ],
  focusAreas: [
    {
      title: "Smart Contracts",
      detail:
        "Soroban contracts in Rust — escrow vaults, milestone-based payments, dispute resolution, and on-chain reputation.",
      stack: ["Rust", "Soroban SDK v22"],
    },
    {
      title: "Backend Infrastructure",
      detail:
        "Real-time Rust indexers bridging on-chain events to off-chain data with REST + WebSocket APIs and PostgreSQL.",
      stack: ["Axum", "Tokio", "SQLx", "PostgreSQL"],
    },
    {
      title: "Frontend Engineering",
      detail:
        "Next.js dashboards and dApps with deep wallet integration — Freighter, transaction builders, live on-chain state.",
      stack: ["Next.js 14", "React", "TypeScript", "Tailwind"],
    },
    {
      title: "Protocol & DeFi Design",
      detail:
        "Lending, remittance, agent-banking, prediction markets, and savings circles — designed for low-cost, high-trust rails.",
      stack: ["Stellar", "USDC", "Web3"],
    },
  ],
  toolbelt: [
    "Rust",
    "Soroban",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "Axum",
    "Tokio",
    "SQLx",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "Vercel",
    "GitHub Actions",
    "Jest",
    "Vitest",
    "Playwright",
    "Figma",
  ],
};

export const flagship = {
  name: "TrustLink",
  tagline: "Decentralized B2B Escrow on Stellar Soroban",
  mission:
    "TrustLink is a decentralized escrow and reputation protocol that secures cross-border B2B service agreements. It replaces the \u201cpay first\u201d trust gap with a neutral on-chain vault that only releases funds when milestones are approved.",
  repo: "https://github.com/ExcelDsigN-tech/TRUSTLINK",
  architecture: [
    {
      layer: "Contracts",
      role: "Soroban smart contract",
      detail:
        "Milestone escrow, funding, release, refund, dispute lifecycle, and on-chain reputation — covered by 16 integration tests.",
      stack: ["Rust", "Soroban SDK v22"],
    },
    {
      layer: "Indexer",
      role: "Rust / Axum backend",
      detail:
        "Polls Soroban RPC for events and exposes REST + WebSocket APIs feeding live dashboards. PostgreSQL via SQLx.",
      stack: ["Axum", "Tokio", "SQLx", "PostgreSQL"],
    },
    {
      layer: "Dashboard",
      role: "Next.js App Router",
      detail:
        "Wallet connection (Freighter), escrow list/detail views, and a reputation explorer — all real-time.",
      stack: ["Next.js 14", "Tailwind", "TypeScript"],
    },
    {
      layer: "SDK",
      role: "TypeScript SDK",
      detail:
        "Full Soroban transaction builders for create/fund/approve/dispute flows, browser signing via Freighter.",
      stack: ["TypeScript", "Stellar SDK v12"],
    },
  ],
  flow: [
    "Client creates escrow with milestone weights + descriptions",
    "Client funds the escrow (e.g. USDC via Stellar)",
    "Freelancer delivers; client approves each milestone",
    "Funds release from the vault per approved milestone",
    "Dispute? Evidence submitted as SHA-256 hashes, mediator rules on-chain",
    "Completion mints verifiable on-chain reputation for both parties",
  ],
};

export const featuredProjects: Project[] = [
  {
    name: "dukapay",
    tagline: "Agent-Banking for Stellar",
    description:
      "The open, auditable agent-banking layer for Stellar — turning local shops into stablecoin cash-in/cash-out points with solvency enforced on-chain.",
    stack: ["TypeScript", "Soroban", "Stellar", "Stablecoin"],
    repo: "https://github.com/ExcelDsigN-tech/dukapay",
    topics: ["agent-banking", "fintech", "stablecoin", "stellar", "soroban"],
    image: "/projects/dukapay.png",
    featured: true,
  },
  {
    name: "Amana",
    tagline: "Agricultural Trade Escrow",
    description:
      "Decentralized escrow protocol securing inter-regional agricultural trade — Soroban smart contracts act as a neutral third party between farmers and buyers.",
    stack: ["TypeScript", "Soroban", "Stellar"],
    repo: "https://github.com/ExcelDsigN-tech/Amana",
    topics: ["escrow", "agriculture", "stellar", "soroban"],
    image: "/projects/amana.png",
    featured: true,
  },
  {
    name: "TrustLink",
    tagline: "B2B Escrow & Reputation",
    description:
      "Decentralized escrow + reputation protocol for cross-border service agreements. Full monorepo: Soroban contracts, Rust indexer, Next.js dashboard, TypeScript SDK.",
    stack: ["Rust", "Soroban", "Axum", "Next.js", "PostgreSQL"],
    repo: "https://github.com/ExcelDsigN-tech/TRUSTLINK",
    topics: ["blockchain", "escrow", "smart-contracts", "soroban", "stellar"],
  },
  {
    name: "SwiftRemit",
    tagline: "Escrow-Based USDC Remittances",
    description:
      "Senders deposit stablecoins, agents confirm off-chain payouts, and platform fees are deducted automatically — secure and fully transparent.",
    stack: ["Stellar", "USDC", "Soroban"],
    repo: "https://github.com/ExcelDsigN-tech/SwiftRemit",
  },
  {
    name: "zaps",
    tagline: "Tap-to-Pay Mobile Payments",
    description:
      "Stellar-native payment app — pay directly with crypto via NFC tap-to-pay or QR scan-to-pay; merchants get instant USD settlement.",
    stack: ["Rust", "Stellar", "Mobile", "NFC"],
    repo: "https://github.com/ExcelDsigN-tech/zaps",
  },
  {
    name: "Agrocylo-Global",
    tagline: "Farm-to-Consumer Escrow",
    description:
      "Peer-to-peer trade between farmers and consumers using escrow contracts — removes intermediaries and builds trust through transparent, verifiable transactions.",
    stack: ["TypeScript", "Soroban", "Stellar"],
    repo: "https://github.com/ExcelDsigN-tech/Agrocylo-Global",
  },
  {
    name: "Stellar-GreenPay",
    tagline: "Green Payments",
    description:
      "Stellar-based green payments initiative — donor history, transparent allocation, and sustainability-focused rails on-chain.",
    stack: ["TypeScript", "Stellar", "Soroban"],
    repo: "https://github.com/ExcelDsigN-tech/Stellar-GreenPay",
  },
];

export const moreProjects: Project[] = [
  {
    name: "SplitNaira",
    tagline: "Savings & Splits",
    description: "Savings-circle / split-payment rails for low-cost local markets.",
    stack: ["Soroban", "Stellar"],
    repo: "https://github.com/ExcelDsigN-tech/SplitNaira",
  },
  {
    name: "soroban-sql-sync",
    tagline: "On-chain to SQL",
    description: "Sync Soroban contract state and events into PostgreSQL for queryable analytics.",
    stack: ["Rust", "SQLx", "PostgreSQL"],
    repo: "https://github.com/ExcelDsigN-tech/soroban-sql-sync",
  },
  {
    name: "soroban-debugger",
    tagline: "Contract Tooling",
    description: "Developer tooling to inspect, simulate, and debug Soroban contract calls.",
    stack: ["Rust", "Soroban"],
    repo: "https://github.com/ExcelDsigN-tech/soroban-debugger",
  },
  {
    name: "stellar-suite",
    tagline: "Ecosystem Tooling",
    description: "A suite of utilities and helpers for building on the Stellar ecosystem faster.",
    stack: ["TypeScript", "Stellar"],
    repo: "https://github.com/ExcelDsigN-tech/stellar-suite",
  },
  {
    name: "Lumenpulse",
    tagline: "Prediction Markets",
    description: "Prediction-market protocol experiments on Stellar rails.",
    stack: ["Soroban", "TypeScript"],
    repo: "https://github.com/ExcelDsigN-tech/Lumenpulse",
  },
  {
    name: "NovaSupport",
    tagline: "On-chain Support",
    description: "Community support & launchpad safety rails with emergency-withdrawal safeguards.",
    stack: ["Soroban", "Stellar"],
    repo: "https://github.com/ExcelDsigN-tech/NovaSupport",
  },
];

export const contributions: Contribution[] = [
  {
    repo: "Stellar ecosystem",
    type: "feature",
    detail:
      "Admin rotation for lending contracts — enabling safe key rotation on Soroban lending protocols.",
  },
  {
    repo: "Stellar ecosystem",
    type: "feature",
    detail:
      "Donor history for green-payments — transparent on-chain allocation and provenance.",
  },
  {
    repo: "Stellar ecosystem",
    type: "fix",
    detail:
      "Emergency-withdrawal fixes for community launchpads — closing a critical user-funds safety gap.",
  },
  {
    repo: "Stellar ecosystem",
    type: "security",
    detail:
      "Security-hardening across projects: dependency scanning, CSP, secrets rotation, and CI hardening.",
  },
];