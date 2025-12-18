import Cta from "@/components/cta/cta";
import FilterByIndustry from "@/features/products/components/filter-by-industry";
import Services from "@/features/products/components/services/services";
import { Metadata } from "next";
import ProductsHero from "@/features/products/components/products-hero";

export const metadata: Metadata = {
    title: "Products",
    description: "Skps Products",

};

const ProductsPage = () => {
    return (
        <div>
            <ProductsHero />
            <div className="space-y-2">
                <FilterByIndustry />
                <Services />
            </div>
            <Cta showButton />
        </div>
    );
};

export default ProductsPage;
