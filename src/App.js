import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import request from 'superagent';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Terms from './components/Terms';
// import ItemCard from './components/ItemCard';
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
				console.log(response)
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

					<Route component={NoMatch} />
				</Switch>
	        	<Footer />
	      	</div>
		)
  		
	}
}

export default App;

{/*

<Route path='/:id' component={ItemCard} />

console.log(this.state.data)
  		console.log(this.state.data.length)
  		console.log(typeof this.state.data[0])
  		console.log(this.state.data[0])
  		return (
	    	<div>
		    	<Header />
		    	<Container />
		    	{this.state.data.map(function(product, i){
						return (
							<ItemCard item={product.item} image={product.imageLink} />	
						);
				})}
			    <Footer />
			</div>
	    );

*/}