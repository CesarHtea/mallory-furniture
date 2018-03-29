import React, { Component } from 'react';
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
					<h1 className='titulo'>Featured Products</h1>
					<p className='main'>Check out some of our favorite listings</p>

                    {newList.map(function(product){
                      return (
                        <ItemCard item={product.item} image={product.imageLink} id={product._id}/>	
                      );
                    })}
				</div>
				<div>
					<button>All Products</button>
				</div>
				<div>
					<h1 className='titulo'>Browse by Categories</h1>
					<p className='main'>Explore by furniture type</p>
					<button>Seating</button>
					<button>Tables</button>
					<button>Desks</button>
					<button>Bedroom</button>
					<button>Storage</button>
					<button>Misc</button>
				</div>
			</div>
		);
	}
}

export default Home;