import { useState } from 'react'
import Board from './components/Board';
import ResetButton from './components/ResetButton';
import './App.css'

const initialState=Array(9).fill(null);
const calculateWin=(board)=>{
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  for(const[a,b,c] of lines){
    if(board[a] && board[a] === board[b] && board[a] === board[c]){
      return board[a];
    }
  }
  return null;
}
function App(){
   const [board,setBoard] =useState(initialState);
   const[xNext,setXNext]=useState(true);


   const handleClick=(index)=>{
    if(board[index] || calculateWin(board)){
      return;
    }

    const newBoard=[...board];
    newBoard[index]=xNext ? 'X' : 'O';
    setBoard(newBoard);
    setXNext(!xNext);
   }

   const winner=calculateWin(board);
   const result=winner ? `Winner: ${winner}` : `Next Player: ${xNext ? 'X' : 'O'}`;

   const handleReset=()=>{
    setBoard(initialState);
    setXNext(true);
   }

   return(
    <>
      <div className='container'>
        <Board board={board} onClick={handleClick} />
        <div className='result'>{result}</div>
        <ResetButton onClick={handleReset} />
      </div>
    </>
   )


}
export default App;
