import Image from "next/image";
import { Plus } from "lucide-react";
import { ServiceSection as IServiceSection } from "@/features/products/interfaces";
import Card from "@/features/products/components/services/card";

interface IProps {
  service: IServiceSection;
}

const ServiceSection = ({ service }: IProps) => {
  const RENDER_CARDS = service.items.map((c) => (
    <Card card={c} key={c.title} />
  ));

  return (
    <div className="space-y-4 pb-[58px] max-w-7xl mx-auto">
      <div className="flex justify-between items-center py-6">
        <div className="flex items-center space-x-4">
          <div className="bg-accent w-12 h-12 rounded-full flex justify-center items-center">
            <Image
              src={service.icon}
              alt={`${service.sectionTitle} icon`}
              width={13.75}
              height={13.75}
            />
          </div>
          <div>
            <span className="block text-2xl font-medium leading-8">
              {service.sectionTitle}
            </span>
            <span className="block text-[#4B5563] text-base font-normal leading-8">
              {service.sectionDescription}
            </span>
          </div>
        </div>
        <Plus className="text-accent size-6" />
      </div>
      <div className="w-full grid grid-cols-3 gap-x-[23px] gap-y-[32px]">
        {RENDER_CARDS}
      </div>
    </div>
  );
};

export default ServiceSection;
