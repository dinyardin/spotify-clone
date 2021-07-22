import React from 'react'
import './Body.css'
import Header from './Header'
import { useAppContextValue } from '../../services/store/AppContext'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { StarTwoTone } from '@material-ui/icons'
import Song from './Song'
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
                {state.playlist_tracks ? (
                    <>
                        <img
                            src={state.playlist_tracks?.images[0].url}
                            alt=""
                        />
                        <div className="body__infoText">
                            <strong>PLAYLIST</strong>
                            <h2>{state.playlist_title}</h2>
                            <p>{state.playlist_tracks?.description}</p>
                        </div>
                    </>
                ) : (
                    <>hey!</>
                )}
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {/* List of songs */}
                <div>
                    {state.playlist_tracks?.tracks.items.map((item: any) => (
                        <Song track={item.track} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Body
