import React, { Component } from 'react';
import request from 'superagent';
import ItemCard from './ItemCard';


class Furniture extends Component {

  constructor(props) {
    super();
    this.state = {
      data: [],
      filter: '', 
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
        filter: '' 
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

  capitalize(s) { return s[0].toUpperCase() + s.slice(1) }

  render() {
  	const sectionTitle = this.props.match.params.category;
    const subTitle = `${sectionTitle} products`;
    const newListFiltered = this.createListFiltered()
    return (
      <div>
      	<div>
      	  <h2 className='encabezado'>{ this.capitalize(sectionTitle) }</h2>
      	  <p className='sub-encabezado'>{ this.capitalize(subTitle) }</p>
		    </div>
		    <div className='button-container-align-left'>
			    <button className='square-red-button' onClick={ () => { this.botonAll() } }>All items</button>
			    <button className='square-grey-button' onClick={ () => { this.botonOnSale() } }>On Sale</button>
		    </div>
		    <div className='items-counter'>
          <div className='items-counter-number'>
		      {newListFiltered.length}
          </div>
          <div> 
            <p className='items-counter-text'>items showing</p>
          </div>
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