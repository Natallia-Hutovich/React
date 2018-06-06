import React, { Component } from 'react';
import './HeaderTitle.css';

class HeaderTitle extends Component {
	
	constructor(){
		super();
	}

 
  render() {
  	return (
  		<div className='header_title'>
			<h1>Интернет-магазин мягких игрушек</h1>
		</div>
  	)	
  }
}

export default HeaderTitle;	