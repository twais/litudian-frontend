import  { combineReducers } from 'redux';

// Listing Reducers
import categories from './CategoryReducer';
import moqs from './MoqReducer';
import products from './ProductReducer';

export default combineReducers({

    categories,

    moqs,

    products

});