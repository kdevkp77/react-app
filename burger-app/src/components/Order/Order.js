import React from 'react';
import './Order.css';
const Order = (props) => {
    const content = [];
    for(let ingredientName in props.ingredients) {
         content.push({
             name: ingredientName,
            amount : props.ingredients[ingredientName] 
         })
    }
    const ingredientInfo = content.map(data => {
        return <span style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'
        }} key={data.name}
        >{data.name}({data.amount})</span>
    })
    return (
    <div className="Order">
        <p><b>Ingredients</b>: {ingredientInfo}</p>
        <p><b> Price </b>: <strong>{props.price}</strong></p>    
    </div>
)}
    
export default Order;