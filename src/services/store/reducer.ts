// interface State {
//     user: any
//     playlist: any[]
//     playing: boolean
//     item: any
// }

export const initialState: any = {
    user: null,
    playlist: [],
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
        default:
            return state
    }
}

export default reducer
