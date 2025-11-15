import Link from "next/link";

export default function FooterNavigation() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Case study Library", href: "/case-studies" },
    { label: "Credit app form", href: "/credit-app" },
    { label: "Downloads", href: "/downloads" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold tracking-widest text-gray-400 mb-4">
        [NAVIGATION]
      </h3>

      <ul className="space-y-2 text-sm">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
