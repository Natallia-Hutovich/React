import React, { Component } from 'react';
import './MenuList.css';

class MenuList extends Component {
	
	constructor(){
		super();
		this.state={
			isOpen:false
		}
		this.onClick=this.onClick.bind(this);
		this._getBody=this._getBody.bind(this);
	}
   
	onClick(){
		const isOpen=this.state.isOpen;
		this.setState({
			isOpen:!isOpen
		})
	}
	_getBody(){
		const menuText=this.props.menuText;
		const isOpen=this.state.isOpen;
		return isOpen?<p className='panel'>{menuText}</p>:null
	}
   render() {
   		const menuTitle=this.props.menuTitle;
  
		return (
			<div>
				<p className='menu_list' onClick={this.onClick}>{menuTitle}</p>
				{this._getBody()}
			</div>	
		)		
  	}
  

}

export default MenuList;			