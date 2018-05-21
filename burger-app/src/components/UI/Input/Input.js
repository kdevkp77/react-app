import React from 'react';
import './Input.css';

const Input = (props) => {
    let inputEle = null;
    switch(props.inputtype) {
        case('input') : inputEle = (<input 
        className={(props.getOrder && props.initial) || (props.getOrder && !props.initial) ? "InputElement" : "InputElement Invalid"} {...props.info} onChange={props.changed}/>);
        break;
        case('textarea'): inputEle = <textarea className="inputElement" {...props.info}/>
        break;
        case('select'): 
        inputEle = 
        (<select style={{
            outline: "none",
            border: "1px solid #ccc",
            backgroundColor: "white",
            font:"inherit",
            padding: "6px 10px",
            display: "block",
            width:"100%",
            boxSizing: "border-box",
        }} onChange={props.changed}>
            {props.info.options.map(res => {
               return <option value={res.value} key={res.value}>{res.displayValue}</option>
            })}
        </select>)
        break;
        default: inputEle = <input className="inputElement" {...props.info}/>
        break;
    }
    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputEle}
            {!props.getOrder && props.inputtype !== 'select' ?
            <div className="inputElement" style={{color: "red"}}>Please Fill the field</div> : null}
        </div>
    )
}
export default Input;