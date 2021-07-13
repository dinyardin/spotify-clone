import React from 'react'
import './Body.css'
import Header from './Header'
import { useAppContextValue } from '../../services/store/AppContext'
interface Prop {
    spotify: any
}

function Body(props: Prop) {
    const [state, dispatch] = useAppContextValue()
    console.log('DW', state.discover_weekly)
    return (
        <div className="body">
            <Header spotify={props.spotify} />
            <div className="body__info">
                <img src={state.discover_weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{state.discover_weekly?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Body
