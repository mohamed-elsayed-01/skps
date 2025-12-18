
import clsx from "clsx";
import Link from "next/link";


interface IProps {
  variant: "white" | "dark" | null | undefined
}


export default function NavbarButton({ variant }: IProps) {
  return (
    <Link href="/request-quotation" className={clsx("px-4 py-2 rounded-md transition text-nowrap", variant === "dark" ? "bg-white text-foreground hover:bg-gray-200" : "bg-accent text-white hover:opacity-90")}>
      Request for Quotation
    </Link>
  );
}
