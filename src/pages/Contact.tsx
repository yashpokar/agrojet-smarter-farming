import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/19714174705?text=Hi%20AgroJet!";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-24">
          <div className="container max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground">We'd love to hear from you.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-foreground mb-3">WhatsApp (Fastest)</h3>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">Phone</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone size={18} className="text-primary" />
                    <span>+1 971-417-4705</span>
                  </div>
                </div>
              </div>

              <div>
                {submitted ? (
                  <div className="rounded-2xl bg-primary/10 p-8 text-center">
                    <p className="text-primary font-semibold text-lg">Thank you! We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
