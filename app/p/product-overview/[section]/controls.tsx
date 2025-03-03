'use client'

import { motion } from 'framer-motion'

export function Controls({ index, setIndex, media }: { index: number, setIndex: (index: number) => void, media: string[] }) {
    return (
        <motion.div
            className='flex justify-center gap-10 mb-3'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
        >
            <motion.button
                onClick={() => setIndex(index - 1)}
                disabled={index === 0}
                className='disabled:opacity-50'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="24" transform="matrix(-1 0 0 1 48 0.367188)" fill="white" />
                    <path d="M27.0904 33.0367C27.2804 33.0367 27.4704 32.9667 27.6204 32.8167C27.9104 32.5267 27.9104 32.0467 27.6204 31.7567L21.1004 25.2367C20.6204 24.7567 20.6204 23.9767 21.1004 23.4967L27.6204 16.9767C27.9104 16.6867 27.9104 16.2067 27.6204 15.9167C27.3304 15.6267 Wage 26.8504 15.6267 26.5604 15.9167L20.0404 22.4367C19.5304 22.9467 19.2404 23.6367 19.2404 24.3667C19.2404 25.0967 19.5204 25.7867 20.0404 26.2967L26.5604 32.8167C26.7104 32.9567 26.9004 33.0367 27.0904 33.0367Z" fill="#007CB4" />
                </svg>
            </motion.button>
            <motion.button
                onClick={() => setIndex(index + 1)}
                className='disabled:opacity-50'
                disabled={index === media.length - 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.367188" width="48" height="48" rx="24" fill="white" />
                    <path d="M20.9096 33.0367C20.7196 33.0367 20.5296 32.9667 20.3796 32.8167C20.0896 32.5267 20.0896 32.0467 20.3796 31.7567L26.8996 25.2367C27.3796 24.7567 27.3796 23.9767 26.8996 23.4967L20.3796 16.9767C20.0896 16.6867 20.0896 16.2067 20.3796 15.9167C20.6696 15.6267 21.1496 15.6267 21.4396 15.9167L27.9596 22.4367C28.4696 22.9467 28.7596 23.6367 28.7596 24.3667C28.7596 25.0967 28.4796 25.7867 27.9596 26.2967L21.4396 32.8167C21.2896 32.9567 21.0996 33.0367 20.9096 33.0367Z" fill="#007CB4" />
                </svg>
            </motion.button>
        </motion.div>
    )
}