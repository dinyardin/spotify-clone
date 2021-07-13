import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useAppContextValue } from '../../services/store/AppContext'

interface Prop {
    spotify: any
}
function Header(props: Prop) {
    const [state, dispatch] = useAppContextValue()

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar
                    src={state.user?.images[0]?.url}
                    alt={state.user?.display_name}
                />
                <h4>{state.user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
