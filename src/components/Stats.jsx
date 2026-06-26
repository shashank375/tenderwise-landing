const categories = [
  { icon: "/src/assets/icon-central.png", label: "Central Govt" },
  { icon: "/src/assets/icon-state.png", label: "State Govt" },
  { icon: "/src/assets/icon-public.png", label: "Public Sector" },
  { icon: "/src/assets/icon-defence.png", label: "Defence" },
  { icon: "/src/assets/icon-gem.png", label: "GeM" },
]

export default function Stats() {
  return (
    <section style={{background: "#FEFEFE"}} className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-block mb-6">
          <span
            style={{
              background: "#EEE9FC",
              fontFamily: "'Lato', sans-serif",
              color: "#3F3591",
            }}
            className="text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full"
          >
            Pan India Coverage
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{fontFamily: "'Playfair Display', serif"}}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Har tarah ke tenders, ek hi jagah
        </h2>

        {/* Subtext */}
        <p
          style={{fontFamily: "'Lato', sans-serif"}}
          className="text-gray-500 text-base mb-12"
        >
          Central se lekar gram panchayat tak, sabhi public tenders <br />
          TenderWise par freely available.
        </p>

        {/* Stats Numbers */}
        <div
          className="rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200 mb-10"
         style={{border: "1.5px solid #D9D0FF", borderTop: "3px solid #A89EE8", background: "linear-gradient(to bottom, #F5F2FF 0%, #FFFFFF 15%)"}}
        >
          <div className="py-8 px-6">
            <p style={{fontFamily: "'Playfair Display', serif"}} className="text-4xl font-bold text-[#3F3591] mb-1">50,000+</p>
            <p style={{fontFamily: "'Lato', sans-serif"}} className="text-sm text-gray-400">Active tenders</p>
          </div>
          <div className="py-8 px-6">
            <p style={{fontFamily: "'Playfair Display', serif"}} className="text-4xl font-bold text-[#3F3591] mb-1">800+</p>
            <p style={{fontFamily: "'Lato', sans-serif"}} className="text-sm text-gray-400">Authorities covered</p>
          </div>
          <div className="py-8 px-6">
            <p style={{fontFamily: "'Playfair Display', serif"}} className="text-4xl font-bold text-[#3F3591] mb-1">28 + 8</p>
            <div className="flex items-center justify-center gap-4">
              <p style={{fontFamily: "'Lato', sans-serif"}} className="text-sm text-gray-400">States</p>
              <p style={{fontFamily: "'Lato', sans-serif"}} className="text-sm text-gray-400">UTs</p>
            </div>
          </div>
          <div className="py-8 px-6">
            <p style={{fontFamily: "'Playfair Display', serif"}} className="text-4xl font-bold text-[#3F3591] mb-1">₹0</p>
            <p style={{fontFamily: "'Lato', sans-serif"}} className="text-sm text-gray-400">Aapki cost</p>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="flex flex-col items-center gap-4 py-6 px-4 rounded-2xl"
              style={{background: "#F8F6FF"}}
            >
              <img src={cat.icon} alt={cat.label} className="w-10 h-10 object-contain" />
              <p style={{fontFamily: "'Lato', sans-serif"}} className="text-sm font-semibold text-gray-800">
                {cat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
