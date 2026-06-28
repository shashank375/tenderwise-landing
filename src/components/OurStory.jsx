export default function OurStory() {
  return (
    <section id="humari-kahani" className="py-24 px-6 overflow-hidden flex justify-center" style={{background: "linear-gradient(135deg, #E5DCF3 0%, #FCF8F3 100%)"}}>
      
      <div className="w-full max-w-[1260px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-[10px]">

        {/* LEFT COLUMN */}
        <div className="flex flex-col items-center text-center w-full lg:w-[522px] shrink-0">

          <div className="bg-[#EEE9FC] text-[#472C70] font-lato text-[12px] font-bold uppercase tracking-[0.15em] mb-6 w-[190px] h-[46px] rounded-full flex items-center justify-center">
            Hamari Kahani
          </div>

         <h2 className="font-playfair text-4xl md:text-[58px] font-semibold text-[#1F2937] leading-[1.1] md:leading-[62px] tracking-tight mb-12 relative z-10 text-center w-full">
            <span className="block md:whitespace-nowrap">Built by a contractor,</span>
            <span className="relative inline-block mt-1 md:mt-2">
              <span className="text-[#472C70] font-playpen">for</span> contractors
          <img 
  src="/assets/line.png" 
  alt="Underline" 
  className="absolute -bottom-[20px] left-0 w-full h-[8px] object-fill" 
/>
            </span>
          </h2>

          <div className="flex flex-col w-full items-center mt-2">
            
            {/* Strip 1 - Fixed Tailwind rotation syntax */}
            <div className="relative w-[450px] shrink-0 h-[160px] flex items-center transform -rotate-[2.43deg] z-30">
              <img src="/assets/torn-paper-strip.png" alt="" className="absolute inset-0 w-full h-full object-fill opacity-90 drop-shadow-sm" />
              <div className="relative z-10 flex items-center gap-4 px-10 md:px-12 w-full text-left">
                <div className="bg-[#472C70] rounded-full p-2 shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-lato font-bold text-[#1F2937] text-[18px]">Khud tender bharne ka tajurba</span>
              </div>
            </div>

            {/* Strip 2 - Fixed rotation syntax AND increased negative margin to -mt-[72px] */}
            <div className="relative w-[450px] shrink-0 h-[160px] flex items-center transform rotate-[5.2deg] z-20 -mt-[60px]">
              <img src="/assets/torn-paper-strip.png" alt="" className="absolute inset-0 w-full h-full object-fill opacity-90 drop-shadow-sm" />
              <div className="relative z-10 flex items-center gap-4 px-10 md:px-12 w-full text-left">
                <div className="bg-[#472C70] rounded-full p-2 shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-lato font-bold text-[#1F2937] text-[18px]">Contractors ki asli pareshani samajhna</span>
              </div>
            </div>

            {/* Strip 3 - Increased negative margin to -mt-[72px] */}
            <div className="relative w-[450px] shrink-0 h-[160px] flex items-center z-10 -mt-[65px]">
              <img src="/assets/torn-paper-strip.png" alt="" className="absolute inset-0 w-full h-full object-fill opacity-90 drop-shadow-sm" />
              <div className="relative z-10 flex items-center gap-4 px-10 md:px-12 w-full text-left">
                <div className="bg-[#472C70] rounded-full p-2 shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-lato font-bold text-[#1F2937] text-[18px]">Profit nahi, contractor pehle</span>
              </div>
            </div>

          </div>
        </div>

       {/* RIGHT COLUMN */}
        <div className="relative w-full lg:w-[700px] shrink-0 h-auto md:h-[700px]">
          <img
            src="/assets/pinned-paper-bg.png"
            alt="Pinned paper note"
            className="absolute inset-0 w-full h-full object-fill drop-shadow-lg"
          />
          
          {/* FIX: Added max-w-[476px] and mx-auto to force the entire block into the exact center of the paper */}
          <div className="relative z-10 w-full flex flex-col pt-[80px] md:pt-[120px] pl-[40px] md:pl-[140px] md:pr-[60px] pb-[60px] text-left">
            
            <h3 className="font-playpen text-[#472C70] text-[28px] md:text-[24px] font-semibold leading-[1.2] md:leading-[30px] mb-8 w-full">
              <span className="block">“Government tender</span>
              <span className="block">information free honi chahiye.</span>
            </h3>
            <img 
          src="/assets/line.png" 
          alt="Heading Underline" 
         className="w-full max-w-[380px] h-[8px] object-contain mb-8 -mt-4" 
        />

            {/* FIX: Removed the broken 'justify-center' and put 'font-semibold' back in so the text becomes darker/thicker! */}
            <div className="font-lato text-[16px] md:text-[16px] text-[#4B5563] space-y-6 leading-[1.4] md:leading-[27.2px] mb-10">
              <p>Main khud ek government contractor hoon.<br className="hidden md:block" />Mujhe pata hai tender dhoondhne mein kitna time <br className="hidden md:block" />aur energy jaata hai.</p>
              <p>Mujhe yeh bhi pata hai ki public information <br className="hidden md:block" />dekhne ke liye paise dena galat hai.</p>
              <p>Isliye TenderWise banaya. Taaki har contractor, <br className="hidden md:block" />chahe gaav se ho ya shahar se <br className="hidden md:block" />usko tender ki jaankari barabar milni chahiye, <br className="hidden md:block" />bina ek rupaya diye.</p>
            </div>

          <hr style={{borderColor: "#A367FF", borderWidth: "1px", width: "100%", maxWidth: "420px"}} className="mb-6" />

            <div className="flex flex-row flex-nowrap items-center gap-4 w-full justify-start pl-4">
              <img 
                src="/assets/tenderwise-logo-icon.png" 
                alt="TenderWise Logo" 
                className="w-12 h-12 object-contain shrink-0" 
              />
              <div className="flex flex-col text-centre">
                <span className="font-playfair text-[#472C70] text-[22px] font-semibold leading-none mb-1.5 whitespace-nowrap">Team TenderWise</span>
                <span className="font-lato text-gray-500 text-[14px] italic leading-none whitespace-nowrap">Founded by contractor</span>
              </div>
            </div>

          </div>
         </div>
      </div>
    </section>
  )
}