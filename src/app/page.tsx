import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import HeroSection from "@/components/sections/home/HeroSection";
import TrustedSection from "@/components/sections/home/TrustedSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import MetricsSection from "@/components/sections/home/MetricsSection";
import WorkflowSection from "@/components/sections/home/WorkflowSection";
import ProjectsSection from "@/components/sections/home/ProjectsSection";
import ShowcaseSection from "@/components/sections/home/ShowcaseSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <Header />

      <HeroSection />

      <TrustedSection />

      <ServicesSection />

      <MetricsSection />

      <WorkflowSection />

      <ProjectsSection />

      <ShowcaseSection />

      <Footer />
    </main>
  );
}