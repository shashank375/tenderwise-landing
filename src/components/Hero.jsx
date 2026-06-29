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
      
     <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Content - Center on mobile, left on desktop */}
        <div className="flex-1 max-w-xl flex flex-col items-center md:items-start text-center md:text-left">
          
          <h1 style={{fontFamily: "'Playfair Display', serif"}} className="text-[24px] md:text-5xl font-bold text-[#1F2937] leading-[1.2] mb-4 md:mb-6">
            Tenders dekhne <br className="hidden md:block" />
            <span className="md:hidden"> ke liye </span>
            <span className="hidden md:inline">ke liye </span>
            <span style={{fontFamily: "'Playpen Sans', cursive", fontWeight: 400, color: "#472C70"}} className="block md:inline mt-1 md:mt-0">paise mat do!!</span>
          </h1>

          {/* MOBILE ONLY IMAGE: Tucks perfectly under the heading on phones */}
          <img
            src="/assets/tender-stack.png"
            alt="Tender Stack"
            className="w-full max-w-[280px] object-contain mb-8 md:hidden drop-shadow-md"
          />

         <p style={{fontFamily: "'Lato', sans-serif"}} className="text-[#252426] text-[15px] md:text-lg mb-3 whitespace-nowrap">
            Government tender information{" "}
            <span className="text-[#472C70] font-semibold">free honi chahiye.</span>
          </p>

          <p style={{fontFamily: "'Lato', sans-serif"}} className="text-[#4B5563] text-[20px] text-base mb-6">
            TenderWise par government tenders search karo, documents download
            karo aur deadline reminders set karo.
          </p>

          {/* Reduced mobile text size to 20px */}
          <p style={{fontFamily: "'Playpen Sans', cursive"}} className="text-[#472C70] font-extrabold text-[20px] md:text-3xl mb-6 md:mb-10">
            Bilkul FREE!!.
          </p>

          {/* Buttons - Tighter padding, smaller icons, and text-[10.5px] to guarantee single-line fit */}
          <div className="flex flex-row items-center justify-center md:justify-start gap-2 md:gap-4 mb-8 md:mb-6 w-full px-1 md:px-0">
            <a
              href="https://app.tenderwise.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#472C70] text-white px-2 py-2.5 md:px-7 md:py-3 rounded-full text-[10.5px] md:text-sm font-medium hover:bg-purple-800 transition flex items-center justify-center gap-1 md:gap-1.5 flex-1 md:flex-none whitespace-nowrap shadow-sm"
              style={{fontFamily: "'Lato', sans-serif"}}
            >
              <User size={14} className="md:w-4 md:h-4" />
              Create Free Account
            </a>
            <a
              href="https://app.tenderwise.in"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#472C70] bg-white text-[#472C70] px-2 py-2.5 md:px-7 md:py-3 rounded-full text-[10.5px] md:text-sm font-medium hover:bg-purple-50 transition flex items-center justify-center gap-1 md:gap-1.5 flex-1 md:flex-none whitespace-nowrap shadow-sm"
              style={{fontFamily: "'Lato', sans-serif"}}
            >
              <Search size={14} className="md:w-4 md:h-4" />
              Search Tenders
            </a>
          </div>

          <p className="text-xs text-gray-400 flex items-center gap-2" style={{fontFamily: "'Lato', sans-serif"}}>
            <img src="/assets/icon-contractor-arrow.png" alt="" className="w-4 h-4 object-contain" />
            Built by a contractor, for contractors
          </p>
        </div>

        
        {/* Right Content - Hidden on mobile because it's already shown above */}
        <div className="hidden md:flex flex-1 justify-end items-start mt-[-60px]">
          <img
            src="/assets/tender-stack.png"
            alt="Tender Stack"
            className="w-full max-w-xl object-contain"
          />
        </div>

      </div>

     {/* Feature Pill Grid - Matched exactly to Figma mobile dimensions */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-16 md:-mt-14">
        
        {/* Applied Figma Specs: p-[14px], gap-y-[22px], rounded-[9px] */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[22px] md:gap-y-0 gap-x-2 md:gap-x-0 bg-white md:bg-[#FCFBFD] shadow-sm rounded-[9px] md:rounded-[8px] p-[14px] md:px-[42.85px] md:py-0 md:h-[88.29px] items-center">
          
          {features.map((f, index) => (
            <div key={f.title} className="flex items-center px-1 md:px-4 relative gap-3 md:gap-[18.57px]">
              
              {/* Desktop Vertical Dividers - Hidden on mobile */}
              {index !== 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-[50px] w-[1.43px] bg-[#EEEAE7]"></div>
              )}
              
              <div className="bg-[#F7F4FA] md:bg-transparent rounded-full p-2 md:p-0 shrink-0">
                <img src={f.icon} alt={f.title} className="w-5 h-5 md:w-10 md:h-10 object-contain" />
              </div>
              
              <div>
                {/* Bumped text sizes to 13px (Title) and 11px (Desc) to perfectly fill the space */}
                <p style={{fontFamily: "'Lato', sans-serif"}} className="text-[13px] md:text-base font-bold text-[#4E4B4B] leading-tight mb-0.5 md:mb-0">{f.title}</p>
                <p style={{fontFamily: "'Lato', sans-serif"}} className="text-[11px] md:text-sm text-[#4E4B4B] leading-tight">{f.desc}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>

    </section>
  )
}