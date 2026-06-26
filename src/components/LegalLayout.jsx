import Navbar from "./Navbar"
import Footer from "./Footer"

export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-2">
          {title}
        </h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: {lastUpdated}</p>
        <div className="prose prose-gray max-w-none font-lato">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}