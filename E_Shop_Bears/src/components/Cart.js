import React, { Component } from 'react';
import './Cart.css';
import CartItem from './CartItem';

class Cart extends Component {
	
	constructor(){
		super();
		this._getBody=this._getBody.bind(this);
		this.countTotalSum=this.countTotalSum.bind(this);
		this.cartSum=0; 
	}

  _getBody(order, cart){
  			return (
  					<table className='cart_item_wrapper'>
  					<thead>
  						<tr><th></th><th>Название</th><th>Цена</th><th>Количество</th><th>Стоимость</th></tr>
					</thead>
					<tbody>
						{order.map((item,i)=><CartItem key={i} count={cart[item.id]} order={item}/>)}
					</tbody>
					</table>
			)		
   }

   countTotalSum(order, cart){
   		let sum=0;
   		if(order.length){
   			for(let item of order){
   				sum+=item.price*cart[item.id]
   			}
   		}
   		return sum;

   }

  render() {
	const {products, cart}=this.props;
	const order=products.filter((item)=>cart[item.id]);
	this.cartSum=this.countTotalSum(order, cart);
	return (
   			<div>
   				{order.length?this._getBody(order, cart):(<p>Корзина пуста</p>)}
				<p className='cart_total'> Общая сумма: <span>{this.cartSum}</span> руб.</p>	
			</div>	
			)	
 	 }
}

export default Cart;