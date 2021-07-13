import React, { createContext, useContext, useReducer } from 'react'
import { initialState } from './reducer'

// Appcontext initialization
export const AppContext = createContext(initialState)

interface Prop {
    initialState: any
    reducer: any
    children: any
}

// wrapper component that will give child components access to appcontext values.
export const AppContextProvider = (props: Prop) => (
    <AppContext.Provider value={useReducer(props.reducer, props.initialState)}>
        {props.children}
    </AppContext.Provider>
)

// this is how we will access values stored in AppContext
export const useAppContextValue = () => useContext(AppContext)
