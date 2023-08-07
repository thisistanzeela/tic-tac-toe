import React from "react";
import '../App.css'

const ResetButton=({onClick})=>{
    return(
        <button className="resetBtn" onClick={onClick}>Restart</button>
    )
}
export default ResetButton