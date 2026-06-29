import { Search } from "lucide-react"

const features = [
  {
    img: "/assets/icon-free-access.png",
    title: "100% Free Access",
    sub: "Koi hidden charges nahi",
  },
  {
    img: "/assets/icon-fast-easy.png",
    title: "Fast & Easy",
    sub: "Quick search, instant results",
  },
  {
    img: "/assets/icon-whatsapp-alerts.png",
    title: "WhatsApp Alerts",
    sub: "Naye tenders ki turant jaankari",
  },
  {
    img: "/assets/icon-trusted-secure.png",
    title: "Trusted & Secure",
    sub: "Data safe, humari priority",
  },
]
export default function FinalCTA() {
  return (
    <section className="relative py-16 md:py-32 text-center bg-[#FDF8F0] overflow-hidden">
      
      {/* Background Image - Fixed exactly like Mission.jsx for perfect mobile control */}
      <img 
        src="/assets/cta-bg.png" 
        alt="City Background" 
       className="absolute bottom-0 left-0 w-full h-[27%] md:h-[50%] object-cover object-bottom z-0 mix-blend-multiply opacity-[0.85]"
      />

      <div className="relative z-10 mx-auto px-4 md:px-6">

        {/* Heading — Scaled for mobile, desktop line-breaks hidden on phones */}
        <h2 className="font-playfair text-[28px] md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] md:leading-tight mb-4 md:mb-6">
          Ready to find <br className="hidden md:block" />
          government <br className="hidden md:block" />
          tenders for{" "}
          <span className="text-green-500">free</span>?
        </h2>

        {/* Subtext */}
        <p className="font-lato text-gray-600 text-[13px] md:text-base mb-8 md:mb-10 px-2 md:px-0 leading-relaxed">
          Apna free account banao aur aaj hi opportunities dhoondhna <br className="hidden md:block" />
          shuru karo.
        </p>

        {/* CTA Button - Tightened padding and text size for mobile */}
        <a
          href="https://app.tenderwise.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full text-[13px] md:text-base font-medium transition mb-4 md:mb-6 shadow-md"
        >
          <Search className="w-4 h-4 md:w-[18px] md:h-[18px]" />
          Free Mein Tender Dekho
        </a>

        {/* Small text */}
        <p className="font-lato text-[10px] md:text-sm text-gray-500 mb-10 md:mb-12">
          Sirf WhatsApp number chahiye,{" "}
          <span className="text-green-500 font-medium">na koi fees</span>,{" "}
          <span className="text-green-500 font-medium">na koi kichkhich</span>.
        </p>

        {/* Feature strip — Matched EXACTLY to Hero Section's Mobile Grid Spec */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-y-[20px] md:gap-y-0 gap-x-2 md:gap-x-0 rounded-[12px] md:rounded-2xl max-w-[340px] md:max-w-6xl mx-auto p-4 md:px-0 md:py-0 md:h-[100px] items-center"
          style={{
            background: "#FFFFFF",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-2 md:gap-3 px-1 md:px-6 relative justify-start"
            >
              {/* Desktop Vertical Dividers - Hidden on mobile so they don't break the 2x2 grid */}
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-[50px] w-[1.43px] bg-[#EEEAE7]"></div>
              )}
              
              <img
                src={f.img}
                alt={f.title}
                className="w-7 h-7 md:w-[44px] md:h-[44px] object-contain shrink-0"
              />
              
              <div className="text-left flex flex-col justify-center">
                <p className="font-playfair text-[11px] md:text-[20px] font-bold md:font-medium text-[#4E4B4B] leading-tight md:leading-snug mb-0.5 md:mb-0">
                  {f.title}
                </p>
                <p className="font-lato text-[8px] md:text-xs text-[#4E4B4B] leading-tight md:leading-snug">
                  {f.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}