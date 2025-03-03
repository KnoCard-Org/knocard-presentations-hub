'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Controls } from './controls'
import { useSlider } from './slider-context'

function ImageList({ images, max, section }: { images: number, max: number, section: string }) {
    const {
        setImageIndex,
        setFullscreenImage,
        isMobile,
    } = useSlider()

    return isMobile ? (
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
    )
}

export default ImageList