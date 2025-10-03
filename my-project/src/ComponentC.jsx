import React,{useContext} from 'react';
import { UserContext } from './ComponentA.jsx';
import ComponenetD from './ComponentD.jsx';
function ComponenetC() {
    const user=useContext(UserContext);
  return (
    <div className="box">
      <h1>Component C</h1>
        <h2>{`Welcome${user}`}</h2>
      <ComponenetD/>    
    </div>
  );
}
export default ComponenetC;