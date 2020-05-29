import React from 'react'

import { MainStreamBlock } from './../MainStream/MainStreamBlock'

export const CommonModal = ({ state, currentModal, setCurrentModal, onOpenChat }) => {
    const colors = ['blue', 'orange', 'red', 'purple']

    switch (currentModal) {
        case 'groupchats':
            return (
                <div className="bd-modal">
                    <div
                        className="bd-modal__background"
                        onClick={() => setCurrentModal(null)}
                    ></div>
                    <div className="bd-modal__body">
                        <h2>Choose Your Game</h2>
                        <div className="bd-modal__body-groupchats">
                            {state.games.map((game, i) => (
                                <MainStreamBlock
                                    key={i}
                                    state={state}
                                    game={game}
                                    color={colors[i]}
                                    onOpenChat={onOpenChat}
                                    setCurrentModal={setCurrentModal}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )
        case 'settings':
            return (
                <div className="bd-modal">
                    <div
                        className="bd-modal__background"
                        onClick={() => setCurrentModal(null)}
                    ></div>
                    <div className="bd-modal__body">
                        <h2>Settings</h2>
                        <ul>
                            <li>
                                <div className="checkbox">
                                    <span></span>
                                </div>

                                <div className="label"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        default:
            return null
    }
}