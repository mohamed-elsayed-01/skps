import Image from "next/image";
import { keyBenefits } from "../constants";


interface IKeyBenefits {
    keyBenefits: {
        icon: string,
        desc: string,
        header: string
    }[];
}

const KeyBenefits = ({ keyBenefits }: IKeyBenefits) => {


    const RENDER_KEY_BENEFITS = keyBenefits.map((keyBenefit, index) => {
        return (
            <div key={index} className="p-[21px] flex items-start gap-[18px] border border-[#E5E7EB] rounded drop-shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <Image src={keyBenefit.icon} alt={keyBenefit.desc} width={27} height={27} />
                <div className="space-x-2">
                    <span className="block text-[#1F2937] font-semibold leading-6 text-base">{keyBenefit.header}</span>
                    <p className="text-sm text-[#4B5563] font-normal leading-5">{keyBenefit.desc}</p>
                </div>

            </div>
        );
    });
    return (
        <div>
            <h3 className="text-[#1F2937] font-semibold leading-7 text-xl">Key Benefits</h3>
            <div className="mt-6 grid grid-cols-2 gap-6">
                {RENDER_KEY_BENEFITS}
            </div>
        </div>
    );
};

export default KeyBenefits;
