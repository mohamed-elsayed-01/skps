import Image from "next/image";
import logo from "@/public/Images/logo.svg";
export default function FooterAbout() {
  return (
    <div>
      <Image
        src={logo}
        alt="SKPS Logo"
        width={165}
        height={70}
        className="mb-6"
      />

      <p className="text-sm text-gray-400 mb-4">[About Us]</p>

      <p className="text-sm leading-relaxed mb-6 max-w-xs">
        SKPS brings a fresh and innovative approach to the meaning of services.
        Connect with us to learn more!
      </p>

      <div className="flex items-center gap-4 text-white text-xl">
        {/* <FaLinkedin className="hover:text-gray-300 transition cursor-pointer" />
        <FaTwitter className="hover:text-gray-300 transition cursor-pointer" />
        <FaYoutube className="hover:text-gray-300 transition cursor-pointer" /> */}
      </div>
    </div>
  );
}
