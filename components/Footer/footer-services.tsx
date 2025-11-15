import { services } from "@/constants/footer";

export default function FooterServices() {

  const RENDER_SERVICES = services.map((service) => (
    <li key={service}>{service}</li>
  ))

  return (
    <div>
      <h3 className="text-sm font-semibold tracking-widest text-gray-400 mb-4">
        [SERVICES]
      </h3>

      <ul className="space-y-2 text-sm">
        {RENDER_SERVICES}
      </ul>
    </div>
  );
}
