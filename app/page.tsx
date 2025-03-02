import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a2b5f] text-white bg-[url('/bg.png')] bg-cover">
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="KnoCard Logo"
            width={200}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-20">Your Central Presentation Hub</h1>
          <p className="text-xl md:text-2xl text-yellow-300 font-bold max-w-xl mx-auto">
            Presentations Done Your Way- Seamless, Professional and Engaging
          </p>
        </div>

        {/* Presentation Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <Link href="/p/product-overview" className="transform hover:scale-105 transition-transform">
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-white p-4 border-4 border-yellow-400 shadow-lg">
                <div className="w-full h-full rounded-full  flex items-center justify-center">
                  <span className="text-4xl">
                    <Image
                      src="/1.png"
                      alt="Product Overview"
                      width={150}
                      height={150}
                    />
                  </span>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center">Product Overview</h3>
            </div>
          </Link>

          {/* Disabled Links */}
          {["Leaders Corner", "Leaders Edge", "Team Reporting", "Team Set-Up"].map((title, index) => (
            <div key={index} className="flex flex-col items-center opacity-50 cursor-not-allowed">
              <div className="w-40 h-40 rounded-full bg-white/80 p-4 border-4 border-yellow-400/50 shadow-lg">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Coming Soon</span>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

