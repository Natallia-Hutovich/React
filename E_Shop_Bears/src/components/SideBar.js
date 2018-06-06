import React, { Component } from 'react';
import './SideBar.css';
import Categories from './Categories';
import Payments from './Payments';
import Delivery from './Delivery';

class SideBar extends Component {
	
	constructor(){
		super()
	}
   
   render() {
  
	return (
		<aside>
			<Categories 
			  categories={this.props.categories} 
			  filterCards={this.props.filterCards} 
			/>
			<Payments />
			<Delivery />
		</aside>	
	)		
  }
  

}

export default SideBar;