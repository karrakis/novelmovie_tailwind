import React, { Component } from 'react'
import Home from './pages/Home'
import Bookshelf from './pages/Bookshelf'
import Profile from './pages/Profile'
import Monkeys from './pages/Monkeys'
import Bats from './pages/Bats'
import Cats from './pages/Cats'
import Winner from './pages/Winner'

class PageContent extends Component {
	constructor(props) {
		super(props)
	}

	
	render() {
		var Components = {
			home: Home,
			bookshelf: Bookshelf,
			profile: Profile,
			monkeys: Monkeys,
			bats: Bats,
			cats: Cats,
			winner: Winner
		}

		var PageToRender =  Components[this.props.location];
		return (
			<PageToRender {...this.props}/>
		)
	}
}

export default PageContent