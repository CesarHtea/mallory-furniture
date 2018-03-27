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
	  console.log(infoItem)
	  return (
		  <div>
			  <span>
				  <p className='main'>Item: {infoItem.item}</p>
          <p className='main'>Price: {infoItem.price} </p>
          <img className='thumb' src={infoItem.imageLink} alt='' />
          <p className='main'>Condition: {infoItem.condition}</p>
          <p className='main'>Measurements: W: {infoItem.width} L: {infoItem.length} H: {infoItem.height} </p>
				</span>
			</div>	
		)
	}
}

export default IndividualItem;