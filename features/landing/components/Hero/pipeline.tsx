import Image from "next/image";
import pipeline from "@/public/Images/pipeline.png";
const Pipeline = () => {
  return (
    <div className="bg-black w-full">
      <Image src={pipeline} alt="pipeline" className="w-full" />
    </div>
  );
};

export default Pipeline;
