import type { ServiceDetailPageProps } from "./ServiceDetailPage";

export const servicesLandingTiles = [
  {
    description:
      "Strategy, tools, and training to help you harness AI — practically and confidently.",
    href: "/services/ai",
    icon: "🤖",
    name: "AI Consulting",
    number: "01",
  },
  {
    description:
      "Career, coaching, study, and social skills — helping you show up better in every area of life.",
    href: "/services/personal",
    icon: "🎯",
    name: "Personal Consulting",
    number: "02",
  },
  {
    description:
      "Web presence, social media, SEO, and automation — your digital world, sorted end to end.",
    href: "/services/digital",
    icon: "💻",
    name: "Digital Consulting",
    number: "03",
  },
  {
    description:
      "Practical, responsible AI for New Zealand charities, schools and community organisations — our not-for-profit arm.",
    href: "/services/kali",
    icon: "🌱",
    name: "Kali Foundation",
    number: "04",
  },
];

export const servicesLandingStats = [
  {
    label:
      "Service disciplines under one roof — AI, personal & digital consulting, plus Kali Foundation",
    value: "4",
  },
  {
    label:
      "Outcome-focused engagements — every scope is tied to real results",
    value: "100%",
  },
  {
    label: "Based in Auckland, serving clients across Australasia and beyond",
    value: "NZ",
  },
];

export const aiServicePage = {
  ctaBody:
    "Let's talk — no jargon, no obligation. We'll give you an honest picture of where AI can genuinely help.",
  ctaLabel: "Book a conversation →",
  ctaTitle: "Ready to bring AI into your world?",
  eyebrow: "AI Consulting",
  gridCards: [
    {
      description:
        "We assess your readiness, identify the highest-value use cases, and build a practical AI roadmap — covering what to build, what to buy, and in what order. No hype, just a clear plan.",
      icon: "🗺️",
      title: "AI Strategy & Advisory",
    },
    {
      description:
        "From deploying tools like ChatGPT, Copilot, and Gemini to building custom GPTs and AI agents — we get AI working inside your existing systems and workflows, not alongside them.",
      icon: "⚙️",
      title: "Implementation & Integration",
    },
    {
      description:
        "We identify the repetitive, time-consuming work in your business and automate it — document processing, reporting, client communications, and beyond. Time back. Errors down.",
      icon: "🤖",
      title: "Process Automation",
    },
    {
      description:
        "We train your team to use AI tools confidently — from prompt engineering to building internal AI policies and usage guidelines. Change management included, not bolted on.",
      icon: "🎓",
      title: "Training & Enablement",
    },
    {
      description:
        "We build AI solutions tailored to your sector — automating workpapers in accounting, streamlining contract review in legal, powering content in marketing, and more.",
      icon: "🏭",
      title: "Industry-Specific AI Solutions",
    },
    {
      description:
        "The AI landscape never sits still. We monitor the tools that matter, manage your prompt libraries, and keep you informed about what's worth adopting — so you're always ahead.",
      icon: "🔄",
      title: "Ongoing AI Retainer",
    },
  ],
  gridColumns: 3,
  introBody:
    "Whether you're just starting to explore AI or ready to integrate it deep into your operations, we build the right approach for your context.",
  introTitleEmphasis: "end to end.",
  introTitlePrefix: "AI services",
  summary:
    "Artificial intelligence is transforming how businesses operate — but knowing where to start, what to adopt, and how to make it work is another matter. We cut through the noise and help you harness AI practically, confidently, and in a way that actually fits how you work.",
  titleEmphasis: "We help you keep up.",
  titlePrefix: "AI is moving fast.",
  highlights: [
    {
      description: "Where to start, what to build, and when",
      icon: "🗺️",
      title: "AI Strategy & Roadmap",
    },
    {
      description: "Deploying AI tools into your existing workflows",
      icon: "⚙️",
      title: "Implementation & Integration",
    },
    {
      description: "Upskilling your team to use AI effectively",
      icon: "🎓",
      title: "Training & Enablement",
    },
    {
      description:
        "AI built for your sector — finance, legal, marketing & more",
      icon: "🏭",
      title: "Industry-Specific Solutions",
    },
    {
      description: "Staying ahead of new tools and keeping you informed",
      icon: "🔄",
      title: "Ongoing Retainer",
    },
  ],
} satisfies ServiceDetailPageProps;

export const personalServicePage = {
  ctaBody:
    "Let's have a conversation — no obligation. We'll listen first and tell you honestly how we can help.",
  ctaLabel: "Book a conversation →",
  ctaTitle: "Ready to invest in yourself?",
  eyebrow: "Personal Consulting",
  gridCards: [
    {
      description:
        "CV, cover letter, and LinkedIn overhauls. Job search strategy. Mock interviews. Career change roadmapping. Salary negotiation coaching. Personal branding and workplace navigation — we help you get to where you want to go, faster.",
      icon: "💼",
      title: "Career & Professional Development",
    },
    {
      description:
        "Clarity sessions to identify what you actually want. Short and long-term goal frameworks. Accountability check-ins. Habit building, productivity systems, and overcoming procrastination — real tools for real progress.",
      icon: "🌟",
      title: "Life Coaching & Goal Setting",
    },
    {
      description:
        "Study planning and scheduling. Exam strategy and revision techniques. University and course selection. Scholarship research. Assignment structuring and academic writing guidance. Motivation and burnout management.",
      icon: "📚",
      title: "Study & Academic Coaching",
    },
    {
      description:
        "Communication coaching — listening, expressing clearly, assertiveness. Confidence building in social and professional settings. Networking strategy, conflict resolution, and building relationships that last.",
      icon: "🤝",
      title: "Relationship & Social Skills",
    },
  ],
  gridColumns: 2,
  introBody:
    "Four interconnected disciplines. One through-line — helping you show up better wherever it matters most.",
  introTitleEmphasis: "built around you.",
  introTitlePrefix: "Personal services",
  summary:
    "Career, goals, study, relationships — at their core, these are all about helping you perform at your best and connect more meaningfully. We offer a suite of personal consulting services built around what you actually need, not what a generic program delivers.",
  titleEmphasis: "in every area of life.",
  titlePrefix: "Show up better —",
  highlights: [
    {
      description:
        "CV, interviews, personal brand, and salary negotiation",
      icon: "💼",
      title: "Career & Professional Development",
    },
    {
      description: "Clarity, accountability, and habits that actually stick",
      icon: "🌟",
      title: "Life Coaching & Goal Setting",
    },
    {
      description:
        "Exam strategy, motivation, and academic performance",
      icon: "📚",
      title: "Study & Academic Coaching",
    },
    {
      description: "Communication, confidence, and networking",
      icon: "🤝",
      title: "Relationship & Social Skills",
    },
  ],
} satisfies ServiceDetailPageProps;

export const digitalServicePage = {
  ctaBody:
    "Tell us where you are and where you want to be — we'll map out what it takes to get there.",
  ctaLabel: "Start the conversation →",
  ctaTitle: "Ready to sharpen your digital presence?",
  eyebrow: "Digital Consulting",
  gridCards: [
    {
      description:
        "Website audits, design and build (Squarespace, Wix, Webflow), brand identity, domain and hosting setup, and Google Business Profile optimisation. Your first impression — done right.",
      icon: "🌐",
      title: "Web Presence & Branding",
    },
    {
      description:
        "Strategy across the right platforms, profile setup and optimisation, content calendar planning, analytics review, and growth coaching. LinkedIn, Instagram, TikTok — wherever your audience is.",
      icon: "📱",
      title: "Social Media Consulting",
    },
    {
      description:
        "Website copy, blog and article writing, email newsletters, personal and business bios, and content repurposing — turning one strong piece into many. Words that work harder.",
      icon: "✍️",
      title: "Content & Copywriting",
    },
    {
      description:
        "Basic SEO audits, keyword research and strategy, local SEO for NZ businesses, and Google Analytics setup. Get found by the right people, at the right time, without paying for every click.",
      icon: "🔍",
      title: "SEO & Online Visibility",
    },
    {
      description:
        "Setting up Notion, Trello, Zapier, Monday, and CRM systems for small businesses. Email marketing setup. Workflow automation consulting. Making your digital tools actually talk to each other.",
      icon: "⚡",
      title: "Digital Tools & Automation",
    },
    {
      description:
        "Shopify and WooCommerce store setup, product listing optimisation, conversion rate advice, and payment and shipping configuration. Sell online — without the headaches.",
      icon: "🛒",
      title: "E-Commerce",
    },
  ],
  gridColumns: 3,
  introBody:
    "From building your first website to automating your entire digital operation — we cover every layer of your online presence.",
  introTitleEmphasis: "start to finish.",
  introTitlePrefix: "Digital services",
  summary:
    "Web presence, social media, SEO, content, and automation — your digital footprint matters more than ever. We help individuals and businesses build an online presence that actually works, and put the tools in place to keep it growing.",
  titleEmphasis: "sorted end to end.",
  titlePrefix: "Your digital world —",
  highlights: [
    {
      description: "Websites, Google profiles, and brand identity",
      icon: "🌐",
      title: "Web Presence & Branding",
    },
    {
      description: "Strategy, content, and growth across the right platforms",
      icon: "📱",
      title: "Social Media Consulting",
    },
    {
      description: "Web copy, blogs, newsletters, and personal bios",
      icon: "✍️",
      title: "Content & Copywriting",
    },
    {
      description: "Get found — by the right people, at the right time",
      icon: "🔍",
      title: "SEO & Online Visibility",
    },
    {
      description: "Workflows, CRMs, and smart systems for small business",
      icon: "⚡",
      title: "Digital Tools & Automation",
    },
  ],
} satisfies ServiceDetailPageProps;
