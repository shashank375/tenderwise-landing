export default function OurStory() {
  return (
    <section id="humari-kahani" className="py-24 px-6 overflow-hidden bg-gradient-to-r from-[#E5DCF3] to-[#FCF8F3]">
      {/* Main Container - Widened to easily fit both large elements */}
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[60px]">
        
        {/* LEFT COLUMN: Text & Strips (Width bound to exactly 496.67px on desktop) */}
        <div className="flex flex-col items-center text-center w-full max-w-[496.67px]">
          
          <div className="text-[#472C70] font-lato text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] mb-4">
            Hamari Kahani
          </div>
          
          <h2 className="font-playfair text-4xl md:text-[48px] font-semibold text-[#1F2937] leading-[1.2] tracking-tight mb-[51px] relative z-10">
            Built by a contractor, <br />
            <span className="relative inline-block mt-1">
              <span className="text-[#472C70] font-playpen">for</span> contractors
              
              <svg className="absolute -bottom-3 left-0 w-full text-[#472C70]" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C30 2 60 8 100 8C140 8 170 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          {/* Torn Paper List Items - gap-[16px] matches Figma exactly */}
          <div className="flex flex-col gap-[16px] w-full items-center">
            
            {/* Strip 1 - Exact Size & Rotation (2.43 deg) */}
            <div className="relative w-full lg:w-[496.67px] h-[100px] lg:h-[144.51px] flex items-center transform -rotate-[2.43deg]">
              <img src="/src/assets/torn-paper-strip.png" alt="Paper strip" className="absolute inset-0 w-full h-full object-fill drop-shadow-sm opacity-90" />
              <div className="relative z-10 flex items-center gap-4 px-10 md:px-14 w-full text-left">
                <div className="bg-[#472C70] rounded-full p-1.5 shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-lato font-bold text-[#1F2937] text-[15px] md:text-[18px]">Khud tender bharne ka tajurba</span>
              </div>
            </div>

            {/* Strip 2 - Exact Size & Rotation (-5.2 deg) */}
            <div className="relative w-full lg:w-[496.67px] h-[100px] lg:h-[144.51px] flex items-center transform -rotate-[-5.2deg]">
              <img src="/src/assets/torn-paper-strip.png" alt="Paper strip" className="absolute inset-0 w-full h-full object-fill drop-shadow-sm opacity-90" />
              <div className="relative z-10 flex items-center gap-4 px-10 md:px-14 w-full text-left">
                <div className="bg-[#472C70] rounded-full p-1.5 shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-lato font-bold text-[#1F2937] text-[15px] md:text-[18px]">Contractors ki asli pareshani samajhna</span>
              </div>
            </div>

            {/* Strip 3 - Exact Size & Rotation (0 deg) */}
            <div className="relative w-full lg:w-[496.67px] h-[100px] lg:h-[144.51px] flex items-center transform rotate-0">
              <img src="/src/assets/torn-paper-strip.png" alt="Paper strip" className="absolute inset-0 w-full h-full object-fill drop-shadow-sm opacity-90" />
              <div className="relative z-10 flex items-center gap-4 px-10 md:px-14 w-full text-left">
                <div className="bg-[#472C70] rounded-full p-1.5 shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-lato font-bold text-[#1F2937] text-[15px] md:text-[18px]">Profit nahi, contractor pehle</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: The Pinned Paper Note */}
        {/* Exact Size (661.33px x 735.58px) */}
        <div className="relative w-full max-w-[661.33px] h-auto lg:h-[680px] mt-10 lg:mt-0 shrink-0">
          
          <img 
            src="/src/assets/pinned-paper-bg.png" 
            alt="Pinned paper note" 
            className="absolute inset-0 w-full h-full object-fill drop-shadow-lg" 
          />
          
          {/* Centering container: uses h-full and justify-center to suspend text perfectly */}
          <div className="relative z-10 h-full flex flex-col justify-center px-[40px] md:px-[80px] lg:px-[95px] py-16 lg:py-0 text-left">
            
            {/* Main Quote */}
            <h3 className="font-playpen text-[#472C70] text-[32px] md:text-[24px] font-bold leading-tight mb-6">
              "Government tender <br className="hidden md:block" /> information free honi chahiye."
            </h3>
            
            {/* Paragraphs */}
            <div className="font-lato text-[20px] md:text-[15px] text-[#4B5563] space-y-5 leading-relaxed mb-8">
              <p>
                Main khud ek government contractor hoon.<br className="hidden md:block" />
                Mujhe pata hai tender dhoondhne mein kitna time<br className="hidden md:block" />
                aur energy jaata hai.
              </p>
              <p>
                Mujhe yeh bhi pata hai ki public information<br className="hidden md:block" />
                dekhne ke liye paise dena galat hai.
              </p>
              <p>
                Isliye TenderWise banaya. Taaki har contractor,<br className="hidden md:block" />
                chahe gaav se ho ya shahar se<br className="hidden md:block" />
                usko tender ki jaankari barabar milni chahiye,<br className="hidden md:block" />
                bina ek rupaya diye.
              </p>
            </div>

            {/* Divider Line */}
            <hr className="border-[#472C70]/20 mb-5" />

            {/* Footer with Logo */}
            <div className="flex items-center gap-4">
              <img 
                src="/src/assets/tenderwise-logo-icon.png" 
                alt="TenderWise Logo" 
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-playfair text-[#472C70] text-[20px] font-semibold leading-none mb-1.5">Team TenderWise</span>
                <span className="font-lato text-gray-500 text-[13px] italic leading-none">Founded by contractor</span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}