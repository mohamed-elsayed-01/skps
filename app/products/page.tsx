import FilterByIndustry from '@/features/products/components/filter-by-industry';
import Hero from '@/features/products/components/hero';
import Search from '@/features/products/components/search';
import Services from '@/features/products/components/services/services';

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
        </div>
    )
};

export default ProductsPage;