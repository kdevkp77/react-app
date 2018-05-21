import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import hamburgerMenu from '../../../assets/images/ic_menu_black_24dp.png';

const Toolbar = (props) => {
return (
  <header className="Toolbar">
    <div className="MenuPos" onClick={props.clicked}><img src={hamburgerMenu}/></div>
    <Logo height="80%"/>
    <nav className="NavTool">
    <NavigationItems toolbar="true" show={props.shows}/>
    </nav>
  </header>

)}

export default Toolbar;