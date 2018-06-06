import React, { Component } from 'react';
import './Contacts.css';

class Contacts extends Component {
	
	constructor(){
		super();
	}

 
  render() {
  	return (
		<div className='main_contacts'>
			<h1>Контакты</h1>
			<p>
			<span>Мы находимся по адресу:</span> г.Минск, Партизанский проспект 
			</p>
			<p>
			<span>Контактные телефоны:</span> +375(33)***-**-**, +375(17)***-**-**(факс)
			</p>
			<p>
			<span>E-mail:</span> example@tut.by
			</p>
			<p>
			<span>Реквизиты:</span> ЧТУП "Медвежонок", УНП *********, р/с 1111111111111, ОАО Банк БелВЭБ, БИК 153001226, г. Минск, ул. Мясникова, 32.
			</p>
		</div>	
	)	
  }
}

export default Contacts;
