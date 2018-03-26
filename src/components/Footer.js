import React, { Component } from 'react';
import blackLogo from '../images/mf-logo-black.svg'

class Footer extends Component {
	render() {
		return (
			<div className='grid'>
				<h2>This is footer</h2>
				<div>
					<img src={blackLogo} alt='' />
				</div>
				<div>
		        	<ul className='grid'>
			          	<li><i className="fa fa-shopping-cart"></i></li>
			          	<li><i className="fa fa-instagram"></i></li>
			          	<li><i className="fa fa-twitter"></i></li>
			          	<li><i className="fa fa-pinterest"></i></li>
		          	</ul>
			    </div>
			</div>  
		);
	}
}

export default Footer;