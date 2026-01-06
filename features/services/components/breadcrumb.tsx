import Link from "next/link";

interface IBreadcrumb {
    title: string;
}
const Breadcrumb = ({ title }: IBreadcrumb) => {
    return (
        <div className="bg-[#F3F4F6] px-[80px] py-3">
            <div className="flex items-center gap-2 text-[#6B7280] max-w-7xl mx-auto">
                <Link href="/" className="text-sm font-medium font-normal">Home</Link>
                <span className="text-sm font-normal">/</span>
                <Link href="/products" className="text-sm font-normal">Products</Link>
                <span className="text-sm font-normal">/</span>
                <span className="text-sm block text-accent font-medium">
                    {title}
                </span>
            </div>
        </div>
    );
};

export default Breadcrumb;
