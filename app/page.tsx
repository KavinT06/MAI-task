import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import ProjectsGrid from '@/components/ProjectsGrid'
import StoneOffcuts from '@/components/StoneOffcuts'
import WhyChooseMAI from '@/components/WhyChooseMAI'
import OurDifference from '@/components/OurDifference'
import Blog from '@/components/Blog'
import Testimonials from '@/components/Testimonials'
import BottomCTA from '@/components/BottomCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <HowItWorks />
      <ProjectsGrid />
      <StoneOffcuts />
      <WhyChooseMAI />
      <OurDifference />
      <Blog />
      <Testimonials />
      <BottomCTA />
      <Footer />
    </main>
  )
}
