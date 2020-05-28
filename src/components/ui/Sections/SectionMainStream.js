import React from 'react'

import { MainStreamBlock } from '../MainStream/MainStreamBlock'

import TinySlider from 'tiny-slider-react'

export const MainStream = ({ games, setCurrentGame }) => {
    const colors = ['blue', 'orange', 'red', 'purple']
    const settings = {
        nav: false,
        mouseDrag: true,
        controls: false,
        items: 3,
        gutter: 25,
        edgePadding: 50,
        loop: false
    }

    return (
        <aside className="bd-main__mainstream">
            <TinySlider settings={settings}>
                {games.map((game, i) => (
                    <MainStreamBlock
                        key={i}
                        game={game}
                        color={colors[i]}
                        setCurrentGame={setCurrentGame}
                    />
                ))}
            </TinySlider>
        </aside>
    )
}