import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MessageSquare, BarChart3, ShoppingBag, Zap } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/19714174705?text=Hi%20AgroJet!";

const productDetails = [
  {
    icon: MessageSquare,
    name: "AgroBuddy",
    tag: "Live",
    tagColor: "bg-primary text-primary-foreground",
    headline: "WhatsApp-first AI assistant",
    description: "AgroBuddy lives on WhatsApp so farmers can get help in the flow of their daily work. It supports crop decisions, field-level problem solving, and practical advisory without forcing users to learn a new product.",
    features: ["Crop planning and stage-wise guidance", "Pest and disease identification support", "Input and spray-related recommendations", "Weather-based advisory for daily decisions", "Available 24/7 on WhatsApp"],
  },
  {
    icon: BarChart3,
    name: "AgroVault",
    tag: "Live",
    tagColor: "bg-primary text-primary-foreground",
    headline: "Cold storage management and contract system",
    description: "AgroVault is built for the agriculture ecosystem to help cold storage operators manage both farmer agreements and day-to-day storage operations in one system. It brings structure from the start of the season by letting operators create contracts with farmers that define crop type, expected quantity, storage terms, pricing or conditions, and key commitments before produce starts arriving.",
    features: ["Farmer contract creation with crop, quantity, and storage terms", "Lot-wise and chamber-wise stock tracking", "Entry and exit management with real-time visibility", "Better capacity planning and stronger farmer relationships"],
    url: "https://vault.agrojet.ai",
  },
  {
    icon: ShoppingBag,
    name: "AgroDesk",
    tag: "Coming Soon",
    tagColor: "bg-accent text-accent-foreground",
    headline: "ERP for agri shops",
    description: "AgroDesk is being built to replace pen-and-paper shop management with a simple operating system for agri retailers and input stores. The goal is to reduce daily chaos across billing, stock tracking, and customer handling.",
    features: ["Digital billing for faster checkout", "Inventory management with clearer stock visibility", "Customer tracking and purchase history", "Sales analytics for better shop decisions", "Built for easy adoption by agri shops"],
  },
  {
    icon: Zap,
    name: "AgroFlow",
    tag: "Coming Soon",
    tagColor: "bg-accent text-accent-foreground",
    headline: "Demand forecasting engine",
    description: "AgroFlow is designed to connect farmers, shops, and buyers through better demand forecasting and supply planning. It aims to reduce mismatch across the chain by showing what is needed, where it is needed, and when action should happen.",
    features: ["Demand forecasting across regions", "Supply chain optimization signals", "Farmer-buyer connection support", "Regional demand mapping for planning"],
  },
];

const Products = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24 surface-green">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Our Products</h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Purpose-built tools for every part of Indian agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container space-y-20">
          {productDetails.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <product.icon className="text-primary" size={24} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${product.tagColor}`}>
                    {product.tag}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">{product.name}</h2>
                <p className="text-lg text-primary font-medium mb-4">{product.headline}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                {product.url ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-6 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Explore AgroVault
                  </a>
                ) : null}
              </div>
              <div className={`rounded-2xl bg-muted aspect-[4/3] flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <product.icon className="text-primary/20" size={80} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 gradient-primary text-center">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to get started?</h2>
          <p className="text-primary-foreground/80 mb-8">Start a conversation on WhatsApp — it takes 10 seconds.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 rounded-lg bg-primary-foreground text-primary font-bold hover:opacity-90 transition-opacity"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Products;
