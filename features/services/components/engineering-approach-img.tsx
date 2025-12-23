import engineeringApproachImg from "@/public/Images/service/engineering-approach-img.png"
import Image from "next/image";

const EngineeringApproachImg = () => {
    return (
        <div>
            <Image src={engineeringApproachImg} alt="EngineeringApproachImg" width={465} height={295} className="aspect-93/59" />
            <p className="text-[#6B7280] text-sm font-normal leading-5 mt-[26px]">
                Our engineers using advanced equipment to assess pipeline integrity at a major petrochemical facility
            </p>
        </div>
    );
};

export default EngineeringApproachImg;
