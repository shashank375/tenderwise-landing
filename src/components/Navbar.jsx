import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < 10) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className="bg-[#FDF8F2] sticky top-0 z-50 shadow-sm transition-transform duration-300"
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center">
          <img
            src="/src/assets/tenderwise-logo.png"
            alt="TenderWise Logo"
            className="h-8 object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <li><button onClick={() => scrollToSection("kyun-banaya")} className="hover:text-[#472C70] transition">Kyun banaya?</button></li>
          <li><button onClick={() => scrollToSection("kaise-kaam")} className="hover:text-[#472C70] transition">Kaise kaam krta hai?</button></li>
          <li><button onClick={() => scrollToSection("kiske-liye")} className="hover:text-[#472C70] transition">Kiske liye?</button></li>
          <li><button onClick={() => scrollToSection("humari-kahani")} className="hover:text-[#472C70] transition">Humari kahani</button></li>
          <li><button onClick={() => scrollToSection("sawal-jawab")} className="hover:text-[#472C70] transition">Sawal-Jawab</button></li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.tenderwise.in" target="_blank" rel="noopener noreferrer"
            className="text-sm text-[#472C70] border border-[#472C70] px-4 py-2 rounded-full hover:bg-[#472C70] hover:text-white transition">
            Search Tender
          </a>
          <a href="https://app.tenderwise.in" target="_blank" rel="noopener noreferrer"
            className="text-sm bg-[#472C70] text-white px-4 py-2 rounded-full hover:opacity-90 transition">
            Free Account Banao
          </a>
        </div>

        <button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 text-sm text-gray-600 border-t">
          <button onClick={() => scrollToSection("kyun-banaya")} className="hover:text-[#472C70] pt-3 text-left">Kyun banaya?</button>
          <button onClick={() => scrollToSection("kaise-kaam")} className="hover:text-[#472C70] text-left">Kaise kaam krta hai?</button>
          <button onClick={() => scrollToSection("kiske-liye")} className="hover:text-[#472C70] text-left">Kiske liye?</button>
          <button onClick={() => scrollToSection("humari-kahani")} className="hover:text-[#472C70] text-left">Humari kahani</button>
          <button onClick={() => scrollToSection("sawal-jawab")} className="hover:text-[#472C70] text-left">Sawal-Jawab</button>
          <a href="https://app.tenderwise.in" target="_blank" rel="noopener noreferrer"
            className="text-[#472C70] border border-[#472C70] px-4 py-2 rounded-full text-center">
            Search Tender
          </a>
          <a href="https://app.tenderwise.in" target="_blank" rel="noopener noreferrer"
            className="bg-[#472C70] text-white px-4 py-2 rounded-full text-center">
            Free Account Banao
          </a>
        </div>
      )}
    </nav>
  )
}