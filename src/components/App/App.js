import React, { Component } from 'react';
import './App.css';
import config from "../../config";
import getLocation from "../../helpers/getCurrentLocation";

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=sydney,au&appid=${config.API_KEY}`)
// .then((stream) => {
// 	return stream.json();
// })
// .then((res) => {
// 	console.log(res);
// });

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			location: ""
		};
	}

	componentDidMount() {
		getLocation()
			.then((res) => {
				console.log(res);
			})
			.catch((res) => {
				console.warn("Unable to obtain user's geographical location. Continuing without default state.");
			})
	}

	render() {
		return (
			<div className="App">
				<p>My App</p>
			</div>
		);
	}
}

export default App;
