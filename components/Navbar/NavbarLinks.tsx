
import Link from "next/link";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products & Services", href: "/products" },
  { label: "Extended Services", href: "/extended-services" },
  { label: "Contact Us", href: "/contact" },
];

export default function NavbarLinks() {
  return (
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-gray-300 transition"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
