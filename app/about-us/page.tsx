import Cta from "@/components/cta/cta";
import CertificationsSection from "@/features/about-us/components/certifications/certifications-section";
import CompanyOverview from "@/features/about-us/components/company-overview/company-overview";
import FacilitiesCapabilitiesSection from "@/features/about-us/components/facilities-capabilities/facilities-capabilities-section";
import LeadersTeamSection from "@/features/about-us/components/leaders-team/leaders-team-section";
import MethodologySection from "@/features/about-us/components/methodology/methodology-section";
import MissionValuesSection from "@/features/about-us/components/mission-values/mission-values-section";
import RegionalPresenceSection from "@/features/about-us/components/regional-presence/regional-presence-section";
import SocialResponsibilitySection from "@/features/about-us/components/social-responsibility/social-responsibility-section";
import Timeline from "@/features/about-us/components/timeline/timeline";
import VisionMissionSection from "@/features/about-us/components/vision-mission/vision-mission-section";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-white">
        <CompanyOverview />
      </div>
      <div className="bg-[#F9FAFB]">
        <MissionValuesSection />
      </div>
      <div className="bg-white">
        <RegionalPresenceSection />
      </div>
      <div className="bg-[#F9FAFB]">
        <Timeline />
      </div>
      <div className="bg-white">
        <LeadersTeamSection />
      </div>
      <div className="bg-accent">
        <VisionMissionSection />
      </div>
      <div className="bg-[#F9FAFB]">
        <CertificationsSection />
      </div>
      <div className="bg-[#F9FAFB]">
        <MethodologySection />
      </div>
      <div className="bg-[#F9FAFB]">
        <FacilitiesCapabilitiesSection />
      </div>
      <div className="bg-white">
        <SocialResponsibilitySection />
      </div>
      <Cta />
    </div>
  );
};

export default AboutUs;
