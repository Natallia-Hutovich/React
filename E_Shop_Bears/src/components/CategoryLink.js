import React, { Component } from 'react';

class CategoryLink extends Component {
	
	constructor(){
		super();
	}
   
	render() {
  	let text=this.props.categoryName;
  	text=text.charAt(0).toUpperCase()+text.slice(1);
  	
	return <li><a href='#' onClick={(e)=>this.props.onClick(e, this.props.category)}>{text}</a></li>
  }
  

}

export default CategoryLink;