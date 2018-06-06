import React, { Component } from 'react';
import './HeaderContacts.css';


class HeaderContacts extends Component {
	
	constructor(){
		super();
	}

 
  render() {
  	return (
  		<div className='header_contacts'>
			<p>Тел. <span>+375(33)***-**-**</span>.</p>
			<p> Работаем с 10.00 до 21.00 ежедневно</p>
			<p>Адрес: г.Минск, Партизанский проспект </p>
		</div>	
  	)	
  }
}

export default HeaderContacts;	