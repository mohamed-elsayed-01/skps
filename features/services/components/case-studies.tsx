import Image, { StaticImageData } from "next/image";
import { caseStudies } from "@/features/services/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";



interface IProps {
    caseStudies: {
        id: number;
        image: StaticImageData;
        title: string;
        description: string;
    }[];
}

const CaseStudies = ({ caseStudies }: IProps) => {
    const RENDER_CASE_STUDIES = caseStudies.map((c, index) => {
        return (
            <div key={index} className="h-full">
                <div className="w-full h-[210px] relative ">
                    <Image src={c.image} alt={c.title} fill className="object-cover" />
                </div>
                <div className="mt-4">
                    <span className="block text-[#1F2937] leading-7 font-bold text-xl mt-2">
                        {c.title}
                    </span>
                    <span className="block mt-3 text-[#4B5563] text-base font-normal">
                        {c.description}
                    </span>
                </div>
                <div className="mt-4 h-full">
                    <Button variant={"ghost"} className="w-auto h-auto! p-0! text-accent hover:bg-transparent hover:text-accent cursor-pointer">
                        View Case Study
                        <ArrowRight className="size-[16px]" />
                    </Button>
                </div>
            </div>
        )
    })
    return (
        <div className="mt-[150px] max-w-7xl mx-auto">
            <span className="block text-[#1F2937] text-3xl leading-9 font-bold">
                Case Studies
            </span>
            <div className="mt-[31px] grid grid-cols-[repeat(3,1fr)] gap-[78px]">
                {RENDER_CASE_STUDIES}
            </div>
        </div>
    );
};

export default CaseStudies;
