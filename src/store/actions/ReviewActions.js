// import { REVIEWS } from './../types/Index';
import instance from './../../utils/instance';

export const getReviewsById = (id) => async dispatch => {

    try {

        const response = await instance.get(`reviews/${id}`);

        console.log(response.data);

        // dispatch({ type: REVIEWS, payload: response.data.categories });

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};