// import { PRODUCTS } from './../types/Index';
import instance from './../../utils/instance';

export const getProducts = () => async dispatch => {

    try {

        const response = await instance.get('products');

        console.log(response.data);

        // dispatch({ type: PRODUCTS, payload: response.data.categories });

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};