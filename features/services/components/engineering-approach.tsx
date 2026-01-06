import EngineeringApproachHeader from "@/features/services/components/engineering-approach-header";
import ComprehensiveAssessmentProcess from "@/features/services/components/comprehensive-assessment-process";
import EngineeringApproachImg from "@/features/services/components/engineering-approach-img";
import IndusryCertifications from "@/features/services/components/indusry-certifications";
import { StaticImageData } from "next/image";

interface IProps {
    leftPart: {
        header: string;
        subheader?: string;
        equipments: string[];
    }
    thumbnail: {
        image: StaticImageData;
        title: string;
    }
    certifications: string[];
    header2: string;
}
const EngineeringApproach = ({ leftPart, thumbnail, certifications, header2 }: IProps) => {
    return (
        <div className="mt-[116px]">
            <div className="max-w-7xl mx-auto">
                <EngineeringApproachHeader />
                <div className="grid grid-cols-3 gap-x-[40px] justify-between mt-[58px]">
                    <ComprehensiveAssessmentProcess data={leftPart} />
                    <EngineeringApproachImg thumbnail={thumbnail} />
                    <IndusryCertifications certifications={certifications} header={header2} />
                </div>
            </div>
        </div>
    );
};

export default EngineeringApproach;
