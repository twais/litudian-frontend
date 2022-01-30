import { MOQS } from './../types/Index';

const initialState = {
    data: [],
    list: []
};

export default function CategoryReducer(state = initialState, action) {

    switch(action.type) {

        case MOQS: 

            return {

                ...state,

                data: action.payload,

                list: action.payload.splice(0, 3)

            };

        default:

            return state;

    }

};