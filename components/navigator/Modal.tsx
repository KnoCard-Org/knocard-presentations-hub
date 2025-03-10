import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/app/p/product-overview/[section]/Header';

export default function Modal({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const circleRadius = Math.min(
        windowSize.width < 744 ? 150 : windowSize.width < 1024 ? 250 : 320,
        windowSize.height * 0.355
    );

    //const isIpadRotated = windowSize.width === 744 && windowSize.height === 1059;

    return (
        <AnimatePresence mode='wait'>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[url('/knocard.svg')] bg-no-repeat bg-center bg-contain w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] relative transition-all duration-300"
                    >
                        <AnimatePresence>
                            {list.map((item, i) => (
                                <motion.button
                                    key={i}
                                    initial={{
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        opacity: 0,
                                    }}
                                    animate={{
                                        top: `calc(50% + ${circleRadius}px * ${Math.sin((i * 2 * Math.PI) / 12)})`,
                                        left: `calc(50% + ${circleRadius}px * ${Math.cos((i * 2 * Math.PI) / 12)})`,
                                        opacity: 1,
                                    }}
                                    exit={{
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        opacity: 0,
                                    }}
                                    transition={{ delay: i * 0.05, duration: 0.3 }}
                                    className="absolute flex flex-col items-center justify-center hover:bg-neutral-900/60 rounded-xl p-1 md:p-2"
                                    style={{
                                        top: `calc(50% + ${circleRadius}px * ${Math.sin((i * 2 * Math.PI) / 12)})`,
                                        left: `calc(50% + ${circleRadius}px * ${Math.cos((i * 2 * Math.PI) / 12)})`,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    <Link href={item.href} className="flex flex-col items-center justify-center group ">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 overflow-hidden flex items-center justify-center "
                                        >
                                            <Icon
                                                section={item.title}
                                                color="#00BAF2"
                                                className="text-blue-100"
                                            />
                                        </motion.div>
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ delay: i * 0.05 + 0.2, duration: 0.3 }}
                                            className="text-center text-[11px] sm:text-xs md:text-sm font-medium max-w-20 sm:max-w-24 md:max-w-28 lg:max-w-40 text-white/60 group-hover:text-[#00BAF2]"
                                        >
                                            {item.title}
                                        </motion.p>
                                    </Link>
                                </motion.button>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

const list = [
    {
        id: 'messaging',
        title: 'Messaging',
        icon: '/icones/messaging.svg',
        href: '/p/product-overview/messaging',
    }, {
        id: "dashboard",
        title: 'Dashboard',
        icon: '/icones/dashboard.svg',
        href: '/p/product-overview/dashboard',
    },
    {
        id: 'media',
        title: 'Media',
        icon: '/icones/media.svg',
        href: '/p/product-overview/media',
    }, {
        id: 'social',
        title: 'Social',
        icon: '/icones/social.svg',
        href: '/p/product-overview/social',
    }, {
        id: 'feedback_forms',
        title: 'Feedback Forms',
        icon: '/icones/feedback_forms.svg',
        href: '/p/product-overview/feedback_forms',
    }, {
        id: 'referrals',
        title: 'Referrals',
        icon: '/icones/referrals.svg',
        href: '/p/product-overview/referrals',
    }, {
        id: 'scan_business_card',
        title: 'Scan Business Card',
        icon: '/icones/scan_business_card.svg',
        href: '/p/product-overview/scan_business_card',
    }, {
        id: 'add_new_prospect',
        title: 'Add New Prospect',
        icon: '/icones/add_new_prospect.svg',
        href: '/p/product-overview/add_new_prospect',
    }, {
        id: 'share',
        title: 'Share',
        icon: '/icones/share.svg',
        href: '/p/product-overview/share',
    }, {
        id: 'goal-setting',
        title: 'Goal Setting',
        icon: '/icones/goal_setting.svg',
        href: '/p/product-overview/goal-setting',
    }, {
        id: 'reporting',
        title: 'Reporting',
        icon: '/icones/reporting.svg',
        href: '/p/product-overview/reporting',
    }, {
        id: 'pipeline',
        title: 'Pipeline',
        icon: '/icones/pipeline.svg',
        href: '/p/product-overview/pipeline',
    }
]