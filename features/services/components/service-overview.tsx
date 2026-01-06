import KeyBenefits from "./key-benefits";

interface IServiceOverview {
    serviceOverview: string[];
    keyBenefits: {
        icon: string,
        desc: string,
        header: string
    }[];
}

const ServiceOverview = ({ serviceOverview, keyBenefits }: IServiceOverview) => {
    return (
        <div className="max-w-7xl mx-auto pt-[64px]">
            <div className="grid grid-cols-2 gap-[52px]">
                <div>
                    <h2 className="text-[30px] font-bold leading-[36px] text-[#1F2937]">Service Overview</h2>
                    <div className="space-y-4 text-base text-[#4B5563] font-normal leading-6 mt-6">
                        {serviceOverview.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
                <KeyBenefits keyBenefits={keyBenefits} />
            </div>
        </div>
    );
};

export default ServiceOverview;
