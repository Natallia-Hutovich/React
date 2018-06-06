import React, { Component } from 'react';
import './Delivery.css';
import MenuList from './MenuList';

class Delivery extends Component {
	
	constructor(){
		super();
	}
   
   render() {
  
	return (
		<div className="aside_block border_round delivery">
			<h2>Доставка</h2>
			<MenuList 
				menuTitle='Самовывоз из магазина'
				menuText='Вы можете забрать заказ по адресу г.Минск Партизанский проспект с 10.00 до 21.00 ежедневно'
			/>
			<MenuList 
				menuTitle='Курьерская доставка (бесплатно при заказе от 150 руб.)'
				menuText='В тот же день при заказе до 18.00, и на следующий при заказе после 18.00.'
			/>
			<MenuList 
				menuTitle='Почтовая пересылка'
				menuText='Почтовая пересылка РУП Белпочта наложенным платежом'
			/>
 		</div>
	)		
  }
  

}

export default Delivery;		