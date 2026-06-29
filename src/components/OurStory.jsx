export default function OurStory() {
  return (
    <section id="humari-kahani" className="py-24 px-6 overflow-hidden flex justify-center" style={{background: "linear-gradient(135deg, #E5DCF3 0%, #FCF8F3 100%)"}}>
      
      <div className="w-full max-w-[1260px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-[10px]">

       {/* LEFT COLUMN - Scaled margins and exact Figma typography applied */}
        <div className="flex flex-col items-center text-center w-full lg:w-[522px] shrink-0">

          <div className="bg-[#EEE9FC] text-[#472C70] font-lato text-[9.43px] md:text-[12px] font-bold uppercase tracking-[1.01px] md:tracking-[0.15em] mb-4 md:mb-6 px-4 py-1.5 md:w-[190px] md:h-[46px] rounded-full flex items-center justify-center whitespace-nowrap">
            Hamari Kahani
          </div>

          <h2 className="font-playfair text-[34.19px] md:text-[58px] font-semibold text-[#1F2937] leading-[36.55px] md:leading-[62px] tracking-[-0.91px] md:tracking-tight mb-8 md:mb-12 relative z-10 text-center w-full">
            <span className="block md:whitespace-nowrap">Built by a contractor,</span>
            <span className="relative inline-block mt-1 md:mt-2">
              <span className="text-[#472C70] font-playpen">for</span> contractors
              <img 
                src="/assets/line.png" 
                alt="Underline" 
                className="absolute -bottom-[10px] md:-bottom-[20px] left-0 w-full h-[4px] md:h-[8px] object-fill" 
              />
            </span>
          </h2>

          <div className="flex flex-col w-full items-center mt-2 max-w-[292px] md:max-w-none mx-auto">
            
            {/* Strip 1 */}
            <div className="relative w-[290px] md:w-[450px] shrink-0 h-[100px] md:h-[160px] flex items-center transform -rotate-[2.43deg] z-30">
              <img src="/assets/torn-paper-strip.png" alt="" className="absolute inset-0 w-full h-full object-fill opacity-90 drop-shadow-sm" />
              <div className="relative z-10 flex items-center gap-3 md:gap-4 px-6 md:px-12 w-full text-left">
                <div className="bg-[#472C70] rounded-full p-1.5 md:p-2 shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-lato font-bold text-[#1F2937] text-[13px] md:text-[18px]">Khud tender bharne ka tajurba</span>
              </div>
            </div>

            {/* Strip 2 - Negative margin scaled down for mobile so text isn't covered */}
            <div className="relative w-[290px] md:w-[450px] shrink-0 h-[100px] md:h-[160px] flex items-center transform rotate-[5.2deg] z-20 -mt-[40px] md:-mt-[60px]">
              <img src="/assets/torn-paper-strip.png" alt="" className="absolute inset-0 w-full h-full object-fill opacity-90 drop-shadow-sm" />
              <div className="relative z-10 flex items-center gap-3 md:gap-4 px-6 md:px-12 w-full text-left">
                <div className="bg-[#472C70] rounded-full p-1.5 md:p-2 shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-lato font-bold text-[#1F2937] text-[13px] md:text-[18px]">Contractors ki asli pareshani samajhna</span>
              </div>
            </div>

            {/* Strip 3 */}
            <div className="relative w-[290px] md:w-[450px] shrink-0 h-[100px] md:h-[160px] flex items-center z-10 -mt-[45px] md:-mt-[65px]">
              <img src="/assets/torn-paper-strip.png" alt="" className="absolute inset-0 w-full h-full object-fill opacity-90 drop-shadow-sm" />
              <div className="relative z-10 flex items-center gap-3 md:gap-4 px-6 md:px-12 w-full text-left">
                <div className="bg-[#472C70] rounded-full p-1.5 md:p-2 shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-lato font-bold text-[#1F2937] text-[13px] md:text-[18px]">Profit nahi, contractor pehle</span>
              </div>
            </div>

          </div>
        </div>

      {/* RIGHT COLUMN - Locked to ~353px width and exact typography for mobile */}
        <div className="relative w-full max-w-[353px] lg:max-w-none lg:w-[700px] shrink-0 h-auto min-h-[392px] md:min-h-0 md:h-[700px] mx-auto mt-8 lg:mt-0">
          <img
            src="/assets/pinned-paper-bg.png"
            alt="Pinned paper note"
            className="absolute inset-0 w-full h-full object-fill drop-shadow-lg"
          />
          
          {/* Adjusted padding (pt-70, pl-45, pr-35) so it doesn't bleed out of the paper boundaries on mobile */}
          <div className="relative z-10 w-full flex flex-col pt-[70px] md:pt-[120px] pl-[45px] md:pl-[140px] pr-[35px] md:pr-[60px] pb-[40px] md:pb-[60px] text-left">
            
            {/* Heading: 17.08px, line-height 18.87px */}
            <h3 className="font-playpen text-[#472C70] text-[17px] md:text-[24px] font-semibold leading-[19px] md:leading-[30px] mb-3 md:mb-8 w-full">
              <span className="block">“Government tender</span>
              <span className="block">information free honi chahiye.</span>
            </h3>
            
            <img 
              src="/assets/line.png" 
              alt="Heading Underline" 
              className="w-full max-w-[180px] md:max-w-[380px] h-[4px] md:h-[8px] object-contain mb-4 md:mb-8 mt-1 md:-mt-4" 
            />

            {/* Paragraphs: 10.67px, SemiBold, line-height 14.52px (Removed <br> tags so it wraps naturally) */}
            <div className="font-lato text-[10.5px] md:text-[16px] text-[#4B5563] font-semibold md:font-normal space-y-3 md:space-y-6 leading-[14.5px] md:leading-[27.2px] mb-5 md:mb-10">
              <p>Main khud ek government contractor hoon. Mujhe pata hai tender dhoondhne mein kitna time aur energy jaata hai.</p>
              <p>Mujhe yeh bhi pata hai ki public information dekhne ke liye paise dena galat hai.</p>
              <p>Isliye TenderWise banaya. Taaki har contractor, chahe gaav se ho ya shahar se usko tender ki jaankari barabar milni chahiye, bina ek rupaya diye.</p>
            </div>

            {/* Divider line matched exactly to Figma: 256.79px width and 0.53px thickness */}
            <hr style={{borderColor: "#A367FF", borderWidth: "0.53px"}} className="w-full max-w-[238px] md:max-w-[420px] mb-4 md:mb-6" />

            {/* Removed the extra pl-1 padding so the logo and text align perfectly flush with the paragraphs */}
            <div className="flex flex-row flex-nowrap items-center gap-3 md:gap-4 w-full justify-start md:pl-4">
              <img 
                src="/assets/tenderwise-logo-icon.png" 
                alt="TenderWise Logo" 
                className="w-8 h-8 md:w-12 md:h-12 object-contain shrink-0" 
              />
              <div className="flex flex-col text-left">
                {/* Team TenderWise: 17.08px, Regular, line-height 14.52px */}
                <span className="font-playfair text-[#472C70] text-[17px] md:text-[22px] font-normal md:font-semibold leading-[14.5px] md:leading-none mb-0.5 md:mb-1.5 whitespace-nowrap">Team TenderWise</span>
                {/* Founded by: 8.54px, Regular, line-height 14.52px */}
                <span className="font-lato text-gray-500 text-[8.5px] md:text-[14px] font-normal italic leading-[14.5px] md:leading-none whitespace-nowrap">Founded by contractor</span>
              </div>
            </div>

          </div>
         </div>     </div>
    </section>
  )
}