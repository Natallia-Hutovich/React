import React, { Component } from 'react';
import './ContactsPage.css';

import Contacts from './Contacts';
import ContactsForm from './ContactsForm';
import GoodByBlock from './GoodByBlock';

class ContactsPage extends Component {
	
	constructor(){
		super();
	}

 
  render() {
  	return (
		<main>
			<Contacts />
			<ContactsForm />
			<GoodByBlock />
		</main>	

	)	
  }
}

export default ContactsPage;
