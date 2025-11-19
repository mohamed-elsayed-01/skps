import Link from "next/link";

export default function FooterBottomBar() {
  return (
    <div className="w-full py-5 bg-transparent">
      <div className="max-w-7xl  mx-auto px-4 flex flex-col md:flex-row justify-between text-gray-400 text-xs">

        <p>2025 SKPS. All rights reserved.</p>

        <div className="flex gap-6 mt-2 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-white">
            [PRIVACY POLICY]
          </Link>
          <Link href="/terms" className="hover:text-white">
            [TERMS OF SERVICE]
          </Link>
        </div>

      </div>
    </div>
  );
}
