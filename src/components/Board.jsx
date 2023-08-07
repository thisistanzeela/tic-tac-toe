import React from 'react';
import Cell from './Cell';
import '../App.css'
const Board=({board, onClick})=>{
    return(
        <>
          <div className='board'>
            {board.map((value,index)=>(
              <div className='board-row'>
                 <Cell value={value} onClick={()=> onClick(index)} />
              </div>
            )              
            )}
          </div>
        </>
    )
}

export default Board;