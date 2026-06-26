import { useNavigate } from "react-router-dom"
import tenderwiseLogo from "../assets/tenderwise-logo.png"
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
    <footer className="bg-[#FAF8FC] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

          <div className="md:col-span-5 flex flex-col gap-5">
            <img
              src={tenderwiseLogo}
              alt="TenderWise Logo"
              className="h-8 object-contain self-start cursor-pointer"
              onClick={() => navigate("/")}
            />
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              India ka free tender discovery platform.<br />
              Built by a contractor, for contractors.
            </p>
            <div className="mt-2 bg-[#F0EBFA] text-[#472C70] text-xs sm:text-sm font-medium px-4 py-3 rounded-xl w-fit">
              Government tender information should be free
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 mb-1">Platform</h3>
            <button onClick={() => scrollToSection("kyun-banaya")} className="text-gray-600 hover:text-[#472C70] text-sm transition text-left">Kyun banaya?</button>
            <button onClick={() => scrollToSection("kaise-kaam")} className="text-gray-600 hover:text-[#472C70] text-sm transition text-left">Kaise kaam karta hai</button>
            <button onClick={() => scrollToSection("kiske-liye")} className="text-gray-600 hover:text-[#472C70] text-sm transition text-left">Kiske liye</button>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 mb-1">Contact</h3>
            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#472C70] text-sm transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              WhatsApp
            </a>
            <a href="mailto:hello@publig.in" className="flex items-center gap-2 text-[#472C70] hover:opacity-80 text-sm transition">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hello@publig.in
            </a>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 mb-1">Company</h3>
            <button onClick={() => scrollToSection("humari-kahani")} className="text-gray-600 hover:text-[#472C70] text-sm transition text-left">Humari kahani</button>
            <button onClick={() => scrollToSection("sawal-jawab")} className="text-gray-600 hover:text-[#472C70] text-sm transition text-left">Sawal-Jawab</button>
            <a href="/privacy-policy" className="text-gray-600 hover:text-[#472C70] text-sm transition">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-600 hover:text-[#472C70] text-sm transition">Terms of Service</a>
            <a href="/dpdp-policy" className="text-gray-600 hover:text-[#472C70] text-sm transition">DPDP</a>
          </div>

        </div>

        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm text-center md:text-left">
            © 2026 TenderWise. Public information, freely accessible.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Banaya gaya <span className="text-[#472C70] font-bold">contractors ke liye</span> 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}