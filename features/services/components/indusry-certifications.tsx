import layers from "@/public/Images/service/layers.png"
import Image from "next/image";

interface IProps {
    certifications: string[];
    header: string;
}
const IndusryCertifications = ({ certifications, header }: IProps) => {
    return (
        <div className="bg-[#F9FAFB] rounded-md p-6">
            <span className="block text-black text-lg leading-7 font-semibold">
                {header}
            </span>
            <div className="mt-[16px] space-y-[16px]">
                {
                    certifications.map((certification, index) => (
                        <div key={index} className="flex items-start gap-2">
                            <div className="min-w-8 min-h-8 rounded-md bg-[#DBEAFE] flex items-center justify-center">
                                <Image src={layers} alt="layers" width={16} height={16} />
                            </div>
                            <span className="text-[#374151] font-medium leading-6 text-base">
                                {certification}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default IndusryCertifications;
