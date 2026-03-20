import { motion } from "framer-motion";
import { MapPin, Smartphone, Brain, Users } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "Built for Indian Agriculture", description: "Deep understanding of local crops, markets, and challenges." },
  { icon: Smartphone, title: "Works on WhatsApp", description: "No app download needed. Start with a simple message." },
  { icon: Brain, title: "AI + Real Market Data", description: "Combining artificial intelligence with ground-level insights." },
  { icon: Users, title: "For Farmers & Businesses", description: "Tools designed for everyone in the agri value chain." },
];

const WhyAgroJet = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why AgroJet</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <reason.icon className="text-primary" size={26} />
            </div>
            <h3 className="font-bold text-foreground mb-2">{reason.title}</h3>
            <p className="text-sm text-muted-foreground">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyAgroJet;
