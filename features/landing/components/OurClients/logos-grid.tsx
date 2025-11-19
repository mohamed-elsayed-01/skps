import Image from "next/image";
import { CLIENT_LOGOS } from "../../constants";

const LogosGrid = () => {
  const RENDER_LOGOS = CLIENT_LOGOS.map((logo, index) => (
    <div key={index}>
      <Image
        src={logo}
        alt={`client-logo-${index}`}
        className="object-contain"
      />
    </div>
  ));
  return (
    <section className="py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10 place-items-center">
        {RENDER_LOGOS}
      </div>
    </section>
  );
};

export default LogosGrid;
