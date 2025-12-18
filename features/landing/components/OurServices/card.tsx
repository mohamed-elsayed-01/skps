import Image from "next/image";
import { ServiceItem } from "@/features/landing/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Card = ({ title, description, image }: ServiceItem) => {
  return (
    <div className="min-w-[320px] md:min-w-[460px] rounded-2xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
      {" "}
      <Image
        src={image}
        alt={title}
        className="rounded-t-2xl"
        width={460}
        height={192}
        loading="lazy"
      />
      <div className="bg-white rounded-b-2xl px-6 py-4">
        <h1 className="text-[20px] mb-2.5 font-bold">{title}</h1>
        <p className="text-[#374151] mb-5">{description}</p>
        <Link
          href="/"
          className="text-accent font-medium inline-flex items-center gap-2"
        >
          Learn More <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Card;
