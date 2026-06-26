import { Search, User } from "lucide-react"
import tenderStack from "../assets/tender-stack.png"
import searchIcon from "../assets/icon-search.png"
import downloadIcon from "../assets/icon-download.png"
import clockIcon from "../assets/icon-clock.png"
import checkIcon from "../assets/icon-check.png"
const features = [
  {
    icon: searchIcon,
    title: "Tender Search",
    desc: "Find relevant tenders",
  },
  {
    icon: downloadIcon,
    title: "Document Download",
    desc: "Instant & easy download",
  },
  {
    icon: clockIcon,
    title: "Deadline Reminder",
    desc: "Never miss a deadline",
  },
  {
    icon: checkIcon,
    title: "100% Free",
    desc: "No hidden charges",
  },
]

export default function Hero() {
  return (
    <section style={{background: "linear-gradient(to right, #EDE9FF 0%, #F8F5FF 40%, #FDF8F2 100%)"}} className="min-h-screen">
      <div className="max-w-7xl mx-auto px-10 py-20 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <h1 style={{fontFamily: "'Playfair Display', serif"}} className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Tenders dekhne <br />
            ke liye{" "}
           <span className="text-[#472C70] font-playpen">paise mat do!!!</span>
          </h1>

          <p style={{fontFamily: "'Lato', sans-serif"}} className="text-gray-700 text-lg mb-3">
            Government tender information{" "}
            <span className="text-[#472C70] font-semibold">free honi chahiye.</span>
          </p>

          <p style={{fontFamily: "'Lato', sans-serif"}} className="text-gray-500 text-base mb-6">
            TenderWise par government tenders search karo, documents download
            karo aur deadline reminders set karo.
          </p>

          <p style={{fontFamily: "'Playpen Sans', cursive"}} className="text-[#472C70] font-extrabold text-3xl mb-10">
            Bilkul FREE!!.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://app.tenderwise.in"  target="_blank"
  rel="noopener noreferrer"
              className="bg-[#472C70] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-purple-800 transition flex items-center gap-2"
              style={{fontFamily: "'Lato', sans-serif"}}
            >
              <User size={16} />
              Create Free Account
            </a>
            <a
              href="https://app.tenderwise.in"  target="_blank"
  rel="noopener noreferrer"
              className="border border-gray-400 bg-white text-gray-700 px-7 py-3 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition flex items-center gap-2"
              style={{fontFamily: "'Lato', sans-serif"}}
            >
              <Search size={16} />
              Search Tender
            </a>
          </div>

          <p className="text-xs text-gray-400 mb-10" style={{fontFamily: "'Lato', sans-serif"}}>
            Built by a contractor, for contractors
          </p>

          {/* Feature Pills - full width hardcoded */}
          <div className="bg-white rounded-2xl px-6 py-5 grid grid-cols-4 divide-x divide-gray-100 shadow-sm" style={{width: "200%"}}>
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-4 px-5 first:pl-2 last:pr-2">
                <img src={f.icon} alt={f.title} className="w-10 h-10 object-contain shrink-0" />
                <div>
                  <p style={{fontFamily: "'Lato', sans-serif"}} className="text-sm font-bold text-gray-800 leading-tight">{f.title}</p>
                  <p style={{fontFamily: "'Lato', sans-serif"}} className="text-xs text-gray-400">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex justify-end items-start mt-[-60px]">
          <img
            src={tenderStack}
            alt="Tender Stack"
            className="w-full max-w-xl object-contain"
          />
        </div>

      </div>
    </section>
  )
}
