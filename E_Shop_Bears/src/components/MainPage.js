import React, { Component } from 'react';
import './MainPage.css';

import SideBar from './SideBar';
import MainContent from './MainContent';



class MainPage extends Component {
	
	constructor(props){
		super(props);
		this.state={
			categories:['0-40','40-110','110-200','200-300'],
			currentCategory:'all'
		}
		this.filterCards=this.filterCards.bind(this);
	}
   
	filterCards(category){
		this.setState({
			currentCategory:category
		})
	}

   render() {
   	return (
		<main className='main_page'>
			<SideBar 
			 categories={this.state.categories}
			 filterCards={this.filterCards}
			/>
			<MainContent
			 categories={this.state.categories}
			 currentCategory={this.state.currentCategory}
			 products={this.props.products} 
			 addToCart={this.props.addToCart}
			/>
		</main>	
	)		
  }
  

}

export default MainPage;
