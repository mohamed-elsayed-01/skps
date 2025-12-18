import { MINI_FEATURES } from "@/features/landing/constants";

const Features = () => {
  const RENDER_FEATURES = MINI_FEATURES.map((item, index) => (
    <div
      key={index}
      className="px-10 flex items-center border-r border-[#434343] last:border-none"
    >
      <span className="text-4xl font-bold whitespace-nowrap">{item.label}</span>
    </div>
  ));

  return (
    <div className="bg-secondary">
      <div className="py-20 max-w-7xl mx-auto text-white">
        <div className="flex items-center justify-center">
          {RENDER_FEATURES}
        </div>
      </div>
    </div>
  );
};

export default Features;
