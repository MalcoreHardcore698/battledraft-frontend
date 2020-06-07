import React, { useState } from 'react'
import _ from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import { CircularProgressbarWithChildren, buildStyles  } from 'react-circular-progressbar'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// eslint-disable-next-line
import { faBars, faCompass, faTrophy, faCog } from '@fortawesome/free-solid-svg-icons'
import { ChatLinks } from './../Chat/ChatLinks'
import { openModal } from './../../utils/actions'
import Brand from './../../img/brand.png'

function Separator(props) {
    return (
      <div
        style={{
          position: "absolute",
          height: "100%",
          transform: `rotate(${props.turns}turn)`
        }}
      >
        <div style={props.style} />
      </div>
    )
  }
  
function RadialSeparators(props) {
    const turns = 1 / props.count;
    return _.range(props.count).map(index => (
        <Separator key={index} turns={index * turns} style={props.style} />
    ))
}

export const PanelSideBar = ({
    onChooseChat,
    onCloseChat,
    onOpenChat
}) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [collapsed, setCollapse] = useState(false)

    return (
        <section className={`bd-sidebar${(collapsed) ? ' collapsed' : ' expand'}`}>
            <div className="bd-sidebar-profile">
                <button
                    className="bd-sidebar-profile__toggle"
                    onClick={() => setCollapse(!collapsed)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <Link to="/" onClick={() => setCollapse(false)}>
                    <img src={Brand} alt="Battledraft" />
                </Link>

                <button
                    className="bd-sidebar-profile__settings"
                    onClick={() => dispatch(openModal('settings', null))}
                >
                    <FontAwesomeIcon icon={faCog} />
                </button>
            </div>
            
            <Link to="/profile" className="bd-sidebar-content">
                <div
                    onClick={() => setCollapse(false)}
                    className="bd-sidebar-content__progress"
                >
                    <img src={`/img/${state.user.avatar}`} alt="Avatar" />
                    <div className="exp">
                        <CircularProgressbarWithChildren
                            value={15}
                            strokeWidth={5}
                            styles={buildStyles({
                                strokeLinecap: 'butt'
                            })}
                        >
                            <RadialSeparators
                                count={5}
                                style={{
                                    background: "#fff",
                                    width: "6px",
                                    // This needs to be equal to props.strokeWidth
                                    height: `${15}%`
                                }}
                            />
                        </CircularProgressbarWithChildren>
                    </div>
                </div>
                <div className="bd-sidebar-content__info">
                    <p className="name">{state.user.name}</p>
                    <p className="level">Уровень <span>3</span></p>
                </div>
            </Link>

            <div className="bd-sidebar-navigation">
                <NavLink to="/navigator" activeStyle={{opacity: 1}} onClick={() => setCollapse(false)}>
                    <FontAwesomeIcon icon={faCompass} />
                    <p>Навигатор</p>
                </NavLink>
                <NavLink to="/tournaments" activeStyle={{opacity: 1}} onClick={() => setCollapse(false)}>
                    <FontAwesomeIcon icon={faTrophy} />
                    <p>Турниры</p>
                </NavLink>
            </div>

            <div className="bd-sidebar-chats">
                <h2>Чаты</h2>
                <ChatLinks
                    onChooseChat={onChooseChat}
                    onCloseChat={onCloseChat}
                    onOpenChat={onOpenChat}
                />
            </div>
        </section>
    )
}