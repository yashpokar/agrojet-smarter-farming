import { motion } from "framer-motion";
import { MessageSquare, BarChart3, ShoppingBag, Zap } from "lucide-react";

const products = [
  {
    icon: MessageSquare,
    name: "AgroBuddy",
    tag: "Live",
    tagColor: "bg-primary text-primary-foreground",
    description: "AI assistant on WhatsApp for farmers",
    features: ["Crop guidance", "Quick answers"],
  },
  {
    icon: BarChart3,
    name: "AgroVault",
    tag: "Live",
    tagColor: "bg-primary text-primary-foreground",
    description: "Insights for agri businesses",
    features: ["Demand trends", "Pricing intelligence"],
  },
  {
    icon: ShoppingBag,
    name: "AgroDesk",
    tag: "Live",
    tagColor: "bg-primary text-primary-foreground",
    description: "Manage your agri business in one place",
    features: ["Billing", "Inventory", "Customer management"],
  },
  {
    icon: Zap,
    name: "AgroFlow",
    tag: "Coming Soon",
    tagColor: "bg-accent text-accent-foreground",
    description: "Predict supply. Match demand.",
    features: ["Demand forecasting", "Supply chain optimization"],
  },
];

const ProductsSection = () => (
  <section className="py-24" id="products">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
        <p className="text-muted-foreground text-lg">
          Tools built for every part of the agriculture value chain.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow bg-card"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <product.icon className="text-primary" size={24} />
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${product.tagColor}`}>
                {product.tag}
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
            <p className="text-muted-foreground mb-4">{product.description}</p>
            <ul className="space-y-1">
              {product.features.map((f) => (
                <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
