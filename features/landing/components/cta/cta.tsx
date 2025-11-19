import grid from "@/public/Images/grid.png"
const Cta = () => {
    return (
        <div className="w-full py-[160px] bg-[#2D343E] relative">
            <div style={{ backgroundImage: `url(${grid.src})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className="absolute inset-0 z-1 w-full h-full" />
            <div className="max-w-7xl mx-auto relative z-2">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <span className="flex justify-center items-center py-[6px] px-3 gap-2 rounded-4xl border border-[#FFFFFF0F] bg-[#FFFFFF0A] text-sm font-medium leading-5 text-white/60">
                        GET STARTED
                    </span>
                    <span className="block text-[40px] font-medium leading-[120%] tracking-[-1.6px] text-[#F9FAFB]">
                        Get Your Techno-Commercial Proposal Today.
                    </span>
                    <span className="text-white/60 text-lg font-normal leading-[26px]">
                        We deliver change.
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Cta;