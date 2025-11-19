import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_DATA } from "@/features/landing/constants/index";


const FAQSAccordion = () => {

    const RENDER_FAQS = FAQ_DATA.map((f, idx) => (
        <AccordionItem key={idx} value={`faq-${idx}`} className="bg-white px-5 py-5 rounded-[20px] border border-[#ECEFF2]">
            <AccordionTrigger className="text-lg font-medium leading-[140%] tracking-[-0.8px]">
                {f.question}
            </AccordionTrigger>
            <AccordionContent className="py-0 mt-[16px] text-[#425062] font-normal leading-[26px] text-sm">
                {f.answer}
            </AccordionContent>
        </AccordionItem>
    ))

    return (
        <Accordion type="single" collapsible className="space-y-1">
            {RENDER_FAQS}
        </Accordion>
    )
};

export default FAQSAccordion;