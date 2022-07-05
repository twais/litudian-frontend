import { GET_PRODUCT } from './../types/Index';
import instance from './../../utils/instance';

export const getProducts = () => async dispatch => {

    try {

        const response = await instance.get('products');

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};

export const getProductById = (id) => async dispatch => {

    try {

        const response = await instance.get(`products/${id}`);

        if (response?.data) {

            dispatch({ type: GET_PRODUCT, payload: response?.data });

        }

    } catch (error) {

        throw error;
        
    }

}