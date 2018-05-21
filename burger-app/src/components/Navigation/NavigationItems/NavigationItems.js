import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => 
!props.show ? (
    <ul className="NavigationItems" style={{display: props.block ? props.block: "flex"}}>
    <NavigationItem link="/" exact name="Home">Home</NavigationItem>
    <NavigationItem link="/order" name="Order">Order</NavigationItem>
    </ul>
  ) : null

export default NavigationItems;