import { PRODUCTS, GET_PRODUCT } from './../types/Index';

const initialState = {
    data: [],
    product: null
};

export default function ProductReducer(state = initialState, action) {

    switch(action.type) {

        case PRODUCTS: 

            return {

                ...state,

                data: action.payload,

            };
        
        case GET_PRODUCT: 

            return {

                ...state,

                product: action.payload,

            };

        default:

            return state;

    }

};