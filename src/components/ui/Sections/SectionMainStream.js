import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'

import ArrowIcon from './../../../img/next.svg'

import { MainStreamSlide } from '../MainStream/MainStreamSlide'

import TinySlider from 'tiny-slider-react'

export const SectionMainStream = ({ state, setCurrentGame }) => {
    const settings = {
        nav: false,
        mouseDrag: true,
        controls: true,
        controlsText: [`<img src=${ArrowIcon} alt="Arrow" />`, `<img src=${ArrowIcon} alt="Arrow" />`],
        items: 1,
        gutter: 25,
        edgePadding: 25,
        loop: false,
        center: true,
        responsive: {
            480: {
                items: 1
            },
            768: {
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
            <h2><FontAwesomeIcon icon={faFire} />Main Stream</h2>
            <TinySlider settings={settings}>
                {state.games.map((game, i) => (
                    <MainStreamSlide
                        key={i}
                        state={state}
                        game={game}
                        setCurrentGame={setCurrentGame}
                        active={(i === 0)}
                    />
                ))}
            </TinySlider>
        </aside>
    )
}