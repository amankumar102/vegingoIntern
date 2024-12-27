import React from 'react'

function BestSeller_Card({name, image, price}) {
  return (
    <div class="card" >
        <img src={image} class="card-img-top" width={200} height={250} alt={name} />
        <div class="card-body">
            <h5 class="card-title text-start fw-bold">{name}</h5>
            <p class="card-text text-start fw-bold text-danger">{price}</p>
        </div>
    </div>
  )
}

export default BestSeller_Card
