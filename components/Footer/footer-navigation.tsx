import { navLinks } from "@/constants/footer";
import Link from "next/link";

export default function FooterNavigation() {



  const RENDER_NAV_LINKS = navLinks.map((link) => (
    <li key={link.href}>
      <Link href={link.href} className="hover:text-white">
        {link.label}
      </Link>
    </li>
  ))


  return (
    <div>
      <h3 className="text-sm font-semibold tracking-widest text-gray-400 mb-4">
        [NAVIGATION]
      </h3>
      <ul className="space-y-2 text-sm">
        {RENDER_NAV_LINKS}
      </ul>
    </div>
  );
}
