import { CATEGORIES } from './../types/Index';
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