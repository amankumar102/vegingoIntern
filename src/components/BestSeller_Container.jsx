import React from 'react'
import BestSeller_Card from './BestSeller_Card'

function BestSeller_Container({BestSeller_Items}) {
  return (
    <div className='container text-center'>
      <h1>Best Seller</h1>
      <h6>Best Seller Product This Week!</h6>

      <div className="row my-5"> 
        {BestSeller_Items.map(bSitem => ( 
          <div className="col-md-3 mb-4" key={bSitem.id}> 
          <BestSeller_Card name={bSitem.title} image={bSitem.image} price={bSitem.price} /> 
          </div> 
        ))
        } 
      </div> 
    </div>
  )
}

export default BestSeller_Container
