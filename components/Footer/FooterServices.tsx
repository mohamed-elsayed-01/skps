export default function FooterServices() {
  const services = [
    "Composite Engineering Services",
    "Corrosion Prevention Coatings",
    "Coating removal by induction",
    "High Performance Coatings",
    "Corrosion Inhibitor System",
    "Ultrasonic Thickness Gauge",
    "Tank Vents & Flame Arresters",
    "Cold welding polymeric solutions",
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold tracking-widest text-gray-400 mb-4">
        [SERVICES]
      </h3>

      <ul className="space-y-2 text-sm">
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  );
}
