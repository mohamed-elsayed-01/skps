import Hero from "@/features/landing/components/Hero/hero";
import Features from "@/features/landing/components/Hero/features";
import Pipeline from "@/features/landing/components/Hero/pipeline";
import MainWhyChooseUs from "@/features/landing/components/WhyChooseUS/why-choose-us";
import OurServices from "@/features/landing/components/OurServices/our-services";
import OurClients from "@/features/landing/components/OurClients/our-clients";
import CaseStudySection from "@/features/landing/components/case-study/case-study-section";
import { case_studies } from "@/features/landing/constants";
import FAQS from "@/features/landing/components/FAQS/FAQS";
import Cta from "@/components/cta/cta";
import ContactSection from "@/features/landing/components/contact/contact-section";
export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Pipeline />
      <MainWhyChooseUs />
      <OurServices />
      <OurClients />
      <CaseStudySection data={case_studies[0]} />
      <CaseStudySection data={case_studies[1]} reversed />
      <FAQS />
      <Cta />
      <ContactSection />
    </div>
  );
}
