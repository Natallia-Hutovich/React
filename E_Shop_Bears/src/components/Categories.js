import React, { Component } from 'react';
import './Categories.css';
import CategoryLink from './CategoryLink';
import categoryHead from '../helpers/categoryHead'

class Categories extends Component {
	
	constructor(){
		super();
		this.onClick=this.onClick.bind(this);
	}
   
	onClick(e, category){
		e.preventDefault();
		this.props.filterCards(category);
	}

   render() {
   const categories=this.props.categories;
	return (
			<div className="aside_block border_round categories">
				<h2>Размеры</h2>
				<ul>
					{categories.map((item,i)=>{
						const categoryName=categoryHead(categories, item);
						return <CategoryLink 
							key={i} 
							category={item}
							categoryName={categoryName}
							onClick={this.onClick}
						/>
					  })
					}
					<CategoryLink
					 	key={categories.length-1}
					 	category='all'
					 	categoryName={categoryHead(categories, 'all')}
					 	onClick={this.onClick}
					/>
				</ul>
			</div>	
		)		
  }
  

}

export default Categories;