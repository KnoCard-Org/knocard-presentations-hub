'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { useSlider } from './slider-context'

interface FullscreenContextType {
    index: number
    setIndex: (index: number) => void
    isFullscreen: boolean
    setFullscreen: (fullscreen: boolean) => void
    isZoomed: boolean
    setIsZoomed: (zoomed: boolean) => void
}

const FullscreenContext = createContext<FullscreenContextType | undefined>(undefined)

interface FullscreenProviderProps {
    children: ReactNode
}

export function FullscreenProvider({ children }: FullscreenProviderProps) {
    const [isFullscreen, setFullscreen] = useState(false)
    const [isZoomed, setIsZoomed] = useState(false)

    const {
        imageIndex,
        setImageIndex
    } = useSlider()
    const value = {
        index: imageIndex,
        setIndex: setImageIndex,
        isFullscreen,
        setFullscreen,
        isZoomed,
        setIsZoomed,
    }

    return (
        <FullscreenContext.Provider value={value}>
            {children}
        </FullscreenContext.Provider>
    )
}

export function useFullscreen() {
    const context = useContext(FullscreenContext)
    if (context === undefined) {
        throw new Error('useFullscreen must be used within a FullscreenProvider')
    }
    return context
}