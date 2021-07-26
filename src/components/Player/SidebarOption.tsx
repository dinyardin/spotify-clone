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
        if (!props.Icon) {
            dispatch({
                type: 'SET_PLAYLIST_TITLE',
                payload: props.title,
            })

            dispatch({
                type: 'SET_IS_SEARCH',
                payload: false,
            })
        }
        if (props.title === 'Search') {
            dispatch({
                type: 'SET_PLAYLIST_TRACKS',
                payload: null,
            })

            dispatch({
                type: 'SET_SEARCHED_TRACKS',
                payload: null,
            })

            dispatch({
                type: 'SET_IS_SEARCH',
                payload: true,
            })
        } else {
            dispatch({
                type: 'SET_IS_SEARCH',
                payload: false,
            })
        }
        if (props.title === 'Home') {
            dispatch({
                type: 'SET_IS_HOME',
                payload: true,
            })

            dispatch({
                type: 'SET_PLAYLIST_TRACKS',
                payload: null,
            })

            dispatch({
                type: 'SET_SEARCHED_TRACKS',
                payload: null,
            })

            dispatch({
                type: 'SET_TRACK',
                payload: null,
            })
        } else {
            dispatch({
                type: 'SET_IS_HOME',
                payload: false,
            })
        }
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
