import { company_overview_cards } from "../../constants";
import Card from "./card";

const CardsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {company_overview_cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardsGrid;
