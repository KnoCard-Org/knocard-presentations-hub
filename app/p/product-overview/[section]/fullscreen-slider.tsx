'use client'

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useFullscreen } from "./fullscreen-context"
function FullscreenImageSlider({ images, section }: { images: number, section: string }) {
    const {
        index,
        setIndex,
        setFullscreen,
        isZoomed,
        setIsZoomed
    } = useFullscreen()

    const handlePrevious = () => {
        setIndex((index - 1 + images) % images)
    }

    const handleNext = () => {
        setIndex((index + 1) % images)
    }

    const toggleZoom = () => {
        setIsZoomed(!isZoomed)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed top-0 left-0 z-50 w-screen h-screen bg-gradient-to-r from-[#007CB4] to-[#00BAF2] flex flex-col'
        >
            <main className="max-w-7xl w-full h-full mx-auto relative py-5">
                <div className={`flex flex-col items-center justify-center gap-4 ${isZoomed ? 'h-full' : 'h-[71%]'} overflow-auto mt-10`}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className={`transition-all duration-300 ease-in-out ${isZoomed ? 'h-[90%]' : 'h-[85%]'} relative`}
                        >
                            <Image
                                src="/iphone.png"
                                alt="Phone mockup"
                                width={400}
                                height={800}
                                className="h-full w-auto transition-all duration-300 ease-in-out"
                            />
                            <div className="absolute top-[2%] left-[5%] right-[5%] bottom-[3%] overflow-hidden rounded-[19px] transition-all duration-300 ease-in-out">
                                {
                                    index === 0 ?
                                        <video
                                            src={`/images/${section}/1.mp4`}
                                            autoPlay
                                            controls
                                            className="w-full h-full"
                                        />
                                        :
                                        <Image
                                            src={`/images/${section}/${index + 1}.png`}
                                            alt='image'
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                }
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <ShareAndExit setFullscreen={setFullscreen} />
                <motion.button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 rounded-full p-2"
                    onClick={handlePrevious}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="#007CB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.button>
                <motion.button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 rounded-full p-2"
                    onClick={handleNext}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="#007CB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.button>
                <motion.button
                    className="absolute top-6 left-10 bg-white/70 rounded-full p-2"
                    onClick={toggleZoom}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 3H21V9" stroke="#007CB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 21H3V15" stroke="#007CB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 3L14 10" stroke="#007CB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 21L10 14" stroke="#007CB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.button>
            </main>
            {!isZoomed && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-0 left-0 w-full h-[220px] flex items-center justify-center"
                >
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex gap-4">
                            {Array.from({ length: images }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="relative"
                                >
                                    <Image
                                        onClick={() => setIndex(i)}
                                        src={`/images/${section}/${i}.png`}
                                        alt='image'
                                        width={100}
                                        height={200}
                                        className='w-auto max-w-10 h-[90px] object-cover rounded-md'
                                    />
                                    {
                                        i === 0 &&
                                        <button
                                            onCanPlay={
                                                () =>
                                                    setFullscreen(true)
                                            }
                                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                        >
                                            <svg width="20" height="20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.6" d="M39.9017 73.3337C58.3112 73.3337 73.235 58.4098 73.235 40.0003C73.235 21.5908 58.3112 6.66699 39.9017 6.66699C21.4922 6.66699 6.56836 21.5908 6.56836 40.0003C6.56836 58.4098 21.4922 73.3337 39.9017 73.3337Z" fill="#007bb4c9" />
                                                <path d="M49.9002 34.1001L40.2335 28.5334C37.8335 27.1334 34.9335 27.1334 32.5335 28.5334C30.1335 29.9334 28.7002 32.4001 28.7002 35.2001V46.3667C28.7002 49.1334 30.1335 51.6334 32.5335 53.0334C33.7335 53.7334 35.0669 54.0667 36.3669 54.0667C37.7002 54.0667 39.0002 53.7334 40.2002 53.0334L49.8669 47.4667C52.2669 46.0667 53.7002 43.6001 53.7002 40.8001C53.7669 38.0001 52.3335 35.5001 49.9002 34.1001Z" fill="white" />
                                            </svg>

                                        </button>
                                    }
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            {Array.from({ length: images }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 rounded-full"
                                    style={{
                                        backgroundColor: i === index ? '#007CB4' : 'white'
                                    }}
                                    initial={false}
                                ></motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    )
}

export function ShareAndExit({ setFullscreen }: { setFullscreen: (fullscreen: boolean) => void }) {
    return (
        <div className='flex items-center gap-6 absolute top-6 right-10'>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setFullscreen(false)}
            >
                <svg width="50" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="80" height="80" rx="15" fill="white" />
                    <path d="M37.916 42.0827L20.8327 59.166" stroke="#007CB4" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.1631 50.833V60.833H29.1631" stroke="#007CB4" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M42.0869 60.833H46.2536C56.6702 60.833 60.8369 56.6663 60.8369 46.2497V33.7497C60.8369 23.333 56.6702 19.1663 46.2536 19.1663H33.7536C23.3369 19.1663 19.1702 23.333 19.1702 33.7497V37.9163" stroke="#007CB4" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </motion.button>
        </div>
    )
}

export default FullscreenImageSlider