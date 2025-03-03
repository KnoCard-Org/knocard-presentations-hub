'use client'

import { motion } from 'framer-motion'
import { useSlider } from './slider-context'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Controls({
    maxIndex
}: {
    maxIndex: number
}) {

    const {
        imageIndex,
        setImageIndex,
    } = useSlider()
    return (
        <motion.div
            className='flex justify-center gap-10 mb-3'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
        >
            <motion.button
                onClick={() => setImageIndex(imageIndex - 1)}
                disabled={imageIndex === 0}
                className='disabled:opacity-50 bg-white my-2 rounded-full p-4'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ChevronLeft />

            </motion.button>
            <motion.button
                onClick={() => setImageIndex(imageIndex + 1)}
                className='disabled:opacity-50 bg-white my-2 rounded-full p-4'
                disabled={imageIndex === maxIndex}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ChevronRight />
            </motion.button>
        </motion.div>
    )
}