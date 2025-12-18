"use client"
import NavbarButton from "@/components/Navbar/navbar-button";
import NavbarLinks from "@/components/Navbar/navbar-links";
import NavbarLogo from "@/components/Navbar/navbar-logo";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { usePathname } from "next/navigation";


const navbarVariant = cva("w-full py-4 px-4", {
  variants: {
    variant: {
      white: "bg-white text-foreground",
      dark: "bg-black text-white"
    }
  },
  defaultVariants: {
    variant: "white",
  }
})

interface NavbarProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof navbarVariant> { }
export default function Navbar({ variant, className, ...props }: NavbarProps) {
  const pathname = usePathname();
  const finalVariant = variant ?? (pathname === "/" ? "dark" : "white");
  return (
    <nav className={cn(navbarVariant({ variant: finalVariant }), className)} {...props}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavbarLogo variant={finalVariant} />
        <NavbarLinks variant={finalVariant} />
        <NavbarButton variant={finalVariant} />
      </div>
    </nav>
  );
}
