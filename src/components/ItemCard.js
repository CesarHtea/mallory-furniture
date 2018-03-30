import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemCard extends Component {
  render() {
    const product = this.props
    const URL = '/products/'+ product.id
    // console.log(product.id)
    return (
      <div className='card'>
        <Link to={URL}>
          
            <img className='thumb' src={product.image} alt='' />
            <p>Item: {product.item} </p>
          
        </Link>
      </div>	
    )
  }
}

export default ItemCard;