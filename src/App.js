import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import request from 'superagent';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Terms from './components/Terms';
import Furniture from './components/Furniture';
import NoMatch from './components/NoMatch'

import './css/styles.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			data: []
		};		
	
		this.fetchFurniture()

	}
  	
	fetchFurniture = () => {
		request
			.get(`https://mallory-furniture-admin.now.sh/api/v1/products`)
			.then(response => {
				// console.log(response)
				this.setState ({
					data: response.body	
				})
			})
	}


	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/terms' component={Terms} />
					<Route path='/categories/:category' component={Furniture} />
					<Route component={NoMatch} />
				</Switch>
	        	<Footer />
	      	</div>
		)
  		
	}
}

export default App;