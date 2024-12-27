import React from 'react';
import './Card.css'; // You might still need some custom CSS

function Card({ name, image }) {
  return (
    <div className="card text-center border-0 my-5">
      <div className="card-body">
        <img src={image} alt={name} className="rounded-circle mb-3 img-fluid" width="200" height="200" />
        <h5 className="card-title fw-bold">{name}</h5>
      </div>
    </div>
  );
}

export default Card;
