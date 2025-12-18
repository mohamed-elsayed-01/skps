const SectionData = () => {
  return (
    <div>
      <h1 className="text-accent text-3xl mb-6">Regional Presence</h1>

      <p className="text-[#374151] text-[18px] max-w-[590px] mb-6">
        With a strategic operational footprint across GCC and broader MENA
        markets, SKPS delivers localized support with global expertise. Our
        network of facilities and partnerships ensures rapid response and
        consistent service quality across the region.
      </p>

      <ul className="space-y-4 text-[#374151] text-[18px]">
        <li className="flex items-start gap-3">
          <span className="mt-1 text-accent">✔</span>
          Operational footprint across GCC and broader MENA markets
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-1 text-accent">✔</span>
          Strategic partnerships with local and regional agents
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-1 text-accent">✔</span>
          Mobile and on-site units enabling quick-response capabilities across
          the GCC region
        </li>
      </ul>
    </div>
  );
};

export default SectionData;
