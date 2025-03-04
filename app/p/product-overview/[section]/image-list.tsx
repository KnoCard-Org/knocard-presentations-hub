'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Controls } from './controls'
import { useSlider } from './slider-context'
import { useFullscreen } from './fullscreen-context'

function ImageList({ images, max, section }: { images: number, max: number, section: string }) {
    const {
        setIndex,
        isMobile,
    } = useSlider()

    const {
        setFullscreen
    } = useFullscreen()

    return isMobile ? (
        <ul className='w-full  h-28  justify-center items-center overflow-scroll hidden md:flex'>
            {Array.from({ length: images }).map((_, i) => (
                <motion.li
                    key={i}
                    className="relative max-w-20 w-20 h-[105px] cursor-pointer flex-grow-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => {
                        setFullscreen(true)
                        setIndex(i)
                    }}
                >
                    <Image
                        src={`/iphone.png`}
                        alt={`Image ${i} iphone`}
                        width={100}
                        height={100}
                        className='absolute w-auto h-full rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    />
                    <Image
                        src={`/images/${section}/${i}.png`}
                        alt={`Image ${i}`}
                        width={100}
                        height={100}
                        className='absolute w-[45px] h-[96%] rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    />
                </motion.li>
            ))}
        </ul>
    ) : (
        <>
            <Controls maxIndex={max} />
            <ul className='w-full overflow-hidden h-28 flex justify-center items-center'>
                {Array.from({ length: images }).map((_, i) => (
                    <motion.li
                        key={i}
                        className="relative max-w-20 w-20 h-[105px] cursor-pointer flex-grow-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => {
                            setFullscreen(true)
                            setIndex(i)
                        }}
                    >
                        <Image
                            src={`/iphone.png`}
                            alt={`Image ${i} iphone`}
                            width={100}
                            height={100}
                            className='absolute w-auto h-full rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        />
                        <Image
                            src={`/images/${section}/${i}.png`}
                            alt={`Image ${i}`}
                            width={100}
                            height={100}
                            className='absolute bg-cover w-[45px] h-[96%] rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
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
                                <svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.6" d="M39.9017 73.3337C58.3112 73.3337 73.235 58.4098 73.235 40.0003C73.235 21.5908 58.3112 6.66699 39.9017 6.66699C21.4922 6.66699 6.56836 21.5908 6.56836 40.0003C6.56836 58.4098 21.4922 73.3337 39.9017 73.3337Z" fill="#007bb4" />
                                    <path d="M49.9002 34.1001L40.2335 28.5334C37.8335 27.1334 34.9335 27.1334 32.5335 28.5334C30.1335 29.9334 28.7002 32.4001 28.7002 35.2001V46.3667C28.7002 49.1334 30.1335 51.6334 32.5335 53.0334C33.7335 53.7334 35.0669 54.0667 36.3669 54.0667C37.7002 54.0667 39.0002 53.7334 40.2002 53.0334L49.8669 47.4667C52.2669 46.0667 53.7002 43.6001 53.7002 40.8001C53.7669 38.0001 52.3335 35.5001 49.9002 34.1001Z" fill="white" />
                                </svg>

                            </button>
                        }
                    </motion.li>
                ))}
            </ul>
        </>
    )
}

export default ImageList