import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import { Grid, Slider } from '@material-ui/core'
import { useAppContextValue } from '../../services/store/AppContext'

function Footer() {
    const [state, dispatch] = useAppContextValue()

    console.log('state.track =====>  ', state.track)
    return (
        <div className="footer">
            {state.track ? (
                <div className="footer__left">
                    {/*  Album and song details */}
                    <img
                        className="footer__albumLogo"
                        src={state.track.album.images[0].url}
                        alt=""
                    />
                    <div className="footer__songInfo">
                        <h4>{state.track?.name}</h4>
                        <p>{state.track?.album.artists[0].name}</p>
                    </div>
                </div>
            ) : (
                <div className="footer__left"></div>
            )}

            <div className="footer__center">
                {/* Player controller */}
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PauseCircleOutlineIcon className="footer__icon" />
                <PlayCircleOutlineIcon className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                {/* Volume controller */}
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer__icon" />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="footer__icon" />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
