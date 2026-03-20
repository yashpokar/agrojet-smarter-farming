import { motion } from "framer-motion";
import heroFarm from "@/assets/hero-farm.jpg";

const WHATSAPP_URL = "https://wa.me/19714174705?text=Hi%20AgroJet!";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroFarm} alt="Indian farmland at golden hour" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>

    <div className="container relative z-10 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 text-balance">
          Smarter Farming Starts with Better Decisions
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-lg">
          AgroJet helps farmers and agri businesses choose the right crops, predict demand, and manage operations — all in one platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Start on WhatsApp
          </a>
          <a
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
          >
            Explore Products
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
