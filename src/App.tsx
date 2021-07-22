import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './components/Login/Login'
import {
    getTokenFromResponse,
    spotify,
    SPOTIFY_HASH,
} from './services/spotify/spotify'
import { useAppContextValue } from './services/store/AppContext'
import Player from './components/Player/Player'

function App() {
    const [token, setToken] = useState<string | undefined>(undefined)
    const [state, dispatch] = useAppContextValue()

    useEffect(() => {
        const hash: SPOTIFY_HASH = getTokenFromResponse()
        console.log('hash--->', hash)
        // this is to hide the access token from url for security purposes
        window.location.hash = ''

        const _token: string = hash.access_token
        if (_token) {
            setToken(_token)

            dispatch({
                type: 'SET_TOKEN',
                payload: _token,
            })

            // initialize spotify web api object with the token
            spotify.setAccessToken(_token)

            console.log('----token---->', _token)
            console.log('----spotify---->', spotify)

            spotify
                .getMe()
                .then((user) => {
                    //console.log('the user', user)

                    // updating the AppContext with spotify user object
                    dispatch({
                        type: 'SET_USER',
                        payload: user,
                    })
                })
                .catch((e) => {
                    console.log('error -->', e)
                })

            // retrive users playlist
            spotify.getUserPlaylists().then((playlists) => {
                // update the appcontext with these playlists
                dispatch({
                    type: 'SET_PLAYLISTS',
                    payload: playlists,
                })
            })
        }
    }, [])

    // get playlist tracks when playlists get clicked
    useEffect(() => {
        const getPlaylistId = (playlist_title: string): string => {
            let id: string = ''
            state.playlists?.items?.map((item: any) => {
                if (item.name === playlist_title) {
                    id = item.id
                }
            })
            return id
        }

        spotify
            .getPlaylist(getPlaylistId(state.playlist_title))
            .then((response) => {
                dispatch({
                    type: 'SET_PLAYLIST_TRACKS',
                    payload: response,
                })
            })
            .catch((e) => {
                console.log('error -->', e)
            })
    }, [state.playlist_title])

    console.log('the user', state.user)
    console.log('the token', state.token)
    console.log('the state', state)
    console.log('uuuwww--->  ', state.playlist_title)

    return (
        <div className="app">
            {token ? <Player spotify={spotify} /> : <Login />}
        </div>
    )
}

export default App
