import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useAppContextValue } from '../../services/store/AppContext'

function SideBar() {
    const [state, dispatch] = useAppContextValue()

    return (
        <div className="sidebar">
            <img
                onClick={() => {
                    dispatch({
                        type: 'SET_IS_HOME',
                        payload: true,
                    })

                    dispatch({
                        type: 'SET_PLAYLIST_TRACKS',
                        payload: null,
                    })

                    dispatch({
                        type: 'SET_IS_SEARCH',
                        payload: false,
                    })

                    dispatch({
                        type: 'SET_SEARCHED_TRACKS',
                        payload: null,
                    })
                }}
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />

            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {state.playlists?.items?.map((playlist: any, index: number) => (
                <SidebarOption key={index} title={playlist.name} />
            ))}
        </div>
    )
}

export default SideBar
