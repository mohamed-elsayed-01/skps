import FooterAbout from "./FooterAbout";
import FooterServices from "./FooterServices";
import FooterNavigation from "./FooterNavigation";
import FooterContactSection from "./FooterContactSection";
import FooterBottomBar from "./FooterBottomBar";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2D343E] text-gray-300">
      <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-32">
        <FooterAbout />
        <FooterServices />
        <FooterNavigation />
      </div>

      <FooterContactSection />

      <FooterBottomBar />
    </footer>
  );
}
