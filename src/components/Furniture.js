import React, { Component } from 'react';
import request from 'superagent';
import ItemCard from './ItemCard';

class Furniture extends Component {

  constructor(props) {
    super();
    this.state = {
      data: [],
      filter: 'valor inicial del filter en el estado', 
    };
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

  botonAll = () => {
    this.setState({ 
        filter: 'apretando boton All' 
      }) 
  }

  botonOnSale = () => {
   this.setState({ 
        filter: true 
      }) 
  }

// funcion que crea una lista filtrada por categorias
    // filtro segun url
    // retorna una lista 
    // lista.map
  createList = () => {
  	let category = this.props.match.params.category
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

// funcion que filtra la lista filtrada por categorias, si el estado 'on Sale'

  createListFiltered = () => {
    let filter = this.state.filter
    if ( filter === true ) {
      return this.createList().filter( muebleOnSale => muebleOnSale.onSale === filter );
    }
    return this.createList() ;
  }

  render() {
  	const sectionTitle = this.props.match.params.category;
    const subTitle = `All ${sectionTitle} products`;
    const newListFiltered = this.createListFiltered()
    return (
      <div>
      	<div>
      	  <h2 className='title'>{sectionTitle}</h2>
      	  <p className='main'>{subTitle}</p>
		    </div>
		    <div>
			    <button onClick={ () => { this.botonAll() } }>All items</button>
			    <button onClick={ () => { this.botonOnSale() } }>On Sale</button>
		    </div>
		    <div className='items-counter'>
		      {newListFiltered.length} items showing
		    </div>
          <div className='cards-container'>
            {newListFiltered.map(function(product){
              return (
                <ItemCard 
                  item={product.item} 
                  image={product.imageLink} 
                  id={product._id}
                  price={product.price}
                />	
	            );
            })}
          </div>
      </div>
    );
  }

}

export default Furniture;