import React, { Component } from 'react';

import LandingPage from './LandingPage' 

class Container extends Component {
	render() {
		return (
			<div>
				<h1>This is Container - now Landing Page </h1>
		    	<div>
		        	<h2 className='titulo'>Front End Project:</h2>
		        	<h2>Mallory Furniture</h2>
		        	<p className='main-text'>See API object in Console</p>
		        	<LandingPage />
		    	</div>
			</div>
		);
	}
}

export default Container;