export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  overview: string;
  benefits: string[];
  howItWorks: string[];
  whoShouldChoose: string[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "mutual-fund-advisory",
    name: "Mutual Fund Advisory",
    shortDesc: "Curated fund selection matched to your risk profile.",
    overview:
      "We help you cut through thousands of mutual fund schemes to build a focused portfolio aligned with your goals, time horizon, and risk appetite — reviewed regularly as markets and life circumstances change.",
    benefits: [
      "Research-backed fund shortlisting, not commission-driven picks",
      "Portfolio diversification across market caps and categories",
      "Ongoing monitoring and rebalancing",
      "Clear reporting on performance versus benchmarks",
    ],
    howItWorks: [
      "Risk profiling and goal discussion",
      "Fund shortlist based on research and track record",
      "Portfolio construction and execution",
      "Quarterly performance reviews",
    ],
    whoShouldChoose: [
      "First-time mutual fund investors",
      "Investors with a scattered, unreviewed portfolio",
      "Anyone wanting a second opinion on existing holdings",
    ],
    faqs: [
      { q: "Do you charge for advisory?", a: "We're compensated through regular AMFI-registered distribution; there's no separate advisory fee for this service." },
      { q: "How often is my portfolio reviewed?", a: "At minimum every quarter, plus ad-hoc reviews around major market events or life changes." },
    ],
  },
  {
    slug: "sip-planning",
    name: "SIP Planning",
    shortDesc: "Disciplined, automated wealth building over time.",
    overview:
      "Systematic Investment Plans remove emotion and timing risk from investing. We design an SIP structure — amount, funds, and step-up schedule — that fits your cash flow and compounds toward your goals.",
    benefits: [
      "Rupee-cost averaging smooths market volatility",
      "Automated, low-effort discipline",
      "Step-up SIPs aligned to expected income growth",
      "Goal-tagged tracking so you see progress, not just numbers",
    ],
    howItWorks: [
      "Assess monthly surplus and goal timelines",
      "Recommend SIP amount and step-up rate",
      "Select fund mix by goal",
      "Track and adjust annually",
    ],
    whoShouldChoose: [
      "Salaried individuals starting their investment journey",
      "Anyone who has tried and abandoned lump-sum timing strategies",
      "Investors wanting a 'set it and review it' approach",
    ],
    faqs: [
      { q: "What's the minimum SIP amount?", a: "Most funds allow SIPs starting at ₹500/month; we'll recommend an amount based on your goals and surplus." },
      { q: "Can I pause or increase my SIP later?", a: "Yes — SIPs are flexible and can be paused, increased, or stepped up at any time." },
    ],
  },
  {
    slug: "retirement-planning",
    name: "Retirement Planning",
    shortDesc: "Build a corpus that sustains your lifestyle, worry-free.",
    overview:
      "We work backward from the retirement lifestyle you want to a monthly investment number, factoring inflation, life expectancy, and existing retirement assets like EPF and NPS.",
    benefits: [
      "A concrete retirement corpus target, not a guess",
      "Inflation-adjusted expense planning",
      "Coordination across EPF, NPS, and market investments",
      "Post-retirement withdrawal strategy",
    ],
    howItWorks: [
      "Estimate post-retirement monthly expenses",
      "Calculate required corpus with inflation built in",
      "Design a savings and investment glide path",
      "Review annually as retirement approaches",
    ],
    whoShouldChoose: [
      "Professionals 10–25 years from retirement",
      "Anyone unsure if their current savings rate is enough",
      "Those nearing retirement who need a withdrawal plan",
    ],
    faqs: [
      { q: "Is it too late to start at 45?", a: "No — a focused plan still makes a significant difference; the sooner you start, the more options you'll have." },
      { q: "Do you factor in EPF and NPS?", a: "Yes, every existing retirement asset is factored into the corpus calculation." },
    ],
  },
  {
    slug: "child-education-planning",
    name: "Child Education Planning",
    shortDesc: "Fund tomorrow's tuition with today's discipline.",
    overview:
      "Education costs — especially for higher studies and study abroad — rise faster than general inflation. We build a dedicated, goal-tagged investment plan for each child's milestones.",
    benefits: [
      "Milestone-based planning (school, undergrad, postgrad)",
      "Education-inflation-adjusted targets",
      "Separate, ring-fenced portfolios per child/goal",
      "Risk de-escalation as the goal date approaches",
    ],
    howItWorks: [
      "Estimate future education costs by milestone",
      "Set a dedicated SIP per goal",
      "Shift to safer instruments as the date nears",
      "Review yearly against actual cost inflation",
    ],
    whoShouldChoose: [
      "Parents of young children planning ahead",
      "Families considering study-abroad costs",
      "Anyone currently saving informally without a target",
    ],
    faqs: [
      { q: "How do you estimate future costs?", a: "We apply category-specific education inflation (historically higher than CPI) to current costs of comparable programs." },
    ],
  },
  {
    slug: "tax-saving-investments",
    name: "Tax Saving Investments",
    shortDesc: "Optimise tax outgo without compromising returns.",
    overview:
      "We help you use Section 80C and other provisions efficiently — through ELSS and complementary instruments — so tax savings support your long-term goals rather than sitting in a low-return lock-in.",
    benefits: [
      "ELSS funds with the shortest lock-in among 80C options",
      "Tax planning integrated with your broader portfolio",
      "Avoids over-concentration in insurance-linked products",
      "Year-round planning, not a March scramble",
    ],
    howItWorks: [
      "Review current tax-saving instruments",
      "Identify gaps and redundant products",
      "Recommend ELSS allocation within 80C limits",
      "Plan timing to avoid year-end rush",
    ],
    whoShouldChoose: [
      "Salaried professionals seeking 80C efficiency",
      "Anyone holding multiple overlapping insurance-cum-investment policies",
    ],
    faqs: [
      { q: "Is ELSS better than PPF?", a: "They serve different purposes — ELSS offers market-linked growth with a 3-year lock-in, PPF offers guaranteed but lower returns with a longer lock-in. Often a mix works best." },
    ],
  },
  {
    slug: "goal-based-investing",
    name: "Goal-Based Investing",
    shortDesc: "Every rupee mapped to a specific life milestone.",
    overview:
      "Rather than one undifferentiated pool of investments, we structure your portfolio around named goals — home, wedding, travel, retirement — each with its own timeline and risk strategy.",
    benefits: [
      "Clarity on what each investment is actually for",
      "Risk levels matched individually to each goal's timeline",
      "Easier to track progress and stay motivated",
      "Prevents raiding long-term goals for short-term needs",
    ],
    howItWorks: [
      "List and prioritise life goals",
      "Assign timeline and target amount to each",
      "Build a dedicated investment sleeve per goal",
      "Review progress goal-by-goal",
    ],
    whoShouldChoose: [
      "Investors juggling multiple financial priorities",
      "Anyone whose investments currently feel directionless",
    ],
    faqs: [
      { q: "How many goals can I plan for at once?", a: "We typically recommend focusing on 3–5 active goals at a time to keep the plan manageable." },
    ],
  },
  {
    slug: "portfolio-review",
    name: "Portfolio Review",
    shortDesc: "Regular check-ins to keep your plan on track.",
    overview:
      "A structured, unbiased review of your existing investments — mutual funds, stocks, insurance-linked products — to identify overlap, underperformance, and misalignment with your goals.",
    benefits: [
      "Independent view, free of the bias of whoever sold you the product",
      "Identification of overlapping or underperforming funds",
      "Clear consolidation recommendations",
      "A written action plan you can implement at your pace",
    ],
    howItWorks: [
      "Collect current holdings statement",
      "Analyse performance, cost, and overlap",
      "Present findings and recommendations",
      "Optional support with implementation",
    ],
    whoShouldChoose: [
      "Anyone with investments accumulated over years without a plan",
      "Investors switching advisors or going independent",
    ],
    faqs: [
      { q: "Is the review free?", a: "The first portfolio review is complimentary as part of your initial consultation." },
    ],
  },
  {
    slug: "wealth-creation-planning",
    name: "Wealth Creation Planning",
    shortDesc: "A long-term compounding plan beyond single goals.",
    overview:
      "For investors focused on long-term net worth growth rather than a single milestone, we build a diversified, tax-efficient wealth creation strategy designed to compound over decades.",
    benefits: [
      "Diversification across equity, debt, and alternative categories",
      "Tax-efficient structuring for long-term holding",
      "Periodic rebalancing to lock in gains and manage risk",
      "Annual net-worth tracking",
    ],
    howItWorks: [
      "Define long-term wealth targets",
      "Build a diversified, growth-oriented allocation",
      "Rebalance periodically",
      "Track net worth annually",
    ],
    whoShouldChoose: [
      "High-savings-rate professionals building long-term net worth",
      "Business owners looking to diversify beyond their business",
    ],
    faqs: [],
  },
  {
    slug: "emergency-fund-planning",
    name: "Emergency Fund Planning",
    shortDesc: "A safety net that protects your long-term goals.",
    overview:
      "Before any long-term investing, a proper emergency fund protects you from having to break long-term investments during a crisis. We size and structure this fund correctly.",
    benefits: [
      "Right-sized fund based on your expenses and job stability",
      "Held in liquid, low-risk instruments for quick access",
      "Protects long-term investments from disruption",
    ],
    howItWorks: [
      "Calculate 6–12 months of essential expenses",
      "Recommend liquid fund / sweep-in FD mix",
      "Set up and monitor the fund separately from investments",
    ],
    whoShouldChoose: [
      "Anyone without a dedicated emergency fund today",
      "Freelancers and business owners with variable income",
    ],
    faqs: [],
  },
  {
    slug: "insurance-guidance",
    name: "Insurance Guidance",
    shortDesc: "Right-sized protection, separate from investing.",
    overview:
      "We help you separate insurance from investment — recommending adequate term life and health cover sized to your responsibilities, without over-selling unnecessary riders or bundled products.",
    benefits: [
      "Clear, unbiased term and health cover recommendations",
      "Avoids expensive insurance-cum-investment bundling",
      "Coverage sized to income, liabilities, and dependents",
    ],
    howItWorks: [
      "Assess income, liabilities, and dependents",
      "Recommend term life and health cover amounts",
      "Review existing policies for gaps or overlap",
    ],
    whoShouldChoose: [
      "Anyone without adequate term or health cover",
      "Investors holding investment-linked insurance policies",
    ],
    faqs: [],
  },
];
