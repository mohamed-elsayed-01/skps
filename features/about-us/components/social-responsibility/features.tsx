import Image from "next/image";
import { SOCIAL_RESPONSIBILITY_CARDS } from "../../constants";

const Features = () => {
  const RENDER_DATA = SOCIAL_RESPONSIBILITY_CARDS.map((card) => (
    <div
      className="w-[280px] h-[240px] flex flex-col gap-2 p-6 shadow-xs rounded-lg"
      key={card.id}
    >
      <Image
        src={card.icon}
        alt={card.title}
        width={40}
        height={40}
        className="mb-4"
      />
      <h2 className="text-xl">{card.title}</h2>
      <p className="text-[#4B5563]">{card.description}</p>
    </div>
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{RENDER_DATA}</div>
  );
};

export default Features;
