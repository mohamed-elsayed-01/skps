
import Image from "next/image";
import Link from "next/link";
import whitelogo from "@/public/Images/logo.svg";
import darkLogo from "@/public/Images/dark-logo.svg";

interface IProps {
  variant: "white" | "dark" | null | undefined
}

export default function NavbarLogo({ variant }: IProps) {

  const LogoPath = variant === "dark" ? whitelogo : darkLogo;

  return (
    <Link href="/" className="flex items-center">
      <Image
        src={LogoPath}
        alt="SKPS Logo"
        width={165}
        height={35}
        className="object-contain"
      />
    </Link>
  );
}
