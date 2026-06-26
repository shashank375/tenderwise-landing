import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DPDPPolicy from "./pages/DPDPPolicy";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import BeforeAfter from "./components/BeforeAfter"
import Stats from "./components/Stats"
import WhySection from "./components/WhySection"
import HowItWorks from "./components/HowItWorks"
import WhoIsItFor from "./components/WhoIsItFor"
import OurStory from "./components/OurStory"
import Mission from "./components/Mission"
import FAQ from "./components/FAQ"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"

function Mainpage() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }, [location])

  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <BeforeAfter />
      <Stats />
      <WhySection />
      <HowItWorks />
      <WhoIsItFor />
      <OurStory />
      <Mission />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/dpdp-policy" element={<DPDPPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}