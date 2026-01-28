import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { PortfolioSection } from "@/components/PortfolioSection";
import { CollaborationSection } from "@/components/CollaborationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { BeyondScreenSection } from "@/components/BeyondScreenSection";
import { BlogSection } from "@/components/BlogSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LifeWorkSection } from "@/components/LifeWorkSection";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ScrollingBanner />
      <PortfolioSection />
      <CollaborationSection />
      <ExperienceSection />
      <TestimonialsSection />
      <BlogSection />
      <LifeWorkSection />
      <ContactFooter />
    </main>
  );
}
