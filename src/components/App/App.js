import React, { Component } from 'react';
import './App.css';

import config from "../../config";

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=sydney,au&appid=${config.API_KEY}`)
// .then((stream) => {
// 	return stream.json();
// })
// .then((res) => {
// 	console.log(res);
// });

class App extends Component {
	render() {
		return (
			<div className="App">
				<p>My App</p>
			</div>
		);
	}
}

export default App;
