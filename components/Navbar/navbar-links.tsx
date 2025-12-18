import { navLinks } from "@/constants/navbar";
import clsx from "clsx";
import Link from "next/link";


interface IProps {
  variant: "white" | "dark" | null | undefined
}
export default function NavbarLinks({ variant }: IProps) {

  const RENDER_NAVLINKS = navLinks.map((link) => (
    <Link key={link.href} href={link.href} className={clsx("transition text-nowrap", variant === "dark" ? "hover:text-gray-300" : "hover:text-black")}>
      {link.label}
    </Link>
  ))

  return (
    <div className="hidden md:flex items-center gap-8">
      {RENDER_NAVLINKS}
    </div>
  );
}
