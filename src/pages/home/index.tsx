import CaseStudySection from './case-study-section'
import ConsultingSection from './consulting-section'
import HeroSection from './hero-section'
import ProcessSection from './process-section'

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
