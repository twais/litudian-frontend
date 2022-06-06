import  { combineReducers } from 'redux';

// Listing Reducers
import categories from './CategoryReducer';
import moqs from './MoqReducer';
import products from './ProductReducer';
import user from './UserReducer';
import reviews from './ReviewReducer';

export default combineReducers({

    categories,

    moqs,

    products,

    user,

    reviews

});