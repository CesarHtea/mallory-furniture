import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div>
				<h1>This is Home.js</h1>
				<div>
					<p>(esta imagen va en el css) o el texto absoluto y centrado</p>
					<img src='../images/landing-splash-bg.png' alt='' />
					<h1 className='titulo'>Mallory Furniture</h1>
					<p className='main'>Your furniture is old.</p>
					<p className='main'>Ours is older.</p>
				</div>
				<div>
					<h1 className='titulo'>Featured Products</h1>
					<p className='main'>Check out some of our favorite listings</p>
					<img src='https://mallory-furniture-static.now.sh/product-images/art-2.jpg' alt='' />
				</div>
				<div>
					<button>All Products</button>
				</div>
				<div>
					<h1 className='titulo'>Browse by Categories</h1>
					<p className='main'>Explore by furniture type</p>
					<button>Seating</button>
					<button>Tables</button>
					<button>Desks</button>
					<button>Bedroom</button>
					<button>Storage</button>
					<button>Misc</button>
				</div>
			</div>
		);
	}
}

export default Home;