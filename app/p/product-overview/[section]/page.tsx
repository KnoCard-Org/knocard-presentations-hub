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

export const content = [
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
                q: "What is the KnoCard Link?",
                a: [
                    "An innovative coaching platform designed to empower team leaders by providing access to members’ reports, aiding in business growth.",
                ],
            },
            {
                q: "How does KnoCard Link work?",
                a: [
                    "Team leaders send a consent request to team members who have asked for guidance.",
                    "Once consent is granted, the leader’s dashboard displays detailed reports, offering a comprehensive view of the member’s sharing activities and results.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Unlike other systems that leave leaders to coach without data, KnoCard Link provides crucial insights for effective team management.",
                    "The platform eliminates wasted time by ensuring leaders only assist team members actively working on their business, thanks to its accountability-based approach.",
                ],
            },
        ],
        images: 5,
        video: [
            "/videos/knocard-link/1.mp4",
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
                    "Photos, videos, PDF files are quickly and easily added to Media section",
                    "Files may be added individually or in groups",
                    "Organize and group similar media files by creating topics and adding relevant files to them",
                ],
            },
            {
                q: "How does Media work?",
                a: [
                    "KnoCard user adds media files from mobile device, laptop or desktop",
                    "Media files can be viewed either from the Media page of the KnoCard or by clicking on a dedicated link",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Unlike other platforms, which don’t offer insights into viewer preferences, KnoCard allows media files to be sent with an attached feedback form",
                    "KnoCard’s media files are accessible via a link, requiring only an internet connection to view—no app download needed, unlike other platforms.",
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
                q: "What is the Social?",
                a: [
                    "Business focused social media platform.",
                    "Provides source for users to share and receive information that is not clouded by distractions and chaos.",
                ],
            },
            {
                q: "How does Social work?",
                a: [
                    "Modeled after traditional social media platforms, KnoCard Social provides the ability to post content, videos, and photos - and to share and interact on the platform.",
                    "Non KnoCard users are offered a free, Social Only platform.",
                    "Team and Group leaders’ posts are served to all group members, providing an instantaneous communication tool.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Traditional social platforms were never intended for business purposes but have been used in lieu of lack of a better solution.",
                    "KnoCard Social IS the solution!",
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
                q: "What are the Feedback Forms?",
                a: [
                    "Attached to media files that are shared with prospects.",
                    "Provides valuable insight to guide follow up.",
                ],
            },
            {
                q: "How do Feedback Forms work?",
                a: [
                    "User may attach a default questionnaire or create a custom form.",
                    "Form is displayed to recipient after media is viewed.",
                    "Feedback results are reported to KnoCard user.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Eliminates rejection by eliminating awkward follow up conversations.",
                    "With a clear understanding of the recipients’ likes, dislikes, and interests, KnoCard user is able to identify which prospects are hot or cold, and steer follow up conversations based on viewers’ interests.",
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
                q: "What are the Referrals?",
                a: [
                    "Revolutionary tool promotes simple, effective sharing of referrals",
                    "Text based; send a referral in seconds.",
                ],
            },
            {
                q: "How do Referrals work?",
                a: [
                    "Search for KnoCard user & select Share Referral.",
                    "Search contacts to locate desired recipient.",
                    "Text message is sent with pre-populated message and KnoCard link.",
                    "KnoCard user receives a notification to alert of an incoming referral.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Most referrals die on the spot due to lack of access to business card or business info; with KnoCard, referral info is always as close as your phone.",
                    "KnoCard alerts users who have received referrals, and provides recipient information upon receiving consent.",
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
                q: "What is Scan Business Card?",
                a: [
                    "Transforms outdated business cards into valuable leads.",
                    "Digitally stores contact data and images.",
                ],
            },
            {
                q: "How does Scan Business Card work?",
                a: [
                    "The user scans a business card or takes a photo; OCR technology converts the contact information into a digital format.",
                    "The business card owner is automatically added as a new contact and integrated into the KnoCard user’s pipeline.",
                    "The business card owner (prospect) receives a text message from the KnoCard user, which includes a pre-written message and a link to the KnoCard.",
                    "The prospect’s viewing activity is tracked and reported back to the KnoCard user.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "As opposed to traditional business card scanners, KnoCard offers a quick way to access and manage the captured information.",
                    "KnoCard Reporting monitors the prospect’s activity and provides detailed data not available through other card scanners.",
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
                q: "What is Share?",
                a: [
                    "Effective system for transmitting business information to leads and prospects",
                ],
            },
            {
                q: "How does Share work?",
                a: [
                    "User selects content to be shared and chooses to share with a KnoCard user, new prospect, existing contact, or as a copied link.",
                    "Information is sent via text message to new and existing prospects, and shared via in-app messaging with KnoCard users.",
                    "Shares and viewing activity are tracked and reported.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Recipients are not required to download an app to view content.",
                    "Information is delivered through a trusted source, via text message using personal mobile number, or directly inside the KnoCard app.",
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
                q: "What is Reporting?",
                a: [
                    "Powerful system that incorporates data analytics to generate a smooth, rejection free sales process",
                    "Provides valuable insight that filters out the no’s and ensures users they are not doing business in the dark",
                ],
            },
            {
                q: "How does Reporting work?",
                a: [
                    "Platform captures contact information of leads whom KnoCard user has shared with, including new prospects who have been added by user or completed a lead capture form.",
                    "System tracks shares, clicks, and feedback form results.",
                    "KnoCard Reporting categorizes, filters, and displays viewers’ activity.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "First of its kind rejection free system encourages high share rates.",
                    "Promotes effective time management, giving users the ability to spend time and effort only on interested prospects.",
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
                q: "What is Pipeline?",
                a: [
                    "Integrated CRM solution connecting all aspects of your business network.",
                    "Manages sharing, reporting, scheduling, tasks, follow-ups, and sales within a single platform.",
                ],
            },
            {
                q: "How does Pipeline work?",
                a: [
                    "Seamlessly tracks and manages contacts once integrated.",
                    "Automatically captures and stores all interactions, engagements, and analytics.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Unlike other CRMs that require manual imports, Knocard Pipeline integrates all business activities in one place.",
                    "Tracks shares, engagements, analytics, and follow-ups comprehensively.",
                    "Simplifies workflows and enhances productivity, offering a competitive advantage.",
                ],
            },
        ],
        images: 6,
        video: [
            "/videos/pipeline/1.mp4",
        ]
    },
];