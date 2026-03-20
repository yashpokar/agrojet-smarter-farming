import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24">
        <div className="container max-w-2xl">
          <h1 className="text-3xl font-extrabold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Information We Collect</h2>
              <p className="text-muted-foreground">We collect phone numbers, WhatsApp messages, usage data, and basic device information to provide and improve our services.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">How We Use Information</h2>
              <p className="text-muted-foreground">Your data is used to deliver personalized advisory, improve our AI models, and communicate service updates. We never sell your personal data.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Data Sharing</h2>
              <p className="text-muted-foreground">We do not sell or rent your data to third parties. We may share anonymized, aggregated data for research and improvement purposes.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Data Security</h2>
              <p className="text-muted-foreground">We use industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">User Rights</h2>
              <p className="text-muted-foreground">You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">WhatsApp Data</h2>
              <p className="text-muted-foreground">Messages sent through WhatsApp are processed to provide advisory services. We comply with WhatsApp's Business Policy and Meta's data guidelines.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Policy Updates</h2>
              <p className="text-muted-foreground">We may update this policy periodically. Continued use of our services constitutes acceptance of any changes.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Contact</h2>
              <p className="text-muted-foreground">For privacy-related questions, reach us on WhatsApp or through our Contact page.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Privacy;
