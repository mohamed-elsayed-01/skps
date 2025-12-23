import Hero from "@/components/shared/hero";
import heroImg from "@/public/Images/extends-services/hero-img.png";

const ExtendedServicesHero = () => {
    return (
        <Hero img={heroImg.src}>
            <div className="space-y-6 w-full  h-full flex flex-col text-center justify-center items-center">
                <h1 className="text-5xl font-normal leading-12 text-white">
                    Comprehensive Industrial Services
                </h1>
                <p className="text-white text-xl leading-7 w-full max-w-[758px]">
                    Expert solutions that maximize performance, efficiency, and compliance across critical assets
                </p>
            </div>
        </Hero>
    );
};

export default ExtendedServicesHero;