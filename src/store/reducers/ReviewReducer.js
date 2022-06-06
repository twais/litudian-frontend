import { REVIEWS } from './../types/Index';

const initialState = {
    data: [],
};

export default function ReviewReducer(state = initialState, action) {

    switch(action.type) {

        case REVIEWS: 

            return {

                ...state,

                data: action.payload,

            };

        default:

            return state;

    }

};