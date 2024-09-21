import React from "react";
import Header from "@/components/header";
import MainContent from "@/components/landing/main-content";
import AssetServicersComponent from "@/components/landing/sliding";
import TabbedSolutions from "@/components/landing/solutions-tabs";
import { AppleCardsCarouselDemo } from "@/components/landing/carousel";
import AwardCarousel from "@/components/landing/award-carousel";
import StatsDashboard from "@/components/landing/stat-grid";
import PartnerGrid from "@/components/landing/partner-grid";

const RimesLandingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-white pb-20">
      <Header />

      <MainContent />
      {/* <div className="z-auto">
        <CapsuleInfo />
      </div> */}
      <div className="mt-32 p-10">
        <AssetServicersComponent />
      </div>
      <div className="mt-6 p-24 pb-10">
        <TabbedSolutions />
      </div>
      <div className="p-20 py-0">
        <AppleCardsCarouselDemo />
      </div>
      <div className="p-20 py-0 flex justify-center">
        <AwardCarousel />
      </div>
      <div className="p-20 py-10 flex justify-center">
        <StatsDashboard />
      </div>
      <div className="p-20 py-10 flex justify-center">
        <PartnerGrid />
      </div>
    </div>
  );
};

export default RimesLandingPage;
