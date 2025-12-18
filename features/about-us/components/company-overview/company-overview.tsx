import CardsGrid from "./cards-grid";
import Description from "./description";

const CompanyOverview = () => {
  return <div className="max-w-7xl mx-auto py-16 flex bg-white justify-between">
    <Description />
    <CardsGrid />
  </div>;
};

export default CompanyOverview;