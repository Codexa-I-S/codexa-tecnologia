import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogosSection } from "@/components/logos-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { AlternatingSections } from "@/components/AlternatingSections"
import { ContactFormSection } from "@/components/ContactFormSection"


export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <LogosSection />
        <AlternatingSections/>
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        {/* <CTASection /> */}
        <ContactFormSection/>
      </main>
      <Footer />
    </div>
  )
}
