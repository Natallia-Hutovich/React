import React, { Component } from 'react';
import './Payments.css';
import MenuList from './MenuList';

class Payments extends Component {
	
	constructor(){
		super();
	}
   
   render() {
  
	return (
		<div className="aside_block border_round payments">
			<h2>Оплата</h2>
				<MenuList 
					menuTitle='При получении курьеру'
					menuText='Наличными либо пластиковой карточкой (доставка бесплатна при заказе от 150 руб).'
				/>
				<MenuList 
					menuTitle='Через рассчетную систему ЕРИП'
					menuText='Реквизиты: Номер получателя ЕРИП *******'
				/>
				<MenuList 
					menuTitle='Наложенным платежом'
					menuText='Стоимость зависит от веса посылки и тарифов Белпочты'
				/>
		</div>
	)		
  }
  

}

export default Payments;	