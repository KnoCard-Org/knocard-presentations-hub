import React from 'react'
import { SliderProvider } from './slider-context'

function Layout({
    children
}:
    {
        children: React.ReactNode
    }) {
    return (
        <SliderProvider>
            {
                children
            }
        </SliderProvider>
    )
}

export default Layout