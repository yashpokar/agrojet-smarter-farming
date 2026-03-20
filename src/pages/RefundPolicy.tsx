import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicy = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24">
        <div className="container max-w-2xl">
          <h1 className="text-3xl font-extrabold text-foreground mb-2">Refund Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Current Services</h2>
              <p className="text-muted-foreground">Most AgroJet services are currently offered free of charge. This refund policy applies to any future paid features or subscriptions.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Eligibility</h2>
              <p className="text-muted-foreground">Refund requests are eligible if made within 7 days of purchase and the service has not been substantially used.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Non-refundable Cases</h2>
              <p className="text-muted-foreground">Refunds will not be provided for services already rendered, advisory already consumed, or after the 7-day window has passed.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Processing Time</h2>
              <p className="text-muted-foreground">Approved refunds will be processed within 7-10 business days to the original payment method.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Contact</h2>
              <p className="text-muted-foreground">To request a refund, contact us on WhatsApp or through our Contact page with your order details.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default RefundPolicy;
