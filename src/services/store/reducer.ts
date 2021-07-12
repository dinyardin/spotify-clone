interface IAppContext {}

export const initialState: IAppContext = {
    user: null,
    playlist: [],
    playing: false,
    iten: null,
}

interface Prop {
    state: any
    action: {
        type: string
        payload: any
    }
}

const reducer = (props: Prop) => {
    console.log('---Action---> ', props.action)

    switch (props.action.type) {
        case 'SET_USER':
            return {
                ...props.state,
                user: props.action.payload,
            }
        default:
            return props.state
    }
}

export default reducer
