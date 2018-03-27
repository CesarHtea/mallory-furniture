import React, { Component } from 'react';
import request from 'superagent';
import ItemCard from './ItemCard';

class Furniture extends Component {

  constructor(props) {
    super();
    this.state = {
      data: []
    };					
    // console.log(this.state.data)
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

  	// filtro segun url
  	// retorna una lista 
  	// lista.map

  createList = () => {
  	let category = this.props.match.params.category
  	// console.log(category)
    return this.state.data.filter( mueble => mueble.category === category );
  }

  // createList = () => {
  // 	let category = this.props.match.params.category
  // 	console.log(category)
  //   return this.state.data.filter(function(mueble) {
  //     if (mueble.category === category) return true;
  //   });
  // }


  render() {
    const newList = this.createList();
    // console.log(newList)
    return (
      <div>
      <h2>Category</h2>
      {newList.map(function(product,i ){
        return (
          <ItemCard item={product.item} image={product.imageLink} />	
	    );
      })}
	  </div>
    );
  }

}

export default Furniture;