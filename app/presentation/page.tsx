import Image from "next/image"

export default function Presentation() {
  return (
    <div className="min-h-screen bg-[#1a2b5f] text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {/* Product Title */}
          <h1 className="text-5xl font-bold mb-12 text-yellow-300">
            PRODUCT
            <span className="block text-white">Presentation</span>
          </h1>

          {/* Main Content */}
          <div className="relative w-full max-w-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pop%20Presentation%20Images%20-qMQx9IQnD9PDQhn2Ni9NBmu0wuvYAb.png"
              alt="KnoCard App Interface"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />

            {/* Circular Icons - Add your actual icons and functionality here */}
            <div className="absolute inset-0 -m-8">{/* Add your circular icons with animations here */}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

