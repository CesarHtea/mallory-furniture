import React, { Component } from 'react';
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
            <p>About</p>
            <p>Terms + Conditions</p>
          </div>
          <div>
            <p className='footer-section-title'>Categories</p>
            <p>Seating</p>
            <p>Tables</p>
            <p>Desks</p>
            <p>Storage</p>
            <p>Bedroom</p>
            <p>Misc</p>
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