import { sectors } from "@/features/products/constants/index";
import Image from "next/image";

const FilterByIndustry = () => {

    const RENDER_SECTORS = sectors.map((s) => (
        <div key={s.id} className="space-y-2.5 flex flex-col items-center">
            <div className="min-w-[76px] min-h-[76px] relative">
                <Image src={s.src} alt={s.title} fill className="object-cover" />
            </div>
            <span className="block text-sm font-normal leading-5">
                {s.title}
            </span>
        </div>
    ))
    return (
        <div className="bg-[#F9FAFB] py-10 mx-auto flex items-center">
            <div className="w-full max-w-7xl mx-auto h-fit space-y-4">
                <span className="block text-xl font-normal leading-5">
                    Filter by Industry
                </span>
                <div className="flex items-center gap-6">
                    {RENDER_SECTORS}
                </div>
            </div>
        </div>
    )
};

export default FilterByIndustry;