export interface Link {
  label: string;
  href: string;
}

export interface WorkItem {
  id: string;
  title: string;
  role: string;
  status?: string;
  description: string;
  fixes?: { text: string; prs: Link[] }[];
  skills: string[];
  links: Link[];
  image?: { src: string; alt: string; width: number; height: number; fit?: "contain" };
  diagram?: boolean;
}

export const profile = {
  name: "Oluwadamilare Oduyomi",
  shortName: "Damilare Oduyomi",
  handle: "ExcelDsigN-tech",
  title: "Soroban engineer",
  tagline:
    "148 merged PRs across 78 repos, security fixes in five teams' contracts, and founder of DukaPay.",
  email: "oluwadamilareoduyomi@gmail.com",
  github: "https://github.com/ExcelDsigN-tech",
  mergedPrs:
    "https://github.com/search?q=author%3AExcelDsigN-tech+is%3Apr+is%3Amerged+-user%3AExcelDsigN-tech&type=pullrequests",
  linkedin: "https://www.linkedin.com/in/oluwadamilareoduyomi/",
  location: "Africa / Remote",
  mission:
    "Most cross-border and local economies run on trust gaps — pay first, hope later. I work on the on-chain rails that close that gap: agent banking, escrow, lending and remittances on Stellar, aimed at the markets that need them most.",
  stats: [
    { value: "148", label: "Merged PRs into other teams' repos" },
    { value: "78", label: "Repos contributed to" },
    { value: "5", label: "Teams' contracts with merged security fixes" },
    { value: "1,600", label: "Commits on DukaPay, from ~250 contributors" },
  ],
  focusAreas: [
    {
      title: "Smart contracts",
      detail:
        "Soroban contracts in Rust: solvency invariants, checks-effects-interactions, access control and key rotation, tested with proptest and fuzzing.",
      stack: ["Rust", "Soroban", "proptest"],
    },
    {
      title: "Backend",
      detail:
        "Express and PostgreSQL APIs with wallet sign-in, webhooks and live updates, plus a Rust event indexer feeding Postgres.",
      stack: ["Node.js", "PostgreSQL", "Tokio"],
    },
    {
      title: "Frontend",
      detail:
        "Next.js dashboards with Freighter and Albedo wallet adapters, transaction builders and live on-chain state.",
      stack: ["Next.js", "TypeScript", "React"],
    },
    {
      title: "UI/UX design",
      detail:
        "Product screens and design systems in Figma: the full Amana escrow app and DukaPay's brand and component kit.",
      stack: ["Figma", "Design systems"],
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
    "PostgreSQL",
    "Redis",
    "Tokio",
    "SQLx",
    "Docker",
    "AWS",
    "GitHub Actions",
    "Jest",
    "Vitest",
    "Playwright",
    "proptest",
    "Figma",
  ],
};

const pr = (repo: string, n: number): Link => ({
  label: `#${n}`,
  href: `https://github.com/${repo}/pull/${n}`,
});

export const work: WorkItem[] = [
  {
    id: "security",
    title: "Soroban security fixes across the Stellar ecosystem",
    role: "Open-source contributor",
    description:
      "Merged fixes in other teams' Soroban contracts — each one reviewed and accepted by that project's maintainers.",
    fixes: [
      {
        text: "RemitLend — a checks-effects-interactions violation in deposit_collateral",
        prs: [pr("LabsCrypt/remitlend", 1790)],
      },
      {
        text: "Astera — multiple invoice-contract issues, including a CEI violation and a days_late ceiling bug",
        prs: [pr("astera-hq/Astera", 480)],
      },
      {
        text: "InverseArena — reentrancy guards, and an IDOR / nonce fix in payouts",
        prs: [
          pr("INVERSEARENA/inversearena-frontend", 938),
          pr("INVERSEARENA/inversearena-frontend", 1259),
        ],
      },
      {
        text: "ACBU — storage-security and reserve-minting fixes",
        prs: [
          pr("Pi-Defi-world/acbu-smart-contract", 574),
          pr("Pi-Defi-world/acbu-smart-contract", 683),
        ],
      },
      {
        text: "Navin — admin key rotation and pause guards",
        prs: [
          pr("Navin-xmr/navin-contracts", 730),
          pr("Navin-xmr/navin-contracts", 953),
        ],
      },
    ],
    skills: ["Rust", "Soroban", "Smart contract security"],
    links: [{ label: "All my merged PRs", href: profile.mergedPrs }],
    image: {
      src: "/projects/security/merged-prs.png",
      alt: "Six merged pull requests on GitHub: RemitLend #1790, Astera #480, InverseArena #1259 and #938, ACBU #574, Navin #730",
      width: 1248,
      height: 557,
      fit: "contain",
    },
  },
  {
    id: "dukapay-contracts",
    title: "DukaPay — Soroban contracts for agent-banking float and settlement",
    role: "Founder, lead maintainer · protocol design and code review",
    status: "Testnet, not audited",
    description:
      "Agents lock USDC as collateral, and the vault caps their e-money at collateral × haircut, so the contract enforces solvency instead of relying on trust. The vault nets batched transfers atomically — deltas must sum to zero and every agent stays solvent. Lending, oracle, circuit-breaker and multisig-governance contracts sit alongside, with 428 contract tests passing, plus proptest and a fuzzing harness. Most contract code comes from contributors; I own the design and review.",
    skills: ["Rust", "Soroban", "proptest", "Fuzzing"],
    links: [
      { label: "Repository", href: "https://github.com/ExcelDsigN-tech/dukapay" },
      { label: "Architecture", href: "https://github.com/ExcelDsigN-tech/dukapay/blob/main/ARCHITECTURE.md" },
    ],
    diagram: true,
  },
  {
    id: "dukapay-app",
    title: "DukaPay — Next.js dashboard, Express API and TypeScript SDK",
    role: "Founder, lead maintainer",
    status: "Testnet, not audited",
    description:
      "A Next.js 16 app with an agent dashboard, admin console, loan, lending and remittance screens, on an Express / PostgreSQL API with SEP-53 wallet sign-in, CSRF protection, SSRF-guarded webhooks, OpenAPI docs and live updates over server-sent events. @dukapay/sdk ships Freighter and Albedo adapters and React hooks. Playwright tests cover borrowing, repayment, lender withdrawals and remittances.",
    skills: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "Wallet integration"],
    links: [
      { label: "Repository", href: "https://github.com/ExcelDsigN-tech/dukapay" },
    ],
  },
  {
    id: "amana-design",
    title: "Amana — UI/UX design for agricultural trade escrow on Stellar",
    role: "UI/UX designer",
    description:
      "I designed the UI/UX for Amana, an open-source escrow protocol for inter-regional agricultural trade on Stellar: 17 desktop screens and 6 mobile screens covering vault, trade creation, deposit, withdrawal and reputation flows, plus a style guide — checked against the shipped product.",
    skills: ["Figma", "UI design", "Design systems"],
    links: [
      { label: "Amana repository", href: "https://github.com/KingFRANKHOOD/Amana" },
    ],
    image: {
      src: "/projects/amana/dashboard.png",
      alt: "Amana vault dashboard design: escrow release sequence, vault value, contract manifest and audit log",
      width: 1360,
      height: 1600,
    },
  },
];

export const otherWork: Link & { description: string } = {
  label: "soroban-sql-sync",
  href: "https://github.com/ExcelDsigN-tech/soroban-sql-sync",
  description: "A Soroban event indexer in Rust that bridges on-chain Stellar data into PostgreSQL with Tokio and SQLx.",
};
