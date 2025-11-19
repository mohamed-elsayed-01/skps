import { Button } from "@/components/ui/button";
import FAQSAccordion from "./FAQS-accordion";

const FAQS = () => {
    return (
        <div className="py-20 max-w-7xl mx-auto mb-20">
            <div className="w-full grid grid-cols-1 gap-16 lg:grid-cols-[568px_568px] lg:justify-between">
                <div className="space-y-4">
                    <span className="w-fit text-sm font-medium flex py-[6px] px-[12px] justify-center items-center gap-2 rounded-4xl border border-[#D5DBE2] bg-white">
                        FAQS
                    </span>
                    <span className="block text-5xl font-medium leading-[120%] tracking-[-1.92px] text-[#2D343E]">
                        Got questions about SKPS?
                    </span>
                    <p className="self-stretch text-[#425062] text-lg font-normal leading-[26px]">
                        SKPS services in pipeline repairs, corrosion prevention, coatings, and engineering solutions
                    </p>
                    <Button className="py-[22px] px-[20px] bg-[#2D343E] rounded-2xl text-lg font-semibold hover:bg-[#2D343E]/95 cursor-pointer mt-[24px]">
                        More Questions?
                    </Button>
                </div>
                <div>
                    <FAQSAccordion />
                </div>
            </div>
        </div>
    )
};

export default FAQS;