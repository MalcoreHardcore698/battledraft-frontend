import React from 'react'

import { MainStreamSlide } from '../MainStream/MainStreamSlide'

import TinySlider from 'tiny-slider-react'

export const MainStream = ({ state, setCurrentGame }) => {
    const colors = ['blue', 'orange', 'red', 'purple']
    const settings = {
        nav: false,
        mouseDrag: true,
        controls: false,
        items: 1,
        gutter: 50,
        edgePadding: 50,
        loop: false,
        responsive: {
            480: {
                items: 1
            },
            992: {
                items: 2
            },
            1299: {
                items: 3
            }
        }
    }

    return (
        <aside className="bd-main__mainstream">
            <TinySlider settings={settings}>
                {state.games.map((game, i) => (
                    <MainStreamSlide
                        key={i}
                        state={state}
                        game={game}
                        color={colors[i]}
                        setCurrentGame={setCurrentGame}
                        active={(i === 0)}
                    />
                ))}
            </TinySlider>
        </aside>
    )
}