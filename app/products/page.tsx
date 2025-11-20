import Cta from "@/components/cta/cta";
import FilterByIndustry from "@/features/products/components/filter-by-industry";
import Hero from "@/features/products/components/hero";
import Search from "@/features/products/components/search";
import Services from "@/features/products/components/services/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Skps Products",
 
};

const ProductsPage = () => {
  return (
    <div>
      <Hero>
        <Search />
      </Hero>
      <div className="space-y-2">
        <FilterByIndustry />
        <Services />
      </div>
      <Cta showButton />
    </div>
  );
};

export default ProductsPage;
