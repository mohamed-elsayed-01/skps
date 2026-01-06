import { Check } from "lucide-react";
import { assessmentProcess } from "@/features/services/constants";

interface IProps {
    data: {
        header: string;
        subheader?: string;
        equipments: string[];
    }
}
const ComprehensiveAssessmentProcess = ({ data }: IProps) => {
    const RENDER_ASSESSMENT_PROCESS = data.equipments.map((item, index) => (
        <div key={index} className="flex items-start gap-[14px]">
            <span className="rounded-full min-w-4 min-h-4 size-4 bg-accent flex items-center justify-center">
                <Check className="text-white size-[12px]" />
            </span>
            <span className="block text-black text-base font-normal leading-none">
                {item}
            </span>
        </div>
    ))
    return (
        <div>
            <span className="block text-black text-xl leading-7 font-semibold">
                {data.header}
            </span>
            {
                data.subheader && (
                    <p className="text-[#4B5563] text-base leading-6 font-normal mt-4">
                        {data.subheader}
                    </p>
                )
            }
            <div className="mt-6 space-y-[16px]">
                {RENDER_ASSESSMENT_PROCESS}
            </div>
        </div>
    );
};

export default ComprehensiveAssessmentProcess;