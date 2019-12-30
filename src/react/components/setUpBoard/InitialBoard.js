//this draws a blank board, composed of 10x10 grids, each labeled in JS
//when a div is clicked, it calculates what the grid numbers would be for 
//the ship being placed, and stores them to post when the Ready button is clicked. 
import React from "react"

class InitialBoard extends React.Component {

    drawBoard = () => {
        //use nested loops to define the initial divs
        let rowLabels = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

        //first, draw the header row
        for (let headerRowLabels = 0; headerRowLabels <= 10; headerRowLabels ++) {
            if (headerRowLabels === 0) {let label = " "}
            else {let label = headerRowLabels}

            //create a new div with innerHTML of label


            //draw that div to the screen


        }
        //then draw the rest of the rows
        for (let row = 1; row <= 10; row++) 
            //create a div with label of rowLabel[row]


            for (let column = 1; column <= 10; column++) {
                //create a div


                //give it an id of [row, column]  example: ["A", 1]


                //draw that div on the screen


            }
        }
    

    render () {
        return <React.Fragment>This is the initial board</React.Fragment>
    }
}

export default InitialBoard