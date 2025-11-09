import React from 'react';
import image from "./assets/uday.jpg";


function Card() {
  return (
    <div className="card">
        <img src={image} alt="Card image"className='img'/>
      <h2>Uday Singh</h2>
      <p>This is an honest person.</p>
      <p></p>
    </div>
  );
}
export default Card;