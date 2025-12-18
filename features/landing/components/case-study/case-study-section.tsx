import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface IProps {
  data: {
    src: StaticImageData;
    heading: string;
    description: string;
    steps: string[];
  };
  reversed?: boolean;
}

const CaseStudySection = ({ data, reversed = false }: IProps) => {
  const RENDER_STEPS = data.steps.map((s, idx) => (
    <li key={idx} className="">
      {idx + 1}. {s}
    </li>
  ));

  return (
    <div className="max-w-7xl mx-auto py-[80px]">
      <div className="grid grid-cols-[568px_568px] justify-between items-center gap-16">
        <Image src={data.src} alt="frame1" width={568} height={568} />
        <div
          className={clsx(
            "space-y-[58px]",
            reversed ? "order-first" : "order-last"
          )}
        >
          <div className="flex flex-col gap-4">
            <div className="w-fit flex items-center justify-center py-[6px] px-[12px] gap-2 rounded-[32px] border border-[#D5DBE2] bg-[#FFF]">
              <span className="block text-[#667B91] text-sm font-medium leading-5">
                Case Study
              </span>
            </div>
            <span className="block text-[40px] font-medium leading-[120%] tracking-[-1.6px]">
              {data.heading}
            </span>
            <div className="space-y-[30px] text-[#425062] text-lg leading-[26px] font-normal">
              <span className="block">{data.description}</span>
              <ol>{RENDER_STEPS}</ol>
            </div>
          </div>
          <Button className="py-6 px-5 bg-[#2D343E] text-lg font-semibold hover:bg-[#2D343E]/95 cursor-pointer">
            Details of work
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySection;
