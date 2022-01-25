import { CATEGORIES } from './../types/Index';

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

        default:

            return state;

    }

};