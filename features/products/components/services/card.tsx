import { ArrowRight } from 'lucide-react';
import { ServiceItem } from "@/features/products/interfaces";
interface IProps {
    card: ServiceItem
}
const Card = ({ card }: IProps) => {
    return (
        <div className="min-w-[372px] max-w-[372px]  pb-4 rounded-2xl shadow-[0_4px_20px_0_rgba(0,0,0,0.10)] overflow-hidden">
            <div className="flex flex-col gap-4 self-stretch">
                <div style={{
                    backgroundImage: `url(${card.src.src})`,
                    backgroundPosition : "center"

                }} className="w-full h-[168px] rounded-3xl"></div>
                <div className="px-4 flex flex-col gap-3">
                    <span className="block text-xl font-medium leading-7">
                        {card.title}
                    </span>
                    <span className="block text-[#4B5563] text-sm leading-5 font-normal">
                        {card.description}
                    </span>
                    <div className="flex items-center gap-1 text-accent">
                        <span className="block text-sm font-normal leading-5">Learn More</span>
                        <ArrowRight className='size-[14px]' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;