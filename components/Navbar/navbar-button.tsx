
import Link from "next/link";

export default function NavbarButton() {
  return (
    <Link href="/request-quotation" className="bg-white text-black px-4 py-2 rounded-md transition hover:bg-gray-200">
      Request for Quotation
    </Link>
  );
}
