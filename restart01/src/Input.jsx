import { useState } from "react";
function Input(){
    const[name,setName]=useState("prema");
    return(<>
    <h2>Name:{text}</h2>
    <input type="text" placeholder="enter the name"  onChange={()=>setName(e.target.value)}/>
    <p>your name is:{name}</p></>)
}
export default Input;