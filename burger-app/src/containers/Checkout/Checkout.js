import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';

class Checkout extends Component {
    cancelHandler = () => {
        this.props.history.goBack();
    }
    continueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

  render() {
      return (
        <div>
            <CheckoutSummary 
            ingredients = {this.props.ing} 
            clickedCancel = {this.cancelHandler}
            clickedContinue = {this.continueHandler}/>
            <Route path={this.props.match.path+ '/contact-data'} component={ContactData}/>
        </div>
      );
  }
}
const mapStateToProps = state => {
    return {
      ing: state.reducer.ingredients,
      totalPrice: state.reducer.totalPrice
    }
  }
export default connect(mapStateToProps)(Checkout);