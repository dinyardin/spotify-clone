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
                {state.discover_weekly ? (
                    <>
                        <img
                            src={state.discover_weekly?.images[0].url}
                            alt=""
                        />
                        <div className="body__infoText">
                            <strong>PLAYLIST</strong>
                            <h2>Discover Weekly</h2>
                            <p>{state.discover_weekly?.description}</p>
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

                    {/* List of songs */}
                    {/* {state.playlists.items[0].tracks.map((track: any) => (
                        <Song track={track} />
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export default Body
