import React from 'react';
import { cardData } from "../constants";

const Card = () => {
  const { plan1 } = cardData;

  if (!plan1) {
    return <div>Error: Plan data is missing!</div>;
  }

return (
    <div className="flex w-1/4 flex-col items-center border border-red-600">
      <div className="flex justify-center items-center">
        <img src={plan1.image} alt={plan1.title} style={{ maxWidth: '100%' }} />
      </div>
      <div className="text-left">
        <h3 className='font-bold'>{plan1.title}</h3>
        <p>{plan1.features}</p>
        <p className='font-bold'>{plan1.price}</p>
      </div>
    </div>
);
};

export default Card;
