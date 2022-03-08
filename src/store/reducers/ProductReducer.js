import { PRODUCTS } from './../types/Index';

const initialState = {
    data: [],
};

export default function ProductReducer(state = initialState, action) {

    switch(action.type) {

        case PRODUCTS: 

            return {

                ...state,

                data: action.payload,

            };

        default:

            return state;

    }

};