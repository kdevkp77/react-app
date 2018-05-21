import React from 'react';
import Burger from '../../Burger/Burger';
import './CheckoutSummary.css';
const CheckoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1> We hope it taste well !</h1>
            <div style={{width: '100%', margin: 'auto'}}>
            <Burger ingredients={props.ingredients}/>
            <button className="Button Danger" onClick={props.clickedCancel}>CANCEL</button>
            <button className="Button Success" onClick={props.clickedContinue}>CONTINUE</button>
            </div>
        </div>
    )
}
export default CheckoutSummary;