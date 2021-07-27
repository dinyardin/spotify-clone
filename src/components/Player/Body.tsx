import React, { useState } from 'react'
import './Body.css'
import Header from './Header'
import { useAppContextValue } from '../../services/store/AppContext'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Song from './Song'
import { useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
interface Prop {
    spotify: any
}

function Body(props: Prop) {
    const [state, dispatch] = useAppContextValue()
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    console.log('DW', state.discover_weekly)
    useEffect(() => {
        dispatch({
            type: 'SET_IS_HOME',
            payload: true,
        })

        dispatch({
            type: 'SET_SEARCHED_TRACKS',
            payload: null,
        })
    }, [])

    useEffect(() => {
        // if (state.playing) {
        //     setIsPlaying(true)
        // } else {
        //     setIsPlaying(false)
        // }

        if (state.playing === false) {
            dispatch({
                type: 'SET_TRACK',
                payload: null,
            })
        }
    }, [])

    return (
        <div className="body">
            <Header spotify={props.spotify} />
            <div className="body__info">
                {state.playlist_tracks && (
                    <>
                        <img
                            src={state.playlist_tracks?.images[0]?.url}
                            alt=""
                        />
                        <div className="body__infoText">
                            <strong>PLAYLIST</strong>
                            <h2>{state.playlist_title}</h2>
                            <p>{state.playlist_tracks?.description}</p>
                        </div>
                    </>
                )}

                {state.isHome && (
                    <div
                        className="body__general"
                        style={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <h2>Welcome to Spotify clone!</h2>
                        <br />
                        <p>
                            Search for a song or play from the user's playlists
                        </p>
                    </div>
                )}
            </div>

            {/* Playlist tracks */}
            {state.playlist_tracks ? (
                <div className="body__songs">
                    <div className="body__icons">
                        <PlayCircleFilledIcon className="body__shuffle" />
                        <FavoriteIcon fontSize="large" />
                        <MoreHorizIcon />
                    </div>
                    {/* List of songs */}
                    <div>
                        {state.playlist_tracks?.tracks.items.map(
                            (item: any) => (
                                <Song track={item.track} />
                            )
                        )}
                    </div>
                </div>
            ) : null}

            {/* Tracks from search */}
            {state.searched_tracks && (
                <div className="body__songs">
                    <div>
                        {state.searched_tracks?.items.map((item: any) => (
                            <Song track={item} />
                        ))}
                    </div>
                </div>
            )}

            {console.log(
                'state.searched_tracks =====> ',
                state.searched_tracks
            )}
            {console.log('play =====> ', state.playing)}

            <div style={{ visibility: 'hidden' }}>
                <SpotifyPlayer
                    token={state.token}
                    uris={state.track ? [state.track.uri] : []}
                    play={state.playing}
                />
            </div>
        </div>
    )
}

export default Body
