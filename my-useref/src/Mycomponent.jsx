import React,{useState,useEffect,useRef} from "react";
function Mycomponent() {
    let[number,setNumber]=useState(0);
    const ref=useRef(0);
    console.log(ref);
    useEffect(()=>{
        console.log("Component Mounted");});
        
    function handleClick(){ 
        ref.current=ref.current+1;
    console.log("Button clicked"+ref.current+"times");}
  return(<button onClick={handleClick} >clickme</button>); 
}
export default Mycomponent;