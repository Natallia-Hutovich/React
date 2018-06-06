import React, { Component } from 'react';
import './CartItem.css';

class CartItem extends Component {
	
	constructor(){
		super();
	}

	render() {
	const {count, order}=this.props;	
	return (
   			<tr className='cart_item'>
   				<td><img src={'img/'+order.img}></img></td>
   				<td>{order.full_name}</td>
				<td>{order.price} руб.</td>
				<td>{count}шт.</td>
				<td>{(count*order.price)} руб.</td>
			</tr>
			)	
 	 }
}

export default CartItem;