import { DISHES } from '../shared/dishes';  
import * as ActionTypes from './ActionTypes';


export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));  

   
    setTimeout(() => {
        dispatch(addDishes(DISHES));  
    }, 2000);
};


export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});


export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});


export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


export const addComment = (firstname, lastname, telnum, email, message, contactType) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        firstname,
        lastname,
        telnum,
        email,
        message,
        contactType
    }
});
