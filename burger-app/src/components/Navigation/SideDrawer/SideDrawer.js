import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const SideDrawer = (props) => {
return (
    props.shows ?
    <Aux>
    <Backdrop show={props.shows} clicked={props.sideDrawerClosed}/>
        <div className="SideDrawer">
            <Logo height="11%" float="right"/>
            <nav>
                <NavigationItems block="block"/>
            </nav>
        </div> 
    </Aux> : null
    )
}

export default SideDrawer;