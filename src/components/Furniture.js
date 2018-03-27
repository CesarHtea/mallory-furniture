import React, { Component } from 'react';
import request from 'superagent';

class Furniture extends Component {
	constructor(props) {
		super();

		this.state = {
			data: []
		};		
		
		this.info = ''

		// console.log(props.match.params.category)
		// this.fetchCategory(props.match.params.category)

		// this.fetchCategory(props.match.params.category)
		// console.log(props.match.params.category)
	}

	// componentDidMount() {
    // console.log(this.props.match.params.category)
    // request
    //   .get(`https://mallory-furniture-admin.now.sh/api/v1/products?category=${category}`)
    //   .then(response => {
      	
    //     this.setState({
    //       data: response.body
    //     })
    //   });
  // }
  	

  	fetchCategory = (category) => {
		request
			.get(`https://mallory-furniture-admin.now.sh/api/v1/products?category=${category}`)
			.then(response => {
				// console.log(response.body)
      			this.info = response.body
        		// this.setState({
          // 		data: response.body
        	// })
      	});
		console.log(this.info)
		// return info
	}

	render() {
		let objeto = this.fetchCategory(this.props.match.params.category)
		// console.log(objeto)
		return (
			<div>
				<h2>Category</h2>

				
			</div>
		)
	}
}


export default Furniture;