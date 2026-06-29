
export default function HowItWorks() {
  return (
    <section id="kaise-kaam" className="bg-[#FBF6FF] py-24 px-6 relative">
      {/* Increased max-width to 1400px to perfectly fit four 328px cards */}
      <div className="max-w-[1300px] mx-auto">
        
       {/* Header Section - Typography locked to Figma mobile specs */}
        <div className="text-center flex flex-col items-center mb-10 md:mb-16">
          <div className="bg-[#EEE9FC] text-[#472C70] font-lato text-[8px] md:text-xs font-bold uppercase tracking-[0.6px] md:tracking-widest leading-[8px] md:leading-normal px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-4 md:mb-6">
            4 SIMPLE STEPS
          </div>
          
          <h2 className="font-playfair text-[19.2px] md:text-5xl font-semibold md:font-bold text-gray-900 leading-[20.74px] md:leading-tight tracking-[-0.48px] md:tracking-normal mb-3 md:mb-5">
            TenderWise kaam <span className="text-[#472C70] font-playpen">kaise karta hai?</span>
          </h2>
          
          <p className="font-lato text-gray-600 text-[11px] md:text-[17px] leading-relaxed max-w-lg mx-auto px-4 md:px-0">
            Na koi training chahiye, na koi technical knowledge.<br />
            Bas WhatsApp number.<br />
            Aur 2 minute.
          </p>
        </div>

       {/* Steps Grid Container */}
        <div className="relative flex justify-center w-full">
          
          {/* Background Dashed Line (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[5%] right-[5%] border-t-[1.5px] border-dashed border-[#482D71] z-0 opacity-40"></div>

          {/* Grid - Changed to 2 columns with 24px gap on mobile to match Figma */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-2 relative z-10 justify-items-center items-stretch w-full max-w-[316px] lg:max-w-none mx-auto">
            
            {/* Step 1 - Hardcoded to Figma 131x221 dimensions on mobile */}
            <div className="bg-white rounded-[12px] md:rounded-[24px] p-3 md:p-5 flex flex-col items-center text-center border border-[#F0EBFA] w-full max-w-[131.28px] md:max-w-[280px] h-[221.22px] md:h-full"
              style={{boxShadow: "0 4px 20px rgba(71, 44, 112, 0.10)"}}>
              <img src="/assets/step1-icon.png" alt="Step 1 Icon" className="w-6 h-6 md:w-14 md:h-14 object-contain mb-2 md:mb-4" />
              <h3 className="font-playfair text-[10px] md:text-[20px] font-bold text-[#1F2937] mb-1 md:mb-2 leading-tight">
                Free account banao
              </h3>
              <p className="font-lato text-[7px] md:text-[14px] text-[#2E2E2E] mb-2 md:mb-5 flex-grow leading-[1.2] md:leading-relaxed">
                WhatsApp number daalo, OTP enter karo, bas ho gaya.
              </p>
              <img src="/assets/step1-img.png" alt="Create Account" className="w-[85%] mt-auto object-contain drop-shadow-sm" />
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-[12px] md:rounded-[24px] p-3 md:p-5 flex flex-col items-center text-center border border-[#F0EBFA] w-full max-w-[131.28px] md:max-w-[280px] h-[221.22px] md:h-full" style={{boxShadow: "0 4px 20px rgba(71, 44, 112, 0.10)"}}>
              <img src="/assets/step2-icon.png" alt="Step 2 Icon" className="w-6 h-6 md:w-14 md:h-14 object-contain mb-2 md:mb-4" />
              <h3 className="font-playfair text-[10px] md:text-[20px] font-bold text-[#1F2937] mb-1 md:mb-2 leading-tight">
                Apna filter set karo
              </h3>
              <p className="font-lato text-[7px] md:text-[14px] text-[#2E2E2E] mb-2 md:mb-5 flex-grow leading-[1.2] md:leading-relaxed">
                State, district, tender category aur authority chuno. TenderWise samajh jaayega aapko kya chahiye.
              </p>
              <img src="/assets/step2-img.png" alt="Set Preferences" className="w-[85%] mt-auto object-contain drop-shadow-sm" />
            </div>

            {/* Step 3 */}
           <div className="bg-white rounded-[12px] md:rounded-[24px] p-3 md:p-5 flex flex-col items-center text-center border border-[#F0EBFA] w-full max-w-[131.28px] md:max-w-[280px] h-[221.22px] md:h-full" style={{boxShadow: "0 4px 20px rgba(71, 44, 112, 0.10)"}}>
              <img src="/assets/step3-icon.png" alt="Step 3 Icon" className="w-6 h-6 md:w-14 md:h-14 object-contain mb-2 md:mb-4" />
              <h3 className="font-playfair text-[10px] md:text-[20px] font-bold text-[#1F2937] mb-1 md:mb-2 leading-tight">
                Relevant tenders dekho
              </h3>
              <p className="font-lato text-[7px] md:text-[14px] text-[#2E2E2E] mb-2 md:mb-5 flex-grow leading-[1.2] md:leading-relaxed">
                Jo aapke kaam ke hain woh seedhe aapke home page par dikhenge. Koi aur tender dhundhana hai toh search mein dhundho.
              </p>
              <img src="/assets/step3-img.png" alt="Matching Tenders" className="w-[90%] mt-auto object-contain drop-shadow-sm" />
            </div>

            {/* Step 4 */}
           <div className="bg-white rounded-[12px] md:rounded-[24px] p-3 md:p-5 flex flex-col items-center text-center border border-[#F0EBFA] w-full max-w-[131.28px] md:max-w-[280px] h-[221.22px] md:h-full" style={{boxShadow: "0 4px 20px rgba(71, 44, 112, 0.10)"}}>
              <img src="/assets/step4-icon.png" alt="Step 4 Icon" className="w-6 h-6 md:w-14 md:h-14 object-contain mb-2 md:mb-4" />
              <h3 className="font-playfair text-[10px] md:text-[20px] font-bold text-[#1F2937] mb-1 md:mb-2 leading-tight">
                Deadline miss mat karo
              </h3>
              <p className="font-lato text-[7px] md:text-[14px] text-[#2E2E2E] mb-2 md:mb-5 flex-grow leading-[1.2] md:leading-relaxed">
                Tender deadline ka reminder lagao. Reminder seedha WhatsApp par aa jaayega.
              </p>
              <img src="/assets/step4-img.png" alt="WhatsApp Reminder" className="w-[90%] mt-auto object-contain drop-shadow-sm" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}