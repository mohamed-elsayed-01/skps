import EngineeringApproachHeader from "@/features/services/components/engineering-approach-header";
import ComprehensiveAssessmentProcess from "@/features/services/components/comprehensive-assessment-process";
import EngineeringApproachImg from "@/features/services/components/engineering-approach-img";
import IndusryCertifications from "@/features/services/components/indusry-certifications";


const EngineeringApproach = () => {
    return (
        <div className="mt-[116px]">
            <div className="max-w-7xl mx-auto">
                <EngineeringApproachHeader />
                <div className="grid grid-cols-3 gap-x-[40px] justify-between mt-[58px]">
                    <ComprehensiveAssessmentProcess />
                    <EngineeringApproachImg />
                    <IndusryCertifications />
                </div>
            </div>
        </div>
    );
};

export default EngineeringApproach;
