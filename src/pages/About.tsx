import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24 surface-warm">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">About AgroJet</h1>
            <p className="text-lg text-muted-foreground">
              We're building practical AI and software infrastructure for Indian agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-2xl space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Indian agriculture still runs on guesswork. Farmers don't know what to grow. Retailers don't know what to stock. Traders don't know where demand is heading.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              There's no visibility into demand. No data infrastructure connecting the dots. And the tools that exist are too complex for the people who need them most.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AgroJet is creating a data-driven agriculture ecosystem. We combine AI, real market data, and simple interfaces — starting with WhatsApp — to help every stakeholder make better decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the farmer choosing what to plant, to the retailer managing inventory, to the trader forecasting demand — we want every decision in agriculture to be informed, not guessed.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              We keep things simple and human. Our tools work on WhatsApp because that's where our users already are. We build with ground partners like Umiya Sales Corporation to stay rooted in reality. And we never lose sight of who we're building for — real people feeding the country.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default About;
