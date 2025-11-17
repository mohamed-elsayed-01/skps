import Hero from "@/features/landing/components/Hero/hero";
import Features from "@/features/landing/components/Hero/features";
import Pipeline from "@/features/landing/components/Hero/pipeline";
import MainWhyChooseUs from "@/features/landing/components/WhyChooseUS/main-why-choose-us";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Features />
      <Pipeline />
      <MainWhyChooseUs />
    </div>
  );
}
