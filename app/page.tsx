import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AutomationCard from "@/components/AutomationCard";
import TrustedBy from "@/components/TrustedBy";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050A14] overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <AutomationCard />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}