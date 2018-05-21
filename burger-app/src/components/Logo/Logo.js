import React from 'react';
import LogoImage from '../../assets/images/burger-logo.png';
import './Logo.css';
import {Link} from 'react-router-dom';

const Logo = (props) => (
  <header className="Logo" style={{height : props.height, float: props.float ? "right" : "none"}}>
    <div className="LogoPos">
      <Link to="/"><img src={LogoImage} alt="Burger"/></Link>
    </div>
  </header>

)

export default Logo;