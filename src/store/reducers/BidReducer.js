import { BIDS } from './../types/Index';

const initialState = {
    data: [],
};

export default function BidReducer(state = initialState, action) {

    switch(action.type) {

        case BIDS: 

            return {

                ...state,

                data: action.payload,

            };

        default:

            return state;

    }

};