import { CURRENT_USER } from './../types/Index';

const initialState = {

    details: {},

};

export default function UserReducer(state = initialState, action) {

    switch(action.type) {

        case CURRENT_USER: 

            return {

                ...state,

                details: action.payload

            };

        default:

            return state;

    }

};