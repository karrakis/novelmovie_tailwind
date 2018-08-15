import React, { Component } from 'react';
import axios from 'axios';

class Bookshelf extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		var addScript = document.createElement('script');
		addScript.setAttribute('src', '//www.google.com/books/jsapi.js');
		document.body.appendChild(addScript);
		addScript.onload = function () {
			alert('hi');
			debugger
			//google.books.load();

			function initialize() {
				//var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
				//viewer.load('ISBN:0738531367');
			}
			//google.books.setOnLoadCallback(initialize);
		}
	}


	render() {
		return (
			<div className="h-screen w-full bg-blue text-left text-white">
				Bookshelf
			
				<div id="viewerCanvas" style={{width: '600px', height: '500px'}}></div>
			</div>
		)
	}
}

export default Bookshelf
