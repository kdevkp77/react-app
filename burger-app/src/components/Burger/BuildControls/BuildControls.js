import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
  {label:'Salad', type:'salad'},
  {label:'Bacon', type:'bacon'},
  {label:'Cheese', type:'cheese'},
  {label:'Meat', type:'meat'}
]

const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      <p> Current Price: <b>{props.price} $</b></p>
      {controls.map(ctrl => {
        return <BuildControl 
          key={ctrl.label} 
          label={ctrl.label}
          moreClicked={() => props.ingredientAdded(ctrl.type, props.price)}
          lessClicked={() => props.ingredientDeleted(ctrl.type, props.price)}
          disbld={props.disbled[ctrl.type]}/>
      })}
      <button className="OrderButton" disabled={props.disabled} onClick={props.ordered}>ORDER NOW</button>
    </div>
  )
}
export default BuildControls;