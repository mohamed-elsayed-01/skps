import { Button } from "@/components/ui/button";
import CardsGrid from "@/features/landing/components/OurServices/cards-grid";
import Heading from "@/features/landing/components/OurServices/heading";

const OurServices = () => {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto gap-12 w-full flex flex-col items-center">
      {" "}
      <Heading />
      <CardsGrid />
      <Button className="px-5 py-6 bg-[#2D343E] text-lg font-semibold">
        Explore More
      </Button>
    </div>
  );
};

export default OurServices;
