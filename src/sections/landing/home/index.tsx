"use client";

import dynamic from "next/dynamic";
import HeroSection from "./parts/hero-section";

const ConsultingSection = dynamic(() => import("./parts/consulting-section"));
const ProcessSection = dynamic(() => import("./parts/process-section"));
const CaseStudySection = dynamic(() => import("./parts/case-study-section"));
// const CorumaSection = dynamic(() => import("./parts/coruma-section"));

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ConsultingSection />
      <ProcessSection />
      <CaseStudySection />
      {/* <CorumaSection /> */}
    </div>
  );
}
