import React, { useEffect } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useAppContextValue } from '../../services/store/AppContext'
import { useState } from 'react'
import { spotifyApiNode } from '../../services/spotify/spotify'
import { createPatchMark } from 'jest-diff/build/printDiffs'

interface Prop {
    spotify: any
}
function Header(props: Prop) {
    const [state, dispatch] = useAppContextValue()
    const [search, setSearch] = useState<string | null>(null)

    useEffect(() => {
        if (!state.token) {
            return
        }
        spotifyApiNode.setAccessToken(state.token)
    }, [state.token])

    useEffect(() => {
        if (!search) {
            // do sth
        }

        if (!state.token) {
            return
        }

        if (search) {
            spotifyApiNode.searchTracks(search).then((result) => {
                console.log('result--->', result.body.tracks)
                dispatch({
                    type: 'SET_SEARCHED_TRACKS',
                    payload: result.body.tracks,
                })
            })
        }
    }, [search, state.token])

    return (
        <div className="header">
            {state.isSearch && (
                <div className="header__left">
                    <SearchIcon />
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ outline: 'none' }}
                        placeholder="Search for Artists, Songs, or Podcasts "
                        type="text"
                    />
                </div>
            )}

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
