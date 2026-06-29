import { useNavigate } from "react-router-dom"
export default function Footer() {
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#FAF8FC] pt-10 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        
        {/* Main Grid: Reduced gap from gap-10 to gap-8 on mobile to tighten sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-8 md:mb-12">

          {/* Logo & Intro Section */}
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-5 mb-2 md:mb-0">
            <img
              src="/assets/Tenderwise-logo.png"
              alt="TenderWise Logo"
              className="h-7 md:h-8 object-contain w-auto" 
              style={{alignSelf: "flex-start"}}
              onClick={() => navigate("/")}
            />
            <p className="font-lato text-gray-600 text-[12px] md:text-sm leading-relaxed max-w-sm">
              India ka free tender discovery platform.<br className="hidden md:block" />
              Built by a contractor, for contractors.
            </p>
            <div className="mt-1 md:mt-2 bg-[#F0EBFA] text-[#472C70] font-lato text-[10.5px] md:text-sm font-bold px-3 py-2 md:px-4 md:py-3 rounded-[8px] md:rounded-xl w-fit">
              Government tender information should be free
            </div>
          </div>

          {/* Platform Links */}
          <div className="md:col-span-2 flex flex-col gap-2.5 md:gap-4">
            <h3 className="font-playfair text-[16px] md:text-[18px] font-bold text-gray-900 mb-0.5 md:mb-1">Platform</h3>
            <button onClick={() => scrollToSection("kyun-banaya")} className="font-lato text-gray-600 hover:text-[#472C70] text-[13px] md:text-sm transition text-left">Kyun banaya?</button>
            <button onClick={() => scrollToSection("kaise-kaam")} className="font-lato text-gray-600 hover:text-[#472C70] text-[13px] md:text-sm transition text-left">Kaise kaam karta hai</button>
            <button onClick={() => scrollToSection("kiske-liye")} className="font-lato text-gray-600 hover:text-[#472C70] text-[13px] md:text-sm transition text-left">Kiske liye</button>
          </div>

          {/* Contact Links */}
          <div className="md:col-span-2 flex flex-col gap-2.5 md:gap-4">
            <h3 className="font-playfair text-[16px] md:text-[18px] font-bold text-gray-900 mb-0.5 md:mb-1">Contact</h3>
            <a href="#" className="flex items-center gap-2 font-lato text-gray-600 hover:text-[#472C70] text-[13px] md:text-sm transition">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              WhatsApp
            </a>
            <a href="mailto:hello@publig.in" className="flex items-center gap-2 font-lato text-[#472C70] hover:opacity-80 text-[13px] md:text-sm transition">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#472C70] md:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hello@publig.in
            </a>
          </div>

          {/* Company Links */}
          <div className="md:col-span-3 flex flex-col gap-2.5 md:gap-4">
            <h3 className="font-playfair text-[16px] md:text-[18px] font-bold text-gray-900 mb-0.5 md:mb-1">Company</h3>
            <button onClick={() => scrollToSection("humari-kahani")} className="font-lato text-gray-600 hover:text-[#472C70] text-[13px] md:text-sm transition text-left">Humari kahani</button>
            <button onClick={() => scrollToSection("sawal-jawab")} className="font-lato text-gray-600 hover:text-[#472C70] text-[13px] md:text-sm transition text-left">Sawal-Jawab</button>
            <a href="/privacy-policy" className="font-lato text-gray-600 hover:text-[#472C70] text-[13px] md:text-sm transition">Privacy Policy</a>
            <a href="/terms-of-service" className="font-lato text-gray-600 hover:text-[#472C70] text-[13px] md:text-sm transition">Terms of Service</a>
            <a href="/dpdp-policy" className="font-lato text-gray-600 hover:text-[#472C70] text-[13px] md:text-sm transition">DPDP</a>
          </div>

        </div>

        {/* Bottom Copyright Bar - Scaled typography for mobile */}
        <div className="border-t border-gray-200 pt-5 md:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="font-lato text-gray-500 text-[11px] md:text-sm text-center md:text-left">
            © 2026 TenderWise. Public information, freely accessible.
          </p>
          <p className="font-lato text-gray-600 text-[11.5px] md:text-sm flex items-center gap-1">
            Banaya gaya <span className="text-[#472C70] font-bold">contractors ke liye</span> 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}