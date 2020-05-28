import React from 'react'

export const CommonModal = ({ state, currentModal, setCurrentModal }) => {
    switch (currentModal) {
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