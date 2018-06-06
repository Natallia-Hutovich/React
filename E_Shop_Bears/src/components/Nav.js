import React, { Component } from 'react';
import './Nav.css';
import {NavLink} from 'react-router-dom';
class Nav extends Component {
	
	constructor(){
		super();
	}

  render() {
  	return(
  		<nav>
			<div className="wrapper clearfix">
				<NavLink exact activeClassName='active_page' to='/'>Главная</NavLink>
				<NavLink activeClassName='active_page' to='/delivery'>Доставка и оплата</NavLink>
				<NavLink activeClassName='active_page' to='/contacts'>Контакты</NavLink>
			</div>	
		</nav>	
  	)	
  }
}

export default Nav;	