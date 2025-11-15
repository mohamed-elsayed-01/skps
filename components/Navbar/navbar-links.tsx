
import { navLinks } from "@/constants/navbar";
import Link from "next/link";



export default function NavbarLinks() {

  const RENDER_NAVLINKS = navLinks.map((link) => (
    <Link key={link.href} href={link.href} className="hover:text-gray-300 transition">
      {link.label}
    </Link>
  ))

  return (
    <div className="hidden md:flex items-center gap-8">
      {RENDER_NAVLINKS}
    </div>
  );
}
