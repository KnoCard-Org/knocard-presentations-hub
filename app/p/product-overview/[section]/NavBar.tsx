'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Knocard from './icones/Knocard';
import Home from './icones/Home';
import { useModal } from '@/components/navigator/Navigator';

const Navbar = ({
    color
}: {
    color: string
}) => {
    const { openModal } = useModal();

    return (
        <>
            <nav className='fixed bottom-4 sm:bottom-6 left-0 w-full px-4 sm:px-6'>
                <div className='flex justify-between items-center max-w-screen-lg mx-auto w-full'>
                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex flex-col items-center"
                        >
                            <Home fill={color} width={40} height={40} className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                        </motion.button>
                    </Link>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center"
                        onClick={() => openModal()}
                    >
                        <Knocard fill={color} width={40} height={40} className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                    </motion.button>
                </div>
            </nav>

        </>
    );
};

export default Navbar;