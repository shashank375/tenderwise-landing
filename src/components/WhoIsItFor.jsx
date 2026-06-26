export default function WhoIsItFor() {
  const categories = [
    { title: "Civil Work", img: "category-civil.png" },
    { title: "Roads", img: "category-roads.png" },
    { title: "Buildings", img: "category-buildings.png" },
    { title: "Irrigation", img: "category-irrigation.png" },
    { title: "Electrical", img: "category-electrical.png" },
    { title: "Mechanical", img: "category-mechanical.png" },
    { title: "Solar", img: "category-solar.png" },
    { title: "EPC", img: "category-epc.png" },
    { title: "Supply", img: "category-supply.png" },
    { title: "Services", img: "category-services.png" },
  ];

  return (
    <section id="kiske-liye" className="bg-[#FFFFFF] py-24 px-6 overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center flex flex-col items-center mb-10">
          <div className="bg-[#EEE9FC] text-[#472C70] font-lato text-[11px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Aap bhi inme se ek ho
          </div>
          
          {/* FIX 1: The entire text is now #1F2937. No more purple span! */}
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#1F2937] leading-tight mb-5">
            Yeh platform kiske liye hai?
          </h2>
          
          {/* The line break remains exactly where Figma dictates */}
          <p className="font-lato text-gray-600 text-[17px] leading-relaxed max-w-3xl mx-auto">
            Chahe aap chhote contractor ho ya bade, agar aap government kaam <br className="hidden md:block"/>
            karte ho, TenderWise aapke liye hai.
          </p>
        </div>

        
        <div className="relative max-w-[1300px] mx-auto">
          
          {/* Hand-drawn Note & Arrow - Hardcoded to exact Figma typography and layout specs */}
          <div className="hidden lg:flex flex-col items-center absolute -top-[130px] left-[-120px] z-20 w-[437px]">
            <span className="font-playpen text-[#000000] font-medium text-[19px] leading-[32px] text-center transform -rotate-[10.64deg] mb-1">
              Jo kaam aap krte ho <br />
              usi ke tenders hum dikhate hai..
            </span>
            <img
  src="/src/assets/hand-drawn-arrow.png"
  alt="Arrow pointing to grid"
  style={{
    width: "300px",
    height: "70px",
    objectFit: "contain",
    transform: "translateX(-5px) translateY(-20px)",
  }}
/>
          </div>

          {/* Grid of Categories */}
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[20.96px] mx-auto relative z-10 w-full">
  {categories.map((cat, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center"
      style={{
        height: "300px",
        borderRadius: "10px",
        background: "rgba(244, 230, 208, 0.6)",
        padding: "16px 12px 12px",
      }}
    >
      <h3
        className="font-playfair text-[#482D71] text-[18px] font-semibold tracking-wide shrink-0 mb-3"
      >
        {cat.title}
      </h3>
      <img
        src={`/src/assets/${cat.img}`}
        alt={cat.title}
        style={{
          width: "233px",
          height: "233px",
          maxWidth: "100%",
          borderRadius: "8px",
          objectFit: "cover",
          flexShrink: 0,
        }}
      />
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  )
}