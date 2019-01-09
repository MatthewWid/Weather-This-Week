import React, {Component} from "react";
import "./TodayInformation.css";

class TodayInformation extends Component {
	render() {
		const weather = this.props.current;
		console.log(weather);

		return (
			<section className="weather-today">
				<h1 className="weather-today__section weather-today__title">{weather.name}</h1>
				<div className="weather-today__section weather-today__data">
					<div className="weather-today__data-value">{parseInt(weather.main.temp)}°C</div>
					<div className="weather-today__data-key">Temperature</div>
				</div>
				<div className="weather-today__section weather-today__data">
					<div className="weather-today__data-value">{weather.main.humidity}%</div>
					<div className="weather-today__data-key">Humidity</div>
				</div>
				<div className="weather-today__section weather-today__data">
					<div className="weather-today__data-value">{weather.clouds.all}%</div>
					<div className="weather-today__data-key">Cloudiness</div>
				</div>
				<div className="weather-today__section weather-today__data">
					<div className="weather-today__data-value">{weather.wind.speed}m/s</div>
					<div className="weather-today__data-key">Wind Speed</div>
				</div>
			</section>
		);
	}
}

export default TodayInformation;
