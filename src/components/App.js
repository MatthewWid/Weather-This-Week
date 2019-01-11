import React, {Component} from "react";
import "./App.css";
import config from "../config";
import getLocation from "../helpers/getCurrentLocation";
import WeatherInformation from "./WeatherInformation";
import LoadingIndicator from "./LoadingIndicator";
import SearchForm from "./SearchForm";

// TODO: API wrapper for making API calls with typing fetch(url)... every time

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stage: "initial", // initial / loading / display / error
			currentWeather: null,
			weeklyForecast: null
		};

		this.searchLocation = this.searchLocation.bind(this);
	}

	componentDidMount() {
		window.myVar = getLocation()
			.then((location) => {
				this.setState({
					stage: "loading"
				});
				const {latitude, longitude} = location.coords;

				Promise.all([
					fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${config.API_KEY}`).then(stream => stream.json()),
					fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${config.API_KEY}`).then(stream => stream.json())
				]).then((values) => {
					if (values[0].cod === "404" || values[1].cod === "404") {
						this.setState({
							stage: "error"
						});
						return;
					}
					this.setState({
						currentWeather: values[0], // weather at this very moment
						weeklyForecast: values[1], // weekly forecast
						stage: "display"
					});
				})
				.catch((err) => {
					console.error("Error querying API...", err);
				});
			})
			.catch((res) => {
				console.warn("Unable to obtain user's geographical location. Continuing without default state.");
			});
	}

	searchLocation(evt) {
		if (evt.keyCode === 13) {
			if (!evt.target.value || evt.target.value.length < 2) {
				return;
			}
			evt.preventDefault();
			this.setState({
				stage: "loading"
			});

			const query = encodeURIComponent(evt.target.value);

			Promise.all([
				fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${config.API_KEY}`).then(stream => stream.json()),
				fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${config.API_KEY}`).then(stream => stream.json())
			]).then((values) => {
				if (values[0].cod === "404" || values[1].cod === "404") {
					this.setState({
						stage: "error"
					});
					return;
				}
				this.setState({
					currentWeather: values[0],
					weeklyForecast: values[1],
					stage: "display"
				});
			})
			.catch((err) => {
				console.error("Error querying API...", err);
			});
		}
	}

	render() {
		let info;
		if (this.state.stage === "display") {
			info = <WeatherInformation current={this.state.currentWeather} forecast={this.state.weeklyForecast} />;
		} else if (this.state.stage === "loading") {
			info = <LoadingIndicator />;
		} else if (this.state.stage === "error") {
			info = <p>Cannot find that city or location.</p>;
		} else {
			info = <React.Fragment></React.Fragment>;
		}

		return (
			<div className="weather-app">
				<SearchForm searchLocation={this.searchLocation} />
				{info}
			</div>
		);
	}
}

export default App;
