import Image, { StaticImageData } from "next/image"


interface IProps {
    items: {
        image: StaticImageData,
        title: string,
        description: string
    }[]
}

const Applications = ({ items }: IProps) => {
    const RENDER_CASE_STUDIES = items.map((c, index) => {
        return (
            <div key={index} className="h-full">
                <div className="w-full h-[210px] relative">
                    <Image src={c.image} alt={c.title} fill className="object-cover" />
                </div>
                <div className="mt-4">
                    <span className="block text-accent text-xl font-medium leading-5">
                        {c.title}
                    </span>
                    <span className="block mt-3 text-[#4B5563] text-base font-normal">
                        {c.description}
                    </span>
                </div>
            </div>
        )
    })

    return (
        <div className="mt-[150px] max-w-7xl mx-auto">
            <span className="block text-[#1F2937] text-3xl leading-9 font-bold">
                Applications
            </span>
            <div className="mt-[31px] grid grid-cols-[repeat(3,1fr)] gap-[78px]">
                {RENDER_CASE_STUDIES}
            </div>
        </div>
    )
}

export default Applications