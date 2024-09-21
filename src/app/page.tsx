import React from "react";
import Header from "@/components/header";
import MainContent from "@/components/landing/main-content";
import AssetServicersComponent from "@/components/landing/sliding";
import TabbedSolutions from "@/components/landing/solutions-tabs";

const RimesLandingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-white">
      <Header />

      <MainContent />
      {/* <div className="z-auto">
        <CapsuleInfo />
      </div> */}
      <div className="mt-32 p-10">
        <AssetServicersComponent />
      </div>
      <div className="mt-6 p-24">
        <TabbedSolutions />
      </div>
    </div>
  );
};

export default RimesLandingPage;
