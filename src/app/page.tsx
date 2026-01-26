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
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <Navigation />
      
      <FadeIn>
        <HeroSection />
      </FadeIn>

      <FadeIn>
        <ScrollingBanner />
      </FadeIn>

      <FadeIn>
        <PortfolioSection />
      </FadeIn>

      <FadeIn>
        <CollaborationSection />
      </FadeIn>

      <FadeIn>
        <ExperienceSection />
      </FadeIn>

      <FadeIn>
        <BeyondScreenSection />
      </FadeIn>

      <FadeIn>
        <BlogSection />
      </FadeIn>

      <FadeIn>
        <TestimonialsSection />
      </FadeIn>

      <FadeIn>
        <LifeWorkSection />
      </FadeIn>

      <FadeIn>
        <ContactFooter />
      </FadeIn>
    </main>
  );
}
