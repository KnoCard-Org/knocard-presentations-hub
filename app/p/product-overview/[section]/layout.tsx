import React from 'react'
import { SliderProvider } from './slider-context'
import { FullscreenProvider } from './fullscreen-context'

function Layout({
    children
}:
    {
        children: React.ReactNode
    }) {
    return (
        <SliderProvider>
            <FullscreenProvider>

                {
                    children
                }

            </FullscreenProvider>
        </SliderProvider>
    )
}

export default Layout