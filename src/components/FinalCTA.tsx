import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/919876543210?text=Hi%20AgroJet";

const FinalCTA = () => (
  <section className="py-24 gradient-primary">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Start using AgroJet today
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
          Join thousands of farmers and businesses making smarter decisions.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-bold text-base hover:opacity-90 transition-opacity"
        >
          Chat on WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
