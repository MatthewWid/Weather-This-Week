import React, {Component} from "react";
import "./App.css";
import config from "../config";
import getLocation from "../helpers/getCurrentLocation";
import WeatherInformation from "./WeatherInformation";

// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=sydney,au&units=metric&appid=${config.API_KEY}`).then(stream => stream.json())
// .then((weather) => {
// 	console.log(weather);
// });

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentWeather: null,
			weeklyForecast: null
		};
	}

	componentDidMount() {
		getLocation()
			.then((location) => {
				const {latitude, longitude} = location.coords;

				fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${config.API_KEY}`).then(stream => stream.json())
					.then((weather) => {
						this.setState({
							currentWeather: weather
						})
					});
			})
			.catch((res) => {
				console.warn("Unable to obtain user's geographical location. Continuing without default state.");
			});
	}

	render() {
		return (
			<div className="App">
				<WeatherInformation current={this.state.currentWeather} forecast={this.state.weeklyForecast} />
			</div>
		);
	}
}

export default App;
