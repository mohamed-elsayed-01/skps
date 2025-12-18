import { QUALITY_PROCESS_STEPS } from "../../constants";

const DataGrid = () => {
  const RENDER_DATA = QUALITY_PROCESS_STEPS.map((step) => (
    <div key={step.id} className="flex flex-col justify-center items-center">
      <h1 className="bg-accent flex justify-center items-center rounded-full w-12 h-12 text-white">
        {step.id}
      </h1>
      <h2 className="text-black text-lg mt-4 mb-2">{step.title}</h2>
      <p className="max-w-[254px] text-[#374151]">{step.description}</p>
    </div>
  ));
  return (
    <div className="w-full flex justify-between items-center mt-8">
      {RENDER_DATA}
    </div>
  );
};

export default DataGrid;
