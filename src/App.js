import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
     <div>
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/about">about</Link>
					</li>
				</ul>
				
			</div>
		</Router>
	 </div>
    );
  }
}

export default App;