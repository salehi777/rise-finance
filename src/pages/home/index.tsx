import CaseStudySection from './case-study-section'
import ConsultingSection from './consulting-section'
import HeroSection from './hero-section'
import ProcessSection from './process-section'
import CorumaSection from './coruma-section'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ConsultingSection />
      <ProcessSection />
      <CaseStudySection />
      <CorumaSection />
    </div>
  )
}
