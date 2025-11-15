
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Images/logo.svg";

export default function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={logo}
        alt="SKPS Logo"
        width={165}
        height={35}
        className="object-contain"
      />
    </Link>
  );
}
