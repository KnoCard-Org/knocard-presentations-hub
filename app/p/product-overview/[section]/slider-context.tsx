'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface SliderContextType {
    imageIndex: number
    setImageIndex: (index: number) => void
    videoIndex: number
    setVideoIndex: (index: number) => void
    fullscreenVideo: boolean
    setFullscreenVideo: (value: boolean) => void
    fullscreenImage: boolean
    setFullscreenImage: (value: boolean) => void
    isMobile: boolean
}

const SliderContext = createContext<SliderContextType | undefined>(undefined)

interface SliderProviderProps {
    children: ReactNode
}

export function SliderProvider({ children }: SliderProviderProps) {
    const [imageIndex, setImageIndex] = useState(0)
    const [videoIndex, setVideoIndex] = useState(0)
    const [fullscreenVideo, setFullscreenVideo] = useState(false)
    const [fullscreenImage, setFullscreenImage] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth <= 768)
        checkIfMobile()
        window.addEventListener('resize', checkIfMobile)
        return () => window.removeEventListener('resize', checkIfMobile)
    }, [])

    const value = {
        imageIndex,
        setImageIndex,
        videoIndex,
        setVideoIndex,
        fullscreenVideo,
        setFullscreenVideo,
        fullscreenImage,
        setFullscreenImage,
        isMobile,
    }

    return (
        <SliderContext.Provider value={value}>
            {children}
        </SliderContext.Provider>
    )
}

export function useSlider() {
    const context = useContext(SliderContext)
    if (context === undefined) {
        throw new Error('useSlider must be used within a SliderProvider')
    }
    return context
}