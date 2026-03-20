import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24">
        <div className="container max-w-2xl prose prose-neutral">
          <h1 className="text-3xl font-extrabold text-foreground mb-8">Terms of Use</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">1. Introduction</h2>
          <p className="text-muted-foreground mb-4">Welcome to AgroJet. These Terms of Use govern your access to and use of our platform, products, and services including AgroBuddy, AgroVault, AgroDesk, and AgroFlow.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">2. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">By accessing or using AgroJet services, you agree to be bound by these terms. If you do not agree, please do not use our services.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">3. Services Description</h2>
          <p className="text-muted-foreground mb-4">AgroJet provides AI-powered agriculture advisory, data analytics, and business management tools delivered primarily through WhatsApp and web platforms.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">4. User Responsibilities</h2>
          <p className="text-muted-foreground mb-4">You agree to provide accurate information, use services for lawful agricultural purposes, and not misuse or attempt to reverse-engineer our systems.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">5. Prohibited Use</h2>
          <p className="text-muted-foreground mb-4">You may not use AgroJet for any illegal activities, spam, data scraping, or any purpose that could harm the platform or its users.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">6. Intellectual Property</h2>
          <p className="text-muted-foreground mb-4">All content, data, algorithms, and branding on AgroJet are owned by AgroJet and protected under applicable intellectual property laws.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">7. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">AgroJet provides advisory information and tools. We are not liable for farming outcomes, crop losses, or business decisions made based on our data or recommendations.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">8. Termination</h2>
          <p className="text-muted-foreground mb-4">We reserve the right to suspend or terminate your access if you violate these terms or engage in activities harmful to the platform.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">9. Governing Law</h2>
          <p className="text-muted-foreground mb-4">These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Gujarat, India.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">10. Contact</h2>
          <p className="text-muted-foreground mb-4">For questions about these terms, contact us on WhatsApp or visit our Contact page.</p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Terms;
