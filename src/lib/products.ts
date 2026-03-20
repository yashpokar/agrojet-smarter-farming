import { BarChart3, MessageSquare, ShoppingBag, Zap } from "lucide-react";

export const WHATSAPP_URL = "https://wa.me/19714174705?text=Hi%20AgroJet!";

export const products = [
  {
    slug: "agrobuddy",
    icon: MessageSquare,
    name: "AgroBuddy",
    tag: "Live",
    tagColor: "bg-primary text-primary-foreground",
    headline: "WhatsApp-first AI assistant",
    shortDescription: "WhatsApp-first AI assistant for fast farm decisions.",
    shortFeatures: ["AI crop guidance", "Disease support", "Weather-based advice", "Fast answers on WhatsApp"],
    description:
      "AgroBuddy lives on WhatsApp so farmers can get AI help in the flow of their daily work. It supports crop decisions, field-level problem solving, and practical advisory without forcing users to learn a new product.",
    problem:
      "Most farmers still make urgent decisions with incomplete information. They need practical guidance in the moment, not another app to learn or a dashboard to log into.",
    builtFor: ["Farmers seeking quick crop guidance", "Field teams handling crop issues on the ground", "Users who prefer WhatsApp over a separate app"],
    features: [
      "Crop planning and stage-wise guidance",
      "Pest and disease identification support",
      "Input and spray-related recommendations",
      "Weather-based advisory for daily decisions",
      "Available 24/7 on WhatsApp",
    ],
    outcomes: [
      "Faster answers to day-to-day crop questions",
      "Less dependence on scattered advice sources",
      "More confidence in field-level decisions",
    ],
    workflow: [
      "Start a conversation on WhatsApp in the language users are comfortable with.",
      "Ask about crops, symptoms, inputs, weather, or next steps in natural language.",
      "Receive practical recommendations designed for immediate use in the field.",
    ],
    ctaLabel: "Start on WhatsApp",
    ctaHref: WHATSAPP_URL,
    ctaExternal: true,
  },
  {
    slug: "agrovault",
    icon: BarChart3,
    name: "AgroVault",
    tag: "Live",
    tagColor: "bg-primary text-primary-foreground",
    headline: "Cold storage management and contract system",
    shortDescription: "AI-assisted cold storage management and contract system.",
    shortFeatures: ["Farmer contracts", "Stock tracking", "Capacity planning"],
    description:
      "AgroVault is built for the agriculture ecosystem to help cold storage operators manage both farmer agreements and day-to-day storage operations in one system. It brings structure from the start of the season by letting operators create contracts with farmers that define crop type, expected quantity, storage terms, pricing or conditions, and key commitments before produce starts arriving, while giving operators better operational visibility and decision support.",
    problem:
      "Cold storage businesses often operate with scattered records, weak season planning, and unclear commitments from farmers. That leads to lower visibility, avoidable disputes, and poor capacity utilization.",
    builtFor: [
      "Cold storage owners and operators",
      "Teams managing chamber allocation and stock movement",
      "Businesses that want stronger farmer contracting before the season starts",
    ],
    features: [
      "Farmer contract creation with crop, quantity, and storage terms",
      "Lot-wise and chamber-wise stock tracking",
      "Entry and exit management with real-time visibility",
      "Better capacity planning and stronger farmer relationships",
    ],
    outcomes: [
      "Higher visibility into expected inflow before produce arrives",
      "Cleaner inventory control across chambers and stored lots",
      "Better planning, utilization, and operational accuracy",
    ],
    workflow: [
      "Create structured farmer contracts with crop, quantity, terms, and commitments before the season begins.",
      "Track incoming stock lot-wise and chamber-wise as produce enters storage.",
      "Manage entry, exit, balances, and operational visibility from one system instead of fragmented registers.",
    ],
    ctaLabel: "Explore AgroVault",
    ctaHref: "https://vault.agrojet.ai",
    ctaExternal: true,
  },
  {
    slug: "agrodesk",
    icon: ShoppingBag,
    name: "AgroDesk",
    tag: "Coming Soon",
    tagColor: "bg-accent text-accent-foreground",
    headline: "ERP for agri shops",
    shortDescription: "AI-enabled ERP for agri input shops.",
    shortFeatures: ["Digital billing", "Inventory control", "Customer management", "Smarter shop operations"],
    description:
      "AgroDesk is being built to replace pen-and-paper shop management with a simple operating system for agri retailers and input stores. The goal is to reduce daily chaos across billing, stock tracking, customer handling, and decision-making with smarter software workflows.",
    problem:
      "Many agri shops still run on notebooks, memory, and manual follow-up. That creates billing friction, weak stock control, and poor visibility into customer behavior.",
    builtFor: [
      "Agri retailers and input stores",
      "Shop owners who want cleaner billing and inventory workflows",
      "Teams trying to move away from manual records without adding complexity",
    ],
    features: [
      "Digital billing for faster checkout",
      "Inventory management with clearer stock visibility",
      "Customer tracking and purchase history",
      "Sales analytics for better shop decisions",
      "Built for easy adoption by agri shops",
    ],
    outcomes: [
      "Cleaner day-to-day shop operations",
      "Better stock visibility and purchase planning",
      "Improved customer record keeping and repeat sales understanding",
    ],
    workflow: [
      "Record billing and sales activity digitally instead of relying on manual entries.",
      "Track stock movement and customer purchases in one place.",
      "Use clearer records and analytics to manage replenishment and shop performance.",
    ],
    ctaLabel: "Talk to Us on WhatsApp",
    ctaHref: WHATSAPP_URL,
    ctaExternal: true,
  },
  {
    slug: "agroflow",
    icon: Zap,
    name: "AgroFlow",
    tag: "Coming Soon",
    tagColor: "bg-accent text-accent-foreground",
    headline: "AI demand forecasting engine",
    shortDescription: "AI forecasting layer for supply, demand, and planning decisions.",
    shortFeatures: ["Demand forecasting", "Supply planning", "Buyer-seller coordination", "Regional planning signals"],
    description:
      "AgroFlow is designed to connect farmers, shops, and buyers through AI-driven demand forecasting and supply planning. It aims to reduce mismatch across the chain by showing what is needed, where it is needed, and when action should happen.",
    problem:
      "Across agriculture, supply and demand are often planned too late and with too little visibility. That creates mismatch, weak coordination, and missed business opportunities.",
    builtFor: [
      "Businesses planning supply against uncertain demand",
      "Teams coordinating buyers, sellers, and regional movement",
      "Operators who need a clearer view of upcoming shifts before they happen",
    ],
    features: [
      "Demand forecasting across regions",
      "Supply chain optimization signals",
      "Farmer-buyer connection support",
      "Regional demand mapping for planning",
    ],
    outcomes: [
      "Earlier visibility into likely demand changes",
      "Better planning across procurement and supply movement",
      "Less mismatch between what is available and what is needed",
    ],
    workflow: [
      "Aggregate signals across regions, crop movement, and supply-demand patterns.",
      "Convert those signals into planning visibility for businesses across the chain.",
      "Use forecast-driven decisions to improve coordination between supply and market demand.",
    ],
    ctaLabel: "Talk to Us on WhatsApp",
    ctaHref: WHATSAPP_URL,
    ctaExternal: true,
  },
] as const;

export const getProductBySlug = (slug?: string) =>
  products.find((product) => product.slug === slug);
