import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';

import landingImg from '../images/landing-splash-bg.png'
import ItemCard from './ItemCard';


class Home extends Component {

  constructor(props) {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {   
    request
      .get(`https://mallory-furniture-admin.now.sh/api/v1/products`)
      .then(response => {
        this.setState({
          data: response.body
        })
      });
  }

  createList() {
  	return this.state.data.filter( mueble => mueble.featured === true );
  }

  render() {
    const newList = this.createList()
    return (
			<div>
				<div className='banner_container'>
				  <img className='landing-banner__image' src={landingImg} alt='' />
				  <div className='banner_container_title'>
				    <h1 className='titulo banner_center'>Mallory Furniture</h1>
					<p className='subtitulo main banner_center'>Your furniture is old.</p>
					<p className='subtitulo main banner_center'>Ours is older.</p>
				  </div>
				</div>
				<div>
					<h1 className='encabezado'>Featured Products</h1>
					<p className='sub-encabezado'>Check out some of our favorite listings</p>
					<div className='cards-container'>                    
                      {newList.map(function(product){
                        return (
                          <ItemCard 
                            item={product.item} 
                            image={product.imageLink} 
                            id={product._id}
                            price={product.price}
                          />	
                        );
                      })}
                    </div>
				</div>
				<div className='button-container'>
					<Link className='square-red-button' to='/categories/all'>All Products</Link>
				</div>
				<div>
					<h1 className='encabezado'>Browse by Categories</h1>
					<p className='sub-encabezado'>Explore by furniture type</p>
					<div className='button-container'>
            <Link className='square-blue-button' to='/categories/seating'>Seating</Link>
					  <Link className='square-blue-button' to='/categories/tables'>Tables</Link>
					  <Link className='square-blue-button' to='/categories/desks'>Desks</Link>
					  <Link className='square-blue-button' to='/categories/bedroom'>Bedroom</Link>
					  <Link className='square-blue-button' to='/categories/storage'>Storage</Link>
					  <Link className='square-blue-button' to='/categories/miscellaneous'>Misc</Link>
           </div>
				</div>
			</div>
		);
	}
}

export default Home;