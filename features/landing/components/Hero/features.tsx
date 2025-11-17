import { MINI_FEATURES } from "../../constants";

const Features = () => {
  const RENDER_FEATURES = MINI_FEATURES.map((item, index) => (
    <div
      key={index}
      className="px-16 flex items-center border-r border-[#434343] last:border-none"
    >
      <span className="text-4xl font-bold whitespace-nowrap">{item.label}</span>
    </div>
  ));

  return (
    <div className="py-20 px-[100px] bg-secondary text-white">
      <div className="flex items-center justify-center">{RENDER_FEATURES}</div>
    </div>
  );
};

export default Features;
