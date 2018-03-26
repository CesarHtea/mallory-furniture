import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import whiteLogo from '../images/mf-logo-white.svg'

class Header extends Component {
	render() {
		return (
			<div className='grid'>
				<ul className='grid'>
					<li>
						<Link to='/'><img src={whiteLogo} alt='' /></Link>
					</li>
					<li>
						<p>About</p>
					</li>
					<li>
						<Link to='/terms'><p>Terms + Conditions</p></Link>
					</li>
					<li>
						<p>All</p>
					</li>
					<li>
						<p>Seating</p>
					</li>
					<li>
						<p>Tables</p>
					</li>
					<li>
						<p>Desks</p>
					</li>
					<li>
						<p>Storage</p>
					</li>
					<li>
						<p>Bedroom</p>
					</li>
					<li>
						<p>Misc</p>
					</li>
					<li>
						<i className="fa fa-shopping-cart"></i>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;