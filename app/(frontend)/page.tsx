import Header from '@/app/components/common/Header'
import Footer from '@/app/components/common/Footer'
import Hero from '@/app/components/home/Hero'
import AboutUs from '@/app/components/home/AboutUs'
import Services from '@/app/components/home/Services'
import Insights from '@/app/components/home/Insights'

export default async function HomePage() {

  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Insights />
      <Footer />
    </div>
  )
}
