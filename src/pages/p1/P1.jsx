import React, { Component } from 'react';
import './P1.css'
import a from './签到.svg'

export default class App extends Component {
	aa = () => {};
	componentDidMount() {
		console.log(require('react-router-dom'));
		console.log(localStorage.getItem('555555'));
		// console.log(a)
	 }
	render(h) {
		// console.log(this)
		return (
			<div className="p1">
                <h1>p11111111111111111166</h1>
				<img src={a} alt=""/>
			</div>)
	}
}