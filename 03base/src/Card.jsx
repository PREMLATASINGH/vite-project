import React from 'react';
import image from "./assets/image.jpg";
function Card() {
  return (
    <div className="card">
        <img src={image} alt="Card image"className='img'/>
      <h2>Card Title</h2>
      <p>This is a simple card component.</p>
    </div>
  );
}
export default Card;