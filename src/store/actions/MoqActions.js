import { MOQS } from './../types/Index';
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