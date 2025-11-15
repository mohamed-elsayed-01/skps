
import NavbarLogo from "@/components/Navbar/NavbarLogo";
import NavbarLinks from "@/components/Navbar/NavbarLinks";
import NavbarButton from "@/components/Navbar/NavbarButton";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarButton />7
      </div>
    </nav>
  );
}
