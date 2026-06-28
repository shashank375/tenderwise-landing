import { Search, User } from "lucide-react"
const features = [
  {
    icon: "/assets/icon-search.png",
    title: "Tender Search",
    desc: "Find relevant tenders",
  },
  {
    icon: "/assets/icon-download.png",
    title: "Document Download",
    desc: "Instant & easy download",
  },
  {
    icon: "/assets/icon-clock.png",
    title: "Deadline Reminder",
    desc: "Never miss a deadline",
  },
  {
    icon: "/assets/icon-check.png",
    title: "100% Free",
    desc: "No hidden charges",
  },
]

export default function Hero() {
  return (
    <section style={{background: "linear-gradient(120deg, #D9D0FF 0%, #EDE9FF 2%, #FCF8F3 55%)"}}>
      
      {/* Top flex row — left text + right image */}
      <div className="max-w-7xl mx-auto px-10 py-20 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <h1 style={{fontFamily: "'Playfair Display', serif"}} className="text-5xl md:text-5xl font-bold text-[#1F2937]leading-tight mb-6">
            Tenders dekhne <br />
            ke liye{" "}
            <span style={{fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#472C70"}}>paise mat do!!!</span>
          </h1>

          <p style={{fontFamily: "'Lato', sans-serif"}} className="text-[#252426] text-lg mb-3">
            Government tender information{" "}
            <span className="text-[#472C70] font-semibold">free honi chahiye.</span>
          </p>

          <p style={{fontFamily: "'Lato', sans-serif"}} className="text-[#4B5563] text-[20px] text-base mb-6">
            TenderWise par government tenders search karo, documents download
            karo aur deadline reminders set karo.
          </p>

          <p style={{fontFamily: "'Playpen Sans', cursive"}} className="text-[#472C70] font-extrabold text-3xl mb-10">
            Bilkul FREE!!.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://app.tenderwise.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#472C70] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-purple-800 transition flex items-center gap-2"
              style={{fontFamily: "'Lato', sans-serif"}}
            >
              <User size={16} />
              Create Free Account
            </a>
            <a
              href="https://app.tenderwise.in"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 bg-white text-gray-700 px-7 py-3 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition flex items-center gap-2"
              style={{fontFamily: "'Lato', sans-serif"}}
            >
              <Search size={16} />
              Search Tender
            </a>
          </div>

          <p className="text-xs text-gray-400 flex items-center gap-2" style={{fontFamily: "'Lato', sans-serif"}}>
            <img src="/assets/icon-contractor-arrow.png" alt="" className="w-4 h-4 object-contain" />
            Built by a contractor, for contractors
          </p>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex justify-end items-start mt-[-60px]">
          <img
            src="/assets/tender-stack.png"
            alt="Tender Stack"
            className="w-full max-w-xl object-contain"
          />
        </div>

      </div>

      {/* Feature Pill — outside flex row, full width */}
      <div className="max-w-7xl mx-auto px-10 pb-16 -mt-14">
  <div className="grid grid-cols-4 shadow-sm" style={{background: "#FCFBFD", borderRadius: "8px", paddingLeft: "42.85px", paddingRight: "42.85px", height: "88.29px"}}>
    {features.map((f) => (
      <div key={f.title} className="flex items-center px-4 relative" style={{gap: "18.57px"}}>
  {f.title !== "Tender Search" && (
    <div style={{position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", height: "50px", width: "1.43px", background: "#EEEAE7"}}></div>
  )}
              <img src={f.icon} alt={f.title} className="w-10 h-10 object-contain shrink-0" />
              <div>
                <p style={{fontFamily: "'Lato', sans-serif"}} className="text-base font-bold text-[#4E4B4B] leading-tight">{f.title}</p>
                <p style={{fontFamily: "'Lato', sans-serif"}} className="text-sm text-[#4E4B4B]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}