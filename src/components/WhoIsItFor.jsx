
export default function WhoIsItFor() {
  const categories = [
    { title: "Civil Work", img: "/assets/category-civil.png" },
    { title: "Roads", img: "/assets/category-roads.png" },
    { title: "Buildings", img: "/assets/category-buildings.png" },
    { title: "Irrigation", img: "/assets/category-irrigation.png" },
    { title: "Electrical", img: "/assets/category-electrical.png" },
    { title: "Mechanical", img: "/assets/category-mechanical.png" },
    { title: "Solar", img: "/assets/category-solar.png" },
    { title: "EPC", img: "/assets/category-epc.png" },
    { title: "Supply", img: "/assets/category-supply.png" },
    { title: "Services", img: "/assets/category-services.png" },
  ];

  return (
    <section id="kiske-liye" className="bg-[#FFFFFF] py-24 px-6 overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        
       {/* Header Section - Typography locked to Figma mobile specs */}
        <div className="text-center flex flex-col items-center mb-8 md:mb-10">
          <div className="bg-[#EEE9FC] text-[#472C70] font-lato text-[6.38px] md:text-xs font-bold uppercase tracking-[0.76px] md:tracking-widest leading-[10.2px] md:leading-normal px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-3 md:mb-6">
            Aap bhi inme se ek ho
          </div>
          
          <h2 className="font-playfair text-[22px] md:text-4xl font-semibold md:font-bold text-[#1F2937] leading-[26.47px] md:leading-tight tracking-[-0.61px] md:tracking-normal mb-3 md:mb-5">
            Yeh platform kiske liye hai?
          </h2>
          
          <p className="font-lato text-gray-600 text-[12px] md:text-[17px] font-normal leading-[16.34px] md:leading-relaxed max-w-3xl mx-auto px-4 md:px-0">
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
  src="/assets/hand-drawn-arrow.png"
  alt="Arrow pointing to grid"
  style={{
    width: "300px",
    height: "70px",
    objectFit: "contain",
    transform: "translateX(-5px) translateY(-20px)",
  }}
/>
          </div>

         {/* Grid of Categories - Converted inline styles to responsive Tailwind classes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[13.06px] md:gap-[20.96px] mx-auto relative z-10 w-full max-w-[375px] md:max-w-none">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-[rgba(244,230,208,0.3)] md:bg-[rgba(244,230,208,0.6)] h-[205.56px] md:h-[300px] rounded-[6.23px] md:rounded-[10px] p-2 md:pt-[16px] md:px-[12px] md:pb-[12px]"
              >
                <h3
                  className="font-playfair text-[#482D71] text-[13px] md:text-[18px] font-semibold tracking-wide shrink-0 mt-1 md:mt-0 mb-2 md:mb-3"
                >
                  {cat.title}
                </h3>
                
                {/* Scaled the image dynamically so it perfectly hugs the bottom of the card */}
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-auto md:w-[233px] md:h-[233px] max-w-full rounded-[4px] md:rounded-[8px] object-cover shrink-0 mt-auto aspect-square"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}