import React, { Component } from 'react';

class Bookshelf extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="h-screen w-full bg-blue text-left text-white">
				Bookshelf
			</div>
		)
	}
}

export default Bookshelf