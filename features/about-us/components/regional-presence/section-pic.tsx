import Image from "next/image";
import regionalpresence from "@/public/Images/regional-presence.png";

const SectionPic = () => {
  return (
    <Image
      src={regionalpresence}
      alt="Regional Presence Map"
      width={600}
      height={400}
      className="mt-12 mx-auto"
      loading="lazy"
    />
  );
};

export default SectionPic;
