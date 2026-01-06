import Image, { StaticImageData } from "next/image";

interface IProps {
    items: {
        id: number,
        image: StaticImageData,
        title: string,
        steps: string[]
    }[]
}

const Overview = ({ items }: IProps) => {
    const RENDER_CASE_STUDIES = items.map((c, index) => {
        return (
            <div key={index} className="h-full">
                <div className="w-full h-[210px] relative ">
                    <Image src={c.image} alt={c.title} fill className="object-cover" />
                </div>
                <div className="mt-4">
                    <span className="block text-[#1F2937] leading-7 font-bold text-xl mt-2">
                        {c.title}
                    </span>
                    <ul className="block mt-3 list-disc list-inside text-[#4B5563] text-base font-normal">
                        {c.steps.map((step, index) => {
                            return (
                                <li key={index}>
                                    {step}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    })
    return (
        <div className="mt-[150px] max-w-7xl mx-auto">
            <span className="block text-[#1F2937] text-3xl leading-9 font-bold">
                Overview
            </span>
            <div className="mt-[31px] grid grid-cols-[repeat(3,1fr)] gap-[78px]">
                {RENDER_CASE_STUDIES}
            </div>
        </div>
    );
};

export default Overview;