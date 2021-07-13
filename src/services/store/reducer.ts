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
        default:
            return state
    }
}

export default reducer
