import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './contact.css'

class Contact extends React.Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div className="contacts">
        <ul>
          {
            this.props.items.map((item)=>{
              return(<li key={item.id}><a title={item.title} href={item.url} target="_blank">{item.svg}</a></li>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default Contact;
