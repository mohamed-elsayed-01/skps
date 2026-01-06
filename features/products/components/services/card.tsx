"use client"
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "@/features/products/interfaces";
import { useRouter } from "next/navigation";
interface IProps {
  card: ServiceItem;
}
const Card = ({ card }: IProps) => {

  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/products/${card.id}`);
  }
  return (
    <div className="h-full pb-4 rounded-2xl shadow-[0_4px_20px_0_rgba(0,0,0,0.10)] overflow-hidden flex flex-col bg-white">
      <div className="flex flex-col gap-4 flex-1">
        <div
          style={{
            backgroundImage: `url(${card.src.src})`,
            backgroundPosition: "center",
          }}
          className="w-full h-[168px] rounded-2xl bg-cover bg-no-repeat"
        />
        <div className="px-4 flex flex-col gap-3 flex-1">
          <span className="block text-xl font-medium leading-7">
            {card.title}
          </span>
          <span className="block text-[#4B5563] text-sm leading-5 font-normal">
            {card.description}
          </span>

          <div onClick={handleOnClick} className="mt-auto flex items-center gap-1 text-accent pt-2">
            <span className="block text-sm font-normal leading-5">
              Learn More
            </span>
            <ArrowRight className="size-[14px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
