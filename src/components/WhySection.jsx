
export default function WhySection() {
  return (
    <section id="kyun-banaya" className="bg-[#F8F6FF] py-24 px-6">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-10">

        {/* Header Section - Matched to exact Figma typography specs */}
        <div className="text-center flex flex-col items-center">
          <div className="bg-[#F8F6FF] text-[#472C70] font-lato text-[8px] md:text-xs font-bold uppercase tracking-[0.51px] md:tracking-widest leading-[6.83px] md:leading-normal px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-3 md:mb-6">
            SEEDHI BAAT
          </div>
          <h2 className="font-playfair text-[22px] md:text-5xl font-bold text-gray-900 leading-[27.36px] md:leading-tight tracking-[-0.41px] md:tracking-normal mb-3 md:mb-6">
            Government tender information <br className="hidden md:block" />
            ke liye <span className="text-[#472C70] font-playpen">subscription</span> kyun?
          </h2>
          <p className="font-lato text-gray-600 text-[10px] md:text-[17px] font-semibold md:font-normal leading-[13px] md:leading-relaxed max-w-2xl mx-auto">
            Tender ki jaankari public hoti hai.<br />
            Pr tenders dhundhna mushkil hai ise aasan banane ke liye paise dene padte hai<br />
            Yeh theek nahi lagta.<br />
            TenderWise isi soch ko badalne aaya hai.
          </p>
        </div>
       {/* Comparison Cards Grid - Locked to max-w-[205px] and gap-[10px] for mobile */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-[10px] md:gap-6 w-full max-w-[205px] md:max-w-4xl mx-auto mt-6 md:mt-12 items-stretch text-left">

          {/* LEFT CARD: Without TenderWise */}
          <div className="bg-white h-[181px] md:h-auto rounded-[12px] md:rounded-[2rem] pt-[15px] pb-[30px] px-[15px] md:p-8 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-5">
              <img src="/assets/icon-without-tenderwise.png" alt="Without TenderWise Icon" className="w-5 h-5 md:w-12 md:h-12 object-contain" />
              <div>
                <h3 className="font-playfair text-[12px] md:text-[26px] font-bold text-[#2E2E2E] leading-tight">Without TenderWise</h3>
                <p className="font-lato text-[#5C5C5C] text-[6px] md:text-sm mt-0.5 md:mt-1 leading-tight">Jaisa abhi tak chalta aaya hai</p>
              </div>
            </div>
            
            <hr className="border-gray-100 mb-2 md:mb-6" />
            
            <ul className="flex flex-col gap-[6px] md:gap-[18px] font-lato text-gray-700 flex-grow text-[6.5px] md:text-[15px] leading-tight">
              <li className="flex items-start gap-1.5 md:gap-4">
                <svg className="w-2 h-2 md:w-5 md:h-5 text-gray-400 mt-[1px] md:mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                <span><strong className="font-semibold text-gray-900">Paid subscription</strong>, Tenders dekhne ke liye</span>
              </li>
              <li className="flex items-start gap-1.5 md:gap-4">
                <svg className="w-2 h-2 md:w-5 md:h-5 text-gray-400 mt-[1px] md:mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                <span><strong className="font-semibold text-gray-900">Alag-alag</strong> kai websites kholni padti hain</span>
              </li>
              <li className="flex items-start gap-1.5 md:gap-4">
                <svg className="w-2 h-2 md:w-5 md:h-5 text-gray-400 mt-[1px] md:mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                <span><strong className="font-semibold text-gray-900">Konsi website</strong> pe jaye pata nahi</span>
              </li>
              <li className="flex items-start gap-1.5 md:gap-4">
                <svg className="w-2 h-2 md:w-5 md:h-5 text-gray-400 mt-[1px] md:mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                <span>Asli documents <strong className="font-semibold text-gray-900">login wall</strong> ke peeche chhupe</span>
              </li>
            </ul>
          </div>

          {/* RIGHT CARD: With TenderWise */}
          <div className="bg-[#472C70] h-[181px] md:h-auto rounded-[12px] md:rounded-[2rem] pt-[15px] pb-[30px] px-[15px] md:p-8 shadow-xl text-white flex flex-col relative">
            <img src="/assets/badge-tenderwise.png" alt="TenderWise Approved" className="absolute top-2 right-2 md:top-3 md:right-5 h-4 md:h-8 object-contain hidden sm:block" />
            
            <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-5">
              <img src="/assets/icon-with-tenderwise.png" alt="With TenderWise Icon" className="w-5 h-5 md:w-12 md:h-12 object-contain" />
              <div>
                <h3 className="font-playfair text-[12px] md:text-[26px] font-bold text-white leading-tight">With TenderWise</h3>
                <p className="font-lato text-[#CDBCFF] text-[6px] md:text-sm mt-0.5 md:mt-1 leading-tight">Contractors ka apna platform</p>
              </div>
            </div>
            
            <hr className="border-[#654694] mb-2 md:mb-6" />
            
            <ul className="flex flex-col gap-[6px] md:gap-[18px] font-lato text-[#EAE4F7] flex-grow text-[6.5px] md:text-[15px] leading-tight">
              <li className="flex items-start gap-1.5 md:gap-4">
                <svg className="w-2 h-2 md:w-5 md:h-5 text-[#4ade80] mt-[1px] md:mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                <span><strong className="font-semibold text-white">Free access:</strong> Har tender</span>
              </li>
              <li className="flex items-start gap-1.5 md:gap-4">
                <svg className="w-2 h-2 md:w-5 md:h-5 text-[#4ade80] mt-[1px] md:mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                <span><strong className="font-semibold text-white">Ek hi jagah</strong> saare tenders</span>
              </li>
              <li className="flex items-start gap-1.5 md:gap-4">
                <svg className="w-2 h-2 md:w-5 md:h-5 text-[#4ade80] mt-[1px] md:mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                <span><strong className="font-semibold text-white">Documents direct</strong> download kro,<br className="hidden sm:block"/> koi rok tok nahi</span>
              </li>
              <li className="flex items-start gap-1.5 md:gap-4">
                <svg className="w-2 h-2 md:w-5 md:h-5 text-[#4ade80] mt-[1px] md:mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                <span><strong className="font-semibold text-white">Bilkul simple,</strong> Koi bhi use kr skta hai</span>
              </li>
            </ul>
            
            {/* Price Pill Scaled Down */}
            <div className="mt-auto md:mt-8 py-1.5 px-2 md:py-3.5 md:px-6 flex justify-center items-center" style={{background: "linear-gradient(to right, rgba(255,255,255,0.4) 10%, rgba(255,255,255,0) 100%)", backdropFilter: "blur(42px)", WebkitBackdropFilter: "blur(42px)", borderRadius: "18px", border: "1px solid rgba(255,255,255,0.5)"}}>
              <span className="font-playfair text-[7px] md:text-[17px] text-[#EAE4F7] whitespace-nowrap flex items-center">
                Aapka tender dekhne ka kharcha: <strong className="text-[#4ade80] font-bold text-[10px] md:text-2xl ml-1 md:ml-1.5 tracking-wide">₹0</strong>
              </span>
            </div>
          </div>

        </div>     </div>
    </section>
  )
}
