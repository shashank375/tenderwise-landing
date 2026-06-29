import { useState } from "react"
import { Plus, X, MessageCircle, FileText, MapPin, Bell, Search, Download } from "lucide-react"

const faqs = [
  {
    icon: MessageCircle,
    question: "Kya TenderWise sach mein free hai?",
    answer: (
      <p className="font-lato text-[11px] md:text-sm text-gray-600 leading-[1.6] md:leading-relaxed">
        Haan, <span className="text-green-500 font-bold">bilkul free.</span> Government tender information public hoti hai, aur TenderWise par usse search karna, dekhna aur documents download karna, sab kuch free hai. Koi chhupi hui fees nahi, koi subscription nahi.
      </p>
    ),
  },
  {
    icon: FileText,
    question: "Kaun se tenders cover hote hain?",
    answer: (
      <p className="font-lato text-[11px] md:text-sm text-gray-600 leading-[1.6] md:leading-relaxed">
        Central Government, State Government, PSU, Defence aur GeM. Sabhi tarah ke public tenders. Civil, roads, buildings, irrigation, electrical, mechanical, solar, EPC, supply aur services, sab cover hote hain.
      </p>
    ),
  },
  {
    icon: MapPin,
    question: "Coverage poore India mein hai?",
    answer: (
      <p className="font-lato text-[11px] md:text-sm text-gray-600 leading-[1.6] md:leading-relaxed">
        Haan. TenderWise ka coverage Pan India hai. Saari 28 states aur 8 union territories. Apne district ke tenders aaram se filter karke dekh sakte ho.
      </p>
    ),
  },
  {
    icon: Bell,
    question: "WhatsApp reminders kaise kaam karte hain?",
    answer: (
      <p className="font-lato text-[11px] md:text-sm text-gray-600 leading-[1.6] md:leading-relaxed">
        Kisi bhi tender par reminder set kr do. Jab reminder ka time aata hai, hum aapko seedhe WhatsApp par message bhej dete hain, taaki koi important date kabhi miss na ho.
      </p>
    ),
  },
  {
    icon: Search,
    question: "Kya main Tender ID se search kar sakta hoon?",
    answer: (
      <p className="font-lato text-[11px] md:text-sm text-gray-600 leading-[1.6] md:leading-relaxed">
        Bilkul. Aap seedhe Tender ID ya phir keyword se bhi search kar skte ho. Dono tareeke se sahi tender turant mil jaate hai.
      </p>
    ),
  },
  {
    icon: Download,
    question: "Kya yahan tender documents free download hote hain?",
    answer: (
      <p className="font-lato text-[11px] md:text-sm text-gray-600 leading-[1.6] md:leading-relaxed">
        Haan, saare documents free hain. Public information dekhne ya download karne ke liye TenderWise kabhi paise nahi leta.
      </p>
    ),
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

 return (
    <section id="sawal-jawab" className="bg-white py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-6">

        {/* Mobile Subtitle - Shrunk and letter spacing fixed */}
        <p style={{ fontFamily: "Lato" , color:"#472C70"}} className="text-[10px] md:text-xs font-bold tracking-[1.5px] md:tracking-widest uppercase text-center mb-2 md:mb-3">
          Aapke Sawaal
        </p>

        {/* Mobile Heading - Shrunk to 24px */}
        <h2 style={{ fontFamily: "Playfair Display" , color:"#1F2937"}} className="text-[24px] md:text-4xl font-bold text-center mb-8 md:mb-12 leading-tight">
          Jo aap poochna chahte ho
        </h2>

        {/* FAQ Container - Added max-w-[350px] on mobile to constrain the boxes neatly */}
        <div className="flex flex-col gap-2.5 md:gap-3 w-full max-w-[350px] md:max-w-none mx-auto">
          {faqs.map((faq, index) => {
            const Icon = faq.icon
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-[12px] md:rounded-2xl border transition-all duration-300"
                style={{
                  background: isOpen ? "#FFFFFF" : "#FDF6EE",
                  borderColor: isOpen ? "#472C70" : "transparent",
                  boxShadow: isOpen ? "0 4px 15px rgba(71, 44, 112, 0.08)" : "none"
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-3.5 py-3 md:px-6 md:py-4 text-left gap-3 md:gap-4"
                  onClick={() => toggle(index)}
                >
                  <div className="flex items-center gap-2.5 md:gap-3">
                    <Icon className="text-[#472C70] w-4 h-4 md:w-5 md:h-5 shrink-0" />
                    <span style={{ fontFamily: "Lato" , color:"#1F2937"}} className="text-[12px] md:text-sm font-semibold md:font-bold pr-2 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* +/- Icons scaled down for mobile */}
                  {isOpen ? (
                    <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#472C70] flex items-center justify-center shrink-0">
                      <X className="text-white w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 md:w-7 md:h-7 rounded-full border border-gray-300 bg-white flex items-center justify-center shrink-0">
                      <Plus className="text-gray-500 w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  )}
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3.5 pl-[34px] md:px-6 md:pb-5 md:pl-[44px]">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )}
