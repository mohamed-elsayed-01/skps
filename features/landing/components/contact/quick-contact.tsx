import { CONTACT_INFO } from "@/features/landing/constants";
import Image from "next/image";

const QuickContact = () => {

    const RENDER_CONTACT_INFO_WAYS = CONTACT_INFO.map((c) => (
        <div key={c.value} className="flex gap-4 items-start">
            <div className="min-w-[44px] min-h-[44px] rounded-full bg-[#e1e1ee] flex justify-center items-center" aria-hidden="true" >
                <Image src={c.icon} width={17.5} height={17.5} alt={c.type} />
            </div>
            <div className="space-y-1">
                <span className="block text-[#111827] leading-6 font-normal text-base">
                    {c.type}
                </span>
                <span className="block text-[#4B5563] leading-6 font-normal text-base">
                    {c.value}
                </span>
                <span className="block text-[#6B7280] leading-5 font-normal text-sm">
                    {c.note}
                </span>
            </div>
        </div>
    ))
    return (
        <div className="w-full">
            <div className="bg-accent p-6 space-y-2 rounded-md">
                <span className="block text-white text-xl leading-7 font-normal">
                    Quick Contact
                </span>
                <span className="block text-white/80 font-normal text-sm leading-5">
                    Need immediate assistance? Reach out directly.
                </span>
            </div>
            <div className="p-6">
                <div className="space-y-6">
                    {RENDER_CONTACT_INFO_WAYS}
                </div>
            </div>
        </div>
    )
};

export default QuickContact;