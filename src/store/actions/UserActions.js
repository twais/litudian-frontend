import instance from './../../utils/instance';
import { CURRENT_USER } from './../types/Index';

export const showUser = (id) => async dispatch => {

    try {
        const response = await instance.get(`users/${id}`);

        if(response.data !== "") {

            dispatch({ type: CURRENT_USER, payload: response.data });

        }

        return response.data;
        
    } catch (error) {

        if(error.response !== undefined && error.response.status === 401) {

            return window.location.href = "/";

        }

        throw (error);
        
    }

};

export const updateUser = (id, obj = {}) => async dispatch => {

    try {
        const response = await instance.patch(`users/${id}`, obj);

        if(response.data !== "") {

            dispatch({ type: CURRENT_USER, payload: response.data[0] });

        }

        return response.data;
        
    } catch (error) {

        if(error.response !== undefined && error.response.status === 401) {

            return window.location.href = "/";

        }

        throw (error);
        
    }

};