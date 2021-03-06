import { CATEGORIES, GET_CATEGORY } from './../types/Index';

const initialState = {
    data: [],
    category: null,
    list: []
};

export default function CategoryReducer(state = initialState, action) {

    switch(action.type) {

        case CATEGORIES: 

            return {

                ...state,

                data: action.payload,

                list: action.payload.splice(0, 3)

            };
    
        case GET_CATEGORY:

            return {

                ...state,

                category: action.payload

            };

        default:

            return state;

    }

};