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
    features: [
      "Crop planning and stage-wise guidance",
      "Pest and disease identification support",
      "Input and spray-related recommendations",
      "Weather-based advisory for daily decisions",
      "Available 24/7 on WhatsApp",
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
    features: [
      "Farmer contract creation with crop, quantity, and storage terms",
      "Lot-wise and chamber-wise stock tracking",
      "Entry and exit management with real-time visibility",
      "Better capacity planning and stronger farmer relationships",
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
    features: [
      "Digital billing for faster checkout",
      "Inventory management with clearer stock visibility",
      "Customer tracking and purchase history",
      "Sales analytics for better shop decisions",
      "Built for easy adoption by agri shops",
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
    features: [
      "Demand forecasting across regions",
      "Supply chain optimization signals",
      "Farmer-buyer connection support",
      "Regional demand mapping for planning",
    ],
    ctaLabel: "Talk to Us on WhatsApp",
    ctaHref: WHATSAPP_URL,
    ctaExternal: true,
  },
] as const;

export const getProductBySlug = (slug?: string) =>
  products.find((product) => product.slug === slug);
