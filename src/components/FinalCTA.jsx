import { Search } from "lucide-react"

const features = [
  {
    img: "/src/assets/icon-free-access.png",
    title: "100% Free Access",
    sub: "Koi hidden charges nahi",
  },
  {
    img: "/src/assets/icon-fast-easy.png",
    title: "Fast & Easy",
    sub: "Quick search, instant results",
  },
  {
    img: "/src/assets/icon-whatsapp-alerts.png",
    title: "WhatsApp Alerts",
    sub: "Naye tenders ki turant jaankari",
  },
  {
    img: "/src/assets/icon-trusted-secure.png",
    title: "Trusted & Secure",
    sub: "Data safe, humari priority",
  },
]
export default function FinalCTA() {
  return (
    <section
      className="relative py-32 text-center"
      style={{
        backgroundImage: "url('/src/assets/cta-bg.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FDF8F0",
      }}
    >
      <div className="relative z-10 mx-auto px-6">

        {/* Heading — Playfair */}
        <h2
          className="font-playfair text-5xl font-bold text-gray-900 leading-tight mb-6"
        >
          Ready to find <br />
          government <br />
          tenders for{" "}
          <span className="text-green-500">free</span>?
        </h2>

        {/* Subtext — Lato */}
        <p className="font-lato text-gray-600 text-base mb-10">
          Apna free account banao aur aaj hi opportunities dhoondhna <br />
          shuru karo.
        </p>

        {/* CTA Button */}
        <a
          href="https://app.tenderwise.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-base font-medium transition mb-6"
        >
          <Search size={18} />
          Free Mein Tender Dekho
        </a>

        {/* Lato small text */}
        <p className="font-lato text-sm text-gray-500 mb-12">
          Sirf WhatsApp number chahiye,{" "}
          <span className="text-green-500 font-medium">na koi fees</span>,{" "}
          <span className="text-green-500 font-medium">na koi kichkhich</span>.
        </p>

        {/* Feature strip — white card like hero */}
        <div
         className="grid grid-cols-2 md:grid-cols-4 gap-0 rounded-2xl overflow-hidden max-w-6xl mx-auto"
          style={{
            background: "#FFFFFF",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-5"
              style={{
                borderRight: i < features.length - 1
                  ? "1px solid rgba(0,0,0,0.07)"
                  : "none",
              }}
            >
              <img
                src={f.img}
                alt={f.title}
                style={{ width: "44px", height: "44px", objectFit: "contain", flexShrink: 0 }}
              />
              <div className="text-left">
                <p className="font-lato text-sm font-semibold text-gray-800 leading-snug">
                  {f.title}
                </p>
                <p className="font-lato text-xs text-gray-400 leading-snug mt-0.5">
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