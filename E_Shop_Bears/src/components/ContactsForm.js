import React, { Component } from 'react';
import './ContactsForm.css';
import sendData from '../helpers/sendData';
import {SEND_MAIL_SCRIPT} from './settings';

class ContactsForm extends Component {
	
	constructor(){
		super();
		this.onSubmitContactsForm=this.onSubmitContactsForm.bind(this);
	}

	onSubmitContactsForm(e){
		e.preventDefault();
		let str='';
		let elements=e.target.elements;
		str+=('name='+elements['name'].value);
		str+='&'+('email='+elements['email'].value);
		str+='&'+('message='+encodeURIComponent(elements['message'].value));
		sendData(SEND_MAIL_SCRIPT,str);
		e.target.reset();
	} 

  render() {
  	return (
  		<div className='contacts_form_wrapper'>
  			<h2>Напишите нам что-нибудь хорошее, и мы обязательно свяжемся с вами:</h2>
	  		<form name='contacts_form' className='contacts_form' onSubmit={(e)=>this.onSubmitContactsForm(e)}>
					<p>
						<label>Ваше имя:</label><input type='text' name='name' required/>
					</p>
					<p>
						<label>E-mail:</label><input type='email' name='email' required/>
					</p>
					<p>
						<label>Сообщение:</label><textarea name='message' required></textarea>
					</p>
					<p>
					<button type='submit'>Отправить</button>
					</p>	
			</form>
		</div>	
  	)	
  }
}

export default ContactsForm;
	