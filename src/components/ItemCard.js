import React, { Component } from 'react';

class ItemCard extends Component {
	render() {
		const product = this.props
		// console.log(product)
		return (
			<div>
				<span>
					<p className='main'> ????Item: {product.item} </p>
					<img className='thumb' src={product.image} alt='' />
				</span>
			</div>	
		)
	}
}

export default ItemCard;