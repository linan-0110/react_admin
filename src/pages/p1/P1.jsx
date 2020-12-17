import React, { Component } from 'react';
import './P1.less'

export default class App extends Component {
	aa = () => {};
	componentDidMount() {
		console.log(require('react-router-dom'));
		console.log(localStorage.getItem('555555'));
	 }
	render(h) {
		// console.log(this)
		return (
			<div className="p1">
                <h1>p111111111111111111</h1>
			</div>)
	}
}