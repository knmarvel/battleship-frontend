export const checkForWin = (board) => {
  let numberOfHits = 0
  for(let coordinates in board){
    if(board[coordinates].ship
      && board[coordinates].torpedo)
      numberOfHits++
  }
  if(numberOfHits === 17){
    return true
  }
}
