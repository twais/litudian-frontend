import { MOQS, ALL_MOQS, GET_MOQ } from './../types/Index';
import instance from './../../utils/instance';

export const getMoqsByCategoryId = (id) => async dispatch => {

    try {

        const response = await instance.get(`moq/category/${id}`);

        dispatch({ type: MOQS, payload: response.data.moqs });

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};

export const getMoqs = () => async dispatch => {

    try {

        const response = await instance.get(`moq`);

        dispatch({ type: ALL_MOQS, payload: response.data.moqs });

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};

export const getMoqById = (id) => async dispatch => {

    try {

        const response = await instance.get(`moq/${id}`);

        dispatch({ type: GET_MOQ, payload: response.data });

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};