import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Start on WhatsApp", description: "Send a message to get started instantly." },
  { number: "02", title: "Ask or Manage", description: "Get crop advice or manage your business." },
  { number: "03", title: "Get Insights & Act", description: "Make data-driven decisions with confidence." },
];

const HowItWorks = () => (
  <section className="py-24 surface-green">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
        <p className="text-muted-foreground text-lg">Three simple steps to smarter farming.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="text-5xl font-extrabold text-primary/20 mb-4">{step.number}</div>
            <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
