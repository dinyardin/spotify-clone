import React from 'react'
import './Login.css'
import { accessUrl } from '../../services/spotify/spotify'

function Login() {
    return (
        <div className="login">
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="spotify logos"
            />
            <a href={accessUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login
