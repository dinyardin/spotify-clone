import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">{/*  Album and song details */}1</div>
            <div className="footer__center">
                {/* Player controller */}
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PauseCircleOutlineIcon className="footer__icon" />
                <PlayCircleOutlineIcon className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">{/* Volume controller */}3</div>
        </div>
    )
}

export default Footer
