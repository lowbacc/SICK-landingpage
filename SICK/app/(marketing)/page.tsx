import NewsletterSection from "@/components/landing/client-section";
import CTAPresentationSection from "@/components/landing/cta-section";
import HeroSection from "@/components/landing/hero-section";
import AboutMeSection from "@/components/landing/aboutme-section";
import FutureFeaturesSection from "@/components/landing/futurefeat-section";


export default async function Page() {
  return (
    <>
      <HeroSection />
      <CTAPresentationSection />
      <AboutMeSection />
      <FutureFeaturesSection />
      <NewsletterSection />

    </>
  );
}
