import React, { Component } from 'react';
import './CardProduct.css';

//import SideBar from './SideBar';

class CardProduct extends Component {
	
	constructor(){
		super();
		this.addToCart=this.addToCart.bind(this);
	}
   
   addToCart(event, id){
   		event.stopPropagation();
   		this.props.addToCart(id);
    }

   render() {
   		const {id, full_name, img, price, size, size_category}=this.props.card;
   		return (
   			<div className='card border_round'>
				<div className="card_img column_center border_round">
					<img src={'img/'+img} className='img_auto'/>
				</div>	
				<p className="card_name">{full_name}</p>		
				<div className='card_text'>
					<div className='card_buy'>
						<div className='card_size'>{size}см</div>
						<div className='card_price'>{price} руб.</div>
					</div>	
					<button onClick={(event)=>this.addToCart(event, id)}>Купить</button>
				</div>
			</div> 
   		)		
  }
  

}

export default CardProduct;	


			