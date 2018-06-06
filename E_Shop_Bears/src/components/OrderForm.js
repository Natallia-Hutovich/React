import React, { Component } from 'react';
import './OrderForm.css';


class OrderForm extends Component {
	
	constructor(){
		super();
		this.onSubmitOrderForm=this.onSubmitOrderForm.bind(this);
	}

	onSubmitOrderForm(e){
		e.preventDefault();
		let request=[];
		let elements=e.target.elements;
		for(let key in elements){
			if(elements[key].tagName==='INPUT'){
				let req='';
				if(elements[key].type==='radio'){
					if(elements[key].checked){
						req=elements[key].name+'='+elements[key].value;
						request.push(req);
					}
				}
				else{
					req=elements[key].name+'='+elements[key].value;
					request.push(req);
				}
				
			}
		}
		this.props.sendOrder(request.join('&'));
		e.target.reset();
	}

  render() {
   	return (
			<form name='order_form' className='order_form' onSubmit={(e)=>this.onSubmitOrderForm(e)}>
				<div className='order_wrapper'>
					<h2>Оформление заказа</h2>
					<p>
						<input type='text' name='name' placeholder='Ваше имя' required/>
					</p>
					<p>
						<input type='tel' name='phone' placeholder='Номер телефона' required/>
					</p>
					<p>
						<input type='text' name='address' placeholder='Адрес' required/>
					</p>
					<p>
						<input type='email' name='email' placeholder='Электронная почта'/>
					</p>
				</div>
				<div className='order_wrapper'>	
					<h2>Способ доставки</h2>
					<p><input type="radio" defaultChecked name="delivery" value='self'/>Самовывоз</p>
					<p><input type="radio" name="delivery" value='curier'/>Доставка курьером</p>
					<p><input type="radio" name="delivery" value='post'/>Доставка почтой</p>
				</div>	
				<button type='submit'>Оформить заказ</button>
			</form>
	)	
  }
}

export default OrderForm;