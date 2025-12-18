import { MISSION_CARDS } from "../../constants";
import Card from "./card";

const CardsGrid = () => {
  return (
    <div className="flex w-full justify-between">
      {MISSION_CARDS.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardsGrid;
