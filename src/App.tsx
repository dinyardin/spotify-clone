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
        console.log(hash)
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

            spotify.getMe().then((user) => {
                //console.log('the user', user)

                // updating the AppContext with spotify user object
                dispatch({
                    type: 'SET_USER',
                    payload: user,
                })
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

    console.log('the user', state.user)
    console.log('the token', state.token)

    return (
        <div className="app">
            {token ? <Player spotify={spotify} /> : <Login />}
        </div>
    )
}

export default App
