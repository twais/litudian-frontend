import  { combineReducers } from 'redux';

// Listing Reducers
import categories from './CategoryReducer';
import moqs from './MoqReducer';

export default combineReducers({

    categories,

    moqs

});