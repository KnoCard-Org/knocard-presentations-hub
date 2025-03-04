'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface SliderContextType {
    Index: number
    setIndex: (index: number) => void
    fullscreen: boolean
    setFullscreen: (value: boolean) => void
    isMobile: boolean
}

const SliderContext = createContext<SliderContextType | undefined>(undefined)

interface SliderProviderProps {
    children: ReactNode
}

export function SliderProvider({ children }: SliderProviderProps) {
    const [Index, setIndex] = useState(0)
    const [fullscreen, setFullscreen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth <= 768)
        checkIfMobile()
        window.addEventListener('resize', checkIfMobile)
        return () => window.removeEventListener('resize', checkIfMobile)
    }, [])

    const value = {
        Index,
        setIndex,
        isMobile,
        fullscreen,
        setFullscreen
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