import React from 'react';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { toTitleCase, truncateText } from './../utils/helpers';

const Bid = ({ bid }) => {
    console.log(bid);
    return (
        <Link to={`/products/${bid?.product[0]?.id}`}>
            <div className="flex flex-col shadow w-full rounded-lg">
                <div className="relative bg-gray-100 h-36 rounded-t-md">
                    <img className='h-36 object-cover w-full' src={bid?.product[0]?.images ? bid?.product[0]?.images[0] : "https://via.placeholder.com/300"} alt={bid?.id} onError={(e) => { e.target.src = "https://via.placeholder.com/300" }} />
                </div>
                <div className="bg-white rounded-b-md py-4 px-3 capitalize flex flex-col gap-1">
                    <h4 className='text-gray-700 font-semibold mb-2'>{bid?.product ? truncateText(toTitleCase(bid?.product[0]?.name), 14) : 'N/A'}</h4>
                    <span className='text-md text-tangerine font-bold text-lg'>{bid?.amount && (typeof bid?.amount === "number" ? <CurrencyFormat value={bid.amount} displayType={'text'} thousandSeparator={true} prefix={'KES '} /> : bid.amount)}</span>
                    <span className='text-md text-gray-600 font-bold text-sm'>Quantity Ordered: {bid?.quantity} items</span>
                </div>
            </div>

        </Link>
    )
};

export default Bid;
