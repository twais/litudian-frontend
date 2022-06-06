import React from 'react';
import { Link } from 'react-router-dom';
import Currency from 'react-currency-formatter';
import { toTitleCase, truncateText } from './../utils/helpers';

const MOQ = ({ moq }) => {
  
  const getPercentage = (bids, quantity) => {
    if (bids !== undefined && quantity !== undefined) {
      return Math.trunc((bids?.length * 100) / quantity);
    }
    return 0;
  };

  return (
    <Link to={`/products/${moq?.id}`}>
        <div className="flex flex-col shadow w-full rounded-lg">
            <div className="relative bg-gray-100 h-36 rounded-t-md">
                <img className='h-36 object-cover w-full' src={moq?.product[0]?.images[0] || "https://via.placeholder.com/300"} alt={moq.id} onError={(e) => { e.target.src = "https://via.placeholder.com/300" }} />
            </div>
                <div className="bg-white rounded-b-md py-2 px-3 capitalize flex flex-col gap-1">
                    <h4 className='text-gray-700 font-semibold mb-2'>{truncateText(toTitleCase(moq?.product[0]?.name), 16)}</h4>
                    <span className='text-md text-tangerine font-bold text-lg'>{typeof moq.price === "number" ? <Currency quantity={moq.price} currency="KES" /> : moq.price}</span>
                    <span className='text-md text-gray-600 font-bold text-sm'>MOQ: {moq?.quantity} items</span>
                    <span className='text-md text-litudian-orange font-bold text-sm'>{getPercentage(moq?.bids, moq?.quantity)}% SOLD</span>
            </div>
        </div>

    </Link>
  )
};

export default MOQ;
