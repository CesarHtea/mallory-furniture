import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
		  <div className='grid'>
			<div>
				<img src='../images/category-desks.png' />
			</div>
			<nav>
		        <div>
		        	<ul className='grid'>
			          	<li><i className="fa fa-shopping-cart"></i></li>
			          	<li><i className="fa fa-instagram"></i></li>
			          	<li><i className="fa fa-twitter"></i></li>
			          	<li><i className="fa fa-pinterest"></i></li>
		          	</ul>
		        </div>  
		     </nav>
		  </div>
		);
	}
}

export default Header;