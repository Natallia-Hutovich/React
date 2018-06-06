import React, { Component } from 'react';
import './ThankYouPage.css';
import GoodByBlock from './GoodByBlock';

class ThankYouPage extends Component {
	
	constructor(){
		super();
	}

 
  render() {

  		return (
  			<div className='thank_wrapper'>
	  			<p className='thank_text'>Спасибо за покупку!</p>
	  			<GoodByBlock />
	  		</div>	
  		)
  }
}

export default ThankYouPage;	