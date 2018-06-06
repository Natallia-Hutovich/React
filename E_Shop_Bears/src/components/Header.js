import React, { Component } from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';
import HeaderContacts from './HeaderContacts';
import Nav from './Nav.js';
import HeaderCart from './HeaderCart';


class Header extends Component {
	
	constructor(){
		super();
	}

 
  render() {
  	return (
		<header>
			<div className='header_top clearfix'>
				<HeaderTitle />
				<div className='header_information'>
					<HeaderContacts />
					<HeaderCart 
						cart={this.props.cart} 
						products={this.props.products}
					/>
				</div>
			</div>
			<Nav />
		</header>
	)	
  }
}

export default Header;