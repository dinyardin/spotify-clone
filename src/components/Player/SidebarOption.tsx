import React from 'react'
import './SidebarOption.css'

interface Prop {
    title: string
    Icon?: any
}

function SidebarOption(props: Prop) {
    return (
        <div className="sidebarOption">
            {props.Icon && (
                <props.Icon className="sidebarOption__icon"></props.Icon>
            )}
            {props.Icon ? <h4>{props.title}</h4> : <p>{props.title}</p>}
        </div>
    )
}

export default SidebarOption
