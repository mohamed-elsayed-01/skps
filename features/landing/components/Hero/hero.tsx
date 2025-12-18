import { Button } from "@/components/ui/button";
import halfCircle from "@/public/Images/half-circle.png";
import Mouse from "@/public/Images/Mouse.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg-black text-[#FFFFFF] px-4 md:px-0">
      <div className="pt-[61px] text-center">
        <div>
          <h1 className="text-5xl md:text-[56px] leading-[120%] tracking-[-2.24px]">
            <span className="font-extrabold">Tanks and Pipeline</span>
            <br />
            <span className="font-light">Integrity Solutions</span>
          </h1>
        </div>
        <p className="text-base font-normal leading-[26px] mt-4">
          Experts in Preservation, Protection, and Repair
        </p>
        <Button className="px-5 py-6 mt-6 text-lg font-semibold">
          Explore More
        </Button>
      </div>
      <div className="mx-auto w-full">
        <video
          src="/Vids/withPlates.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg"
        />
      </div>
      <div className="w-[161px] h-[82px] relative mx-auto mt-[88px]">
        <Image
          src={halfCircle}
          alt="halfCircle"
          fill
          className="object-contain"
        />
        <div className="absolute z-2 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full flex flex-col justify-center items-center gap-1">
          <Image src={Mouse} alt="Mouse" width={24} height={24} />
          <span className="block text-base font-bold leading-[26px]">
            Scroll Down
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
