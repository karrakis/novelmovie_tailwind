import React, { Component } from 'react';

class NavButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navState: props.navState
		}
	}

	isActive(){
		if(this.props.navState === this.props.location){
			return('nav-item-selected')
		}else{
			return('nav-item')
		}
	}

	render(){
		return (
			<button className={this.isActive()} onClick={()=> this.props.setState({location: this.props.location})}>{this.props.text}</button>
		)
	}
}

export default NavButton