import { motion } from "framer-motion";
import { TrendingUp, Lightbulb, LayoutDashboard } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Forecast Demand Earlier",
    description: "See shifts in demand before they turn into missed sales, bad stocking, or weak planning.",
  },
  {
    icon: Lightbulb,
    title: "Guide Daily Decisions",
    description: "Get practical support for crop, input, and business choices without adding complexity.",
  },
  {
    icon: LayoutDashboard,
    title: "Run Operations Cleanly",
    description: "Manage storage, contracts, and business workflows through systems built for agriculture.",
  },
];

const WhatWeDo = () => (
  <section className="py-24 surface-warm">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How AgroJet Helps</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We combine intelligence, software, and agricultural context to make everyday decisions clearer and operations more structured.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <pillar.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{pillar.title}</h3>
            <p className="text-muted-foreground">{pillar.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeDo;
