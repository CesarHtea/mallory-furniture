import React, { Component } from 'react';
import request from 'superagent';

class IndividualItem extends Component {

  constructor(props) {
    super();
    this.state = {
      data: []
    };
  } 

  componentDidMount() {
  	const itemId = this.props.match.params.item
    request
      .get(`https://mallory-furniture-admin.now.sh/api/v1/products/${itemId}`)
      .then(response => {
        this.setState({
          data: response.body
        })
      });
  }	

  render() {
	  const infoItem = this.state.data
	  return (
		  <div className='individual-item-container'>
        <div className='individual-item-image-container'>
          <img className='individual-item-image' src={infoItem.imageLink} alt='' />
        </div>
			  <div className='item-general-info'>
				  <p>{infoItem.item}</p>
          <p className='individual-item-price main'>${infoItem.price} </p>
          <hr />
          <div className='item-details'>
            <div>
              <p className='item-details-font item-details-font-decoration'>Condition:</p> 
              <p className='item-details-font'>{infoItem.condition}</p>
            </div>
            <div>
              <p className='item-details-font item-details-font-decoration'>Measurements:</p>
              <p className='item-details-font'> W: {infoItem.width} L: {infoItem.length} H: {infoItem.height} </p>
            </div>
            <button className='item-details-font add-to-cart-button'>Add to Cart</button>
          </div>
				</div>
			</div>	
		)
	}
}

export default IndividualItem;