import React from 'react';
import Slider from './Slider';

function ItmContainerOne({items}) {
  return (
    <div className="container text-center my-4">
    <h1>Visit Our Store</h1>
      <Slider items={items} />
    </div>
  )
}

export default ItmContainerOne;
