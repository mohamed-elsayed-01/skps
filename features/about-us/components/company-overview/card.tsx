import Image from "next/image";
import { CompanyOverviewCards } from "../../interfaces";

const Card = ({ title, description, image }: CompanyOverviewCards) => {
  return (
    <div className="w-full max-w-[285px] p-6 bg-[#F9FAFB]">
      <Image className="mb-4" src={image} alt={title} width={48} height={48} />
      <h1 className="text-xl mb-2">{title}</h1>
      <p className="text-[#4B5563]">{description}</p>
    </div>
  );
};

export default Card;
