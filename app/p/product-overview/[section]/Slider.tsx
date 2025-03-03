'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import FullscreenImageSlider from './FullscreenImageSlider'
import { motion } from 'framer-motion'
import FullscreenVideoSlider from './FullscreenVideoSlider'
import { useSlider } from './slider-context'
import { Controls } from './controls'

function ImageSlider({ images, videos, section }: { images: number, videos: string[], section: string }) {
    const {
        imageIndex,
        setImageIndex,
        videoIndex,
        setVideoIndex,
        fullscreenVideo,
        setFullscreenVideo,
        fullscreenImage,
        setFullscreenImage,
        isMobile,
    } = useSlider()

    const constraintsRef = useRef(null)

    return (
        <>
            <motion.div
                className='w-full h-full flex flex-col justify-center gap-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className='w-full aspect-[4/3] bg-blue-300 rounded-lg relative overflow-hidden'
                    transition={{ type: "spring", stiffness: 300 }}
                    ref={constraintsRef}
                >
                    {videos.map((video, index) => index === 0 && (
                        <div key={index} className={`absolute inset-0 ${index === videoIndex ? 'block' : 'hidden'}`}>
                            <Image
                                src={video.split('/').slice(0, video.split('/').length - 1).join('/') + '/thumbnail.jpeg'}
                                className="w-full h-full object-cover bg-cover"
                                alt='video thumbnail'
                                fill
                                objectFit='cover'
                            />
                            <svg
                                className='z-50 cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                width="56"
                                height="56"
                                viewBox="0 0 56 56"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => {
                                    setFullscreenVideo(true)
                                    setVideoIndex(index)
                                }}
                            >
                                <path opacity="0.6" d="M27.931 51.3337C40.8176 51.3337 51.2643 40.887 51.2643 28.0003C51.2643 15.1137 40.8176 4.66699 27.931 4.66699C15.0443 4.66699 4.59766 15.1137 4.59766 28.0003C4.59766 40.887 15.0443 51.3337 27.931 51.3337Z" fill="#007CB4" />
                                <path d="M34.9298 23.8699L28.1632 19.9733C26.4832 18.9933 24.4532 18.9933 22.7732 19.9733C21.0932 20.9533 20.0898 22.6799 20.0898 24.6399V32.4566C20.0898 34.3933 21.0932 36.1433 22.7732 37.1233C23.6132 37.6133 24.5465 37.8466 25.4565 37.8466C26.3898 37.8466 27.2998 37.6133 28.1398 37.1233L34.9065 33.2266C36.5865 32.2466 37.5898 30.5199 37.5898 28.5599C37.6365 26.5999 36.6332 24.8499 34.9298 23.8699Z" fill="white" />
                            </svg>
                        </div>
                    ))}

                    {fullscreenVideo && (
                        <FullscreenVideoSlider
                            videos={videos}
                            index={videoIndex}
                            setIndex={setVideoIndex}
                            setFullscreen={setFullscreenVideo}
                        />
                    )}

                    <motion.div
                        className='absolute top-2 right-2 text-blue-500 shadow-sm border border-blue-500/20 bg-white/70 px-2 rounded-md'
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {videoIndex + 1} of {videos.length}
                    </motion.div>

                    <motion.button
                        className='absolute bottom-2 left-2 bg-white/70 shadow-md border border-blue-500/20 rounded-md p-2'
                        data-tooltip-content="Fullscreen"
                        onClick={() => setFullscreenImage(!fullscreenImage)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.875 10.6349L20.5451 2.96484" stroke="#007CB4" strokeWidth="1.68367" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21.2945 6.70659V2.2168H16.8047" stroke="#007CB4" strokeWidth="1.68367" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.0024 2.2168H9.1316C4.45473 2.2168 2.58398 4.08755 2.58398 8.76442V14.3767C2.58398 19.0535 4.45473 20.9243 9.1316 20.9243H14.7438C19.4207 20.9243 21.2915 19.0535 21.2915 14.3767V12.5059" stroke="#007CB4" strokeWidth="1.68367" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.button>
                </motion.div>

                <div className="flex gap-4 py-2 mx-auto">
                    {videos.map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{
                                backgroundColor: i === videoIndex ? '#007CB4' : 'white'
                            }}
                            initial={false}
                            animate={i === videoIndex ? { scale: 1.2 } : { scale: 1 }}
                        ></motion.div>
                    ))}
                </div>

                {!isMobile && (
                    <>
                        <Controls
                            maxIndex={videos.length - 1}
                        />
                        <ul className='w-full overflow-hidden h-28 flex justify-center items-center'>
                            {Array.from({ length: images }).map((_, i) => (
                                <motion.li
                                    key={i}
                                    className="relative max-w-20 w-20 h-[105px] cursor-pointer flex-grow-0"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => {
                                        setFullscreenImage(true)
                                        setImageIndex(i)
                                    }}
                                >
                                    <Image
                                        src={`/iphone.png`}
                                        alt={`Image ${i + 1} iphone`}
                                        width={100}
                                        height={100}
                                        className='absolute w-auto h-full rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                    />
                                    <Image
                                        src={`/images/${section}/${i + 1}.png`}
                                        alt={`Image ${i + 1}`}
                                        width={100}
                                        height={100}
                                        className='absolute w-[45px] h-[96%] rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                    />
                                </motion.li>
                            ))}
                        </ul>
                    </>
                )}
            </motion.div>

            {fullscreenImage && (
                <FullscreenImageSlider
                    setFullscreen={setFullscreenImage}
                    images={images}
                    index={imageIndex}
                    setIndex={setImageIndex}
                    section={section}
                />
            )}

            {isMobile && (
                <ul className='w-full overflow-hidden h-28 flex justify-center items-center'>
                    {Array.from({ length: images }).map((_, i) => (
                        <motion.li
                            key={i}
                            className="relative max-w-20 w-20 h-[105px] cursor-pointer flex-grow-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => {
                                setFullscreenImage(true)
                                setImageIndex(i)
                            }}
                        >
                            <Image
                                src={`/iphone.png`}
                                alt={`Image ${i + 1} iphone`}
                                width={100}
                                height={100}
                                className='absolute w-auto h-full rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                            />
                            <Image
                                src={`/images/${section}/${i + 1}.png`}
                                alt={`Image ${i + 1}`}
                                width={100}
                                height={100}
                                className='absolute w-[45px] h-[96%] rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                            />
                        </motion.li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default ImageSlider