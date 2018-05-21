import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
state = {
  show: false
}
menuClickHandler = () => {
  this.setState({show: true});
}
sideDrawerHandler = () => {
  this.setState({show:false});
}
render() {
  return (
    <Aux>
    <Toolbar clicked={this.menuClickHandler} shows={this.state.show}/>
    <SideDrawer shows={this.state.show} sideDrawerClosed= {this.sideDrawerHandler}/>
      <main className="topHeight">
        {this.props.children}
      </main>
    </Aux>
  )
}
}

export default Layout;