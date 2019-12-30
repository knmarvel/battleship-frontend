//This is our bragging page!
//Let's make it look nice :)
// include names of all group members
//give credit for what each person did
//suggestion: divide project by major items or pages,
// and list who worked on what
//important to include that the backend and HOC structure isn't ours
import React from "react"
import {Menu} from "../components"
import "./Credits.css"

class Credits extends React.Component{
    render () {
        return (
            <React.Fragment>
                <Menu/>
                <p>
                Backend and HOC's adapted from "Kwitter" project skeleton, by Taylor Hunt, Kenzie Academy 2nd Quarter Instructor
                Technologies used: JavaScript, HTML, CSS, React-Redux, ... anything else you can think of

                </p>
            </React.Fragment>
        )
    }
}

export default Credits