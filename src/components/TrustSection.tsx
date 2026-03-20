import { motion } from "framer-motion";
import { Blocks, MessageSquareText, Sprout } from "lucide-react";

const capabilities = [
  {
    icon: MessageSquareText,
    title: "Starts with Familiar Workflows",
    description:
      "Farmers and agri teams can begin on channels they already use, instead of adapting to heavy software first.",
  },
  {
    icon: Blocks,
    title: "Built Around Real Operations",
    description:
      "From advisory to contracts to storage and retail workflows, the product is shaped around how agriculture actually moves.",
  },
  {
    icon: Sprout,
    title: "Grounded in Agriculture",
    description:
      "Our decisions are informed by field realities, local behavior, and the people who use these tools every season.",
  },
];

const TrustSection = () => (
  <section className="py-24 surface-warm">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built Around the Way Agriculture Works</h2>
        <p className="text-muted-foreground text-lg">
          Good agriculture software should feel practical from the first interaction. AgroJet is designed to be simple to start, structured to use, and relevant to real decisions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {capabilities.map((capability, index) => (
          <motion.div
            key={capability.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-3xl border border-border bg-card p-8 hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <capability.icon className="text-primary" size={26} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{capability.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
