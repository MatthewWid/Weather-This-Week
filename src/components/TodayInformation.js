import React, {Component} from "react";
import "./TodayInformation.css";

class TodayInformation extends Component {
	render() {
		const weather = this.props.current;

		return (
			<section className="weather-today">
				<h1 className="weather-today__section weather-today__title" title={`${weather.name}, ${weather.sys.country}`}>
					{weather.name}
				</h1>
				<div className="weather-today__section weather-today__data" title={`${weather.main.temp_min}° - ${weather.main.temp}° + ${weather.main.temp_max}°`}>
					<div className="weather-today__data-value">{parseInt(weather.main.temp)}°C</div>
					<div className="weather-today__data-key">Temperature</div>
				</div>
				<div className="weather-today__section weather-today__data" title="Average rainfall in the past three (3) hours (Millimeters).">
					<div className="weather-today__data-value">{parseInt((weather.rain || {})["3h"] || 0)}mm</div>
					<div className="weather-today__data-key">Rain</div>
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
