import { MOQS, ALL_MOQS, GET_MOQ } from './../types/Index';

const initialState = {
    data: [],
    list: [],
    moqs: [],
    moq: null
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

        case GET_MOQ: 

            return {

                ...state,

                moq: action.payload,

            };

        default:

            return state;

    }

};