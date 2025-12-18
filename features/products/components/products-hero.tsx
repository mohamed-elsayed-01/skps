"use client";
import heroImg from "@/public/Images/frame.png";
import Search from "@/features/products/components/search";
import Hero from "@/components/shared/hero";


const ProductsHero = () => {
    return (
        <Hero img={heroImg.src}>
            <Search />
        </Hero>
    );
};

export default ProductsHero;