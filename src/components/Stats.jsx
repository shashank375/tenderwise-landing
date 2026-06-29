const categories = [
  { icon: "/assets/icon-central.png", label: "Central Govt" },
  { icon: "/assets/icon-state.png", label: "State Govt" },
  { icon: "/assets/icon-public.png", label: "Public Sector" },
  { icon: "/assets/icon-defence.png", label: "Defence" },
  { icon: "/assets/icon-gem.png", label: "GeM" },
];

export default function Stats() {
  return (
    <section style={{background: "#FEFEFE"}} className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Badge - Forced to 10px on mobile */}
        <div className="inline-block mb-4 md:mb-6">
          <span
            style={{
              background: "#EEE9FC",
              fontFamily: "'Lato', sans-serif",
              color: "#472C70",
            }}
            className="text-[10px] md:text-xs font-semibold tracking-widest uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full"
          >
            Pan India Coverage
          </span>
        </div>

        {/* Heading - Forced to exactly 24px and one single line on mobile */}
        <h2
          style={{fontFamily: "'Playfair Display', serif"}}
          className="text-[24px] md:text-5xl font-bold text-[#1F2937] mb-3 md:mb-4 whitespace-nowrap md:whitespace-normal tracking-tight md:tracking-normal"
        >
          Har tarah ke tenders, ek hi jagah
        </h2>

        {/* Subtext - Forced to exactly 14px and precisely 2 lines on mobile */}
        <p
          style={{fontFamily: "'Lato', sans-serif"}}
          className="text-[#2E2E2E] text-[14px] md:text-base mb-8 md:mb-12 leading-relaxed"
        >
          Central se lekar gram panchayat tak, sabhi public tenders <br />
          TenderWise par freely available.
        </p>

       {/* Stats Numbers - Forced to 4 columns on mobile to match Figma exactly */}
        <div
          className="rounded-[10px] md:rounded-2xl grid grid-cols-4 divide-x divide-[#E5E0F8] mb-8 md:mb-10 mx-auto w-full"
          style={{border: "1.5px solid #D9D0FF", borderTop: "3px solid #A89EE8", background: "linear-gradient(to bottom, #F5F2FF 0%, #FFFFFF 15%)"}}
        >
          {/* Column 1 */}
          <div className="py-4 px-1 md:py-8 md:px-6 flex flex-col items-center justify-center">
            <p style={{fontFamily: "'Playfair Display', serif"}} className="text-[14px] md:text-4xl font-bold text-[#3F3591] mb-0.5 md:mb-1 leading-none">50,000+</p>
            <p style={{fontFamily: "'Lato', sans-serif"}} className="text-[8px] md:text-sm text-gray-400 text-center leading-tight">Active tenders</p>
          </div>
          
          {/* Column 2 */}
          <div className="py-4 px-1 md:py-8 md:px-6 flex flex-col items-center justify-center">
            <p style={{fontFamily: "'Playfair Display', serif"}} className="text-[14px] md:text-4xl font-bold text-[#3F3591] mb-0.5 md:mb-1 leading-none">800+</p>
            <p style={{fontFamily: "'Lato', sans-serif"}} className="text-[8px] md:text-sm text-gray-400 text-center leading-tight">Authorities<br className="md:hidden" /> covered</p>
          </div>
          
          {/* Column 3 */}
          <div className="py-4 px-1 md:py-8 md:px-6 flex flex-col items-center justify-center">
            <p style={{fontFamily: "'Playfair Display', serif"}} className="text-[14px] md:text-4xl font-bold text-[#3F3591] mb-0.5 md:mb-1 leading-none">28 + 8</p>
            <div className="flex items-center justify-center gap-1 md:gap-4 w-full">
              <p style={{fontFamily: "'Lato', sans-serif"}} className="text-[8px] md:text-sm text-gray-400 leading-tight">States</p>
              <p style={{fontFamily: "'Lato', sans-serif"}} className="text-[8px] md:text-sm text-gray-400 leading-tight">UTs</p>
            </div>
          </div>
          
          {/* Column 4 */}
          <div className="py-4 px-1 md:py-8 md:px-6 flex flex-col items-center justify-center">
            <p style={{fontFamily: "'Playfair Display', serif"}} className="text-[14px] md:text-4xl font-bold text-[#3F3591] mb-0.5 md:mb-1 leading-none">₹0</p>
            <p style={{fontFamily: "'Lato', sans-serif"}} className="text-[8px] md:text-sm text-gray-400 text-center leading-tight">Aapki cost</p>
          </div>
        </div>

        {/* Categories - Forced into 5 columns on both mobile and desktop */}
        <div className="grid grid-cols-5 gap-1.5 md:gap-4 w-full">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="flex flex-col items-center justify-start gap-1.5 md:gap-4 py-2.5 px-0.5 md:py-6 md:px-4 rounded-[8px] md:rounded-2xl"
              style={{background: "#F8F6FF"}}
            >
              {/* Scaled down icons to 24px for mobile */}
              <img src={cat.icon} alt={cat.label} className="w-6 h-6 md:w-10 md:h-10 object-contain" />
              
              {/* Scaled down text to 9px with tight leading so it stacks naturally */}
              <p style={{fontFamily: "'Lato', sans-serif"}} className="text-[9px] md:text-sm font-semibold text-gray-800 text-center leading-[1.1]">
                {cat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
