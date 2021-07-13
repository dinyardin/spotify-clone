import React from 'react'
import './Song.css'

interface Prop {
    track: any
}

function Song(props: Prop) {
    return (
        <div className="songRow">
            <img
                className="songRow__album"
                src={props.track.album.images[0].url}
                alt=""
            />
            <div className="songRow__info">
                <h1>{props.track.name}</h1>
                <p>
                    {props.track.artists
                        .map((artist: any) => artist.name)
                        .join(', ')}{' '}
                    - {props.track.album.name}
                </p>
            </div>
        </div>
    )
}

export default Song
