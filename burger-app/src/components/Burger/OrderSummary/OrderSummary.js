import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import './OrderSummary.css';

class OrderSummary extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
  render() {
    const ingredients = Object.keys(this.props.ingredients).map(igkey => {
      return <li key={igkey}><span>{igkey}:</span> {this.props.ingredients[igkey]}</li>
    })
    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredient:</p>
        <ul>
          {ingredients}
        </ul>
        <p> Total Price: <strong>{this.props.price} $</strong></p>
        <p> Continue to checkout ? </p>
        <button className="Button Danger" onClick={this.props.cancelClicked}>CANCEL</button>
        <button className="Button Success" onClick={this.props.continueClicked}>CONTINUE</button>
      </Aux>
    )
  }
} 

export default OrderSummary;