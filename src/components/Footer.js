import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div className='grid'>
				<h2>This is footer</h2>
				<div>
		        	<ul>
			          	<li><i class="fa fa-shopping-cart"></i></li>
			          	<li><i class="fa fa-instagram"></i></li>
			          	<li><i class="fa fa-twitter"></i></li>
			          	<li><i class="fa fa-pinterest"></i></li>
		          	</ul>
			    </div>
			</div>  
		);
	}
}

export default Footer;