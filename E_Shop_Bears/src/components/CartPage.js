import React, { Component } from 'react';
import './CartPage.css';

import OrderForm from './OrderForm';
import Cart from './Cart';
import sendData from '../helpers/sendData';
import {SEND_ORDER_SCRIPT} from './settings';

class CartPage extends Component {
	
	constructor(){
		super();
		this.sendOrder=this.sendOrder.bind(this);
}

sendOrder(info){
	const cart=this.props.cart;
	if(Object.keys(cart).length==0){return}
	const orderId='orderId='+Date.now();
	let goods=[]; 
	let k='1';
	for(let key in cart){
		goods.push('productId'+k+'='+key);
		goods.push('count'+k+'='+cart[key]);
		k++;
	}
	let order=goods.join('&');
	let request=orderId+'&'+order+'&'+info;
	sendData(SEND_ORDER_SCRIPT,request);
	this.props.sendOrder();
}

 render() {
   	return (
		<main className='main_cart'>
			<h1>Корзина</h1>
			
			<Cart 
				cart={this.props.cart} 
			    products={this.props.products}
			/>
		
			<OrderForm  sendOrder={this.sendOrder}/>
		</main>	
	)	
  }
}

export default CartPage;