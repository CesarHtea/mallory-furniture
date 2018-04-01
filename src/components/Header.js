import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import whiteLogo from '../images/mf-logo-white.svg'

class Header extends Component {
	render() {
		return (
		  <div className='header-barra-fondo'>
			<div className='header grid'>
			  <ul className='grid'>
			    <li><Link to='/'><img className='logo-superior' src={whiteLogo} alt='' /></Link></li>
			    <li><Link to='/' className='menu-superior-botones'>About</Link></li>
			    <li><Link className='menu-superior-botones' to='/terms'>Terms + Conditions</Link></li>
			    <li><Link className='menu-superior-botones' to=''>|</Link></li>
			    <li><Link className='menu-superior-botones' to='/categories/all'>All</Link></li>
			    <li><Link className='menu-superior-botones letras-en-azul' to='/categories/seating'>Seating</Link></li>
			    <li><Link className='menu-superior-botones letras-en-azul' to='/categories/tables'>Tables</Link></li>
			    <li><Link className='menu-superior-botones letras-en-azul' to='/categories/desks'>Desks</Link></li>
			    <li><Link className='menu-superior-botones letras-en-azul' to='/categories/storage'>Storage</Link></li>
			    <li><Link className='menu-superior-botones letras-en-azul' to='/categories/bedroom'>Bedroom</Link></li>
			    <li><Link className='menu-superior-botones letras-en-azul' to='/categories/miscellaneous'>Misc</Link></li>
			    <li><Link className='menu-superior-botones' to=''>|</Link></li>
			  </ul>
			  <div className='boton-carrito'><p><i className='fa fa-shopping-cart'></i></p></div>
			</div>
		  </div>
		);
	}
}

export default Header;