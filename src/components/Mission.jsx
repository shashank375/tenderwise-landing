
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
      
      {/* Absolute Bottom Skyline Background - Height increased on mobile so it moves UP behind the text */}
      <img 
        src="/assets/mission-bg.png"
        alt="City Skyline Sketch" 
        className="absolute bottom-0 left-0 w-full h-[27%] md:h-[50%] object-cover object-bottom z-0 mix-blend-multiply opacity-[0.85]"
      />

      {/* Main Content Container (relative z-10 keeps it above the background image) */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">
        
       {/* --- HEADER SECTION - Typography locked to Figma mobile specs --- */}
        <div className="flex flex-col items-center mb-8 md:mb-16">
          
          {/* "The people who" with horizontal lines scaled for mobile */}
          <div className="flex items-center justify-center gap-2 md:gap-6 mb-1 md:mb-3">
            <img 
              src="/assets/line-left.png" 
              alt="Left Line" 
              className="w-[30px] md:w-[100px] h-auto object-contain" 
            />
            <span className="font-playfair text-[#482D71] font-semibold text-[12px] md:text-[20px] leading-[21.32px] md:leading-normal tracking-[-0.58px] md:tracking-normal">
              The people who
            </span>
            <img 
              src="/assets/line-right.png" 
              alt="Right Line" 
              className="w-[30px] md:w-[100px] h-auto object-contain" 
            />
          </div>
          
          {/* Main Title (Playfair) */}
          <h2 className="font-playfair text-[20.47px] md:text-[48px] font-semibold md:font-bold text-[#1F2937] leading-[21.32px] md:leading-tight tracking-[-0.58px] md:tracking-normal mb-3 md:mb-5">
            Build India <span className="text-[#472C70] font-playpen text-[17.05px] md:text-[48px] leading-[21.32px] md:leading-tight tracking-[-0.58px] md:tracking-normal">every day.</span>
          </h2>
          
          {/* Subheading (Lato) */}
          <p className="font-lato text-gray-700 text-[13.64px] md:text-[18px] font-semibold leading-[12.22px] md:leading-normal max-w-2xl mx-auto px-4 md:px-0">
            Contractors sirf projects nahi banate — <br className="md:hidden" />
            <span className="text-[#472C70] mt-1 md:mt-0 inline-block">woh desh ki buniyaad rakhte hain.</span>
          </p>
        </div>

        {/* --- CARDS GRID - Forced to 2 rows (2 top, 3 bottom) with Figma 6.82px gaps --- */}
        <div className="flex flex-col items-center gap-[20px] md:gap-6 mb-8 md:mb-10 w-full">
          
          {/* Top Row: 2 Cards */}
          <div className="flex justify-center gap-[6.82px] md:gap-6">
            {cards.slice(0, 2).map((card, index) => (
              <div 
                key={index} 
                className="relative w-[112.8px] h-[125.5px] md:w-[190px] md:h-[200px] flex flex-col items-center justify-end pb-3 md:pb-5 px-2 md:px-4 shrink-0"
              >
                <img src="/assets/pinned-square.png" alt="Paper" className="absolute inset-0 w-full h-full object-fill drop-shadow-md z-0" />
                <img src={card.img} alt={card.title} className="relative z-10 w-full h-[45px] md:h-[85px] object-contain mb-1.5 md:mb-3 mix-blend-multiply" />
                <span className="relative z-10 font-playpen text-[#472C70] font-semibold text-[10px] md:text-[16px] leading-tight text-center whitespace-nowrap">
                  {card.title}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 Cards */}
          <div className="flex justify-center gap-[6.82px] md:gap-6">
            {cards.slice(2, 5).map((card, index) => (
              <div 
                key={index + 2} 
                className="relative w-[112.8px] h-[125.5px] md:w-[190px] md:h-[200px] flex flex-col items-center justify-end pb-3 md:pb-5 px-1 md:px-4 shrink-0"
              >
                <img src="/assets/pinned-square.png" alt="Paper" className="absolute inset-0 w-full h-full object-fill drop-shadow-md z-0" />
                <img src={card.img} alt={card.title} className="relative z-10 w-full h-[45px] md:h-[85px] object-contain mb-1.5 md:mb-3 mix-blend-multiply" />
                <span className="relative z-10 font-playpen text-[#472C70] font-semibold text-[9.5px] md:text-[16px] leading-tight text-center whitespace-nowrap">
                  {card.title}
                </span>
              </div>
            ))}
          </div>

        </div>

      
       {/* --- BOTTOM TEXT SECTION - Reduced bottom margin so the skyline pulls up to hug the text --- */}
       <div className="relative z-10 max-w-[850px] mx-auto flex flex-col items-center mb-[100px] md:mb-60">
          
          <p className="font-lato text-[#4B5563] text-[9.5px] md:text-[16px] leading-[13px] md:leading-relaxed mb-4 md:mb-8 px-4 md:px-0 text-center">
            Roads, schools, hospitals, paani ke connections aur<br className="md:hidden" /> infrastructure, yeh sab contractors banate hain.<br className="hidden md:block" />
            Jo risk lete hain, mehnat karte hain, aur desh ko aage badhate hain.
          </p>
          
          <h3 className="font-playfair text-[#1F2937] text-[12.5px] md:text-[26px] font-bold leading-[16px] md:leading-snug text-center px-4 md:px-0">
            Har contractor ko tender information ka<br className="md:hidden" /> barabar access milna chahiye.<br className="hidden md:block" />
            <span className="text-[#472C70] font-playpen block md:inline mt-0.5 md:mt-0">Yahi hamara mission hai.</span>
          </h3>

        </div>

      </div>
    </section>
  );
}