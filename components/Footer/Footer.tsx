"use client"
import FooterAbout from "@/components/Footer/footer-about";
import FooterBottomBar from "@/components/Footer/footer-bottom-bar";
import FooterContactSection from "@/components/Footer/footer-contact-section";
import FooterNavigation from "@/components/Footer/footer-navigation";
import FooterServices from "@/components/Footer/footer-services";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2D343E] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-32">
        <FooterAbout />
        <FooterServices />
        <FooterNavigation />
      </div>
      <FooterContactSection />
      <FooterBottomBar />
    </footer>
  );
}
