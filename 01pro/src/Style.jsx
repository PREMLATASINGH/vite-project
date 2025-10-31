 import { useState } from "react";
 function Style() {
    const[color,setColor]=useState()
    const[time,setTime]=useState()
    
    function changeColor(){
        setColor("blue")
    }
    function changeFontSize(){
        document.body.style.fontSize="25px"
    }
    function resetFontSize(){
        document.body.style.fontSize="16px"
    }
    function changeTime(){
        const hours=new Date().getHours()
        setTime(hours)
    }
    function resetTime(){
        setTime("")
    }
    
   
   
    return(<>
        <h2>Good evening</h2>
        <p>hi everyone, i am prema .</p> 
        <button onClick={changeColor} style={{color:color}}>Change color</button>
        <button onClick={changeFontSize}>Change Font Size</button>
        <button onClick={resetFontSize}>Reset Font Size</button> 
        <button onClick={changeTime}>Show Time</button>
        <h3>Time is:{time}</h3>
        <button onClick={resetTime}>Reset Time</button> 

         </>

    )
}
export default Style;  