import CaseStudySection from './parts/case-study-section'
import ConsultingSection from './parts/consulting-section'
import HeroSection from './parts/hero-section'
import ProcessSection from './parts/process-section'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ConsultingSection />
      <ProcessSection />
      <CaseStudySection />
      {/* <CorumaSection /> */}
    </div>
  )
}
