import Image from "next/image";
import { CERTIFICATIONS } from "../../constants";
import { Download } from "lucide-react";

const DataGrid = () => {
  const RENDER_DATA = CERTIFICATIONS.map((certification) => (
    <div
      className="flex flex-col items-center justify-center"
      key={certification.id}
    >
      <Image
        src={certification.image}
        alt={certification.title}
        key={certification.id}
      />
      <h3 className="text-xl font-semibold text-black mt-4 mb-2">
        {certification.title}
      </h3>
      <p className=" text-[#4B5563]">{certification.subtitle}</p>
      <p className="text-accent font-medium mt-4 flex items-center gap-1">
        <Download className="w-4 h-4" /> Download Certificate
      </p>
    </div>
  ));
  return <div className="w-full flex justify-between">{RENDER_DATA}</div>;
};

export default DataGrid;
