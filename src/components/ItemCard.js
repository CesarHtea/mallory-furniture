import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemCard extends Component {
  render() {
    const product = this.props
    const URL = '/products/'+ product.id
    // console.log(product.id)
    return (
      <div className='card'>
        <Link className='item-name' to={URL}>
          
            <img className='thumb' src={product.image} alt='' />
            <p className='item-name'>{product.item} </p>
            <p className='price'>${product.price} </p>
          
        </Link>
      </div>	
    )
  }
}

export default ItemCard;