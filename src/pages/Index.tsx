import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { StartProjectProvider } from "@/components/StartProjectModal";

const Index = () => {
  return (
    <StartProjectProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <CtaBand />
        <Contact />
        <Footer />
      </div>
    </StartProjectProvider>
  );
};

export default Index;
