import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import ProductsSection from "@/components/ProductsSection";
import HowItWorks from "@/components/HowItWorks";
import WhyAgroJet from "@/components/WhyAgroJet";
import TrustSection from "@/components/TrustSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <WhatWeDo />
      <ProductsSection />
      <HowItWorks />
      <WhyAgroJet />
      <TrustSection />
      <FinalCTA />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
