import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blackLogo from '../images/mf-logo-black.svg'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div>
          <img className='footer-logo' src={blackLogo} alt='' />
        </div>
        <div>
          <hr className='footer-hr'></hr>
        </div>
        <div className='footer-horizontal'>
          <div>
            <p className='footer-section-title'>Company</p>
            <Link className='footer-link-decoration' to='/' ><p>About</p></Link>
            <Link className='footer-link-decoration' to='/terms'><p>Terms + Conditions</p></Link>
          </div>
          <div>
            <p className='footer-section-title'>Categories</p>
            <Link className='footer-link-decoration' to='/categories/seating'><p>Seating</p></Link>
            <Link className='footer-link-decoration' to='/categories/tables'><p>Tables</p></Link>
            <Link className='footer-link-decoration' to='/categories/desks'><p>Desks</p></Link>
            <Link className='footer-link-decoration' to='/categories/storage'><p>Storage</p></Link>
            <Link className='footer-link-decoration' to='/categories/bedroom'><p>Bedroom</p></Link>
            <Link className='footer-link-decoration' to='/categories/miscellaneous'><p>Misc</p></Link>
          </div>
          <div>
            <p className='footer-section-title'>Social</p>
            <div>
              <ul className='grid'>
                <li><i className="fa fa-instagram"></i></li>
                <li><i className="fa fa-twitter"></i></li>
                <li><i className="fa fa-pinterest"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default Footer;