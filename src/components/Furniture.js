import React, { Component } from 'react';
import request from 'superagent';

class Furniture extends Component {
	constructor(props) {
		super();

		this.state = {
			data: []
		};		
		
		
	}

	componentDidMount() {
    console.log(this.props.match.params.category)
    request
      .get(`https://mallory-furniture-admin.now.sh/api/v1/products`)
      .then(response => {
      	
        this.setState({
          data: response.body
        })
      });
  	}
  	

  	render() {
		return (
			<div>
				<h2>Category</h2>
			</div>
		);
	}
}


export default Furniture;