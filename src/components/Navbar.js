import React from "react"
import reactIcon from '../images/react-icon-small.png'; 
import "../App.css"
export default function Navbar() {
    return (
        <nav>
            <img src={reactIcon} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Project</h4>
        </nav>
    )
}