import React, { Component } from 'react';
import request from 'superagent';

import './css/styles.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import ItemCard from './components/ItemCard';


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
  		// console.log(this.state.data)
  		// console.log(this.state.data.length)
  		// console.log(typeof this.state.data[0])
  		// console.log(this.state.data[0])
  		return (
	    	<div>
		    	<Header />
		    	{/* <Container /> */}
		    	{this.state.data.map(function(product, i){
						return (
							<ItemCard item={product.item} image={product.imageLink} />	
						);
				})}
			    <Footer />
			</div>
	    );
	}
}

export default App;
