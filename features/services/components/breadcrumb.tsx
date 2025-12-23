import Link from "next/link";

const Breadcrumb = () => {
    return (
        <div className="bg-[#F3F4F6] px-[80px] py-3">
            <div className="flex items-center gap-2 text-[#6B7280] max-w-7xl mx-auto">
                <Link href="/" className="text-sm font-medium font-normal">Home</Link>
                <span className="text-sm font-normal">/</span>
                <Link href="/" className="text-sm font-normal">Services</Link>
                <span className="text-sm font-normal">/</span>
                <span className="text-sm block text-accent font-medium">
                    Composite Engineering Services
                </span>
            </div>
        </div>
    );
};

export default Breadcrumb;
