"use client";
import heroImg from "@/public/Images/frame.png";
import Search from "@/features/products/components/search";
import Hero from "@/components/shared/hero";


const ProductsHero = () => {
    return (
        <Hero img={heroImg.src}>
            <div className="w-full h-full flex justify-center items-center">
                <Search />
            </div>
        </Hero>
    );
};

export default ProductsHero;