import React, { Component } from 'react';
import request from 'superagent';

import './css/styles.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'

class App extends Component {
  
	fetchFurniture = product => {
		request
			.get(`https://mallory-furniture-admin.now.sh/api/v1/products`)
			.then(response => {
				console.log('---------------')
				console.log(response.body)
				console.log('---------------')	
			})
	}

	render() {
  		this.fetchFurniture()
	    return (
	    	<div>
		    	<Header />
		    	<Container />
			    <Footer />
			</div>
	    );
	}
}

export default App;
