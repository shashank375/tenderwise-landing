
export default function Mission() {
 const cards = [
  { title: "Roads", img: "/assets/mission-roads.png" },
  { title: "School", img: "/assets/mission-school.png" },
  { title: "Hospital", img: "/assets/mission-hospital.png" },
  { title: "Water Supply", img: "/assets/mission-water.png" },
  { title: "Infrastructure", img: "/assets/mission-infra.png" },
];

  return (
    // Section needs extra padding at the bottom (pb-[400px]) to reveal the skyline background
    <section id="mission" className="relative bg-[#FCF8F3] pt-24 pb-0 overflow-hidden">
      
      {/* Absolute Bottom Skyline Background */}
      {/* mix-blend-multiply seamlessly blends the sketch's white background into the page */}
     <img 
        src="/assets/mission-bg.png"
        alt="City Skyline Sketch" 
        className="absolute bottom-0 left-0 w-full object-cover object-bottom z-0 mix-blend-multiply opacity-90"
style={{ height: "50%" }}
      />

      {/* Main Content Container (relative z-10 keeps it above the background image) */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-center mb-16">
          
          {/* "The people who" with horizontal lines */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-3">
            <img 
              src="/assets/line-left.png" 
              alt="Left Line" 
              className="w-[60px] md:w-[100px] h-auto object-contain" 
            />
            <span className="font-playfair text-[#482D71] font-semibold text-[20px] md:text-[20px]">
              The people who
            </span>
            <img 
              src="/assets/line-right.png" 
              alt="Right Line" 
              className="w-[60px] md:w-[100px] h-auto object-contain" 
            />
          </div>
          
          {/* Main Title (Playfair) */}
          <h2 className="font-playfair text-4xl md:text-[48px] text-[#1F2937] leading-tight mb-5">
            Build India <span className="text-[#472C70] font-playpen ">every day.</span>
          </h2>
          
          {/* Subheading (Lato) */}
          <p className="font-lato text-gray-700 text-[25px] md:text-[18px] font-semibold max-w-2xl mx-auto">
            Contractors sirf projects nahi banate — <span className="text-[#472C70]  ">woh desh ki buniyaad rakhte hain.</span>
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
          {cards.map((card, index) => (
            <div 
              key={index} 
              // Card Dimensions setup to match the small pinned notes
              className="relative w-[140px] h-[170px] md:w-[190px] md:h-[200px] flex flex-col items-center justify-end pb-5 px-4"
            >
              {/* Paper Background Image */}
              <img 
                src="/assets/pinned-square.png" 
                alt="Paper Background" 
                className="absolute inset-0 w-full h-full object-fill drop-shadow-md z-0" 
              />
              
              {/* Sketch Image */}
              <img 
                src={card.img}
                alt={card.title} 
                className="relative z-10 w-full h-[65px] md:h-[85px] object-contain mb-3 mix-blend-multiply" 
              />
              
              {/* Card Title (Playpen Sans, Purple) */}
              <span className="relative z-10 font-playpen text-[#472C70] font-semibold text-[14px] md:text-[16px]">
                {card.title}
              </span>
            </div>
          ))}
        </div>

      
       {/* --- BOTTOM TEXT SECTION --- */}
<div className="max-w-[850px] mx-auto flex flex-col items-center mb-60">
          
          {/* Paragraph (Lato) */}
          <p className="font-lato text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed mb-8">
            Roads, schools, hospitals, paani ke connections aur infrastructure, yeh sab contractors banate hain.<br className="hidden md:block" />
            Jo risk lete hain, mehnat karte hain, aur desh ko aage badhate hain.
          </p>
          
          {/* Final Mission Statement (Playfair, Bold) */}
          <h3 className="font-playfair text-[#1F2937] text-[20px] md:text-[26px] font-bold leading-snug">
            Har contractor ko tender information ka barabar access<br className="hidden md:block" />
            milna chahiye. <span className="text-[#472C70] font-playpen ">Yahi hamara mission hai.</span>
          </h3>

        </div>

      </div>
    </section>
  );
}