//this page is where the game is played, once the setup is complete

import React from "react"
import {Menu} from "../components"
import "./PlayGame.css"

class PlayGame extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Menu />
                Player board
                opponent board
            </React.Fragment>
        )
    }
}

export default PlayGame