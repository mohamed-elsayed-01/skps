import { Check } from "lucide-react";
import { assessmentProcess } from "@/features/services/constants";


const ComprehensiveAssessmentProcess = () => {
    const RENDER_ASSESSMENT_PROCESS = assessmentProcess.map((item, index) => (
        <div key={index} className="flex items-center gap-[14px]">
            <span className="rounded-full size-4 bg-accent flex items-center justify-center">
                <Check className="text-white size-[12px]" />
            </span>
            <span className="block text-black text-base font-normal leading-6">
                {item}
            </span>
        </div>
    ))
    return (
        <div>
            <span className="block text-black text-xl leading-7 font-semibold">
                Comprehensive Assessment Process
            </span>
            <p className="text-[#4B5563] text-base leading-6 font-normal mt-4">
                Our engineers conduct thorough evaluations of your assets to identify critical issues and determine the optimal composite solution. This includes:
            </p>
            <div className="mt-6 space-y-[16px]">
                {RENDER_ASSESSMENT_PROCESS}
            </div>
        </div>
    );
};

export default ComprehensiveAssessmentProcess;