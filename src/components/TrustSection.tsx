import { motion } from "framer-motion";
import { Shield, Quote } from "lucide-react";

const TrustSection = () => (
  <section className="py-24 surface-warm">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by the Ecosystem</h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          Built with deep agriculture ecosystem understanding and real ground partnerships.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <Shield className="text-primary mb-4" size={28} />
          <h3 className="font-bold text-foreground text-lg mb-2">Ground Partner</h3>
          <p className="text-muted-foreground">
            Working closely with <strong className="text-foreground">Umiya Sales Corporation</strong> to bring real-world agriculture insights into our platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <Quote className="text-primary mb-4" size={28} />
          <h3 className="font-bold text-foreground text-lg mb-3">What Users Say</h3>
          <p className="text-muted-foreground italic">
            "AgroJet made it easy to understand market demand and plan my crops better. The WhatsApp bot is simple to use."
          </p>
          <p className="text-sm text-muted-foreground mt-3">— Farmer, Gujarat</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrustSection;
