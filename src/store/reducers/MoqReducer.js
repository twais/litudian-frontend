import { MOQS, ALL_MOQS } from './../types/Index';

const initialState = {
    data: [],
    list: [],
    moqs: []
};

export default function CategoryReducer(state = initialState, action) {

    switch(action.type) {

        case MOQS: 

            return {

                ...state,

                data: action.payload,

                list: action.payload.splice(0, 3)

            };

        case ALL_MOQS: 

            return {

                ...state,

                moqs: action.payload,

            };

        default:

            return state;

    }

};