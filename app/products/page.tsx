import FilterByIndustry from '@/features/products/components/filter-by-industry';
import Hero from '@/features/products/components/hero';
import Search from '@/features/products/components/search';

const ProductsPage = () => {
    return (
        <div>
            <Hero>
                <Search />
            </Hero>
            <FilterByIndustry />
        </div>
    )
};

export default ProductsPage;