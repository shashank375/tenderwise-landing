
export default function WhySection() {
  return (
    <section id="kyun-banaya" className="bg-[#F8F6FF] py-24 px-6">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-10">

        {/* Header Section */}
        <div className="text-center flex flex-col items-center">
          <div className="bg-[#F8F6FF] text-[#472C70] font-lato text-[11px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            SEEDHI BAAT
          </div>
         {/* Main Heading - Updated to match the md:text-5xl size from your Stats component */}
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Government tender information <br className="hidden md:block" />
            ke liye <span className="text-[#472C70] font-playpen">subscription</span> kyun?
          </h2>
          <p className="font-lato text-gray-600 text-[17px] leading-relaxed max-w-2xl mx-auto">
            Tender ki jaankari public hoti hai.<br />
            Pr tenders dhundhna mushkil hai ise aasan banane ke liye paise dene padte hai<br />
            Yeh theek nahi lagta.<br />
            TenderWise isi soch ko badalne aaya hai.
          </p>
        </div>

       {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12 items-stretch text-left">

          {/* LEFT CARD: Without TenderWise */}
          {/* Changed padding from p-10 to p-8 to reduce empty box space */}
          <div className="bg-white rounded-[2rem] p-7 md:p-8 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-center gap-4 mb-5">
              <img src="/assets/icon-without-tenderwise.png" alt="Without TenderWise Icon" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-playfair text-[26px] font-bold text-[#2E2E2E]">Without TenderWise</h3>
                <p className="font-lato text-[#5C5C5C] text-sm mt-1">Jaisa abhi tak chalta aaya hai</p>
              </div>
            </div>
            
            <hr className="border-gray-100 mb-6" />
            
            {/* Reduced gap between list items from gap-6 to gap-4.5 (gap-[18px]) */}
            <ul className="flex flex-col gap-[18px] font-lato text-gray-700 flex-grow text-[15px]">
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                <span><strong className="font-semibold text-gray-900">Paid subscription</strong>, Tenders dekhne ke liye</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                <span><strong className="font-semibold text-gray-900">Alag-alag</strong> kai websites kholni padti hain</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                <span><strong className="font-semibold text-gray-900">Konsi website</strong> pe jaye pata nahi</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                <span>Asli documents <strong className="font-semibold text-gray-900">login wall</strong> ke peeche chhupe</span>
              </li>
            </ul>
          </div>

          {/* RIGHT CARD: With TenderWise */}
          <div className="bg-[#472C70] rounded-[2rem] p-7 md:p-8 shadow-xl text-white flex flex-col relative">
            <img src="/assets/badge-tenderwise.png" alt="TenderWise Approved" className="absolute top-3 right-5 h-8 object-contain hidden sm:block" />
            
            <div className="flex items-center gap-4 mb-5">
              <img src="/assets/icon-with-tenderwise.png" alt="With TenderWise Icon" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-playfair text-[26px] font-bold text-white">With TenderWise</h3>
                <p className="font-lato text-[#CDBCFF] text-sm mt-1">Contractors ka apna platform</p>
              </div>
            </div>
            
            <hr className="border-[#654694] mb-6" />
            
            <ul className="flex flex-col gap-[18px] font-lato text-[#EAE4F7] flex-grow text-[15px]">
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-[#4ade80] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                <span><strong className="font-semibold text-white">Free access:</strong> Har tender</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-[#4ade80] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                <span><strong className="font-semibold text-white">Ek hi jagah</strong> saare tenders</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-[#4ade80] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                <span><strong className="font-semibold text-white">Documents direct</strong> download kro,<br className="hidden sm:block"/> koi rok tok nahi</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-[#4ade80] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                <span><strong className="font-semibold text-white">Bilkul simple,</strong> Koi bhi use kr skta hai</span>
              </li>
            </ul>
            
            {/* Reduced mt-10 to mt-8, added flex, whitespace-nowrap, and lowered text size */}
            <div className="mt-8 py-3.5 px-4 md:px-6 flex justify-center items-center" style={{background: "linear-gradient(to right, rgba(255,255,255,0.4) 10%, rgba(255,255,255,0) 100%)", backdropFilter: "blur(42px)", WebkitBackdropFilter: "blur(42px)", borderRadius: "18px", border: "1.5px solid rgba(255,255,255,0.5)"}}>
              <span className="font-playfair text-[15px] md:text-[17px] text-[#EAE4F7] whitespace-nowrap flex items-center">
                Aapka tender dekhne ka kharcha: <strong className="text-[#4ade80] font-bold text-xl md:text-2xl ml-1.5 tracking-wide">₹0</strong>
              </span>
            </div>
          </div>

        </div>      </div>
    </section>
  )
}
