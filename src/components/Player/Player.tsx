import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

interface Prop {
    spotify: any
}

function Player(props: Prop) {
    return (
        <div className="player">
            <div className="player__body">
                {/* side bar */}
                <Sidebar />
                {/* body */}
                <Body spotify={props.spotify} />
            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Player
