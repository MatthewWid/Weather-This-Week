import React, {Component} from "react";
import "./App.css";
import config from "../config";
import getLocation from "../helpers/getCurrentLocation";
import WeatherInformation from "./WeatherInformation";
import LoadingIndicator from "./LoadingIndicator";

// TODO: API wrapper for making API calls with typing fetch(url)... every time

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentWeather: null,
			weeklyForecast: null
		};
	}

	componentDidMount() {
		window.myVar = getLocation()
			.then((location) => {
				const {latitude, longitude} = location.coords;

				Promise.all([
					fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${config.API_KEY}`).then(stream => stream.json()),
					fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${config.API_KEY}`).then(stream => stream.json())
				]).then((values) => {
					this.setState({
						currentWeather: values[0], // weather at this very moment
						weeklyForecast: values[1] // weekly forecast
					});
				})
				.catch((err) => {
					console.error("Error querying API.");
				});
			})
			.catch((res) => {
				console.warn("Unable to obtain user's geographical location. Continuing without default state.");
			});
	}

	render() {
		let info;
		if (this.state.currentWeather && this.state.weeklyForecast) {
			info = <WeatherInformation current={this.state.currentWeather} forecast={this.state.weeklyForecast} />;
		} else {
			info = <LoadingIndicator />
		}

		return (
			<div className="weather-app">
				{info}
			</div>
		);
	}
}

export default App;
