'use client'
import React from 'react'
import FAQ from './Faq'
import Navbar from './NavBar'
import ImageList from './image-list'
import Image from 'next/image'
import { useSlider } from './slider-context'
import { useFullscreen } from './fullscreen-context'
import FullscreenImageSlider from './fullscreen-slider'

function Page({ params }: { params: { section: string } }) {

    const {
        Index,
    } = useSlider()
    const {
        setFullscreen,
        isFullscreen
    } = useFullscreen()
    const info = content.find((item) => item.id === params.section)

    if (!info) return null


    return (
        <div className={`flex flex-col  h-screen overflow-hidden w-full md:gap-10 md:p-4`}
            style={{
                background: `url(${info.bg}) no-repeat center center fixed`,
                backgroundSize: 'cover',
            }}
        >

            <main className={"md:max-w-5xl  mx-auto w-full  gap-2 md:gap-14 grid place-items-start md:grid-cols-2 md:mt-10 mt-5"}>

                <div className='w-full md:h-[640px] h-[360px] relative  '
                    onClick={
                        () => setFullscreen(true)
                    }
                >
                    <Image
                        src={`/iphone.png`}
                        alt={`Image iphone`}
                        width={400}
                        height={600}
                        className='absolute  w-auto h-full rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'

                    />
                    <Image
                        src={`/images/${info.id}/${Index + 1}.png`}
                        alt={`Image `}
                        width={400}
                        height={600}
                        className='absolute overflow-hidden w-auto h-[96%] md:rounded-[38px] rounded-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'

                    />
                    {
                        Index === 0 &&
                        <button
                            onCanPlay={
                                () =>
                                    setFullscreen(true)
                            }
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        >
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" d="M39.9017 73.3337C58.3112 73.3337 73.235 58.4098 73.235 40.0003C73.235 21.5908 58.3112 6.66699 39.9017 6.66699C21.4922 6.66699 6.56836 21.5908 6.56836 40.0003C6.56836 58.4098 21.4922 73.3337 39.9017 73.3337Z" fill="#007bb4c9" />
                                <path d="M49.9002 34.1001L40.2335 28.5334C37.8335 27.1334 34.9335 27.1334 32.5335 28.5334C30.1335 29.9334 28.7002 32.4001 28.7002 35.2001V46.3667C28.7002 49.1334 30.1335 51.6334 32.5335 53.0334C33.7335 53.7334 35.0669 54.0667 36.3669 54.0667C37.7002 54.0667 39.0002 53.7334 40.2002 53.0334L49.8669 47.4667C52.2669 46.0667 53.7002 43.6001 53.7002 40.8001C53.7669 38.0001 52.3335 35.5001 49.9002 34.1001Z" fill="white" />
                            </svg>

                        </button>
                    }

                </div>
                <div className='overflow-hidden max-w-full w-full'>

                    <FAQ faqData={info.faq} />
                    <ImageList
                        images={info.images + 1}
                        section={info.id}
                        max={info.images - 1}
                    />
                </div>

            </main>
            <Navbar color={info.nav_color} />

            {
                isFullscreen &&
                <FullscreenImageSlider
                    images={info.images + 1}
                    section={info.id}
                />
            }
        </div>
    )
}

export default Page

const content = [
    {
        id: "messaging",
        title: "Messaging",
        icon: "/icones/messaging.svg",
        href: "/p/product-overview/messaging",
        bg: "/bg/messaging.jpg",
        nav_color: '#007CB4',
        faq: [
            {
                q: "What is the Messaging?",
                a: [
                    "In app messaging service",
                    "Group messaging enhances group communication and keeps teams unified.",
                ],
            },
            {
                q: "How does Messaging work?",
                a: [
                    "The messaging feature operates within the KnoCard Online platform, bypassing mobile carrier restrictions.",
                    "Notification alerts ensure that no message is overlooked.",
                    "Users can easily create and manage groups, with members having the option to remove themselves as needed.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Unlike SMS-based services, this platform allows users to communicate seamlessly across international regions.",
                    "Messages can be sent and received on various devices, including mobile phones, desktops, and laptops.",
                ],
            },
        ],
        images: 5,
        video: [
            "/videos/messaging/1.mp4",
        ]
    },
    {
        id: "dashboard",
        title: "Dashboard",
        icon: "/icones/dashboard.svg",
        href: "/p/product-overview/dashboard",
        bg: "/bg/dashboard.jpg",
        nav_color: "#fff",
        faq: [
            {
                q: "What is the KnoCard Dashboard?",
                a: [
                    "Your central hub for managing, tracking, and growing your business.",
                    'Available via mobile app and KnoCard.com, making it accessible anywhere.',
                    "Provides a clean, intuitive design to keep users engaged in income-producing activities."
                ],
            },
            {
                q: "How does the KnoCard Dashboard work?",
                a: [
                    "Displays essential sections like Goals, Media, Reporting, and Pipeline.",
                    "The Smiley Face button makes instant sharing quick and easy.",
                    "Sends real-time notifications about prospect activity to ensure timely follow-ups."
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Automated tracking removes the need for manual data entry.",
                    "Mobile-first design ensures speed and efficiency.",
                    "Keeps users focused on high-value business actions that drive results.",
                ],
            },
        ],
        images: 5,
        video: [
            "/videos/dashboard/1.mp4",
        ]
    },
    {
        id: "media",
        title: "Media",
        icon: "/icones/media.svg",
        href: "/p/product-overview/media",
        bg: "/bg/media.jpg",
        nav_color: '#fff',
        faq: [
            {
                q: "What is the Media?",
                a: [
                    "A centralized library for storing, organizing, and sharing business content.",
                    "Users can upload videos, PDFs, images, and audio files.",
                    "Every media share is tracked in real-time to measure engagement.",
                ],
            },
            {
                q: "How does KnoCard Media work?",
                a: [
                    "Users can upload, edit, and organize content for easy access.",
                    "KnoCard tracks who viewed media, how long they watched, and what they clicked next.",
                    "Content can be shared via text, email, or KnoCard Social.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Unlike CRMs, KnoCard tracks media engagement, providing better insights.",
                    "Eliminates the need for third-party file-sharing tools.",
                    "Helps businesses send high-quality, trackable content in seconds."
                ],
            },
        ],
        images: 6,
        video: [
            "/videos/media/1.mp4",
        ]
    },
    {
        id: "social",
        title: "Social",
        icon: "/icones/social.svg",
        href: "/p/product-overview/social",
        nav_color: '#fff',
        bg: "/bg/social.jpg",
        faq: [
            {
                q: "What is KnoCard Social?",
                a: [
                    "A business-focused social network built into KnoCard.",
                    "No ads, distractions, or off-topic content—just professional networking.",
                    "Allows users to build an audience and expand their reach."
                ],
            },
            {
                q: "How does KnoCard Social work?",
                a: [
                    "Users can post updates, videos, and business insights to engage their audience.",
                    "Every post is delivered to 100% of followers—no algorithm limitations.",
                    "Seamlessly integrates with sharing, engagement tracking, and KnoCard Pipeline."
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "No visibility restrictions—users reach their entire audience.",
                    "Unlike Facebook or LinkedIn, KnoCard focuses solely on business growth.",
                    "All engagement is tracked, allowing strategic follow-ups."
                ],
            },
        ],
        images: 6,
        video: [
            "/videos/social/1.mp4",
        ]
    },
    {
        id: "feedback_forms",
        title: "Feedback Forms",
        icon: "/icones/feedback_forms.svg",
        href: "/p/product-overview/feedback_forms",
        nav_color: '#007CB4',
        bg: "/bg/feedback_forms.jpg",
        faq: [
            {
                q: "What are KnoCard Feedback Forms?",
                a: [
                    "A built-in tool that gathers instant feedback from prospects.",
                    "Helps users understand interest levels before making a follow-up.",
                    "Increases engagement by providing quick, simple responses."
                ],
            },
            {
                q: "How do KnoCard Feedback Forms work?",
                a: [
                    "Users attach a custom feedback form to shared media.",
                    "Prospects answer questions like “Are you interested?” or “Would you like to learn more?”.",
                    "KnoCard logs the responses in real-time, updating the Pipeline."
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Eliminates guessing—users know exactly who’s interested.",
                    "Traditional methods require manual follow-ups—KnoCard automates this process.",
                ],
            },
        ],
        images: 6,
        video: [
            "/videos/feedback_forms/1.mp4",
        ]
    },
    {
        id: "referrals",
        title: "Referrals",
        icon: "/icones/referrals.svg",
        href: "/p/product-overview/referrals",
        nav_color: '#fff',
        bg: "/bg/referrals.jpg",
        faq: [
            {
                q: "What is KnoCard Referrals?",
                a: [
                    "A fully trackable referral system that turns word-of-mouth marketing into results.",
                    "Allows users to refer business contacts quickly and efficiently.",
                    "Referrals are logged and tracked, ensuring no missed opportunities."
                ],
            },
            {
                q: "How does KnoCard Referrals work?",
                a: [
                    "Users can refer contacts directly from the app.",
                    "KnoCard tracks the referral, logging it in the Pipeline.",
                    "The referred person receives an instant notification with business details."
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Unlike traditional referrals, KnoCard tracks every step.",
                    "No lost or forgotten recommendations—everything is logged."
                ],
            },
        ],
        images: 4,
        video: [
            "/videos/referral/1.mp4",
        ]
    },
    {
        id: "scan_business_card",
        title: "Scan Business Card",
        icon: "/icones/scan_business_card.svg",
        href: "/p/product-overview/scan_business_card",
        nav_color: '#fff',
        bg: "/bg/scan_business_card.jpg",
        faq: [
            {
                q: "What is KnoCard Scan Business Card?",
                a: [
                    "A digital solution to capture and track business card contacts.",
                    "Converts paper business cards into trackable digital leads.",
                    "Ensures every new contact is stored, organized, and followed up on."
                ],
            },
            {
                q: "How does KnoCard Scan Business Card work?",
                a: [
                    "Users scan a physical business card using the KnoCard app.",
                    "Contact info is saved automatically and linked to the Pipeline.",
                    "KnoCard sends an instant message to the new contact with business details."
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Traditional business cards get lost—KnoCard digitizes them instantly.",
                    "No manual data entry required."
                ],
            },
        ],
        images: 5,
        video: [
            "/videos/scan-business-card/1.mp4",
        ]
    },
    {
        id: "add_new_prospect",
        title: "Add New Prospect",
        icon: "/icones/add_new_prospect.svg",
        href: "/p/product-overview/add_new_prospect",
        nav_color: '#fff',
        bg: "/bg/add_new_prospect.jpg",
        faq: [
            {
                q: "What is Add New Prospect?",
                a: [
                    "Captures new prospect information through a variety of methods.",
                    "Drops new prospect into KnoCard’s CRM system - the KnoCard Pipeline.",
                ],
            },
            {
                q: "How does Add New Prospect work?",
                a: [
                    "Platform creates a new prospect entry through Scan Business Card, QR with Lead Generation, Share with New Prospect option, or Add Prospect.",
                    "All information that was captured is dropped in to the KnoCard Pipeline.",
                    "User receives notification when the prospect has viewed content.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "KnoCard’s game changing system takes the guesswork out of the task of managing over leads.",
                ],
            },
        ],
        images: 5,
        video: [
            "/videos/add-prospect-client/1.mp4",
        ]
    },

    {
        id: "share",
        title: "Share",
        icon: "/icones/share.svg",
        href: "/p/product-overview/share",
        nav_color: '#007CB4',
        bg: "/bg/sharing.jpg",
        faq: [
            {
                q: "What is KnoCard Sharing?",
                a: [
                    "The foundation of business growth through direct text messaging.",
                    "Provides multiple sharing options, including KnoCard, Media, Referrals, and Review Requests.",
                    "Ensures 100% deliverability with instant tracking."
                ],
            },
            {
                q: "How does KnoCard Sharing work?",
                a: [
                    "Users share their KnoCard, media, and referrals via text, email, or KnoCard Social.",
                    "KnoCard tracks every interaction, including video plays and responses.",
                    "Users can request reviews, scan business cards, and add new prospects directly from the Share menu."
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Unlike email, KnoCard sharing ensures high engagement and visibility.",
                    "Tracks every share so users know who is engaging with their content."
                ],
            },
        ],
        images: 6,
        video: [
            "/videos/share/1.mp4",
        ]
    },
    {
        id: "goal-setting",
        title: "Goal Setting",
        icon: "/icones/goal_setting.svg",
        href: "/p/product-overview/goal-setting",
        nav_color: '#fff',
        bg: "/bg/goal_setting.jpg",
        faq: [
            {
                q: "What are Team & Groups?",
                a: [
                    "Turnkey marketing for members of a team, group, or company tied in to the KnoCard platform.",
                    "Dedicated media files and landing pages are included by default based on the leader's selection.",
                    "All members will follow the leader's social posts to ensure effective team communication.",
                ],
            },
            {
                q: "How does Team & Groups work?",
                a: [
                    "Upon signup, the user selects their associated team or group.",
                    "Media files and landing page are automatically added to KnoCard.",
                    "Users are ready to start sharing immediately.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Unlike corporate replica websites or mobile platforms, KnoCard allows users to add their own content.",
                    "Utilizes data analytics and tracking to eliminate rejection and promote success.",
                    "When used with KnoCard Link, it offers unparalleled coaching options.",
                ],
            },
        ],
        images: 5,
        video: [
            "/videos/goal-setting/1.mp4",
        ]
    },
    {
        id: "reporting",
        title: "Reporting",
        icon: "/icones/reporting.svg",
        href: "/p/product-overview/reporting",
        nav_color: '#007CB4',
        bg: "/bg/reporting.jpg",
        faq: [
            {
                q: "What is KnoCard Reporting?",
                a: [
                    "A real-time analytics system that tracks engagement and business growth.",
                    "Provides insights into what content is working and where prospects are in the sales process.",
                    "Eliminates guesswork by offering data-driven insights into user behavior."
                ],
            },
            {
                q: "How does KnoCard Reporting work?",
                a: [
                    "Monitors new prospects, share history, and media engagement.",
                    "Users can filter reports by day, week, or month for easy analysis.",
                    "Integrates with the Pipeline, allowing precise follow-ups with engaged prospects."
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Unlike CRMs, KnoCard automatically tracks engagement with no manual input.",
                    "Provides clear, actionable insights, not just raw data.",
                    "Ensures 100% visibility—users know exactly who to follow up with and when."
                ],
            },
        ],
        images: 6,
        video: [
            "/videos/reporting/1.mp4",
        ]
    },
    {
        id: "pipeline",
        title: "Pipeline",
        icon: "/icones/pipeline.svg",
        href: "/p/product-overview/pipeline",
        nav_color: '#fff',
        bg: "/bg/pipeline.jpg",
        faq: [
            {
                q: "What is the KnoCard Pipeline?",
                a: [
                    "A real-time tracking system that monitors every prospect interaction.",
                    "Organizes new, warm, and active leads for effective follow-ups.",
                    "Provides a structured workflow to maximize conversions.",

                ],
            },
            {
                q: "How does the KnoCard Pipeline work?",
                a: [
                    "Tracks every KnoCard share and engagement activity.",
                    "Users receive instant notifications when a prospect interacts.",
                    "Filters prospects by activity level—most active, least active, and new contacts."
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "No manual data entry required—data updates automatically.",
                    "Focuses on warm, engaged leads, not just mass outreach.",
                    "Eliminates missed follow-ups, ensuring higher conversion rates."
                ],
            },
        ],
        images: 6,
        video: [
            "/videos/pipeline/1.mp4",
        ]
    },
];