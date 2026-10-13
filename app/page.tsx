import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeaturesBento from "@/components/FeaturesBento";
import HowItWorks from "@/components/HowItWorks";
import CalculatorTeaser from "@/components/CalculatorTeaser";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <FeaturesBento />
        <HowItWorks />
        <CalculatorTeaser />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
