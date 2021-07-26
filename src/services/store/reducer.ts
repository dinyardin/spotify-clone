// interface State {
//     user: any
//     playlist: any[]
//     playing: boolean
//     item: any
// }

export const initialState: any = {
    user: null,
    token: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    playlist_title: null,
    playlist_tracks: null,
    isSearch: false,
}

const reducer = (
    state: any,
    action: {
        type: string
        payload: any
    }
) => {
    console.log('---Action---> ', action)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.payload,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.payload,
            }
        case 'SET_PLAYLIST_TITLE':
            return {
                ...state,
                playlist_title: action.payload,
            }
        case 'SET_PLAYLIST_TRACKS':
            return {
                ...state,
                playlist_tracks: action.payload,
            }
        case 'SET_IS_SEARCH':
            return {
                ...state,
                isSearch: action.payload,
            }
        default:
            return state
    }
}

export default reducer
