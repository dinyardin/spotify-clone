import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'

interface Prop {
    spotify: any
}
function Header(props: Prop) {
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
                <Avatar />
                <h4>Name</h4>
            </div>
        </div>
    )
}

export default Header
