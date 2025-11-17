import Hero from "@/features/landing/components/Hero/hero";
import MainWhyChooseUs from "@/features/landing/components/WhyChooseUS/main-why-choose-us";

/**
 * Renders the landing page Home content.
 *
 * Displays the Hero section followed by the MainWhyChooseUs section.
 *
 * @returns The JSX element containing the Hero and MainWhyChooseUs components
 */
export default function Home() {
  return (
    <div>
      <Hero />
      <MainWhyChooseUs />
    </div>
  );
}