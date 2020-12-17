import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import { Switch, HashRouter } from 'react-router-dom';

import Login from './pages/login/Login.jsx';
import Home from './pages/home/Home.jsx';

// import P1 from './pages/p1/P1.jsx';
// import P2 from './pages/p2/P2.jsx';



export default class App extends Component {
	// constructor(props) {
	// 	super(props)
	// }
	componentDidMount() { }
	render(h) {
		return (
			<div className="App">
				<HashRouter>
					<Switch>
						<Route path='/' exact component={Login}></Route>
						<Route path='/Login' component={Login}></Route>
						<Route path='/Home' component={Home}></Route>
					</Switch>
				</HashRouter>
			</div>)
	}
}

// function App() {
// 	return (
		// <div className="App">
		// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo" />
		// 		<p>
		// 			Edit <code>src/App.js</code> and save to reload.
       	// 		</p>
		// 		<a
		// 			className="App-link"
		// 			href="https://reactjs.org"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			Learn React
        // 		</a>
		// 	</header>
		// </div>
// 	);
// }

// export default App;
