import KeyBenefits from "./key-benefits";



const ServiceOverview = () => {
    return (
        <div className="max-w-7xl mx-auto pt-[64px]">
            <div className="grid grid-cols-2 gap-[52px]">
                <div>
                    <h2 className="text-[30px] font-bold leading-[36px] text-[#1F2937]">Service Overview</h2>
                    <div className="space-y-4 text-base text-[#4B5563] font-normal leading-6 mt-6">
                        <p>
                            SKPS Composite Engineering Services provide comprehensive solutions for the design, analysis, and implementation of advanced composite repairs and reinforcements for critical infrastructure in demanding industrial environments.
                        </p>
                        <p>
                            Our team of specialized engineers combines extensive industry experience with cutting-edge technical knowledge to deliver customized solutions that extend asset life, improve operational efficiency, and reduce maintenance costs.
                        </p>
                        <p>
                            Whether addressing corrosion, mechanical damage, or structural reinforcement needs, our engineering services ensure that every composite application is optimized for performance, compliance, and long-term reliability.
                        </p>
                    </div>
                </div>
                <KeyBenefits />
            </div>
        </div>
    );
};

export default ServiceOverview;
