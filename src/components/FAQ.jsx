import { useState } from "react"
import { Plus, X, MessageCircle, FileText, MapPin, Bell, Search, Download } from "lucide-react"

const faqs = [
  {
    icon: MessageCircle,
    question: "Kya TenderWise sach mein free hai?",
    answer: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Haan, <span className="text-green-500 font-semibold">bilkul free.</span> Government tender information public hoti hai, aur TenderWise par usse search karna, dekhna aur documents download karna, sab kuch free hai. Koi chhupi hui fees nahi, koi subscription nahi.
      </p>
    ),
  },
  {
    icon: FileText,
    question: "Kaun se tenders cover hote hain?",
    answer: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Central Government, State Government, PSU, Defence aur GeM. Sabhi tarah ke public tenders. Civil, roads, buildings, irrigation, electrical, mechanical, solar, EPC, supply aur services, sab cover hote hain.
      </p>
    ),
  },
  {
    icon: MapPin,
    question: "Coverage poore India mein hai?",
    answer: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Haan. TenderWise ka coverage Pan India hai. Saari 28 states aur 8 union territories. Apne district ke tenders aaram se filter karke dekh sakte ho.
      </p>
    ),
  },
  {
    icon: Bell,
    question: "WhatsApp reminders kaise kaam karte hain?",
    answer: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Kisi bhi tender par reminder set kr do. Jab reminder ka time aata hai, hum aapko seedhe WhatsApp par message bhej dete hain, taaki koi important date kabhi miss na ho.
      </p>
    ),
  },
  {
    icon: Search,
    question: "Kya main Tender ID se search kar sakta hoon?",
    answer: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Bilkul. Aap seedhe Tender ID ya phir keyword se bhi search kar skte ho. Dono tareeke se sahi tender turant mil jaate hai.
      </p>
    ),
  },
  {
    icon: Download,
    question: "Kya yahan tender documents free download hote hain?",
    answer: (
      <p className="text-sm text-gray-600 leading-relaxed">
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
    <section id="sawal-jawab" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">

        <p style={{ fontFamily: "lato" , color:"#482D71"}} className="text-xs font-semibold text-primary tracking-widest uppercase text-center mb-3">
          Aapke Sawaal
        </p>

        <h2 style={{ fontFamily: "Playfair Display" , color:"#1F2937"}} className="text-4xl font-bold text-gray-900 text-center mb-12">
          Jo aap poochna chahte ho
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const Icon = faq.icon
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-2xl border transition-all duration-300"
                style={{
                  background: isOpen ? "#FFFFFF" : "#FDF6EE",
                  borderColor: isOpen ? "#3F3591" : "transparent",
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                  onClick={() => toggle(index)}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} className="text-primary shrink-0" />
                    <span style={{ fontFamily: "Lato" , color:"#1F2937"}} className="text-sm font-semibold text-primary">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <X size={14} className="text-white" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                      <Plus size={14} className="text-gray-500" />
                    </div>
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pl-14">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
