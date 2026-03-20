import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WhatsAppPolicy = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24">
        <div className="container max-w-2xl">
          <h1 className="text-3xl font-extrabold text-foreground mb-2">WhatsApp Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">User Consent</h2>
              <p className="text-muted-foreground">By initiating a conversation with AgroJet on WhatsApp, you consent to receiving messages from us related to agriculture advisory, transactional updates, and service information.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Opt-in Process</h2>
              <p className="text-muted-foreground">Users opt in by sending the first message to our WhatsApp number. This serves as explicit consent to receive our services.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Message Types</h2>
              <p className="text-muted-foreground">We send advisory messages (crop guidance, weather alerts), transactional messages (order updates, billing), and occasional service announcements.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Opt-out</h2>
              <p className="text-muted-foreground">You can opt out at any time by replying <strong className="text-foreground">STOP</strong> to any of our messages. We will stop sending messages within 24 hours.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Data Usage</h2>
              <p className="text-muted-foreground">Messages and interactions are used to improve our AI advisory and personalize your experience. See our Privacy Policy for details.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Compliance</h2>
              <p className="text-muted-foreground">AgroJet complies with WhatsApp Business Policy, Meta Platform Terms, and applicable Indian regulations for electronic communications.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default WhatsAppPolicy;
