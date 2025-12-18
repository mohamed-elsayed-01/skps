import CardsGrid from "./cards-grid";
import Heading from "./heading";

const MissionValuesSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 flex flex-col gap-12 text-center items-center justify-center">
      <Heading />
      <CardsGrid />
    </div>
  );
};

export default MissionValuesSection;
