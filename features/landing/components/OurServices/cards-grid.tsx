import { SERVICES } from "../../constants";
import Card from "./card";

const CardsGrid = () => {
  const RENDER_SERVICES = SERVICES.map((service) => (
    <Card key={service.id} {...service} />
  ));

  return (
    <div className="flex py-5 gap-11 scrollbar-hide overflow-x-auto w-full">
      {RENDER_SERVICES}
    </div>
  );
};

export default CardsGrid;
