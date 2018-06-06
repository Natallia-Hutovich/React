import React, { Component } from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Header from './Header';
import MainPage from './MainPage';
import DeliveryPage from './DeliveryPage';
import ContactsPage from './ContactsPage';
import CartPage from './CartPage';
import ThankYouPage from './ThankYouPage';
import notFoundPage from './notFoundPage';

import getData from '../helpers/getData.js';
import {LOCAL_VALUE, DATA_PATH} from './settings.js';

class App extends Component {
	
	constructor(){
		super();
		this.state={
			products:[],
			cart:{}
		}
		this.getProducts=this.getProducts.bind(this);
		this.addToCart=this.addToCart.bind(this);
		this.getCart=this.getCart.bind(this);
		this.setCart=this.setCart.bind(this);
		this.sendOrder=this.sendOrder.bind(this);
	}
   
	addToCart(id){
		let cart=this.state.cart;
		if(cart[id]){
			cart[id]++
		}
		else{
			cart[id]=1
		}
		this.setState({
			cart:cart
		})
	}

	getProducts(){
		let p=getData(DATA_PATH);
		p.then(
	  		(data)=>{
	  			this.setState({
					products:JSON.parse(data)
				});
			},
	  		()=>{
	  			this.setState({
					products:[]
				})
	   		}
  		);		
	}
	getCart(localStorageName){
		let storage=localStorage.getItem(localStorageName);
		if(storage){
			return JSON.parse(storage);
		}
	}
	 
	setCart(localStorageName){
		let cart=this.state.cart;
		localStorage.setItem(localStorageName, JSON.stringify(cart));
	} 
	componentWillMount(){
		this.getProducts();
	}

	componentDidMount(){
		let cart=this.getCart(LOCAL_VALUE) || {};
		this.setState({
			cart:cart
		})
	}
	componentDidUpdate(){
		this.setCart(LOCAL_VALUE);
	}
	sendOrder(){
		this.setState({
			cart:{}
		})
		this.setCart(LOCAL_VALUE);
		this.props.history.push("/thanks");
	}
	
	render() {
  
	return 	(
			<div>
				<Header 
					cart={this.state.cart}
					products={this.state.products}
				/>
				<Switch>
					<Route  exact path="/" 
			    		render={()=>
			    			<MainPage 
			    				products={this.state.products} 
			    				addToCart={this.addToCart}
			    			/>}
			   		 />
					<Route  path="/delivery" component={DeliveryPage}/>
				    <Route  path="/contacts" component={ContactsPage}/>
				    <Route  path="/cart" 
			    		render={()=>
			    			 <CartPage
			    			 	products={this.state.products} 
			    			 	cart={this.state.cart}
			    			 	sendOrder={this.sendOrder}
			    			 />
			    		}
			    	/>
			    	<Route  path="/thanks" component={ThankYouPage}/>
					<Route component={notFoundPage}/>
				</Switch> 
			</div>
		)
	 }
  

}

export default App;