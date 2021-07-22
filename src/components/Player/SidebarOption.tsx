import React from 'react'
import './SidebarOption.css'
import { useAppContextValue } from '../../services/store/AppContext'

interface Prop {
    title: string
    Icon?: any
}

function SidebarOption(props: Prop) {
    const [state, dispatch] = useAppContextValue()

    const handlePlaylist = () => {
        dispatch({
            type: 'SET_PLAYLIST_TITLE',
            payload: props.title,
        })
    }

    return (
        <div className="sidebarOption" onClick={handlePlaylist}>
            {props.Icon && (
                <props.Icon className="sidebarOption__icon"></props.Icon>
            )}
            {props.Icon ? <h4>{props.title}</h4> : <p>{props.title}</p>}
        </div>
    )
}

export default SidebarOption
