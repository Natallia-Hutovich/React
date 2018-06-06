import React, { Component } from 'react';
import './MainContent.css';
import CardProduct from './CardProduct';
import categoryHead from '../helpers/categoryHead'

class MainContent extends Component {
	
	constructor(){
		super();
	}
   
   render() {
    let {categories, currentCategory, products}=this.props;
    let card_block_header=`Медведи `;
    let showedProducts=products.filter((item)=>
    		item.size_category===currentCategory
    	);
    if(!showedProducts.length){showedProducts=products};
    card_block_header+=categoryHead(categories, currentCategory);
       
   	return (
		<div className="main_content">
			<h2>{card_block_header}</h2>
			<div className="card_block">
				{showedProducts.map((item, key)=>
					<CardProduct 
					key={key} 
					card={item}
					addToCart={this.props.addToCart}
					/>)}
			</div>
		</div>
	)		
  }
  

}

export default MainContent;