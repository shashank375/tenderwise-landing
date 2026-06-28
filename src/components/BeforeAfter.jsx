import { Lock, CheckCircle } from "lucide-react"
export default function BeforeAfter() {
  return (
    <section style={{
  background: `
    radial-gradient(ellipse at top left, #EEE9FF 0%, transparent 40%),
    radial-gradient(ellipse at bottom right, #FDF6EC 0%, transparent 55%),
    linear-gradient(180deg, #FCF8F3 0%, #F8F6FF 100%)
  `
}} className="pt-20 pb-0">
      <div className="max-w-4xl mx-auto px-6 flex justify-center">
  <img src="/assets/before-after.png" alt="Before After Illustration" className="w-full object-contain" />
</div>
    </section>
  )
}
