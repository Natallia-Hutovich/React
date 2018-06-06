import React, { Component } from 'react';
import './HeaderCart.css';
import {NavLink} from 'react-router-dom';

class HeaderCart extends Component {
	
	constructor(){
		super();
	}

 
  render() {
  	const cart=this.props.cart;
  	const products=this.props.products;
  	let cartCount=0;
  	let cartSum=0;
  	for(let key in cart){
  		cartCount+=cart[key];
  	}	
  	let cartProducts=products.filter((item)=>cart[item.id]);
   	if(cartProducts.length){
  		for(let item of cartProducts){
  			cartSum+=item.price*cart[item.id]
  		}
  	}
   	
   	return (
  		<div className='header_cart'>
			<p>В корзине <span>{cartCount}</span> товар(ов). Общая сумма <span>{cartSum}</span> руб.</p>
			<p><NavLink to='/cart' className='btn_shop'>Перейти в корзину</NavLink></p>
		</div>
  	)	
  }
}

export default HeaderCart;	