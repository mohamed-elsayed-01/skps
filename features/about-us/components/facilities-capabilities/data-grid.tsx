import Image from "next/image";
import { INFRASTRUCTURE_ITEMS } from "../../constants";

const DataGrid = () => {
  const RENDER_DATA = INFRASTRUCTURE_ITEMS.map((item) => (
    <div className="rounded-lg" key={item.id}>
      <div className="relative rounded-lg">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={200}
          className="rounded-t-lg"
        />
        <div className="absolute rounded-t-lg p-6 flex items-end h-full w-full bg-black/50 bottom-0">
          <h2 className="text-white text-lg">{item.title}</h2>
        </div>
      </div>
      <div className="p-6 rounded-b-lg flex flex-col bg-white">
        <Image
          src={item.icon}
          alt={item.title}
          className="mb-4"
          width={40}
          height={40}
        />
        <p className="max-w-[310px] text-[#4B5563]">{item.description}</p>
      </div>
    </div>
  ));
  return (
    <div className="w-full flex justify-between text-start">{RENDER_DATA}</div>
  );
};

export default DataGrid;
