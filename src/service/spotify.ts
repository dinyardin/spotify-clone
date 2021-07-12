import SpotifyWebApi from 'spotify-web-api-js'

export const authEndpoint = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI

// Spotify web api object
export const spotify = new SpotifyWebApi()

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
]

// function to pull out access token from url
export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial: any, item) => {
            var parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
        }, {})
}

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`

export interface SPOTIFY_HASH {
    access_token: string
    expires_in: string
    token_type: string
}
