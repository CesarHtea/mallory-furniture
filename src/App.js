import React, { Component } from 'react';
import request from 'superagent';

import './App.css';

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
	          <h2>Front End Project:</h2>
	          <h2>Mallory Furniture</h2>
	          <h2>See console</h2>
	      </div>
	    );
	}
}

export default App;
