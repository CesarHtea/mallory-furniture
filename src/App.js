import React, { Component } from 'react';
import request from 'superagent';

import './css/styles.css';

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
	          <h2 className='titulo'>Front End Project:</h2>
	          <h2>Mallory Furniture</h2>
	          <p className='main-text'>See console</p>
	      </div>
	    );
	}
}

export default App;
