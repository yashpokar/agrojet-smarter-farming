import { motion } from "framer-motion";
import { MapPin, Smartphone, Brain, Users } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "Built for Indian Agriculture", description: "Designed around local crops, operating realities, and real on-ground challenges." },
  { icon: Smartphone, title: "AI on Familiar Channels", description: "Our AI reaches users through simple workflows like WhatsApp, without heavy software adoption." },
  { icon: Brain, title: "Applied AI, Not Hype", description: "We use AI to solve practical agriculture problems, not to create dashboards people do not use." },
  { icon: Users, title: "For Farmers and Agri Businesses", description: "From advisory to storage to retail operations, AgroJet supports the full value chain." },
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
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We make AI useful in agriculture by turning it into decisions, workflows, and tools people can actually use every day.
        </p>
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
