import { CATEGORIES, GET_CATEGORY } from './../types/Index';
import instance from './../../utils/instance';

export const getCategories = () => async dispatch => {

    try {

        const response = await instance.get('categories');

        dispatch({ type: CATEGORIES, payload: response.data.categories });

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};

export const getCategoryById = (id) => async dispatch => {

    try {

        const response = await instance.get(`categories/${id}`);

        dispatch({ type: GET_CATEGORY, payload: response.data });

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};