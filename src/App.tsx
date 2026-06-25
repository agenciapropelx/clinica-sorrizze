import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Differentials from './components/Differentials'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <Hero />
        <Services />
        <Differentials />
        <Team />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
