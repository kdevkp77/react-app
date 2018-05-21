import * as actionTypes from './actionTypes'; 
import axiosInstance from '../../hoc/axios';
import { setTimeout } from 'timers';

export const increment = (ingName, totalPrice) => {
    return {
        type: actionTypes.ADD_INGREDIENT, 
        ingredientName: ingName, 
        totalPrice: totalPrice
    }
}

export const decrement = (ingName, totalPrice) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT, 
        ingredientName: ingName, 
        totalPrice: totalPrice
    }
}

export const cancelOrder = (ing) => {
    return {
        type: actionTypes.CANCEL_ORDER, 
        ingredients: ing, 
    }
}

export const fetchFromFirebase = (data) => {
    return {
        type: actionTypes.FETCH_INGREDIENTS,
        ingredients: data
    }
}
export const fetchIng = () => {
    return (dispatch) => {
        setTimeout( () => {
            axiosInstance.get('/ingredients.json')
            .then(response =>  {
              dispatch(fetchFromFirebase(response.data))
            }).catch( err => {
            })
        })
    }
}