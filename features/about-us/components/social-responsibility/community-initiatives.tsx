import Image from "next/image";
import communityInitiativesImg from "@/public/Images/social-responsibility/image.png";
import { CircleCheck } from "lucide-react";

const CommunityInitiatives = () => {
  return (
    <div className="flex flex-col">
      <Image
        src={communityInitiativesImg}
        alt="Community Initiatives"
        width={550}
        height={300}
      />

      <h1 className="text-2xl font-semibold my-7">Community Initiatives</h1>

      <p className="text-[#374151] mb-8">
        At SKPS, we believe in creating meaningful impact beyond business.
      </p>

      <ul className="space-y-2 text-[#374151]">
        <li className="flex items-start gap-2">
          <CircleCheck className="w-5 h-5 text-accent" /> Supporting local
          technical education programs
        </li>
        <li className="flex items-start gap-2">
          <CircleCheck className="w-5 h-5 text-accent" /> Providing internship
          opportunities for university students
        </li>
        <li className="flex items-start gap-2">
          <CircleCheck className="w-5 h-5 text-accent" /> Conducting safety
          awareness workshops for communities
        </li>
      </ul>
    </div>
  );
};

export default CommunityInitiatives;
