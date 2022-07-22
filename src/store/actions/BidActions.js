import { BIDS } from './../types/Index';
import instance from './../../utils/instance';

export const getUserBids = () => async dispatch => {

    try {

        let uid = localStorage.getItem('ltdn_uid');

        const response = await instance.get(`/users/${uid}`);

        if (response?.data && response?.data?.bids) {

            dispatch({ type: BIDS, payload: response?.data?.bids });

        }

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};
