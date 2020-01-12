import fullBoardStubForTesting from "./fullBoardStubForTesting"


const players = [
    ["playerA",[
        ["battleship",4],
        ["carrier",5],
        ["cruiser",3],
        ["destroyer",2],
        ["submarine",2]
    ]],
    ["playerB",[
        ["battleship",4],
        ["carrier",5],
        ["cruiser",3],
        ["destroyer",2],
        ["submarine",2]
    ]]
]

const checkWin = () => {
    let sinkMessage = ""
    players.forEach(player=>{
        player[1].forEach(ship => {
            fullBoardStubForTesting.messages.forEach(message => {
                if(message.username === player[0] && message.text.includes(ship[0]) && message.likes.length > 0){
                    if(ship[1] !== "sunk"){
                        ship[1] -= 1
                    }
                }
            })
            if(ship[1] === 0){
                ship[1] = "sunk"
                sinkMessage += player[0] + "'s " + ship[0] + " sunk, ";
            }
            console.log(sinkMessage)
        })
        if(player[1].every(ship => ship[1] === "sunk")){
            sinkMessage += " " + player + " loses!"
            }
    })
    if(sinkMessage !== ""){
        alert(sinkMessage)
    }
}

export default checkWin