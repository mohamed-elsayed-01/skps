import { Button } from "@/components/ui/button";
import CardsGrid from "./cards-grid";
import Heading from "./heading";

const OurServices = () => {
  return (
    <div className="py-10 px-20 gap-12 w-full flex flex-col items-center ">
      <Heading />
      <CardsGrid />
      <Button className="px-5 py-6 bg-[#2D343E] text-lg font-semibold">
        Explore More
      </Button>
    </div>
  );
};

export default OurServices;
