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
  	if ( category !== 'all' ) {
      return this.state.data.filter( mueble => mueble.category === category );
  	}
  	
  	return this.state.data ;
  }

  // createList = () => {
  // 	let category = this.props.match.params.category
  // 	// console.log(category)
  //   return this.state.data.filter(function(mueble) {
  //     if (mueble.category === category) return true;
  //     return console.log(mueble)
  //   });
  // }



  render() {
    const newList = this.createList();
    const sectionTitle = this.props.match.params.category;
    const subTitle = `All ${sectionTitle} products`;
    console.log(newList)
    return (
      <div>
      	<div>
      	  <h2 className='title'>{sectionTitle}</h2>
      	  <p className='main'>{subTitle}</p>
		</div>
		<div>
			<button>All items</button>
			<button>On Sale</button>
		</div>
		<div className='items-counter'>
		  {newList.length} items showing
		</div>
      {newList.map(function(product,i ){
        return (
          <ItemCard item={product.item} image={product.imageLink} id={product._id}/>	
	    );
      })}
	  </div>
    );
  }

}

export default Furniture;