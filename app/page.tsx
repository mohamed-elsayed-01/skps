import Hero from "@/features/landing/components/Hero/hero";
import Features from "@/features/landing/components/Hero/features";
import Pipeline from "@/features/landing/components/Hero/pipeline";
import MainWhyChooseUs from "@/features/landing/components/WhyChooseUS/why-choose-us";
import OurServices from "@/features/landing/components/OurServices/our-services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Pipeline />
      <MainWhyChooseUs />
      <OurServices />
    </div>
  );
}
