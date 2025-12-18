import Image from "next/image";
import { MissionCard } from "../../interfaces";

const Card = ({ icon, title, description }: MissionCard) => {
  return (
    <div className="bg-white w-[230px] h-[280px] rounded-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="230"
        height="4"
        viewBox="0 0 228 4"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.00009 0H223.187C225.397 0 227.188 1.79086 227.188 4H0C0 1.79086 1.79092 0 4.00009 0Z"
          fill="#080484"
        />
      </svg>
      <div className="px-7 py-6">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="mx-auto mb-4"
        />
        <h3 className="text-xl text-center mb-3">{title}</h3>
        <p className="text-[#4B5563] text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
