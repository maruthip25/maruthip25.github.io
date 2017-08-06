import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './background.css'

class Background extends React.Component {
  constructor(props){
    super(props);
  };
  //ref is is passed to a prop which will be accessed by main class
  render(){
    let borderStyle = {'borderTopColor': this.props.logoStyle.background};
    return(
      <div className="wrapper" style={this.props.wrapperStyle}>
      <div className="logo-wrapper">
        <div className="logo" style={this.props.logoStyle}>
          {this.props.logoText}
        </div>
        <div className="logo-cut" style={borderStyle}></div>
      </div>
       <div className="inner-wrapper">
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
