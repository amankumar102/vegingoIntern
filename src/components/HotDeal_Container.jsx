import React from 'react'
import HotDeal_Card from './HotDeal_Card'
import './HotDeal_Container.css'

function HotDeal_Container({HotDeal_Items}) {
  return (

    <div className="container mt-5"> 
    <div className="row"> 
        <div className="col-md-3 d-flex flex-column"> 
            <HotDeal_Card name={HotDeal_Items[0].name} image={HotDeal_Items[0].image} /> 
            <HotDeal_Card name={HotDeal_Items[1].name} image={HotDeal_Items[1].image} /> 
        </div> 
        <div className="col-md-6"> 
            <HotDeal_Card name={HotDeal_Items[2].name} image={HotDeal_Items[2].image} isBig={true} /> 
        </div> 
        <div className="col-md-3 d-flex flex-column"> 
            <HotDeal_Card name={HotDeal_Items[3].name} image={HotDeal_Items[3].image} /> 
            <HotDeal_Card name={HotDeal_Items[4].name} image={HotDeal_Items[4].image} /> 
        </div> 
    </div> 
    </div>









    // <div className='container'>
    //     <div className="row my-5"> 
    //     {HotDeal_Items.map(hDitem => ( 
    //       <div className="col-md-3 mb-4" key={hDitem.id}> 
    //       <HotDeal_Card name={hDitem.title} image={hDitem.image} price={hDitem.price} /> 
    //       </div> 
    //     ))
    //     } 
    // </div> 
    // </div>
      
  )
}

export default HotDeal_Container
