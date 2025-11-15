import NavbarButton from "@/components/Navbar/navbar-button";
import NavbarLinks from "@/components/Navbar/navbar-links";
import NavbarLogo from "@/components/Navbar/navbar-logo";


export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarButton />
      </div>
    </nav>
  );
}
