import { IService } from "@/features/exteneded-services/interfaces"
import arrow from "@/public/Images/extends-services/arrow.png"
import { Check } from "lucide-react"
import Image from "next/image"



interface IProps {
    service: IService
}
const ServiceCard = ({ service }: IProps) => {
    return (
        <div className="flex items-center gap-[32px]">
            <div className="relative min-w-[405.328px] min-h-[361.911px]">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
                <div className="bg-accent w-[64px] h-[67.332px] absolute top-0 left-0 flex justify-center items-center">
                    <Image src={service.icon} alt={service.title} width={30} height={33.666} />
                </div>
            </div>
            <div>
                <span className="block text-[#111827] text-2xl font-medium leading-8">
                    {service.title}
                </span>
                <span className="mt-[18px] block text-[#4B5563] font-normal leading-6 max-w-[694.672px]">
                    {service.description}
                </span>
                <div className="mt-[25.25px] flex items-center justify-between">
                    {
                        service.features.map((f, i) => (
                            <div key={i} className="space-x-3 flex">
                                <span className="rounded-full min-w-5 min-h-5 max-h-5 max-w-5 bg-accent flex justify-center items-center">
                                    <Check className="size-4 text-white" />
                                </span>
                                <div className="space-y-1">
                                    <span className="block text-[#1F2937] leading-6 font-normal">
                                        {f.title}
                                    </span>
                                    <span className="block text-sm text-[#4B5563] leading-5 font-normal">
                                        {f.description}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-[92.58px] flex justify-between items-center">
                    <div className="flex items-center gap-[18px]">
                        <span className="block text-[#6B7280] font-normal leading-5 text-sm">
                            Industries:
                        </span>
                        <div className="flex items-center gap-2">
                            {
                                service.industries.map((i) => (
                                    <span key={i} className="block text-[#4B5563] bg-[#F3F4F6] font-normal leading-5 text-sm px-2 py-1 rounded-full leading-4">
                                        {i}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="block text-accent text-base font-normal leading-6">
                            Learn More
                        </span>
                        <Image src={arrow} alt="arrow" width={16} height={16} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
