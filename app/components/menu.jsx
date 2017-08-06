import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './menu.css'

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open : false,
    };
    this.toggleBurger = this.toggleBurger.bind(this); // binds the function to the component on initiation =>> allows to use state
  };
  toggleBurger(){
    if(!this.state.open){
      this.setState({
        open : true,
      });
    }
    else{
      this.setState({
        open : false,
      });
    }
  };
  hideMenu(){
    this.toggleBurger();
  }
  render(){
    // to be able to use "this"
    const menuItems = this.props.items.map((item)=>
        <li key={item.id}>
          <div className="before-a"></div>
          <a href={item.url} onClick={this.hideMenu.bind(this)}>{item.text}</a>
          <div className="after-a"></div>
        </li>
    );
    //ES6 template string
    const internalCss = `
      .nav{
        background: rgb(${this.props.styleDefs.primaryRGB})
      }
      .nav ul li a{
        color: rgb(${this.props.styleDefs.secondaryRGB});
        border-color: rgba(${this.props.styleDefs.secondaryRGB},0.2)
      }
      .nav ul li a:hover::before {
        border-color: rgba(${this.props.styleDefs.secondaryRGB},0.9)
      }
      .nav ul li a:hover::after {
        border-color: rgba(${this.props.styleDefs.secondaryRGB},0.9)
      }
      .burger span {
        background: rgb(${this.props.styleDefs.primaryRGB})
      }
      .burger.open span{
        background: rgb(${this.props.styleDefs.secondaryRGB})
      }
      `;
    return(
      <div className="menu">
        <div className={this.state.open? 'burger open': 'burger'} onClick={this.toggleBurger}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={this.state.open? 'nav open': 'nav'} style={this.props.styleDefs.menuBgStyle}>
          <ul>{menuItems}</ul>
        </div>
        <style>
          {internalCss}
        </style>
      </div>
    );
  }
}

export default Menu;
