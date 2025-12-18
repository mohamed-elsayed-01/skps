import CommunityInitiatives from "./community-initiatives";
import Features from "./features";
import OurCommitment from "./our-commitment";

const SocialResponsibilitySection = () => {
  return (
    <div className="max-w-7xl text-center py-16 mx-auto">
      <h1 className="text-accent text-3xl mb-12">
        Corporate Social Responsibility
      </h1>
      <div className="flex justify-between gap-[84px] text-start">
        <CommunityInitiatives />
        <div className="flex flex-col gap-8">
          <Features />
          <OurCommitment />
        </div>
      </div>
    </div>
  );
};

export default SocialResponsibilitySection;
