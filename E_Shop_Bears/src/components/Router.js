import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import App from './App.js';

class Router extends Component{
	constructor(){
		super();
	}

	
	render(){
	return (	
		<HashRouter>
			<Route component={App} />
		</HashRouter>
	);
	}
}	

export default Router;
