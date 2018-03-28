import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemCard extends Component {

  render() {
		const product = this.props
		const URL = '/products/'+ product.id
		// console.log(product.id)
		return (
			<div>
			  <Link to={URL}>
				<span>
					<p className='main'> Item: {product.item} </p>
					<img className='thumb' src={product.image} alt='' />
				</span>
			  </Link>
			</div>	
		)
	}
}

export default ItemCard;