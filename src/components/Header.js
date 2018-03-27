import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import whiteLogo from '../images/mf-logo-white.svg'

class Header extends Component {
	render() {
		return (
			<div className='grid'>
				<ul className='grid'>
					<li><Link to='/'><img src={whiteLogo} alt='' /></Link></li>
					<li><p>About</p></li>
					<li><Link to='/terms'><p>Terms + Conditions</p></Link></li>
					<li><Link to='/categories/all'><p>All</p></Link></li>
					<li><Link to='/categories/seating'><p>Seating</p></Link></li>
					<li><Link to='/categories/tables'><p>Tables</p></Link></li>
					<li><Link to='/categories/desks'><p>Desks</p></Link></li>
					<li><Link to='/categories/storage'><p>Storage</p></Link></li>
					<li><Link to='/categories/bedroom'><p>Bedroom</p></Link></li>
					<li><Link to='/categories/miscellaneous'><p>Misc</p></Link></li>
					<li><i className="fa fa-shopping-cart"></i></li>
					<li><Link to='/products/Hklb-xZrRZ'><p>Item Individual</p></Link></li>
				</ul>
			</div>
		);
	}
}

export default Header;