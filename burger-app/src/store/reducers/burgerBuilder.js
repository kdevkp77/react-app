import * as actionType from '../action/actionTypes';
const initialstate = {
    ingredients: null,
    totalPrice: 4
}

const INCREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
  };

const reducer = (state = initialstate, action) => {
    switch(action.type) {
        case actionType.ADD_INGREDIENT: 
        if (state.ingredients[action.ingredientName] >= 2) {
            return state;
        } else {
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INCREDIENT_PRICES[action.ingredientName]
            }
        }
        case actionType.REMOVE_INGREDIENT: 
        if (state.ingredients[action.ingredientName] <= 0) {
            return state;
        } else {
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INCREDIENT_PRICES[action.ingredientName]
            }
        }
        case actionType.CANCEL_ORDER:
           return {
               ...state,
               ingredients: {
                   ...action.ingredients                 
               },
               totalPrice: 4
           }
        case actionType.FETCH_INGREDIENTS:
           return {
                ...state,
                ingredients: {
                    ...action.ingredients                 
                }  
           }
        default: return state;
    }
}
export default reducer;