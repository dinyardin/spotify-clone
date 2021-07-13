import React from 'react'
import './Body.css'
import Header from './Header'
interface Prop {
    spotify: any
}

function Body(props: Prop) {
    return (
        <div className="body">
            <Header spotify={props.spotify} />
        </div>
    )
}

export default Body
