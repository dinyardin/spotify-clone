import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './components/Login/Login'
import { getTokenFromResponse, SPOTIFY_HASH } from './service/spotify'

function App() {
    const [token, setToken] = useState<string | undefined>(undefined)
    useEffect(() => {
        const hash: SPOTIFY_HASH = getTokenFromResponse()
        console.log(hash)
        // this is to hide the access token from url for security purposes
        window.location.hash = ''

        const _token: string = hash.access_token
        if (_token) {
            setToken(_token)
        }
    }, [])

    return (
        <div className="app">
            {token ? (
                <h1>
                    If theres token/authorized, we'll get into app from this
                    point, otherwise user is redirected to login page
                </h1>
            ) : (
                <Login />
            )}
        </div>
    )
}

export default App
