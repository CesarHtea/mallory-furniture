import React, { Component } from 'react';
import request from 'superagent';
import ItemCard from './ItemCard';

class Furniture extends Component {

	constructor(props) {
		super();
		this.state = {
			data: []
		};					
		console.log(this.state.data)
	} 

	componentDidMount() {
		console.log(this.props.match.params.category)
	    request
	      .get(`https://mallory-furniture-admin.now.sh/api/v1/products`)
	      .then(response => {
	      	  this.setState({
	          data: response.body
	      	  })
	      	  console.log(this.state.data)
	      });
  	}
  	
  	funcionFiltro() {
  		console.log("hola")
  	}

  	render() {
		this.funcionFiltro()
		return (
			<div>
				<h2>Category</h2>
				{this.state.data.map(function(product, i){
					return (
						<ItemCard item={product.item} image={product.imageLink} />	
						);
				})}
			</div>
		);
	}
}


export default Furniture;