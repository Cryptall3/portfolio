// ============================================
// FEATURED DEVELOPER PROJECTS
// ============================================
export const featuredProjects = [
  {
    title: "Coresightbot",
    subtitle: "Multi-Chain DeFi Intelligence Platform",
    description:
      "Built a multi-chain data indexing engine in Java serving 8,000+ users across Solana, Arbitrum, Ethereum, and Base. Developed an alpha detection system that scans Solana to deliver top-running tokens with a 78% win rate - successfully calling tokens that yielded 300x, 400x, and 500x returns ($kabuto, $neo, $yaranaika). Created CORA, an autonomous trading agent that executes trades on alpha alerts using user-defined preset strategies. Secured a competitive development grant from Superteam.",
    image: "/CS 2-80.jpg",
    link: "https://t.me/coresight_bot",
    liveUrl: "https://t.me/coresight_bot",
    tags: [
      "Java",
      "Spring Boot",
      "Solana",
      "Ethereum",
      "Base",
      "Arbitrum",
      "WebSockets",
      "Docker",
    ],
    badges: ["Superteam Grantee", "8,000+ Users"],
    stats: [
      { value: "8K+", label: "Active Users" },
      { value: "78%", label: "Win Rate" },
      { value: "500x", label: "Best Call" },
      { value: "10+", label: "Chains" },
      { value: "$20K", label: "ARR" },
    ],
    category: "featured",
    accentColor: "cyan",
  },
  {
    title: "SC0PE",
    subtitle: "AI-Powered DeFi Trading Terminal",
    description:
      "Built and launched a DeFi trading terminal leveraging the 0G tech stack to simplify AI-powered trading on 0G, Ethereum, Base, and BSC. Scaled the platform to 3,200+ users within 3 months and became the #1 analytics tool in the 0G ecosystem. Features AI agents for smart whale detection, community health scoring, risk assessment, and real-time pattern recognition across chains.",
    image: "/sc0pe-cover.jpg",
    link: "https://sc0pe.xyz",
    liveUrl: "https://sc0pe.xyz",
    tags: [
      "Next.js",
      "TypeScript",
      "0G Chain",
      "Ethereum",
      "Base",
      "BSC",
      "AI Agents",
      "On-chain Analytics",
    ],
    badges: ["#1 in 0G Ecosystem", "3,200+ Users"],
    stats: [
      { value: "3.2K+", label: "Users" },
      { value: "3mo", label: "To Scale" },
      { value: "#1", label: "0G Ecosystem" },
      { value: "4", label: "Chains" },
    ],
    category: "featured",
    accentColor: "purple",
    note: "Platform sunsetted - project archived",
  },
  {
    title: "Predictefy",
    subtitle: "Prediction Market Data Aggregator",
    description:
      "Built a data normalization engine to standardize inconsistent schemas and status flags from 5+ prediction markets including Polymarket and Kalshi, enabling clean data aggregation for the frontend. Created a market filtering and Closed Market detection system that parses multiple date and status formats. Developed the market discovery UI using Next.js with custom state-driven sorting to resolve pagination bottlenecks and manage thousands of real-time market rows smoothly.",
    image: "/predictefy logo.png",
    link: "https://predictefy.com",
    liveUrl: "https://predictefy.com",
    tags: [
      "Next.js",
      "TypeScript",
      "Python",
      "Data Normalization",
      "ETL",
      "REST APIs",
      "PostgreSQL",
    ],
    badges: ["5+ Markets Integrated"],
    stats: [
      { value: "5+", label: "Markets Integrated" },
      { value: "1000s", label: "Real-time Rows" },
      { value: "ETL", label: "Pipeline Built" },
    ],
    category: "featured",
    accentColor: "amber",
  },
  {
    title: "Bayse Trading Bot",
    subtitle: "Telegram-Native Prediction Market Trading Bot",
    description:
      "Built a full-featured Telegram trading companion for Bayse Markets — watch sports prediction markets, get smart alerts with context-rich match intelligence, and execute trades without leaving Telegram. Features sports market browsing with pagination and multi-outcome navigation, order book depth and ticker stats, historical head-to-head records, team form analysis, player stats, injury reports, model predictions, smart alerts (pre-match, live, price, volume spikes), portfolio management with P&L tracking, multi-currency wallet (USD/NGN), and opportunity scoring.",
    image: "/bayse-agent.jpeg",
    link: "http://t.me/coresightpredbot",
    liveUrl: "http://t.me/coresightpredbot",
    tags: [
      "Node.js",
      "grammY",
      "MongoDB",
      "Telegram Bot",
      "Prediction Markets",
      "Sports Intelligence",
      "WebSockets",
    ],
    badges: ["Sports Intelligence", "Smart Alerts", "Telegram Native"],
    category: "featured",
    accentColor: "cyan",
  },
  {
    title: "Smart Transaction Stack",
    subtitle:
      "Autonomous Solana Transaction Infrastructure with AI Fault Recovery",
    description:
      "Built a modular autonomous transaction infrastructure stack for Solana that ingests live network telemetry via Yellowstone gRPC, constructs and submits Jito bundles with dynamic tips calculated from real-time tip markets, and tracks transaction lifecycles across commitment levels. Features a GPT-4o-mini AI operator that autonomously diagnoses failures and decides recovery strategies. Discovered during mainnet testing that Jito's block engine was silently dropping bundles due to rent-exemption simulation failures — invisible without the onBundleResult callback — and after resolving it, reliably landed bundles at 5M lamports. Produced 10 verified mainnet lifecycle entries with Solscan verification for a Jito bounty.",
    image: "/sts.svg",
    link: "https://app.notion.com/p/Smart-Transaction-Stack-Architecture-System-Design-Coresight-Autonomous-Agent-Integration-385b11c673fb80d48673dd6e8e1d86fd",
    liveUrl:
      "https://app.notion.com/p/Smart-Transaction-Stack-Architecture-System-Design-Coresight-Autonomous-Agent-Integration-385b11c673fb80d48673dd6e8e1d86fd",
    tags: [
      "Solana",
      "Jito",
      "TypeScript",
      "gRPC",
      "AI Agents",
      "WebSockets",
      "Blockchain Infrastructure",
    ],
    badges: ["AI-Powered Recovery", "Mainnet Verified", "Jito Bounty"],
    category: "featured",
    accentColor: "purple",
  },
];

// ============================================
// SQL ANALYTICS PROJECTS (Dune + Flipside)
// ============================================
export const sqlProjects = [
  {
    title: "Ethereum OS deep dive",
    description:
      "A dashboard tracking the gamified Eth OS airdrop campaign, analyzing code-farming, epoch progress, and AIR token accumulation mechanics.",
    image: "/ethos.jpg",
    link: "https://dune.com/cryptall/ethereum-os",
    client: "Eth OS",
    tags: ["DeFi Sandbox", "Airdrop Analysis", "Dune Analytics"],
    category: "sql",
  },
  {
    title: "THX Network Analysis",
    description:
      "Comprehensive analysis of THX Network's token distribution and user engagement metrics.",
    image: "/thx-network.jpg",
    link: "https://dune.com/cryptall/analysis-on-thx-network",
    client: "THX Network",
    tags: ["Token Distribution", "User Engagement", "Dune Analytics"],
    category: "sql",
  },
  {
    title: "OLAS Token Distribution",
    description:
      "Detailed analysis of OLAS token distribution patterns and holder demographics.",
    image: "/olas.jpg",
    link: "https://dune.com/cryptall/olas-token-distribution",
    client: "OLAS Network",
    tags: ["Token Distribution", "Holder Analysis", "Dune Analytics"],
    category: "sql",
  },
  {
    title: "GU Trade Analysis",
    description:
      "Trading patterns and market analysis for GU Factory's digital assets.",
    image: "/gu-trade.jpg",
    link: "https://dune.com/cryptall/gu-trade",
    client: "GU Factory",
    tags: ["Trading Analysis", "Market Metrics", "Dune Analytics"],
    category: "sql",
  },
  {
    title: "Agents.fun Analytics",
    description:
      "User engagement and platform metrics for the Agents.fun platform.",
    image: "/agentsdotfun.jpg",
    link: "https://dune.com/cryptall/agentsdotfun",
    client: "Agents.fun",
    tags: ["User Engagement", "Platform Metrics", "Dune Analytics"],
    category: "sql",
  },
  {
    title: "AG Sniper Bot Analysis",
    description:
      "Performance tracking and strategy analysis for AG Sniper Bot.",
    image: "/agsniper.jpg",
    link: "https://dune.com/ag_bot/ag-sniper-bot",
    client: "AG Sniper Bot",
    tags: ["Bot Performance", "Strategy Analysis", "Dune Analytics"],
    category: "sql",
  },
  {
    title: "EVM Token Analyzer",
    description:
      "Comprehensive token analysis tool for EVM-compatible blockchains.",
    image: "/copilot.jpg",
    link: "https://dune.com/my_copilot_bae/evm-token-analyzer",
    client: "Copilot BAE",
    tags: ["Token Analysis", "EVM", "Multi-chain", "Dune Analytics"],
    category: "sql",
  },
  {
    title: "LSD Investment Opportunities",
    description:
      "Research on the best Liquid Staking Derivative investment opportunities on Ethereum.",
    image: "/ltv.jpg",
    link: "https://dune.com/cryptall/market-opportunities-research",
    client: "LTV Protocol",
    tags: ["LSD", "Investment Research", "Ethereum", "Dune Analytics"],
    category: "sql",
  },
  {
    title: "Sei DeFi Ecosystem Analysis",
    description:
      "Comprehensive analysis of the DeFi ecosystem on the Sei blockchain.",
    image: "/sei.jpg",
    link: "https://flipsidecrypto.xyz/cryptall/sei-defi-world-ShOoiL",
    client: "Sei Network",
    tags: ["Sei", "DeFi", "Ecosystem Analysis", "Flipside Crypto"],
    category: "sql",
  },
  {
    title: "NEAR Protocol Staking Analysis",
    description:
      "In-depth analysis of staking patterns and validator performance on the NEAR Protocol.",
    image: "/near.jpg",
    link: "https://flipsidecrypto.xyz/cryptall/staking-on-near-protocol-Cg2v0h",
    client: "Near Protocol",
    tags: ["NEAR Protocol", "Staking", "Validator Analysis", "Flipside Crypto"],
    category: "sql",
  },
  {
    title: "Thorchain RUNE Analysis",
    description:
      "Detailed analysis of RUNE token metrics, liquidity pools, and trading patterns on Thorchain.",
    image: "/thorchain.jpg",
    link: "https://flipsidecrypto.xyz/cryptall/analyzing-rune-IYdmTX",
    client: "Thorchain",
    tags: ["Thorchain", "RUNE", "Token Analysis", "Flipside Crypto"],
    category: "sql",
  },
  {
    title: "Burrow Finance on NEAR Protocol",
    description:
      "Performance analysis and user behavior study of Burrow Finance on the NEAR Protocol.",
    image: "/burrow.jpg",
    link: "https://flipsidecrypto.xyz/cryptall/burrow-finance-on-near-protocol-ntDZLj",
    client: "Burrow Finance",
    tags: [
      "NEAR Protocol",
      "Burrow Finance",
      "DeFi",
      "Lending",
      "Flipside Crypto",
    ],
    category: "sql",
  },
];

// ============================================
// PYTHON ANALYTICS PROJECTS (Kaggle)
// ============================================
export const pythonProjects = [
  {
    title: "Whales Market Fees: ETH vs SOL",
    description:
      "Comparative analysis of transaction fees for whale addresses on Ethereum and Solana networks.",
    image: "/whales.jpg",
    link: "https://www.kaggle.com/code/omojoallwell/comparison-of-whales-market-fees-on-eth-and-sol",
    tags: ["Ethereum", "Solana", "Fee Analysis", "Python", "Pandas"],
    category: "python",
  },
  {
    title: "Oracle Price Feed Analysis",
    description:
      "Analysis of oracle price feeds accuracy and reliability across different blockchain networks.",
    image: "/pragma.png",
    link: "https://www.kaggle.com/code/omojoallwell/oracle-price-feed-analysis",
    tags: [
      "Oracles",
      "Price Feeds",
      "Data Reliability",
      "Python",
      "Time Series",
    ],
    category: "python",
  },
  {
    title: "ETH DEX Performance Comparison",
    description:
      "Comparative analysis of performance metrics for major decentralized exchanges on Ethereum.",
    image: "/uniswap.jpg",
    link: "https://www.kaggle.com/code/omojoallwell/comparison-of-eth-dex-performance",
    tags: ["DEX", "Ethereum", "Performance Analysis", "Python", "Matplotlib"],
    category: "python",
  },
  {
    title: "ERC20 Transfers Analysis",
    description:
      "In-depth analysis of ERC20 token transfer patterns and user behaviors on Ethereum.",
    image: "/erc.png",
    link: "https://www.kaggle.com/code/omojoallwell/assignment-on-erc20",
    tags: ["ERC20", "Token Transfers", "User Behavior", "Python", "NetworkX"],
    category: "python",
  },
];
