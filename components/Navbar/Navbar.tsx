
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarButton from "./NavbarButton";

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
