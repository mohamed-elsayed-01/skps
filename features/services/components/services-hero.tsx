import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import heroImg from "@/public/Images/service/service-hero.png";
import downloadIcon from "@/public/Images/service/download-icon.svg";
import Image from "next/image";

const ServicesHero = () => {
    return (
        <Hero img={heroImg.src}>
            <div className="h-full max-w-7xl mx-auto flex flex-col justify-center">
                <h1 className="text-white text-4xl font-bold leading-[40px]">
                    Composite Engineering Services
                </h1>
                <p className="w-full max-w-[626px] text-white text-lg leading-7 mt-[15.5px]">
                    Advanced engineering solutions for critical infrastructure repair, reinforcement, and protection using state-of-the-art composite materials and methodologies.
                </p>
                <div className="flex gap-4 mt-[32.5px]">
                    <Button className="bg-accent hover:bg-accent text-white text-base py-[23px]!">
                        Request This Service
                    </Button>
                    <Button variant="outline" className="text-base bg-transparent hover:bg-transparent text-white py-[23px]!">
                        <Image src={downloadIcon.src} alt="download-icon" width={20} height={20} />
                        Download Brochure
                    </Button>
                </div>
            </div>
        </Hero>
    );
};

export default ServicesHero;