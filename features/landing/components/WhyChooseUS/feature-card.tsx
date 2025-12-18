import { FeatureItem } from "@/features/landing/interfaces";

const FeatureCard = ({ id, title, description, isActive }: FeatureItem) => {
  return (
    <div>
      <div className="flex items-center mb-8 gap-1">
        <h1
          className={`
            text-xl font-medium p-2 border rounded-[8px] transition-all duration-500
            ${isActive
              ? "bg-[#2D343E] text-white border-[#2D343E]"
              : "bg-white border-[#D5DBE2]"
            }
          `}
        >
          {id.toString().padStart(2, "0")}
        </h1>
        <div
          className={`flex-1 h-px ${isActive ? "bg-[#2D343E]" : "bg-[#D5DBE2]"
            } `}
        ></div>
      </div>
      <div className="pr-6">
        <h1 className="text-2xl mb-5 font-medium">{title}</h1>
        <p className="text-[#425062] text-lg max-w-[360px]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
