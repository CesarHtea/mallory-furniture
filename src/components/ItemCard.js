import React, { Component } from 'react';

class ItemCard extends Component {

  render() {
		const product = this.props
		console.log(product.id)
		return (
			<div>
				<span>
					<p className='main'> Item: {product.item} </p>
					<img className='thumb' src={product.image} alt='' />
					<p className='main'>Item Id: {product.id} </p>
				</span>
			</div>	
		)
	}
}

export default ItemCard;