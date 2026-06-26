import { Lock, CheckCircle } from "lucide-react"
import beforeAfterImage from "../assets/before-after.png"
export default function BeforeAfter() {
  return (
    <section style={{background: "linear-gradient(135deg, #EDE9FF 0%, #F8F5FF 30%, #FDF8F2 70%)"}} className="pt-20 pb-0">
      <div className="max-w-4xl mx-auto px-6 flex justify-center">
  <img src={beforeAfterImage} alt="Before After Illustration" className="w-full object-contain" />
</div>
    </section>
  )
}
