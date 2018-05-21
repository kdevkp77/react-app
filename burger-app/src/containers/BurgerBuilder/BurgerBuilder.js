import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosInstance from '../../hoc/axios';
import {connect} from 'react-redux';
import * as actions from '../../store/action/actions';


class BurgerBuilder extends Component {
  state = {
    //ingredient: null,
    //totalPrice: 4,
    purchased: true,
    purchasing: false,
    loading: false
  }

  componentDidMount () {
    this.props.fetchIngredients();
  }
  updateOrderButton = (ingredients) => {
    let sum=0;
    for(let ingredient in ingredients) {
      sum += ingredients[ingredient];
    }
    return !sum >= 1
  }
  
  orderBurger = () => {
    this.setState({purchasing: true})
  }

  backdropHandler = () => {
    this.setState({purchasing: false})
  }
  
  cancelHandler = () => {
    let ingredients = {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
  }
    this.props.cancelHandler(ingredients);
    // let newIngredientObj = {
    // ...this.props.ing
    // }
    // for (let ingredient in newIngredientObj) {
    //   newIngredientObj[ingredient] = 0;
    // }
    this.setState({purchasing: false, purchased: true})
  }

  // removeIngredientHandler = (type) => {
  //   let newIngredientCount = this.state.ingredients[type] - 1;
  //   if(newIngredientCount <= -1) {
  //     return;
  //   }
  //   if(newIngredientCount <= 0) {
  //     this.setState({purchasing: false})
  //   }
  //   let newIngredientObj = {
  //   ...this.state.ingredients
  //   }
  //   newIngredientObj[type] = newIngredientCount;
  //   let newTotalPrice = this.state.totalPrice - INCREDIENT_PRICES[type];
  //   this.setState({totalPrice: newTotalPrice, ingredients: newIngredientObj});
  //   this.updateOrderButton(newIngredientObj);
  // }

  // addIngredientHandler = (type) => {
  //   let newIngredientCount = this.state.ingredients[type] + 1;
  //   let newIngredientObj = {
  //     ...this.state.ingredients
  //   }
  //   newIngredientObj[type] = newIngredientCount;
  //   let newTotalPrice = this.state.totalPrice + INCREDIENT_PRICES[type];
  //   this.setState({totalPrice: newTotalPrice, ingredients: newIngredientObj});
  //   this.updateOrderButton(newIngredientObj);
  // }
  
  continueHandler = () => {
    this.props.history.push('./checkout');
  }

  render() {
    const disabledInfo = {
      ...this.state
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; 
    }
    return (
      <Aux>
        {this.props.ing ? <Burger ingredients= {this.props.ing}/> : <Spinner/>}   
        <Modal show={this.state.purchasing} modelClosed={this.backdropHandler}>
        {this.state.loading || !this.props.ing ? <Spinner/> :
          <OrderSummary 
            price={this.props.totalPrice}
            ingredients={this.props.ing} 
            cancelClicked={this.cancelHandler}
            continueClicked={this.continueHandler}
            show={this.state.purchasing}/>}
        </Modal>
        <BuildControls 
        ingredientAdded={this.props.onIngredientAdded} 
        ingredientDeleted={this.props.onIngredientRemoved} 
        disbled = {disabledInfo}
        price={this.props.totalPrice}
        disabled={this.updateOrderButton(this.props.ing)}
        ordered={this.orderBurger}/>
      </Aux>
    )
  }
}
//get state function in mapStateToProps. This is done by connect
const mapStateToProp = state => {
  return {
    ing: state.reducer.ingredients,
    totalPrice: state.reducer.totalPrice
  }
}
const mapActionToProps = dispatch => {
  return {
    onIngredientAdded: (ingName, totalPrice) => dispatch(actions.increment(ingName,totalPrice)),
    onIngredientRemoved: (ingName, totalPrice) => dispatch(actions.decrement(ingName,totalPrice)),
    cancelHandler: (ing) => dispatch(actions.cancelOrder(ing)),
    fetchIngredients: () => dispatch(actions.fetchIng())
  }
}

export default connect(mapStateToProp, mapActionToProps)(BurgerBuilder);